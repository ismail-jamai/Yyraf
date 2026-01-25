import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Features = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 })
  const [featuresRef, featuresVisible] = useScrollAnimation({ threshold: 0.1 })
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: 'بدون مخزون',
      description: 'لا حاجة لتخزين المنتجات، نحن نتعامل مع كل شيء نيابة عنك'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'شحن سريع',
      description: 'خدمة شحن سريعة وموثوقة لضمان وصول منتجاتك في الوقت المحدد'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'دعم 24/7',
      description: 'فريق دعم متاح على مدار الساعة لمساعدتك في أي وقت تحتاجه'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'أسعار جملة تنافسية',
      description: 'أسعار ممتازة بالجملة تساعدك على تحقيق هامش ربح أفضل'
    }
  ]

  return (
    <section className="bg-secondary dark:bg-gray-900 py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-12 md:mb-16 scroll-animate ${titleVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary dark:text-gray-100 mb-4">
            لماذا تختارنا؟
          </h2>
        </div>

        <div 
          ref={featuresRef}
          className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 ${featuresVisible ? 'visible' : ''}`}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 scroll-animate border border-gray-100 dark:border-gray-700"
              style={{ 
                transitionDelay: featuresVisible ? `${index * 0.1}s` : '0s',
                opacity: featuresVisible ? 1 : 0,
                transform: featuresVisible ? 'translateY(0)' : 'translateY(30px)'
              }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary bg-opacity-10 rounded-full mb-6 text-primary">
                {feature.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-text-primary dark:text-gray-100 mb-3">
                {feature.title}
              </h3>
              <p className="text-text-secondary dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

