import React from 'react';
import { FaHeadset, FaClock, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Header from './Header';
import Footer from './Footer';

const ContactCenter = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              مركز الاتصال والدعم الفني
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              نقدم لك في Yuraf Network خدمة مركز اتصال متكاملة لدعم عملائك على مدار الساعة.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
              فريقنا المختص يرد على استفسارات العملاء، يتابع الطلبات، ويتعامل مع أي مشاكل بسرعة واحترافية لضمان رضا العملاء.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPhoneAlt className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">اتصل بنا</h3>
              <p className="text-gray-600">+212 641850476</p>
              <p className="text-gray-600">+212 541850476</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaEnvelope className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">البريد الإلكتروني</h3>
              <p className="text-gray-600">contact@yurafnetwork.com</p>
              <p className="text-gray-600">support@yurafnetwork.com</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMapMarkerAlt className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">العنوان</h3>
              <p className="text-gray-600">الدار البيضاء، المغرب</p>
              <p className="text-gray-600">المغرب</p>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-xl shadow-md p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <FaHeadset className="text-blue-600 text-3xl ml-2" />
              <h3 className="text-2xl font-bold text-gray-800">أرسل لنا رسالة</h3>
            </div>

            <form onSubmit={(e) => {
              e.preventDefault();
              alert('تم إرسال رسالتك بنجاح! سيتواصل معك فريقنا قريباً.');
              e.target.reset();
            }} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">الاسم الكامل</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">البريد الإلكتروني</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">الموضوع</label>
                <input
                  type="text"
                  id="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors"
                  placeholder="عنوان الرسالة"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">الرسالة</label>
                <textarea
                  id="message"
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors resize-none"
                  placeholder="اكتب رسالتك هنا..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors font-bold text-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-offset-2"
                >
                  إرسال الرسالة
                </button>
              </div>
            </form>
          </div>

          <div className="mt-12 bg-white rounded-xl shadow-md p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <FaHeadset className="text-blue-600 text-3xl ml-2" />
              <h3 className="text-2xl font-bold text-gray-800">ساعات العمل</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-600">السبت - الخميس</span>
                <div className="flex items-center">
                  <FaClock className="text-blue-600 ml-2" />
                  <span className="font-medium">09:00 ص - 06:00 م</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-600">الجمعة</span>
                <div className="flex items-center">
                  <FaClock className="text-blue-600 ml-2" />
                  <span className="font-medium">مغلق</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactCenter;
