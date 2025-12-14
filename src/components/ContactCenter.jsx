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
            <p className="text-gray-600">+212 600 000000</p>
            <p className="text-gray-600">+212 500 000000</p>
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
