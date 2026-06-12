# ChinaHere - Next.js Landing Page

## التشغيل المحلي
```bash
npm install
npm run dev
```
افتح: http://localhost:3000

## إعداد ملف البيئة
انسخ `.env.example` إلى `.env.local` وضع القيم الصحيحة.

### Gmail
1. فعّل 2-Step Verification في Gmail.
2. أنشئ App Password.
3. ضعه في `SMTP_PASS`.

### Google Sheets
1. أنشئ Sheet باسم ChinaHere Leads.
2. أنشئ Tab باسم `Leads`.
3. ضع الصف الأول:
Date | Name | Phone | Email | Country | Product | Quantity | Budget | Details
4. Google Cloud > Enable Google Sheets API.
5. أنشئ Service Account ثم JSON Key.
6. شارك الشيت مع إيميل Service Account كـ Editor.
7. ضع القيم في `.env.local`.

## النشر على Vercel
ارفع المشروع إلى GitHub أو ارفعه مباشرة في Vercel، ثم أضف Environment Variables من لوحة Vercel.
