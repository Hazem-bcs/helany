import Link from 'next/link'
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaTooth } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-primary to-[#0d4a7a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white p-2 rounded-lg">
                <FaTooth className="text-primary text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold">د. محمد حلاني</h3>
                <p className="text-sm text-accent">عيادة الأسنان</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-200">
              نقدم أفضل خدمات طب الأسنان بأحدث التقنيات وأعلى معايير الجودة والعناية.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-200 hover:text-accent transition-colors duration-300">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-200 hover:text-accent transition-colors duration-300">
                  عن الطبيب
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-200 hover:text-accent transition-colors duration-300">
                  الخدمات
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-gray-200 hover:text-accent transition-colors duration-300">
                  احجز موعدك
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-gray-200 hover:text-accent transition-colors duration-300">
                  لوحة التحكم
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">خدماتنا</h3>
            <ul className="space-y-2 text-gray-200">
              <li>تبييض الأسنان</li>
              <li>تقويم الأسنان</li>
              <li>زراعة الأسنان</li>
              <li>علاج الجذور</li>
              <li>تنظيف وتلميع</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <FaPhone className="text-accent" />
                <a href="tel:+963962625044" className="text-gray-200 hover:text-accent transition-colors duration-300">
                  963-962-625044
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-accent" />
                <a href="mailto:mohammadhilany32@gmail.com" className="text-gray-200 hover:text-accent transition-colors duration-300">
                  mohammadhilany32@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-accent mt-1" />
                <span className="text-gray-200">جامعة قرطبة كلية طب الاسنان<br />جانب ساعة باب الفرج</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/mohamd.helany.3"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-20 p-3 rounded-full hover:bg-accent hover:text-primary transition-all duration-300"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/mohamad_helany/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-20 p-3 rounded-full hover:bg-accent hover:text-primary transition-all duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/963962625044"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-20 p-3 rounded-full hover:bg-accent hover:text-primary transition-all duration-300"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white border-opacity-20 mt-8 pt-6 text-center text-sm text-gray-200">
          <p>© {new Date().getFullYear()} عيادة د. محمد حلاني للأسنان. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}

