import { FaUserMd, FaAward, FaHeart, FaClock } from 'react-icons/fa'

const reasons = [
  {
    icon: FaUserMd,
    title: 'خبرة طبية عالية',
    description: 'أكثر من 15 سنة من الخبرة في مجال طب وجراحة الأسنان',
  },
  {
    icon: FaAward,
    title: 'أحدث التقنيات',
    description: 'نستخدم أحدث الأجهزة والتقنيات الطبية العالمية',
  },
  {
    icon: FaHeart,
    title: 'رعاية شخصية',
    description: 'نهتم بكل مريض ونقدم رعاية مخصصة حسب احتياجاته',
  },
  {
    icon: FaClock,
    title: 'مواعيد مرنة',
    description: 'ساعات عمل مريحة ونظام حجز مواعيد سهل وسريع',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title inline-block">لماذا تختار عيادتنا؟</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            نحن ملتزمون بتقديم أفضل رعاية لأسنانك وصحة فمك
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center group"
            >
              {/* Icon Circle */}
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-primary opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity duration-300" />
                <div className="relative bg-gradient-to-br from-primary to-secondary p-6 rounded-full text-white group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="text-4xl" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-dark mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            هل أنت مستعد للحصول على ابتسامة أحلامك؟
          </h3>
          <p className="text-lg mb-6 text-gray-100">
            احجز موعدك الآن واحصل على استشارة مجانية
          </p>
          <a href="/booking" className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
            احجز الآن
          </a>
        </div>
      </div>
    </section>
  )
}


