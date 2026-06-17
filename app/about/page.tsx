export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white pt-28 px-6">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold text-center mb-8">
          من نحن
        </h1>

        <div className="rounded-3xl border border-yellow-500/20 bg-white/5 p-8">
          <p className="text-lg leading-9 text-gray-300">
            ChinaHere هي شركة متخصصة في خدمات التوريد والاستيراد من الصين.
            نساعد الأفراد والشركات في السعودية والسودان على الوصول إلى
            الموردين المناسبين وفحص المنتجات ومتابعة الشحن حتى وصول الطلب.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">

            <div className="bg-white/5 p-6 rounded-2xl">
              <h3 className="text-yellow-400 font-bold mb-2">
                رؤيتنا
              </h3>
              <p>
                جعل الاستيراد من الصين أكثر أماناً وسهولة.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl">
              <h3 className="text-yellow-400 font-bold mb-2">
                رسالتنا
              </h3>
              <p>
                تقليل المخاطر وزيادة فرص النجاح لعملائنا.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl">
              <h3 className="text-yellow-400 font-bold mb-2">
                قيمنا
              </h3>
              <p>
                الشفافية والاحترافية والالتزام.
              </p>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}