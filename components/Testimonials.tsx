'use client'

import { FaStar, FaQuoteRight } from 'react-icons/fa'
import { useState } from 'react'

const testimonials = [
  {
    name: 'أحمد محمد',
    rating: 5,
    text: 'تجربة رائعة! الدكتور محمد محترف جداً ويهتم بأدق التفاصيل. عيادة نظيفة ومعقمة وطاقم عمل متعاون. أنصح بشدة!',
    service: 'زراعة أسنان',
  },
  {
    name: 'سارة علي',
    rating: 5,
    text: 'خدمة ممتازة وأسعار معقولة. قمت بتبييض أسناني وكانت النتيجة مذهلة. شكراً لكم على الاهتمام والعناية الفائقة.',
    service: 'تبييض أسنان',
  },
  {
    name: 'خالد حسن',
    rating: 5,
    text: 'أفضل عيادة أسنان في دمشق بلا منازع. العلاج كان بدون ألم والنتائج مذهلة. الدكتور محمد طبيب ماهر وصبور.',
    service: 'علاج الجذور',
  },
  {
    name: 'ليلى إبراهيم',
    rating: 5,
    text: 'ابني كان خائفاً جداً من طبيب الأسنان، لكن الدكتور محمد تعامل معه بلطف وصبر. الآن يحب زيارة العيادة!',
    service: 'طب أسنان الأطفال',
  },
  {
    name: 'محمود يوسف',
    rating: 5,
    text: 'ركبت تقويم أسنان وكانت المتابعة ممتازة. الدكتور يشرح كل شيء بوضوح والنتائج تظهر تدريجياً بشكل رائع.',
    service: 'تقويم أسنان',
  },
  {
    name: 'فاطمة أحمد',
    rating: 5,
    text: 'نظافة العيادة والتعقيم على أعلى مستوى. شعرت بالراحة والأمان. خدمة احترافية من البداية للنهاية.',
    service: 'تنظيف وتلميع',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <section className="section bg-gradient-to-b from-accent to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title inline-block">آراء مرضانا</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            نفخر بثقة مرضانا ورضاهم عن خدماتنا
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card bg-white relative overflow-hidden group"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 left-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <FaQuoteRight className="text-6xl text-primary" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="relative z-10">
                <p className="font-bold text-dark">{testimonial.name}</p>
                <p className="text-sm text-primary">{testimonial.service}</p>
              </div>

              {/* Hover Effect */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary opacity-0 group-hover:opacity-5 rounded-full transform translate-x-1/2 translate-y-1/2 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


