import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">تواصل معنا</h1>
          <p className="text-xl text-gray-100">نحن هنا للإجابة على جميع استفساراتك</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">معلومات الاتصال</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  يسعدنا تواصلك معنا! فريقنا متاح للإجابة على استفساراتك وحجز مواعيدكم.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="card flex items-start gap-4 hover:shadow-xl">
                  <div className="bg-primary p-4 rounded-lg">
                    <FaPhone className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-2">الهاتف</h3>
                    <a href="tel:+963XXXXXXXXX" className="text-secondary hover:text-primary transition-colors">
                      +963-XXX-XXXXXX
                    </a>
                    <p className="text-sm text-gray-600 mt-1">متاح من السبت إلى الخميس</p>
                  </div>
                </div>

                <div className="card flex items-start gap-4 hover:shadow-xl">
                  <div className="bg-secondary p-4 rounded-lg">
                    <FaEnvelope className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-2">البريد الإلكتروني</h3>
                    <a href="mailto:info@dentalclinic.com" className="text-secondary hover:text-primary transition-colors">
                      info@dentalclinic.com
                    </a>
                    <p className="text-sm text-gray-600 mt-1">نرد خلال 24 ساعة</p>
                  </div>
                </div>

                <div className="card flex items-start gap-4 hover:shadow-xl">
                  <div className="bg-green-500 p-4 rounded-lg">
                    <FaMapMarkerAlt className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-2">العنوان</h3>
                    <p className="text-gray-700">دمشق، سوريا</p>
                    <p className="text-sm text-gray-600 mt-1">[العنوان التفصيلي هنا]</p>
                  </div>
                </div>

                <div className="card flex items-start gap-4 hover:shadow-xl">
                  <div className="bg-purple-500 p-4 rounded-lg">
                    <FaClock className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-2">ساعات العمل</h3>
                    <div className="space-y-1 text-gray-700">
                      <p>السبت - الخميس: 9:00 ص - 8:00 م</p>
                      <p>الجمعة: مغلق</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-bold text-dark mb-4 text-xl">تابعنا على</h3>
                <div className="flex gap-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 p-4 rounded-lg text-white hover:bg-blue-700 transition-colors"
                  >
                    <FaFacebook className="text-2xl" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-lg text-white hover:opacity-90 transition-opacity"
                  >
                    <FaInstagram className="text-2xl" />
                  </a>
                  <a
                    href="https://wa.me/963XXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 p-4 rounded-lg text-white hover:bg-green-600 transition-colors"
                  >
                    <FaWhatsapp className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps & Clinic Images */}
            <div className="space-y-6">
              {/* Map */}
              <div className="card overflow-hidden">
                <h3 className="font-bold text-dark mb-4 text-xl">موقع العيادة</h3>
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.3461234567890!2d36.2765!3d33.5138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDMwJzQ5LjciTiAzNsKwMTYnMzUuNCJF!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              {/* Clinic Images */}
              <div className="card">
                <h3 className="font-bold text-dark mb-4 text-xl">جولة في العيادة</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((num) => (
                    <div key={num} className="aspect-video bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm">صورة العيادة {num}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-4 text-center">
                  * ضع صور عالية الجودة للعيادة من الداخل والخارج
                </p>
              </div>

              {/* Quick Contact CTA */}
              <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">احجز موعدك الآن</h3>
                <p className="text-gray-100 mb-6">
                  لا تنتظر! احجز موعدك اليوم واحصل على استشارة مجانية
                </p>
                <a
                  href="/booking"
                  className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  احجز الآن
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


