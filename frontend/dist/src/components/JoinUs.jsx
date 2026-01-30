import React from 'react'

const JoinUs = () => {
  return (
    <section id="join-us" className="bg-secondary dark:bg-gray-900 py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* العنوان الرئيسي */}
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary dark:text-gray-100 mb-4 md:mb-6">
              انضم إلينا اليوم
            </h2>
            <p className="text-lg md:text-xl text-text-secondary dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              دعنا نساعدك على الوصول لأهدافك،اختر النمودج المناسب و ابدأ مسيرتك نحو التفوق
            </p>
          </div>

          {/* البطاقتان */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {/* بطاقة دروبشيبينغ */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-10 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up border border-gray-100 dark:border-gray-700">
              <div className="text-center">
                {/* أيقونة */}
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary bg-opacity-10 rounded-full mb-6">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>

                {/* العنوان */}
                <h3 className="text-2xl md:text-3xl font-bold text-text-primary dark:text-gray-100 mb-4 md:mb-6">
                  Drop shipping
                </h3>
                <h5 className="text-lg md:text-xl text-text-secondary dark:text-gray-300 mt-4 mb-6 leading-relaxed">
                  استفد من منتجات منصتنا المتاحة، سوقها لعملائك وبيعها بسعر يناسبك دون عناء إدارة المخزون أو الشحن
                </h5>

                {/* زر CTA */}
                <a
                  href="/register"
                  className="inline-block bg-primary hover:bg-primary-hover text-white px-8 md:px-10 py-3 md:py-4 rounded-lg transition-colors font-bold text-lg md:text-xl shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-primary focus:ring-offset-2"
                  aria-label="سجل الان - دروبشيبينغ"
                >
                  سجل الان
                </a>
              </div>
            </div>

            {/* بطاقة بيع بالجملة */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-10 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up border border-gray-100 dark:border-gray-700" style={{ animationDelay: '0.1s' }}>
              <div className="text-center">
                {/* أيقونة */}
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary bg-opacity-10 rounded-full mb-6">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>

                {/* العنوان */}
                <h3 className="text-2xl md:text-3xl font-bold text-text-primary dark:text-gray-100 mb-4 md:mb-6">
                  Supplier
                </h3>
                <h5 className="text-lg md:text-xl text-text-secondary dark:text-gray-300 mt-4 mb-6 leading-relaxed">
                  يتيح لك شراء بالجملة أو استيراد المنتجات، مع إمكانية تخزينها في مستودعاتنا أو شحنها مباشرة، لتبني أعمالك التجارية بأقصى سهولة.
                </h5>

                {/* زر CTA */}
                <a
                  href="/register"
                  className="inline-block bg-primary hover:bg-primary-hover text-white px-8 md:px-10 py-3 md:py-4 rounded-lg transition-colors font-bold text-lg md:text-xl shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-primary focus:ring-offset-2"
                  aria-label="سجل الان - بيع بالجملة"
                >
                  سجل الان
                </a>
              </div>
            </div>
          </div>

          {/* قسم التواصل */}
          <div className="mt-16 md:mt-20 text-center animate-fade-in">
            <div className="flex items-center justify-center gap-3 md:gap-4 flex-wrap">
              <p className="text-xl md:text-2xl font-medium text-text-primary dark:text-gray-100">
                هل لديك سؤال؟
              </p>
              <a
                href="/contact-center"
                className="inline-block bg-primary hover:bg-primary-hover text-white px-4 md:px-6 py-2 md:py-2.5 rounded-lg transition-colors font-medium text-sm md:text-base shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="تواصل معنا"
              >
                تواصل معنا
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JoinUs

