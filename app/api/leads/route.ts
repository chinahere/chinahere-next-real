import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';
import { buildWhatsAppUrl } from '../../../lib/whatsapp';

async function appendToSheet(values:string[]){
  if(!process.env.GOOGLE_SHEET_ID || !process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) return;
  const auth=new google.auth.JWT({email:process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,key:(process.env.GOOGLE_PRIVATE_KEY||'').replace(/\\n/g,'\n'),scopes:['https://www.googleapis.com/auth/spreadsheets']});
  const sheets=google.sheets({version:'v4',auth});
  await sheets.spreadsheets.values.append({spreadsheetId:process.env.GOOGLE_SHEET_ID,range:'Leads!A:I',valueInputOption:'USER_ENTERED',requestBody:{values:[values]}});
}
async function sendEmail(data:any){
  if(!process.env.SMTP_USER || !process.env.SMTP_PASS) return;
  const transporter=nodemailer.createTransport({host:process.env.SMTP_HOST||'smtp.gmail.com',port:Number(process.env.SMTP_PORT||465),secure:true,auth:{user:process.env.SMTP_USER,pass:process.env.SMTP_PASS}});
  await transporter.sendMail({from:`ChinaHere Leads <${process.env.SMTP_USER}>`,to:process.env.LEAD_RECEIVER_EMAIL||process.env.SMTP_USER,subject:`طلب استشارة جديد - ${data.country} - ${data.product}`,html:`<div dir="rtl" style="font-family:Arial"><h2>طلب استشارة جديد</h2><p><b>الاسم:</b> ${data.name}</p><p><b>الجوال:</b> ${data.phone}</p><p><b>الإيميل:</b> ${data.email}</p><p><b>الدولة:</b> ${data.country}</p><p><b>المنتج:</b> ${data.product}</p><p><b>الكمية:</b> ${data.quantity}</p><p><b>الميزانية:</b> ${data.budget}</p><p><b>التفاصيل:</b><br/>${data.details}</p></div>`});
}
export async function POST(req:Request){
  try{const data=await req.json(); const required=['name','phone','country','product']; for(const r of required){if(!data[r]) return NextResponse.json({error:`Missing ${r}`},{status:400})}
  const now=new Date().toLocaleString('en-GB',{timeZone:'Asia/Riyadh'});
  await Promise.allSettled([sendEmail(data),appendToSheet([now,data.name,data.phone,data.email||'',data.country,data.product,data.quantity||'',data.budget||'',data.details||''])]);
  return NextResponse.json({ok:true,whatsappUrl:buildWhatsAppUrl(data.country,data)});
  }catch(e:any){return NextResponse.json({error:e?.message||'Server error'},{status:500})}
}
