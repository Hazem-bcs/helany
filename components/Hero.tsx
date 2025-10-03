'use client'

import Link from 'next/link'
import { FaCalendarAlt, FaShieldAlt, FaStar, FaAward } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-bl from-accent via-white to-secondary pt-20 pb-32 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary opacity-5 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fadeIn">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
              <FaAward className="text-primary" />
              <span className="text-sm font-semibold text-primary">3 سنوات متدرب في طب الأسنان</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-primary">ابتسامتك</span>{' '}
              <span className="text-dark">هي</span>{' '}
              <span className="text-secondary">أولويتنا</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              مرحباً بك في عيادة د. محمد حيلاني للأسنان، حيث نجمع بين الخبرة الطبية العالية وأحدث التقنيات لنمنحك ابتسامة صحية وجميلة.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary bg-opacity-10 p-3 rounded-lg">
                  <FaShieldAlt className="text-primary text-xl" />
                </div>
                <div>
                  <p className="font-semibold text-dark">أعلى معايير التعقيم</p>
                  <p className="text-sm text-gray-600">بيئة آمنة ونظيفة</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-secondary bg-opacity-10 p-3 rounded-lg">
                  <FaStar className="text-secondary text-xl" />
                </div>
                <div>
                  <p className="font-semibold text-dark">أحدث التقنيات</p>
                  <p className="text-sm text-gray-600">معدات حديثة ومتطورة</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <Link href="/booking" className="btn-primary flex items-center gap-2">
                <FaCalendarAlt />
                <span>احجز موعدك الآن</span>
              </Link>
              <Link href="/services" className="btn-outline">
                تعرف على خدماتنا
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">+30</p>
                <p className="text-sm text-gray-600">مريض سعيد</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-secondary">3</p>
                <p className="text-sm text-gray-600">سنوات متدرب</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-gray-600">رضا المرضى</p>
              </div>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative animate-slideInRight">
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-500">
              <div className="aspect-square bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                <svg
                  className="w-full h-full p-12 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 animate-pulse">
                <div className="flex items-center gap-2">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <FaStar className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">التقييم</p>
                    <p className="font-bold text-green-600">5.0/5.0</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 animate-pulse delay-150">
                <div className="flex items-center gap-2">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <FaCalendarAlt className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">مواعيد متاحة</p>
                    <p className="font-bold text-primary">اليوم</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


