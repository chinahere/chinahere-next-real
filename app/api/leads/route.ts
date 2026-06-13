import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import { buildWhatsAppUrl } from '../../../lib/whatsapp';

async function appendToSheet(values: string[]) {
  if (
    !process.env.GOOGLE_SHEET_ID ||
    !process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ||
    !process.env.GOOGLE_PRIVATE_KEY
  ) return;

  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: 'Leads!A:N',
    valueInputOption: 'USER_ENTERED',
    requestBody: { values: [values] },
  });
}

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const required = ['name', 'phone', 'country', 'product'];
    for (const r of required) {
      if (!data[r]) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
      }
    }

    const now = new Date().toLocaleString('en-GB', {
      timeZone: 'Asia/Riyadh',
    });

    const whatsappUrl = buildWhatsAppUrl(data.country, data);

    await appendToSheet([
      now,
      data.name,
      data.phone,
      data.email || '',
      data.country,
      data.product,
      data.quantity || '',
      data.budget || '',
      data.details || '',
      'New',
      '',
      '',
      '',
      whatsappUrl,
    ]);

    return NextResponse.json({
      ok: true,
      whatsappUrl,
    });
  } catch (e: any) {
    console.error('LEADS API ERROR:', e.message, e);

    return NextResponse.json(
      { error: e?.message || 'Server error' },
      { status: 500 }
    );
  }
}