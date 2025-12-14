import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    countryCode: '+212',
    city: '',
    address: '',
    country: '',
    postalCode: '',
    cin: '',
    rib: '',
    bankType: '',
    password: '',
    confirmPassword: '',
    serviceType: 'dropshipping'
  })
  const [step, setStep] = useState(1)
  const [showTerms, setShowTerms] = useState(false)
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const [hasScrolledToEnd, setHasScrolledToEnd] = useState(false)
  const [showPrivacy, setShowPrivacy] = useState(false)
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false)
  const [hasScrolledPrivacyToEnd, setHasScrolledPrivacyToEnd] = useState(false)
  const [emailCodeInput, setEmailCodeInput] = useState('')
  const [phoneCodeInput, setPhoneCodeInput] = useState('')
  const [emailCodeSent, setEmailCodeSent] = useState(false)
  const [phoneCodeSent, setPhoneCodeSent] = useState(false)
  const [generatedEmailCode, setGeneratedEmailCode] = useState('')
  const [generatedPhoneCode, setGeneratedPhoneCode] = useState('')
  const [emailVerified, setEmailVerified] = useState(false)
  const [phoneVerified, setPhoneVerified] = useState(false)
  const [isSendingEmail, setIsSendingEmail] = useState(false)
  const [isSendingPhone, setIsSendingPhone] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert('كلمة السر غير متطابقة!')
      return
    }
    if (!acceptedTerms || !acceptedPrivacy) {
      alert('يجب قراءة وقبول شروط الاستخدام وسياسة الخصوصية قبل إتمام التسجيل.')
      return
    }
    console.log('Form submitted:', formData)
    alert('تم إرسال طلب التسجيل بنجاح! سيتواصل معك فريق سبور لتأكيد حسابك.')
  }

  const handleOpenTerms = () => {
    setShowTerms(true)
    setHasScrolledToEnd(false)
  }

  const handleCloseTerms = () => {
    setShowTerms(false)
  }

  const handleTermsScroll = (e) => {
    const el = e.target
    const isBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 4
    if (isBottom) setHasScrolledToEnd(true)
  }

  const handleOpenPrivacy = () => {
    setShowPrivacy(true)
    setHasScrolledPrivacyToEnd(false)
  }

  const handleClosePrivacy = () => {
    setShowPrivacy(false)
  }

  const handlePrivacyScroll = (e) => {
    const el = e.target
    const isBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 4
    if (isBottom) setHasScrolledPrivacyToEnd(true)
  }

  // إرسال كود التحقق للبريد الإلكتروني (محاكاة)
  const handleSendEmailCode = () => {
    if (!formData.email) {
      alert('يرجى إدخال البريد الإلكتروني في المرحلة الأولى.')
      return
    }
    setIsSendingEmail(true)
    const code = Math.floor(100000 + Math.random() * 900000).toString()
    setTimeout(() => {
      setGeneratedEmailCode(code)
      setEmailCodeSent(true)
      setIsSendingEmail(false)
      alert(`تم إرسال كود التحقق إلى بريدك الإلكتروني: ${formData.email}`)
      // ملاحظة: في الإنتاج، لا نُظهر الكود. هذا فقط للاختبار المحلي.
      console.log('Email verification code:', code)
    }, 800)
  }

  const handleVerifyEmail = () => {
    if (emailCodeInput === generatedEmailCode && emailCodeInput.length === 6) {
      setEmailVerified(true)
      alert('تم التحقق من البريد الإلكتروني بنجاح.')
    } else {
      setEmailVerified(false)
      alert('كود التحقق للبريد غير صحيح. حاول مرة أخرى.')
    }
  }

  // إرسال كود التحقق للهاتف (محاكاة)
  const handleSendPhoneCode = () => {
    if (!formData.phone) {
      alert('يرجى إدخال رقم الهاتف في المرحلة الأولى.')
      return
    }
    setIsSendingPhone(true)
    const code = Math.floor(100000 + Math.random() * 900000).toString()
    setTimeout(() => {
      setGeneratedPhoneCode(code)
      setPhoneCodeSent(true)
      setIsSendingPhone(false)
      alert(`تم إرسال كود التحقق إلى رقم هاتفك: ${formData.phone}`)
      console.log('Phone verification code:', code)
    }, 800)
  }

  const handleVerifyPhone = () => {
    if (phoneCodeInput === generatedPhoneCode && phoneCodeInput.length === 6) {
      setPhoneVerified(true)
      alert('تم التحقق من رقم الهاتف بنجاح.')
    } else {
      setPhoneVerified(false)
      alert('كود التحقق للهاتف غير صحيح. حاول مرة أخرى.')
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-gray-100">
      <Header />
      <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* العنوان الرئيسي */}
            <div className="text-center mb-8 md:mb-12 animate-fade-in">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4 md:mb-6">
                مرحبا بك في عالم دروبشيبينغ
              </h1>
              <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
                قم بملء المعلومات أدناه للانضمام إلى شبكتنا التجارية وابدأ مشروعك اليوم.
              </p>
            </div>

            {/* بطاقة التسجيل */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-10 animate-slide-up">
              <div className="mb-6">
                <div className="flex items-center justify-center gap-4">
                  <div className={`h-2 w-20 rounded-full ${step === 1 ? 'bg-primary' : 'bg-gray-200'}`}></div>
                  <div className={`h-2 w-20 rounded-full ${step === 2 ? 'bg-primary' : 'bg-gray-200'}`}></div>
                  <div className={`h-2 w-20 rounded-full ${step === 3 ? 'bg-primary' : 'bg-gray-200'}`}></div>
                </div>
                <p className="text-center mt-3 text-sm font-bold text-text-secondary">{step === 1 ? 'المرحلة 1 من 3' : step === 2 ? 'المرحلة 2 من 3' : 'المرحلة 3 من 3'}</p>
              </div>
              {/* نموذج التسجيل */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {step === 1 && (
                  <>
                    {/* اختيار نوع الخدمة */}
                    <div className="mb-8">
                      <div className="grid grid-cols-1 gap-4">
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, serviceType: 'dropshipping' })}
                          className={`p-4 rounded-lg border-2 transition-all ${
                            formData.serviceType === 'dropshipping'
                              ? 'border-primary bg-primary bg-opacity-10'
                              : 'border-gray-200 hover:border-primary hover:bg-gray-50'
                          }`}
                        >
                          <div className="text-center">
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary bg-opacity-10 rounded-full mb-3">
                              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10ل-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                              </svg>
                            </div>
                            <p className="font-bold text-text-primary">دروبشيبينغ</p>
                          </div>
                        </button>
                      </div>
                    </div>

                    {/* الاسم الشخصي + العائلي */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-bold text-text-primary mb-2">
                          الاسم الشخصي <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border rounded-lg"
                          placeholder="أدخل اسمك الشخصي"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-bold text-text-primary mb-2">
                          الاسم العائلي <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border rounded-lg"
                          placeholder="أدخل اسمك العائلي"
                        />
                      </div>
                    </div>

                    {/* البريد الإلكتروني */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-text-primary mb-2">
                        البريد الإلكتروني <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors text-text-primary"
                        placeholder="example@email.com"
                      />
                    </div>

                    {/* رقم الهاتف مع اختيار رمز الدولة */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-text-primary mb-2">
                        رقم الهاتف <span className="text-red-500">*</span>
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors text-text-primary"
                          placeholder="6XX XXX XXX"
                        />
                        <select
                          id="countryCode"
                          name="countryCode"
                          value={formData.countryCode}
                          onChange={handleChange}
                          className="px-3 py-3 border border-gray-300 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                        >
                          <option value="+212">🇲🇦 +212 (MA)</option>
                          <option value="+213">🇩🇿 +213 (DZ)</option>
                          <option value="+216">🇹🇳 +216 (TN)</option>
                          <option value="+20">🇪🇬 +20 (EG)</option>
                          <option value="+971">🇦🇪 +971 (AE)</option>
                          <option value="+966">🇸🇦 +966 (SA)</option>
                          <option value="+974">🇶🇦 +974 (QA)</option>
                          <option value="+968">🇴🇲 +968 (OM)</option>
                          <option value="+973">🇧🇭 +973 (BH)</option>
                          <option value="+965">🇰🇼 +965 (KW)</option>
                          <option value="+962">🇯🇴 +962 (JO)</option>
                          <option value="+961">🇱🇧 +961 (LB)</option>
                          <option value="+964">🇮🇶 +964 (IQ)</option>
                          <option value="+90">🇹🇷 +90 (TR)</option>
                          <option value="+34">🇪🇸 +34 (ES)</option>
                          <option value="+33">🇫🇷 +33 (FR)</option>
                          <option value="+49">🇩🇪 +49 (DE)</option>
                          <option value="+39">🇮🇹 +39 (IT)</option>
                          <option value="+351">🇵🇹 +351 (PT)</option>
                          <option value="+44">🇬🇧 +44 (GB)</option>
                          <option value="+1">🇺🇸 +1 (US)</option>
                          <option value="+1">🇨🇦 +1 (CA)</option>
                          <option value="+61">🇦🇺 +61 (AU)</option>
                          <option value="+91">🇮🇳 +91 (IN)</option>
                          <option value="+225">🇨🇮 +225 (CI)</option>
                          <option value="+221">🇸🇳 +221 (SN)</option>
                        </select>
                      </div>
                    </div>

                    {/* المدينة */}
                    <div>
                      <label htmlFor="city" className="block text-sm font-bold text-text-primary mb-2">
                        المدينة <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors text-text-primary"
                        placeholder="أدخل مدينتك"
                      />
                    </div>

                    {/* العنوان */}
                    <div>
                      <label htmlFor="address" className="block text-sm font-bold text-text-primary mb-2">
                        العنوان <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        rows="3"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors text-text-primary resize-none"
                        placeholder="أدخل عنوانك الكامل"
                      ></textarea>
                    </div>

                    {/* الدولة والرمز البريدي في صف واحد */}
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* الدولة */}
                      <div>
                        <label htmlFor="country" className="block text-sm font-bold text-text-primary mb-2">
                          الدولة <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors text-text-primary bg-white"
                        >
                          <option value="">اختر الدولة</option>
                          <option value="morocco">المغرب</option>
                          <option value="algeria">الجزائر</option>
                          <option value="tunisia">تونس</option>
                          <option value="other">أخرى</option>
                        </select>
                      </div>

                      {/* الرمز البريدي */}
                      <div>
                        <label htmlFor="postalCode" className="block text-sm font-bold text-text-primary mb-2">
                          الرمز البريدي <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="postalCode"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors text-text-primary"
                          placeholder="مثال: 20000"
                        />
                      </div>
                    </div>

                    {/* رقم البطاقة الوطنية ورقم الحساب البنكي في صف واحد */}
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* رقم البطاقة الوطنية (CIN) */}
                      <div>
                        <label htmlFor="cin" className="block text-sm font-bold text-text-primary mb-2">
                          رقم البطاقة الوطنية (CIN) <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="cin"
                          name="cin"
                          value={formData.cin}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors text-text-primary"
                          placeholder="AB123456"
                        />
                      </div>

                      {/* رقم الحساب البنكي (RIB) */}
                      <div>
                        <label htmlFor="rib" className="block text-sm font-bold text-text-primary mb-2">
                          رقم الحساب البنكي (RIB) <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="rib"
                          name="rib"
                          value={formData.rib}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors text-text-primary"
                          placeholder="أدخل رقم RIB"
                        />
                      </div>
                    </div>

                    {/* نوع البنك */}
                    <div>
                      <label htmlFor="bankType" className="block text-sm font-bold text-text-primary mb-2">
                        نوع البنك <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="bankType"
                        name="bankType"
                        value={formData.bankType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors text-text-primary bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
                      >
                        <option value="">اختر البنك</option>
                        <option value="attijariwafa">التجاري وفا بنك</option>
                        <option value="banque-populaire">البنك الشعبي</option>
                        <option value="boa-bmce">Bank of Africa (BMCE)</option>
                        <option value="cih">CIH Bank</option>
                        <option value="bmci">BMCI</option>
                        <option value="societe-generale">Société Générale</option>
                        <option value="albarid">البريد بنك</option>
                        <option value="autre">أخرى</option>
                      </select>
                    </div>

                    {/* كلمة السر */}
                    <div>
                      <label htmlFor="password" className="block text-sm font-bold mb-2">كلمة السر *</label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        minLength="8"
                        className="w-full px-4 py-3 border rounded-lg"
                        placeholder="كلمة السر (8 أحرف على الأقل)"
                      />
                    </div>

                    {/* تأكيد كلمة السر */}
                    <div>
                      <label htmlFor="confirmPassword" className="block text-sm font-bold mb-2">تأكيد كلمة السر *</label>
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border rounded-lg"
                        placeholder="أعد كتابة كلمة السر"
                      />
                    </div>

                    <div className="pt-2 space-y-3">
                      <button
                        type="button"
                        onClick={handleOpenTerms}
                        className="w-full border border-primary text-primary hover:bg-primary hover:text-white py-3 rounded-lg font-bold transition-colors"
                      >
                        قراءة شروط الاستخدام
                      </button>
                      <button
                        type="button"
                        onClick={handleOpenPrivacy}
                        className="w-full border border-primary text-primary hover:bg-primary hover:text-white py-3 rounded-lg font-bold transition-colors"
                      >
                        قراءة سياسة الخصوصية
                      </button>
                      {(!acceptedTerms || !acceptedPrivacy) && (
                        <p className="text-sm text-red-600 text-center font-bold">يجب قراءة وقبول شروط الاستخدام وسياسة الخصوصية للانتقال إلى المرحلة التالية.</p>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      disabled={!acceptedTerms || !acceptedPrivacy}
                      className={`w-full px-8 py-4 rounded-lg font-bold ${acceptedTerms && acceptedPrivacy ? 'bg-primary text-white hover:bg-primary-hover' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
                    >
                      التالي
                    </button>
                  </>
                )}
                {step === 2 && (
                  <>
                    <h3 className="text-xl font-bold text-center mb-4">التحقق من البريد الإلكتروني ورقم الهاتف</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="rounded-xl border p-4">
                        <p className="font-bold mb-2">البريد الإلكتروني</p>
                        <p className="text-sm text-gray-600 mb-3">{formData.email || 'لم يتم إدخال بريد إلكتروني بعد'}</p>
                        <div className="flex gap-2 mb-3">
                          <button type="button" onClick={handleSendEmailCode} disabled={isSendingEmail} className="flex-1 border border-primary text-primary hover:bg-primary hover:text-white py-2 rounded-lg font-bold transition-colors">
                            {isSendingEmail ? 'جارٍ الإرسال...' : emailCodeSent ? 'إعادة إرسال الكود' : 'إرسال الكود'}
                          </button>
                        </div>
                        <div className="flex gap-2 items-center">
                          <input type="text" inputMode="numeric" pattern="[0-9]{6}" maxLength="6" value={emailCodeInput} onChange={(e) => setEmailCodeInput(e.target.value.replace(/[^0-9]/g, ''))} placeholder="أدخل الكود (6 أرقام)" className="flex-1 px-4 py-2 border rounded-lg" />
                          <button type="button" onClick={handleVerifyEmail} disabled={!emailCodeSent || emailCodeInput.length !== 6 || emailVerified} className={`px-4 py-2 rounded-lg font-bold ${emailVerified ? 'bg-green-600 text-white' : 'bg-primary text-white hover:bg-primary-hover'}`}>تأكيد</button>
                        </div>
                        {emailVerified && <p className="text-green-700 font-bold mt-2">تم التحقق من البريد الإلكتروني</p>}
                      </div>

                      <div className="rounded-xl border p-4">
                        <p className="font-bold mb-2">رقم الهاتف</p>
                        <p className="text-sm text-gray-600 mb-3">{(formData.phone ? `${formData.countryCode} ${formData.phone}` : 'لم يتم إدخال رقم هاتف بعد')}</p>
                        <div className="flex gap-2 mb-3">
                          <button type="button" onClick={handleSendPhoneCode} disabled={isSendingPhone} className="flex-1 border border-primary text-primary hover:bg-primary hover:text-white py-2 rounded-lg font-bold transition-colors">
                            {isSendingPhone ? 'جارٍ الإرسال...' : phoneCodeSent ? 'إعادة إرسال الكود' : 'إرسال الكود'}
                          </button>
                        </div>
                        <div className="flex gap-2 items-center">
                          <input type="text" inputMode="numeric" pattern="[0-9]{6}" maxLength="6" value={phoneCodeInput} onChange={(e) => setPhoneCodeInput(e.target.value.replace(/[^0-9]/g, ''))} placeholder="أدخل الكود (6 أرقام)" className="flex-1 px-4 py-2 border rounded-lg" />
                          <button type="button" onClick={handleVerifyPhone} disabled={!phoneCodeSent || phoneCodeInput.length !== 6 || phoneVerified} className={`px-4 py-2 rounded-lg font-bold ${phoneVerified ? 'bg-green-600 text-white' : 'bg-primary text-white hover:bg-primary-hover'}`}>تأكيد</button>
                        </div>
                        {phoneVerified && <p className="text-green-700 font-bold mt-2">تم التحقق من رقم الهاتف</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-6">
                      <button type="button" onClick={() => setStep(1)} className="bg-gray-100 hover:bg-gray-200 py-4 rounded-lg font-bold">رجوع</button>
                      <button type="button" onClick={() => setStep(3)} disabled={!emailVerified || !phoneVerified} className={`py-4 rounded-lg font-bold ${emailVerified && phoneVerified ? 'bg-primary text-white hover:bg-primary-hover' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}>التالي</button>
                    </div>
                  </>
                )}

                {step === 3 && (
                  <>
                    <h3 className="text-صxl font-bold text-center mb-4">تأكيد المعلومات</h3>
                    <div className="mb-4 rounded-xl border border-blue-200 bg-blue-50 p-4 text-blue-800">
                      <p className="text-sm md:text-base font-bold text-center">
                        سيتم التواصل معك من طرف فريق سبور لتأكيد حسابك بعد إرسال طلب التسجيل.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">الاسم الشخصي</p>
                          <p className="font-bold">{formData.firstName}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">الاسم العائلي</p>
                          <p className="font-bold">{formData.lastName}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">البريد الإلكتروني</p>
                          <p className="font-bold">{formData.email}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">رقم الهاتف</p>
                          <p className="font-bold">{formData.countryCode} {formData.phone}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">المدينة</p>
                          <p className="font-bold">{formData.city}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">الدولة</p>
                          <p className="font-bold">{formData.country}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">الرمز البريدي</p>
                          <p className="font-bold">{formData.postalCode}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">CIN</p>
                          <p className="font-bold">{formData.cin}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">RIB</p>
                          <p className="font-bold">{formData.rib}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">نوع البنك</p>
                          <p className="font-bold">{formData.bankType}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">العنوان</p>
                        <p className="font-bold">{formData.address}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-6">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="bg-gray-100 hover:bg-gray-200 py-4 rounded-lg font-bold"
                      >
                        رجوع
                      </button>
                      <button
                        type="submit"
                        disabled={!acceptedTerms}
                        className={`py-4 rounded-lg font-bold ${acceptedTerms ? 'bg-primary text-white hover:bg-primary-hover' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
                      >
                        إرسال طلب التسجيل
                      </button>
                    </div>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
      {showTerms && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white w-full max-w-3xl rounded-2xl shadow-xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <h4 className="text-lg md:text-xl font-bold text-text-primary">شروط الاستخدام – YURAF Network</h4>
              <button onClick={handleCloseTerms} className="p-2 rounded hover:bg-gray-100" aria-label="Close">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="px-6 py-4">
              <div onScroll={handleTermsScroll} className="max-h-80 overflow-y-auto pr-2 space-y-4 text-sm leading-7 text-text-primary">
                <p>مرحبًا بكم في YURAF Network! تنظّم شروط الاستخدام التالية طريقة دخولكم واستخدامكم لموقعنا الإلكتروني وخدماتنا. يُعدّ استخدامكم للموقع موافقة كاملة على الشروط المذكورة أدناه، لذا يُرجى قراءتها بعناية.</p>
                <p className="font-bold">1. قبول الشروط</p>
                <p>بدخولك إلى موقع YURAF Network أو استخدامك لأي خدمة من خدماتنا، فإنك توافق على الالتزام بهذه الشروط وجميع القوانين المعمول بها. إذا كنت لا توافق على أي بند من هذه الشروط، يُرجى الامتناع عن استخدام الموقع.</p>
                <p className="font-bold">2. تحديث الشروط</p>
                <p>تحتفظ YURAF Network بالحق في تعديل أو تحديث شروط الاستخدام في أي وقت دون إشعار مسبق. سيتم نشر النسخة المحدثة على هذه الصفحة مرفقة بتاريخ آخر تعديل. استمرارك في استخدام الموقع بعد أي تغيير يُعدّ قبولاً ضمنيًا بتلك التعديلات.</p>
                <p className="font-bold">3. مسؤوليات المستخدم</p>
                <ul className="list-disc pr-6 space-y-1">
                  <li>الحفاظ على سرية معلومات تسجيل الدخول الخاصة بك.</li>
                  <li>جميع الأنشطة التي تتم عبر حسابك.</li>
                  <li>استخدام الموقع وخدماته بطريقة قانونية ومتوافقة مع القوانين واللوائح المعمول بها.</li>
                  <li>يمنع استخدام الموقع لأي نشاط ضار أو احتيالي أو غير قانوني.</li>
                </ul>
                <p className="font-bold">4. الملكية الفكرية</p>
                <p>جميع المحتوى الموجود على YURAF Network، بما في ذلك النصوص والشعارات والصور والبرمجيات والرسوميات، هو ملك حصري لـ YURAF Network ومحمي بموجب قوانين حقوق النشر والملكية الفكرية. لا يجوز نسخ أو إعادة استخدام أي جزء من المحتوى دون إذن خطي مسبق.</p>
                <p className="font-bold">5. إخلاء المسؤولية</p>
                <p>يُقدَّم الموقع "كما هو" دون أي ضمانات، سواء كانت صريحة أو ضمنية. لا نضمن: أن تكون الخدمة خالية من الأخطاء؛ أو أن تكون متاحة دائمًا دون انقطاع؛ أو أن تفي بجميع توقعاتك. لا تتحمل YURAF Network أي مسؤولية عن أي خسائر أو أضرار ناتجة عن استخدامك للموقع.</p>
                <p className="font-bold">6. القانون الحاكم</p>
                <p>تخضع شروط الاستخدام هذه لقوانين المملكة المغربية ويتم تفسيرها وفقًا لها. تختص محاكم المدينة التي تقيم بها الشركة أو المستخدِم بالنظر في أي نزاع ينشأ بين الطرفين.</p>
                <p className="font-bold">7. الاتصال بنا</p>
                <p>إذا كانت لديك أي أسئلة أو استفسارات بخصوص شروط الاستخدام.</p>
                <div className="h-2"></div>
              </div>
              <div className="mt-4 flex items-center justify-between gap-3">
                <button
                  onClick={handleCloseTerms}
                  className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
                >إغلاق</button>
                <button
                  onClick={() => { setAcceptedTerms(true); handleCloseTerms(); }}
                  disabled={!hasScrolledToEnd}
                  className={`px-4 py-2 rounded-lg font-bold ${hasScrolledToEnd ? 'bg-primary text-white hover:bg-primary-hover' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
                >قرأت وأوافق</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showPrivacy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white w-full max-w-3xl rounded-2xl shadow-xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <h4 className="text-lg md:text-xl font-bold text-text-primary">سياسة الخصوصية</h4>
              <button onClick={handleClosePrivacy} className="p-2 rounded hover:bg-gray-100" aria-label="Close">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="px-6 py-4">
              <div onScroll={handlePrivacyScroll} className="max-h-80 overflow-y-auto pr-2 space-y-4 text-sm leading-7 text-text-primary">
                <p>سياسة الخصوصية</p>
                <p>مرحبًا بكم في سياسة الخصوصية الخاصة بنا. توضح هذه الوثيقة طرق جمع معلوماتكم واستخدامها وحمايتها عند زيارتكم أو استخدامكم لموقعنا الإلكتروني. نحن ملتزمون بالحفاظ على خصوصية بياناتكم الشخصية وأمانها.</p>
                <p className="font-bold">1. المعلومات التي نجمعها</p>
                <p>نجمع المعلومات التي تُقدمها لنا مباشرةً، مثلاً عند تسجيلك في موقعنا أو إجراء عملية شراء. ويشمل ذلك معلوماتك الشخصية مثل اسمك، وعنوان بريدك الإلكتروني، ورقم هاتفك، وتفاصيل الفواتير.</p>
                <p className="font-bold">2. كيف نستخدم معلوماتك</p>
                <p>تُستخدم المعلومات التي نجمعها لتقديم خدماتنا وتحسينها، والتواصل معك، ومعالجة معاملاتك، وإرسال مواد تسويقية إليك. وقد نستخدمها أيضًا لتحسين تجربة استخدام موقعنا الإلكتروني.</p>
                <p className="font-bold">3. مشاركة معلوماتك</p>
                <p>لا نبيع أو نؤجر معلوماتك الشخصية لأطراف ثالثة. ومع ذلك، قد نشاركها مع جهات خارجية موثوقة تُساعدنا في تشغيل موقعنا الإلكتروني وإدارة أعمالنا، شريطة موافقتها على الحفاظ على سرية هذه المعلومات.</p>
                <p className="font-bold">4. أمن البيانات</p>
                <p>نولي أمن معلوماتك الشخصية اهتمامًا بالغًا. ونستخدم إجراءات حماية إدارية وفنية ومادية مناسبة لحماية بياناتك من الوصول غير المصرح به أو التعديل أو التدمير.</p>
                <p className="font-bold">5. ملفات تعريف الارتباط والتتبع</p>
                <p>يستخدم موقعنا ملفات تعريف الارتباط (الكوكيز) لتحسين تجربة المستخدم وتتبع استخدام الموقع. يمكنك تعديل إعدادات متصفحك لرفض ملفات تعريف الارتباط إذا رغبت في ذلك، ولكن قد يؤثر ذلك على وظائف الموقع.</p>
                <p className="font-bold">6. حقوقك</p>
                <p>لديك الحق في الوصول إلى معلوماتك الشخصية التي نحتفظ بها، أو تحديثها، أو حذفها. لممارسة هذه الحقوق، يُرجى التواصل معنا مباشرةً على [معلومات الاتصال الخاصة بك].</p>
                <p className="font-bold">7. التغييرات على هذه السياسة</p>
                <p>قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سيتم نشر أي تغييرات على هذه الصفحة مع تاريخ التحديث. نشجعك على مراجعة هذه السياسة بشكل دوري للبقاء على اطلاع بكيفية حماية معلوماتك.</p>
                <p className="font-bold">8. اتصل بنا</p>
                <p>إذا كانت لديك أي أسئلة أو مخاوف بشأن سياسة الخصوصية هذه، يرجى الاتصال بنا على [معلومات الاتصال الخاصة بك]</p>
                <div className="h-2"></div>
              </div>
              <div className="mt-4 flex items-center justify-between gap-3">
                <button
                  onClick={handleClosePrivacy}
                  className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
                >إغلاق</button>
                <button
                  onClick={() => { setAcceptedPrivacy(true); handleClosePrivacy(); }}
                  disabled={!hasScrolledPrivacyToEnd}
                  className={`px-4 py-2 rounded-lg font-bold ${hasScrolledPrivacyToEnd ? 'bg-primary text-white hover:bg-primary-hover' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
                >قرأت وأوافق</button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  )
}

export default RegisterPage

