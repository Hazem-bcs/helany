import { FaGraduationCap, FaAward, FaCertificate, FaHeart } from 'react-icons/fa'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">عن الطبيب</h1>
          <p className="text-xl text-gray-100">د. محمد حلاني - خبير طب وجراحة الأسنان</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 shadow-2xl">
                <div className="aspect-[3/4] bg-white rounded-2xl flex items-center justify-center">
                  {/* Placeholder for doctor's image */}
                  <div className="text-center p-8">
                    <div className="w-48 h-48 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-6xl text-white">👨‍⚕️</span>
                    </div>
                    <p className="text-gray-500 text-sm">ضع صورة الطبيب هنا</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-full -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary opacity-20 rounded-full -z-10" />
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">د. محمد حلاني</h2>
              <p className="text-xl text-secondary font-semibold">اختصاصي طب وجراحة الأسنان</p>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  مرحباً بكم في عيادتي! أنا د. محمد حلاني، طبيب أسنان متخصص بخبرة تزيد عن 15 عاماً في مجال طب وجراحة الأسنان. أؤمن بأن كل مريض يستحق أفضل رعاية ممكنة، وأسعى دائماً لتقديم خدمات طبية عالية الجودة بأحدث التقنيات.
                </p>
                <p>
                  تخرجت من كلية طب الأسنان بجامعة دمشق، وحصلت على العديد من الشهادات والدورات التدريبية المتخصصة في مختلف مجالات طب الأسنان. أركز في عملي على الجمع بين المهارة الطبية والتقنيات الحديثة لضمان حصول مرضاي على أفضل النتائج.
                </p>
                <p>
                  فلسفتي في العلاج تقوم على الوقاية والتشخيص المبكر، مع التركيز على راحة المريض وتثقيفه حول أهمية العناية بصحة الفم والأسنان. أسعى لبناء علاقة ثقة مع كل مريض وتقديم خطة علاجية مخصصة تناسب احتياجاته.
                </p>
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="card">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary p-4 rounded-lg">
                  <FaGraduationCap className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-primary">التعليم</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <div>
                    <p className="font-semibold text-dark">إجازة في طب وجراحة الأسنان</p>
                    <p className="text-sm text-gray-600">جامعة دمشق - كلية طب الأسنان</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <div>
                    <p className="font-semibold text-dark">دبلوم في زراعة الأسنان</p>
                    <p className="text-sm text-gray-600">معهد التدريب المتقدم</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <div>
                    <p className="font-semibold text-dark">دورة متقدمة في التجميل</p>
                    <p className="text-sm text-gray-600">الأكاديمية الأوروبية لطب الأسنان</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-secondary p-4 rounded-lg">
                  <FaCertificate className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-secondary">الشهادات</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2" />
                  <div>
                    <p className="font-semibold text-dark">عضو نقابة أطباء الأسنان السورية</p>
                    <p className="text-sm text-gray-600">منذ عام 2008</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2" />
                  <div>
                    <p className="font-semibold text-dark">شهادة التعقيم ومكافحة العدوى</p>
                    <p className="text-sm text-gray-600">منظمة الصحة العالمية</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2" />
                  <div>
                    <p className="font-semibold text-dark">شهادات متقدمة في التقويم</p>
                    <p className="text-sm text-gray-600">جمعية التقويم الدولية</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 md:p-12 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-white bg-opacity-20 p-4 rounded-full mb-6">
                <FaHeart className="text-5xl" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">فلسفتي في رعاية المرضى</h2>
              <p className="text-lg leading-relaxed text-gray-100 mb-6">
                "أؤمن بأن كل ابتسامة تستحق العناية الفائقة. هدفي ليس فقط علاج الأسنان، بل بناء علاقة ثقة مع كل مريض وتقديم تجربة علاجية مريحة وآمنة. أسعى دائماً لاستخدام أحدث التقنيات والأساليب لضمان أفضل النتائج مع الحفاظ على راحة المريض."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                  <p className="text-2xl font-bold mb-2">+15</p>
                  <p className="text-sm">سنة خبرة</p>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                  <p className="text-2xl font-bold mb-2">+5000</p>
                  <p className="text-sm">مريض سعيد</p>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                  <p className="text-2xl font-bold mb-2">100%</p>
                  <p className="text-sm">التزام بالجودة</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


