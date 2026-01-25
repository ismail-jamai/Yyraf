import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FAQPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 dark:text-gray-100" dir="rtl">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 max-w-4xl mx-auto border border-gray-100 dark:border-gray-700">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">أهم الأسئلة – Yuraf Network</h1>
            <ol className="space-y-6 list-decimal pr-6 text-right">
              <li>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">ما هي Yuraf Network؟</h3>
                <p className="text-gray-700 dark:text-gray-300">هي منصة رقمية متكاملة تقدم حلولًا مبتكرة في مجال الدروبشيبينغ، البيع بالجملة، والاستيراد، مصممة لدعم التجار والموردين على تحقيق نمو مستدام وأداء تجاري متميز عبر التجارة الإلكترونية.</p>
              </li>
              <li>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">كيف يمكنني الاستفادة من المنصة كتاجر؟</h3>
                <p className="text-gray-700 dark:text-gray-300">ببساطة، يمكنك ربط متجرك الإلكتروني بمنصتنا، اختيار المنتجات المناسبة، وترك باقي المهام لنا. نحن نُدير التخزين، التغليف، الشحن، وخدمة العملاء، مما يتيح لك التركيز على توسيع نطاق أعمالك وتسويق منتجاتك بفعالية.</p>
              </li>
              <li>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">هل يمكن للموردين عرض منتجاتهم على المنصة؟</h3>
                <p className="text-gray-700 dark:text-gray-300">نعم، توفر Yuraf Network بيئة مثالية للموردين المحليين والمستوردين لعرض منتجاتهم وإدارتها عبر قنوات البيع بالجملة والدروبشيبينغ، مع إمكانية الاستفادة من خدماتنا اللوجستية المتكاملة.</p>
              </li>
              <li>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">هل يمكنني استيراد منتجاتي الخاصة وتخزينها لدى المنصة؟</h3>
                <p className="text-gray-700 dark:text-gray-300">نعم، نتيح لك استيراد منتجاتك بكل سهولة، ونوفر لك حلول تخزين آمنة ومتطورة مع إدارة كاملة للمخزون والتوصيل، لضمان سرعة واحترافية في تلبية طلبات عملائك.</p>
              </li>
              <li>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">من يتحمل مسؤولية العمليات اللوجستية؟</h3>
                <p className="text-gray-700 dark:text-gray-300">نحن نتحمل جميع العمليات اللوجستية من التخزين، التعبئة، الشحن، إلى تتبع الطلبات وخدمة ما بعد البيع، لنمنحك تجربة تجارة إلكترونية خالية من التعقيدات.</p>
              </li>
              <li>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">كيف يمكنني متابعة الطلبات والمدفوعات؟</h3>
                <p className="text-gray-700 dark:text-gray-300">توفر المنصة لوحة تحكم شاملة تُمكنك من متابعة جميع الطلبات، حالة الشحن، إدارة المخزون، وتحليل الأداء المالي بشكل لحظي وشفاف.</p>
              </li>
              <li>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">ما هي مدة تحويل الأرباح؟</h3>
                <p className="text-gray-700 dark:text-gray-300">نضمن لك تحويل الأرباح خلال فترة لا تتجاوز 24 إلى 72 ساعة، عبر وسائل دفع متعددة ومؤمنة لضمان سلاسة وموثوقية المعاملات المالية.</p>
              </li>
              <li>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">هل توفر المنصة خدمة تأكيد الطلبات؟</h3>
                <p className="text-gray-700 dark:text-gray-300">نعم، لدينا فريق متخصص في تأكيد الطلبات لضمان جودة التنفيذ وتقليل فرص الخطأ أو الإلغاء، مما يعزز ثقة عملائك.</p>
              </li>
              <li>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">هل يمكنني البدء بالمنصة دون رسوم اشتراك؟</h3>
                <p className="text-gray-700 dark:text-gray-300">بالتأكيد، نقدم اشتراكًا أساسيًا مجانيًا مع خطط مرنة تلبي احتياجات جميع المستخدمين، من التجار الصغار إلى الموردين الكبار.</p>
              </li>
              <li>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">كيف أتواصل مع فريق الدعم؟</h3>
                <p className="text-gray-700 dark:text-gray-300">لدينا فريق دعم محترف متاح عبر الدردشة المباشرة، البريد الإلكتروني، والهاتف، لضمان تقديم المساعدة الفورية وحل جميع الاستفسارات بأعلى جودة.</p>
              </li>
            </ol>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;
