export default function FAQPage() {
  const faqs = [
    {
      q: "هل أحتاج للسفر إلى الصين؟",
      a: "لا، يمكننا مساعدتك في البحث عن الموردين والتفاوض وترتيب الفحص والشحن دون الحاجة للسفر.",
    },
    {
      q: "هل تنصحون بالبدء بكميات كبيرة؟",
      a: "لا، ننصح دائماً بالبدء بعينات أو كمية صغيرة قبل الدخول في طلبات كبيرة.",
    },
    {
      q: "هل تقومون بفحص المنتجات؟",
      a: "نعم، يمكن ترتيب فحص للمنتجات قبل الشحن حسب نوع المنتج واحتياج العميل.",
    },
    {
      q: "هل تعملون مع السعودية والسودان؟",
      a: "نعم، نركز حالياً على مساعدة العملاء في السعودية والسودان.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#07111f] text-white pt-28 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-10">
          الأسئلة الشائعة
        </h1>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 border border-yellow-500/20 rounded-2xl p-6"
            >
              <h3 className="text-yellow-400 font-bold text-xl mb-3">
                {faq.q}
              </h3>
              <p className="text-gray-300 leading-8">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}