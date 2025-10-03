import { FaTooth, FaTeeth, FaSmile, FaSyringe, FaXRay, FaBaby, FaCrown, FaSpa } from 'react-icons/fa'

const services = [
  {
    icon: FaSmile,
    title: 'تبييض الأسنان',
    description: 'احصل على ابتسامة بيضاء ناصعة باستخدام أحدث تقنيات التبييض الآمنة والفعالة',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: FaTeeth,
    title: 'تقويم الأسنان',
    description: 'حلول تقويم حديثة ومريحة للحصول على أسنان منتظمة وابتسامة مثالية',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: FaTooth,
    title: 'زراعة الأسنان',
    description: 'زراعة أسنان احترافية بأحدث التقنيات لتعويض الأسنان المفقودة بشكل طبيعي',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: FaSyringe,
    title: 'علاج الجذور',
    description: 'علاج جذور الأسنان بدقة عالية وبدون ألم للحفاظ على أسنانك الطبيعية',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: FaXRay,
    title: 'الأشعة التشخيصية',
    description: 'أحدث أجهزة الأشعة الرقمية للتشخيص الدقيق وخطة العلاج المثالية',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    icon: FaCrown,
    title: 'التركيبات الثابتة',
    description: 'تيجان وجسور عالية الجودة لاستعادة وظيفة ومظهر أسنانك',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: FaBaby,
    title: 'طب أسنان الأطفال',
    description: 'عناية خاصة بأسنان الأطفال في بيئة مريحة وودية',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: FaSpa,
    title: 'تنظيف وتلميع',
    description: 'تنظيف احترافي وتلميع للأسنان للحفاظ على صحة الفم واللثة',
    color: 'from-teal-500 to-cyan-500',
  },
]

export default function Services() {
  return (
    <section className="section bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title inline-block">خدماتنا المتميزة</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            نقدم مجموعة شاملة من خدمات طب الأسنان بأعلى معايير الجودة والرعاية
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="card group hover:scale-105 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`bg-gradient-to-br ${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300`}>
                <service.icon className="text-white text-2xl" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>

              {/* Hover Effect */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-primary font-semibold text-sm">اعرف المزيد ←</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


