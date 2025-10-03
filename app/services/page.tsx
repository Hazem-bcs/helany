import { 
  FaSmile, 
  FaTeeth, 
  FaTooth, 
  FaSyringe, 
  FaXRay, 
  FaBaby, 
  FaCrown, 
  FaSpa,
  FaCheckCircle 
} from 'react-icons/fa'
import Link from 'next/link'

const services = [
  {
    icon: FaSmile,
    title: 'تبييض الأسنان',
    description: 'احصل على ابتسامة بيضاء ناصعة باستخدام أحدث تقنيات التبييض الآمنة والفعالة',
    features: [
      'تبييض احترافي في العيادة',
      'تبييض منزلي بإشراف طبي',
      'نتائج سريعة وآمنة',
      'أسنان أكثر بياضاً بدرجات عديدة',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: FaTeeth,
    title: 'تقويم الأسنان',
    description: 'حلول تقويم حديثة ومريحة للحصول على أسنان منتظمة وابتسامة مثالية',
    features: [
      'تقويم معدني تقليدي',
      'تقويم شفاف (Invisalign)',
      'متابعة دورية منتظمة',
      'خطة علاجية مخصصة',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: FaTooth,
    title: 'زراعة الأسنان',
    description: 'زراعة أسنان احترافية بأحدث التقنيات لتعويض الأسنان المفقودة بشكل طبيعي',
    features: [
      'زراعات من أفضل الشركات العالمية',
      'عملية آمنة وبدون ألم',
      'نتائج طبيعية ودائمة',
      'ضمان على الزراعات',
    ],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: FaSyringe,
    title: 'علاج الجذور',
    description: 'علاج جذور الأسنان بدقة عالية وبدون ألم للحفاظ على أسنانك الطبيعية',
    features: [
      'علاج بدون ألم',
      'تقنيات حديثة ودقيقة',
      'الحفاظ على الأسنان الطبيعية',
      'جلسات قصيرة ومريحة',
    ],
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: FaXRay,
    title: 'الأشعة التشخيصية',
    description: 'أحدث أجهزة الأشعة الرقمية للتشخيص الدقيق وخطة العلاج المثالية',
    features: [
      'أشعة بانورامية رقمية',
      'أشعة ثلاثية الأبعاد (CT)',
      'تقارير فورية ودقيقة',
      'إشعاع منخفض وآمن',
    ],
    color: 'from-indigo-500 to-blue-500',
  },
  {
    icon: FaCrown,
    title: 'التركيبات الثابتة',
    description: 'تيجان وجسور عالية الجودة لاستعادة وظيفة ومظهر أسنانك',
    features: [
      'تيجان زيركون وبورسلان',
      'جسور ثابتة متينة',
      'مظهر طبيعي وجميل',
      'صناعة في مختبرات معتمدة',
    ],
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: FaBaby,
    title: 'طب أسنان الأطفال',
    description: 'عناية خاصة بأسنان الأطفال في بيئة مريحة وودية',
    features: [
      'فريق متخصص بالأطفال',
      'بيئة مريحة وملونة',
      'علاج وقائي للأسنان اللبنية',
      'تعليم الأطفال العناية بالأسنان',
    ],
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: FaSpa,
    title: 'تنظيف وتلميع',
    description: 'تنظيف احترافي وتلميع للأسنان للحفاظ على صحة الفم واللثة',
    features: [
      'إزالة الجير والترسبات',
      'تلميع احترافي',
      'علاج التهاب اللثة',
      'وقاية من أمراض الفم',
    ],
    color: 'from-teal-500 to-cyan-500',
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">خدماتنا الطبية</h1>
          <p className="text-xl text-gray-100">نقدم مجموعة شاملة من خدمات طب الأسنان بأعلى معايير الجودة</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card group hover:shadow-2xl">
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className={`bg-gradient-to-br ${service.color} p-5 rounded-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="text-white text-3xl" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-dark mb-3 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              هل تحتاج لاستشارة طبية؟
            </h2>
            <p className="text-lg mb-6 text-gray-100 max-w-2xl mx-auto">
              احجز موعدك الآن واحصل على استشارة مجانية مع د. محمد حلاني
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/booking" className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                احجز موعدك
              </Link>
              <Link href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-primary transition-all duration-300">
                تواصل معنا
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


