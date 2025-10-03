'use client'

import { FaGraduationCap, FaAward, FaCertificate, FaHeart } from 'react-icons/fa'
import Image from 'next/image'
import { useState } from 'react'

export default function AboutPage() {
  const [imageError, setImageError] = useState(false)
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">عن الطبيب</h1>
          <p className="text-xl text-gray-100">د. محمد حلاني - تشخيص ومعالجة أمراض اللثة والفم والأسنان</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 shadow-2xl">
                <div className="aspect-[3/4] bg-white rounded-2xl overflow-hidden">
                  {!imageError ? (
                    <img 
                      src="/images/doctor.jpg" 
                      alt="د. محمد حلاني"
                      className="w-full h-full object-cover"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-primary to-secondary">
                      <span className="text-8xl text-white mb-4">👨‍⚕️</span>
                      <p className="text-white text-lg font-semibold">د. محمد حلاني</p>
                    </div>
                  )}
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-full -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary opacity-20 rounded-full -z-10" />
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">د. محمد حلاني</h2>
              <p className="text-xl text-secondary font-semibold">طالب سنة رابعة - كلية طب الأسنان</p>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  مرحباً بكم! أنا محمد حلاني، طالب في السنة الرابعة بكلية طب الأسنان في جامعة قرطبة بحلب. أؤمن بأن كل مريض يستحق أفضل رعاية ممكنة، وأسعى دائماً لتقديم خدمات طبية عالية الجودة بأحدث التقنيات.
                </p>
                <p>
                  حاصل على شهادة تدريب لمدة سنتين وقد تعاملت مع العديد من المرضى من قبل. لدي شهادة إسعافات أولية وشهادات خبرة في مجال طب الأسنان والتعامل مع المرضى. أركز في عملي على الجمع بين المعرفة الأكاديمية والتطبيق العملي لضمان حصول مرضاي على أفضل النتائج.
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
                    <p className="font-semibold text-dark">طالب سنة رابعة في طب الأسنان</p>
                    <p className="text-sm text-gray-600">جامعة قرطبة - حلب</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <div>
                    <p className="font-semibold text-dark">شهادة الثانوية العامة</p>
                    <p className="text-sm text-gray-600">قسم علمي</p>
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
                    <p className="font-semibold text-dark">شهادة تدريب عملي لمدة سنتين</p>
                    <p className="text-sm text-gray-600">خبرة عملية مع المرضى في العيادات</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2" />
                  <div>
                    <p className="font-semibold text-dark">شهادة إسعافات أولية</p>
                    <p className="text-sm text-gray-600">معتمدة ومحدثة</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2" />
                  <div>
                    <p className="font-semibold text-dark">شهادات خبرة في طب الأسنان</p>
                    <p className="text-sm text-gray-600">التعامل مع المرضى وتقنيات العلاج</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2" />
                  <div>
                    <p className="font-semibold text-dark">دورات في التعامل مع المرضى</p>
                    <p className="text-sm text-gray-600">مهارات التواصل والرعاية الطبية</p>
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
                  <p className="text-2xl font-bold mb-2">3</p>
                  <p className="text-sm">سنوات متدرب</p>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                  <p className="text-2xl font-bold mb-2">+30</p>
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


