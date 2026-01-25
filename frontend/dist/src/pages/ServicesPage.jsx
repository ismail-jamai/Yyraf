import React from 'react';
import { FaBox, FaShippingFast, FaWarehouse, FaMoneyBillWave } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImporterImg from '../image/Importer.jpg';
import MoneyTransferImg from "../image/Transfert d'argent.jpg";
import DropShippingImg from '../image/Drop shipping.jpg';
import StorageImg from '../image/Stockage.jpg';

const ServicesPage = () => {

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 dark:text-gray-100" dir="rtl">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">خدماتنا</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              في عالم التجارة سريع التغير، يسعى التجار دوماً لاكتشاف طرق فعّالة لتسهيل أعمالهم. 
              تقدم Yuraf Network حلولاً متكاملة في الدروبشيبينغ، الاستيراد، والبيع بالجملة، 
              لتوفير الوقت والجهد وضمان تجربة سلسة وناجحة لكل التجار والموردين.
            </p>
          </div>
        </div>
      </section>

      {/* محتوى الصفحة كوحدات متسلسلة بدون تبويبات */}
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 space-y-20">
          {/* الاستيراد */}
          <section id="import" className="">
            <div className="flex items-center gap-10 flex-col-reverse md:flex-row">
              <div className="flex-1 text-right">
                <div className="flex justify-start md:justify-end mb-4">
                  <FaShippingFast className="ml-2 text-blue-600" size={28} />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6"> الاستيراد</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                  نوفر لتجار التجزئة والموزعين إمكانية الوصول إلى منتجات عالية الجودة بأثمنة تنافسية، سواء عبر استيراد مباشر من الخارج أو شراء بالجملة من موردين محليين. كما نتيح للموردين وتجار الجملة فرصة عرض منتجاتهم على منصة Yuraf Network لزيادة الانتشار وتحقيق مبيعات أكبر، مع ضمان تجربة سلسة وآمنة للطرفين.
                </p>
                <Link 
                  to="/register" 
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
                >
                  ابدأ الآن
                </Link>
              </div>
              <div className="flex-1 w-full">
                <img src={ImporterImg} alt="خدمة الاستيراد" className="w-full h-auto rounded-xl shadow-md object-cover" />
              </div>
            </div>
          </section>

          {/* التخزين */}
          <section id="storage" className="">
            <div className="flex items-center gap-10 flex-col-reverse md:flex-row">
              <div className="flex-1 text-right">
                <div className="flex justify-start md:justify-end mb-4">
                  <FaWarehouse className="ml-2 text-blue-600" size={28} />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">التخزين</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                  في Yuraf Network، نوفر للمستوردين وتجار الجملة خدمة تخزين احترافية وآمنة لسلعهم، مع إمكانية إدارة المخزون بكل سهولة.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                  نتكلف بكامل العملية: من استلام البضائع، تخزينها، تغليفها، وتحضيرها للتوصيل.
                  <br />
                  أنت فقط تركز على البيع والتسويق، ونحن نعتني بالباقي بكفاءة واحترافية.
                </p>
                <Link 
                  to="/register" 
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
                >
                  ابدأ الآن
                </Link>
              </div>
              <div className="flex-1 w-full">
                <img src={StorageImg} alt="التخزين" className="w-full h-auto rounded-xl shadow-md object-cover" />
              </div>
            </div>
          </section>
          

          {/* الدروبشيبينغ */}
          <section id="dropshipping" className="">
            <div className="flex items-center gap-10 flex-col-reverse md:flex-row">
              <div className="flex-1 text-right">
                <div className="flex justify-start md:justify-end mb-4">
                  <FaBox className="ml-2 text-blue-600" size={28} />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6"> الدروبشيبينغ</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                  نقدم لك حلول دروبشيبينغ متكاملة تمكنك من بيع منتجاتنا دون الحاجة إلى تخزينها أو شحنها بنفسك.
                </p>
                <Link 
                  to="/register" 
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
                >
                  ابدأ الآن
                </Link>
              </div>
              <div className="flex-1 w-full">
                <img src={DropShippingImg} alt="الدروبشيبينغ" className="w-full h-auto rounded-xl shadow-md object-cover" />
              </div>
            </div>
         </section>

          {/* تحويل الأموال */}
          <section id="payment" className="">
            <div className="flex items-center gap-10 flex-col-reverse md:flex-row">
              <div className="flex-1 text-right">
                <div className="flex justify-start md:justify-end mb-4">
                  <FaMoneyBillWave className="ml-2 text-blue-600" size={28} />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">خدمة تحويل الأموال</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                  نضمن لك في Yuraf Network تحويل الأموال بكل أمان وسرعة خلال 24 إلى 48 ساعة، مع شفافية كاملة ومتابعة مستمرة لضمان وصول أموالك دون أي تأخير أو مشاكل.
                </p>
                <div className="space-y-4 text-right">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-right border border-gray-100 dark:border-gray-700">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">مميزات خدمة تحويل الأموال:</h3>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-right">
                      <li className="flex items-start">
                        <span className="ml-2">•</span>
                        <span>تحويل آمن وسريع خلال 24-48 ساعة</span>
                      </li>
                      <li className="flex items-start">
                        <span className="ml-2">•</span>
                        <span>متابعة مستمرة لضمان وصول الأموال</span>
                      </li>
                      <li className="flex items-start">
                        <span className="ml-2">•</span>
                        <span>شفافية كاملة في المعاملات</span>
                      </li>
                      <li className="flex items-start">
                        <span className="ml-2">•</span>
                        <span>دعم فني على مدار الساعة</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <Link 
                  to="/register" 
                  className="mt-8 inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
                >
                  ابدأ الآن
                </Link>
              </div>
              <div className="flex-1 w-full">
                <img src={MoneyTransferImg} alt="تحويل الأموال" className="w-full h-auto rounded-xl shadow-md object-cover" />
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
