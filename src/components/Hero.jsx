
import React from 'react'
import { useLanguage } from '../context/LanguageContext'

const Hero = () => {
  const { t, language } = useLanguage()
  // يمكن استبدال هذا بـ YouTube video ID الفعلي
  // مثال: إذا كان رابط الفيديو هو https://www.youtube.com/watch?v=abc123
  // ضع 'abc123' هنا
  const youtubeVideoId = 'dQw4w9WgXcQ' // ضع هنا ID الفيديو الفعلي من YouTube
  
  return (
    <section id="home" className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* العنوان الرئيسي */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-text-primary dark:text-gray-100 mb-6 md:mb-8 leading-tight animate-fade-in">
          {t('hero.title')}
          </h1>

          {/* الفقرة التعريفية */}
          <p className="text-lg md:text-xl lg:text-2xl text-text-secondary dark:text-gray-300 max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed animate-fade-in">
            {t('hero.subtitle')}
          </p>

          {/* زر CTA كبير */}
          <div className="mb-12 md:mb-16 animate-slide-up">
              <a 
                href="#join-us" 
                className="inline-block bg-primary hover:bg-primary-hover text-white px-8 md:px-12 py-4 md:py-5 rounded-lg transition-colors font-bold text-lg md:text-xl shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-primary focus:ring-offset-2"
                aria-label={language === 'ar' ? 'ابدأ الان' : t('hero.cta')}
              >
                {language === 'ar' ? 'ابدأ الان' : t('hero.cta')}
              </a>
          </div>

          {/* قسم الفيديو التوضيحي */}
          <div className="mt-16 md:mt-20 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary dark:text-gray-100 mb-6 md:mb-8">
              {t('hero.howItWorksTitle')}
            </h2>
            
            {/* حاوية الفيديو - Responsive */}
            <div className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${youtubeVideoId}?rel=0`}
                title={t('hero.videoTitle')}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

