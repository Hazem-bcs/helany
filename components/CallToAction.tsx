import Link from 'next/link'
import { FaCalendarCheck, FaPhone, FaWhatsapp } from 'react-icons/fa'

export default function CallToAction() {
  return (
    <section className="section bg-gradient-to-r from-primary via-secondary to-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 border-4 border-white rounded-full" />
        <div className="absolute bottom-10 left-10 w-48 h-48 border-4 border-white rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          ابدأ رحلتك نحو ابتسامة صحية وجميلة
        </h2>
        <p className="text-lg md:text-xl mb-8 text-gray-100">
          نحن هنا لمساعدتك في الحصول على أسنان صحية وابتسامة تثق بها
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            href="/booking"
            className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center gap-3 shadow-xl"
          >
            <FaCalendarCheck className="text-xl" />
            <span>احجز موعدك الآن</span>
          </Link>

          <a
            href="tel:+963962625044"
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-primary transition-all duration-300 flex items-center gap-3"
          >
            <FaPhone className="text-xl" />
            <span>اتصل بنا مباشرة</span>
          </a>

          <a
            href="https://wa.me/963962625044"
            className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-600 transition-all duration-300 flex items-center gap-3 shadow-xl"
          >
            <FaWhatsapp className="text-xl" />
            <span>واتساب</span>
          </a>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
            <p className="font-bold text-lg mb-2">ساعات العمل</p>
            <p className="text-gray-100">أوقات العمل مرنة</p>
            <p className="text-gray-100">حسب موعد المريض</p>
          </div>

          <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
            <p className="font-bold text-lg mb-2">اتصل بنا</p>
            <p className="text-gray-100 text-lg">963-962-625044</p>
          </div>

          <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
            <p className="font-bold text-lg mb-2">الموقع</p>
            <p className="text-gray-100">جامعة قرطبة كلية طب الاسنان<br />جانب ساعة باب الفرج</p>
          </div>
        </div>
      </div>
    </section>
  )
}


