export default function ServicesPage() {
  const services = [
    "البحث عن الموردين المعتمدين",
    "التفاوض على الأسعار والشروط",
    "فحص المصانع والمنتجات",
    "تنسيق الشحن والتخليص",
    "متابعة الطلب حتى التسليم",
    "استشارات الاستيراد من الصين"
  ];

  return (
    <main className="min-h-screen bg-[#07111f] text-white pt-28 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 text-center">
          خدماتنا
        </h1>

        <p className="text-center text-gray-300 mb-12">
          نقدم حلول استيراد متكاملة من الصين إلى السعودية والسودان
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-2xl border border-yellow-500/20 bg-white/5 p-6"
            >
              <h3 className="text-xl font-bold text-yellow-400 mb-3">
                {service}
              </h3>

              <p className="text-gray-300">
                خدمة احترافية تساعدك على تقليل المخاطر وتحسين جودة الاستيراد.
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}