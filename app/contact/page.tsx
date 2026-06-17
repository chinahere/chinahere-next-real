export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white pt-28 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-8">
          تواصل معنا
        </h1>

        <div className="bg-white/5 border border-yellow-500/20 rounded-3xl p-10">
          <p className="text-lg text-gray-300 mb-8">
            يسعدنا مساعدتك في مشروعك القادم للاستيراد من الصين.
          </p>

          <div className="space-y-5 text-lg">
            <p>
              📞 واتساب:{" "}
              <a
                href="https://wa.me/966530323512"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 font-bold hover:underline"
              >
                +966 53 032 3512
              </a>
            </p>

            <p>
              📧 البريد الإلكتروني:{" "}
              <a
                href="mailto:chinahere.import@gmail.com"
                className="text-yellow-400 font-bold hover:underline"
              >
                chinahere.import@gmail.com
              </a>
            </p>

            <p>
              📍 الرياض، المملكة العربية السعودية
            </p>

            <p>
              🌍 نخدم العملاء في السعودية والسودان
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/966530323512"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 text-[#07111f] font-bold px-6 py-3 rounded-xl"
            >
              تواصل عبر واتساب
            </a>

            <a
              href="/#form"
              className="border border-yellow-500/40 text-yellow-400 font-bold px-6 py-3 rounded-xl"
            >
              اطلب استشارة مجانية
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}