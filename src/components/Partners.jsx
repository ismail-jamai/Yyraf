import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const flags = [
  { code: 'ma', name: 'المملكة المغربية', primary: true },
  { code: 'ae', name: 'الإمارات العربية المتحدة' },
  { code: 'qa', name: 'قطر' },
  { code: 'sa', name: 'المملكة العربية السعودية' },
  { code: 'om', name: 'سلطنة عمان' },
  { code: 'bh', name: 'البحرين' },
  { code: 'kw', name: 'الكويت' },
  { code: 'in', name: 'دولة الهند' },
  { code: 'ci', name: 'ساحل العاج' },
  { code: 'ml', name: 'دولة مالي' },
  { code: 'sn', name: 'دولة السنغال' }
]

const Partners = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 })
  const [gridRef, gridVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <section className="bg-secondary dark:bg-gray-900 py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Flags grid */}
          <div
            ref={gridRef}
            className={`grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 scroll-animate ${gridVisible ? 'visible' : ''}`}
          >
            {flags.map((item, index) => (
              <div
                key={item.code}
                className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-5 shadow-md flex flex-col items-center justify-center text-center h-28 sm:h-32 border border-gray-100 dark:border-gray-700"
                style={{
                  transitionDelay: gridVisible ? `${index * 0.06}s` : '0s',
                  opacity: gridVisible ? 1 : 0,
                  transform: gridVisible ? 'translateY(0)' : 'translateY(20px)'
                }}
              >
                <img
                  src={`https://flagcdn.com/w160/${item.code}.png`}
                  alt={item.name}
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover mb-2 ${
                    item.primary ? 'opacity-100' : 'opacity-40 grayscale'
                  }`}
                  loading="lazy"
                />
                <p className={`text-sm sm:text-base ${item.primary ? 'text-text-primary dark:text-gray-100 font-semibold' : 'text-text-secondary dark:text-gray-300'}`}>
                  {item.name}
                </p>
              </div>
            ))}
          </div>

          {/* Text content */}
          <div
            ref={titleRef}
            className={`scroll-animate ${titleVisible ? 'visible' : ''}`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary dark:text-gray-100 mb-4">
              مواقعنا
            </h2>
            <p className="text-text-secondary dark:text-gray-300 text-lg leading-8 mb-8">
              تسمح شبكة خدماتنا المتنامية بتسليم أسرع وأوقات نقل أقصر. نساعدك من خلال شبكة مراكزنا المتنامية والاندماج السلس على الوصول إلى عملائك بسرعة وفعالية وبأسعار معقولة. قم بتوسيع عملك وتوزيع منتجاتك في مخازن استراتيجية تمتد عبر أروع قارات وأكثر من نسخ دول.
            </p>
            <a href="#contact" className="inline-block bg-primary text-white px-6 py-3 rounded-xl shadow hover:opacity-90 transition">
              ابدأ الآن
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners

