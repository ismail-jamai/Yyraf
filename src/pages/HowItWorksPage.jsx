import React from 'react';
import { FaUserPlus, FaStore, FaBoxes, FaTruck, FaChartLine } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HowItWorksPage = () => {
  const steps = [
    {
      icon: <FaUserPlus className="text-3xl text-blue-600" />,
      number: '1',
      title: 'إنشاء الحساب',
      description: 'قم بإنشاء حساب رسمي على منصة Yuraf Network، المتخصصة في تقديم حلول متكاملة لخدمات الدروبشيبينغ، البيع بالجملة، والاستيراد.'
    },
    {
      icon: <FaStore className="text-3xl text-blue-600" />,
      number: '2',
      title: 'ربط المتجر أو التسجيل كبائع',
      description: 'يمكنك ربط متجرك الإلكتروني بمنصتنا بكل سهولة، أو التسجيل كبائع لعرض منتجاتك ضمن شبكة التجارة لدينا.'
    },
    {
      icon: <FaBoxes className="text-3xl text-blue-600" />,
      number: '3',
      title: 'اختيار أو إضافة المنتجات',
      description: 'استعرض كتالوج المنتجات المتوفر لدينا أو قم بإضافة منتجاتك الخاصة لتوسيع نطاق مبيعاتك عبر المنصة.'
    },
    {
      icon: <FaTruck className="text-3xl text-blue-600" />,
      number: '4',
      title: 'تنفيذ عمليات البيع والشحن',
      description: 'نقوم بإدارة التخزين، التعبئة، والشحن نيابة عنك، مما يتيح لك التركيز على تطوير أعمالك وزيادة مبيعاتك.'
    },
    {
      icon: <FaChartLine className="text-3xl text-blue-600" />,
      number: '5',
      title: 'متابعة الطلبات والتقارير',
      description: 'توفر المنصة نظام متابعة متكامل للطلبات والمبيعات مع تقارير دقيقة تساعدك على اتخاذ القرارات الإستراتيجية.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 dark:text-gray-100">
      <Header />
      <main className="flex-grow">
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                كيف تعمل منصتنا؟
              </h1>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
                نقدم لك حلاً متكاملاً لإدارة أعمالك التجارية بكل سهولة واحترافية
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="relative">
                {/* Vertical line */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-100 dark:bg-gray-700 transform -translate-x-1/2"></div>
                
                {/* Steps */}
                <div className="space-y-16 md:space-y-20">
                  {steps.map((step, index) => (
                    <div 
                      key={index}
                      className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    >
                      {/* Content side */}
                      <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg h-full border border-gray-100 dark:border-gray-700">
                          <div className="flex items-center mb-4">
                            <div className="text-2xl font-bold text-blue-600 mr-3">{step.number}</div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{step.title}</h2>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">{step.description}</p>
                        </div>
                      </div>
                      
                      {/* Icon side */}
                      <div className="hidden md:flex w-24 h-24 bg-white dark:bg-gray-800 rounded-full border-4 border-blue-100 dark:border-gray-700 items-center justify-center z-10 mx-4">
                        {step.icon}
                      </div>
                      
                      {/* Empty div to balance the layout */}
                      <div className={`hidden md:block md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Mobile view steps */}
            <div className="md:hidden mt-12 space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 dark:bg-gray-700 dark:text-blue-400 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;
