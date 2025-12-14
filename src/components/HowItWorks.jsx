import React from 'react';
import { FaUserPlus, FaStore, FaBoxes, FaTruck, FaChartLine } from 'react-icons/fa';

const HowItWorks = () => {
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
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            كيف تعمل منصتنا؟
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            نقدم لك حلاً متكاملاً لإدارة أعمالك التجارية بكل سهولة واحترافية
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-100 transform -translate-x-1/2"></div>
            
            {/* Steps */}
            <div className="space-y-12 md:space-y-16">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Left side (for even steps) or right side (for odd steps) */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg h-full">
                      <div className="flex items-center mb-4">
                        <div className="text-2xl font-bold text-blue-600 mr-3">{step.number}</div>
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Center icon */}
                  <div className="hidden md:flex w-16 h-16 bg-white rounded-full border-4 border-blue-100 items-center justify-center z-10 mx-4">
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
        <div className="md:hidden mt-12 space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-lg font-bold mr-3">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

