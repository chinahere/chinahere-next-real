export const numbers = {
  saudi: process.env.WHATSAPP_SAUDI || '966530323512',
  sudan: process.env.WHATSAPP_SUDAN || '249117479767',
};

export function buildWhatsAppUrl(country: string, data: Record<string, string>) {
  const phone = country === 'السودان' ? numbers.sudan : numbers.saudi;

  const msg = `مرحباً ChinaHere، أريد استشارة استيراد من الصين.

الاسم: ${data.name || ''}
الجوال: ${data.phone || ''}
البريد: ${data.email || ''}
الدولة المستهدفة: ${country || ''}
المنتج: ${data.product || ''}
الكمية: ${data.quantity || ''}
الميزانية: ${data.budget || ''}
التفاصيل: ${data.details || ''}`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
}