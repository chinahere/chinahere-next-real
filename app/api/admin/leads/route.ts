import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function GET() {
  try {
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Leads!A:N',
    });

    const rows = res.data.values || [];
    const headers = rows[0] || [];
    const data = rows.slice(1).map((row) =>
      Object.fromEntries(headers.map((h, i) => [h, row[i] || '']))
    );

    return NextResponse.json({ leads: data });
  } catch (e: any) {
    console.error('ADMIN LEADS ERROR:', e.message, e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}