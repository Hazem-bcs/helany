'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { FaCalendarAlt, FaClock, FaUser, FaPhone, FaEnvelope, FaNotesMedical, FaCheckCircle } from 'react-icons/fa'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { format } from 'date-fns'
import { ar } from 'date-fns/locale'

interface BookingFormData {
  patient_name: string
  phone: string
  email: string
  reason: string
}

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
  '18:00', '18:30', '19:00', '19:30'
]

const reasons = [
  'فحص دوري',
  'تنظيف الأسنان',
  'ألم في الأسنان',
  'تبييض الأسنان',
  'تقويم الأسنان',
  'زراعة الأسنان',
  'علاج الجذور',
  'خلع ضرس',
  'استشارة',
  'أخرى'
]

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [bookedSlots, setBookedSlots] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string>('')

  const { register, handleSubmit, formState: { errors }, reset } = useForm<BookingFormData>()

  // Disable Fridays and past dates
  const tileDisabled = ({ date }: { date: Date }) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return date.getDay() === 5 || date < today // Disable Fridays and past dates
  }

  // Load booked slots for selected date
  useEffect(() => {
    if (selectedDate) {
      loadBookedSlots(selectedDate)
    }
  }, [selectedDate])

  const loadBookedSlots = async (date: Date) => {
    try {
      const formattedDate = format(date, 'yyyy-MM-dd')
      const response = await fetch(`/api/appointments/check?date=${formattedDate}`)
      if (response.ok) {
        const data = await response.json()
        setBookedSlots(data.bookedTimes || [])
      }
    } catch (err) {
      console.error('Error loading booked slots:', err)
    }
  }

  const onSubmit = async (data: BookingFormData) => {
    if (!selectedDate || !selectedTime) {
      setError('الرجاء اختيار التاريخ والوقت')
      return
    }

    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/appointments/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          date: format(selectedDate, 'yyyy-MM-dd'),
          time: selectedTime,
        }),
      })

      if (response.ok) {
        setIsSuccess(true)
        reset()
        setSelectedDate(null)
        setSelectedTime('')
      } else {
        const errorData = await response.json()
        setError(errorData.message || 'حدث خطأ أثناء الحجز')
      }
    } catch (err) {
      setError('حدث خطأ في الاتصال. الرجاء المحاولة مرة أخرى')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
          <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaCheckCircle className="text-green-500 text-5xl" />
          </div>
          <h2 className="text-3xl font-bold text-primary mb-4">تم الحجز بنجاح!</h2>
          <p className="text-gray-600 mb-6">
            شكراً لك! تم تأكيد موعدك. سيتم إرسال رسالة تأكيد إلى بريدك الإلكتروني.
          </p>
          <div className="space-y-2 text-right bg-gray-50 p-4 rounded-lg mb-6">
            <p><span className="font-semibold">التاريخ:</span> {selectedDate && format(selectedDate, 'EEEE، d MMMM yyyy', { locale: ar })}</p>
            <p><span className="font-semibold">الوقت:</span> {selectedTime}</p>
          </div>
          <button
            onClick={() => {
              setIsSuccess(false)
              window.location.href = '/'
            }}
            className="btn-primary w-full"
          >
            العودة للصفحة الرئيسية
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">احجز موعدك</h1>
          <p className="text-xl text-gray-100">اختر التاريخ والوقت المناسب لك</p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section">
        <div className="max-w-6xl mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calendar & Time Selection */}
            <div className="space-y-6">
              {/* Calendar */}
              <div className="card">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <FaCalendarAlt />
                  اختر التاريخ
                </h3>
                <Calendar
                  onChange={(value) => setSelectedDate(value as Date)}
                  value={selectedDate}
                  tileDisabled={tileDisabled}
                  minDate={new Date()}
                  locale="ar"
                  className="w-full"
                />
                {selectedDate && (
                  <p className="mt-4 text-center text-primary font-semibold">
                    {format(selectedDate, 'EEEE، d MMMM yyyy', { locale: ar })}
                  </p>
                )}
              </div>

              {/* Time Slots */}
              {selectedDate && (
                <div className="card">
                  <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                    <FaClock />
                    اختر الوقت
                  </h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                    {timeSlots.map((time) => {
                      const isBooked = bookedSlots.includes(time)
                      return (
                        <button
                          key={time}
                          type="button"
                          onClick={() => !isBooked && setSelectedTime(time)}
                          disabled={isBooked}
                          className={`
                            py-3 px-4 rounded-lg font-semibold transition-all duration-300
                            ${selectedTime === time
                              ? 'bg-primary text-white shadow-lg scale-105'
                              : isBooked
                              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                              : 'bg-white border-2 border-gray-300 hover:border-primary hover:text-primary'
                            }
                          `}
                        >
                          {time}
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Patient Info */}
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                  <FaUser />
                  معلوماتك الشخصية
                </h3>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
                    {error}
                  </div>
                )}

                <div className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="form-label">الاسم الكامل</label>
                    <input
                      {...register('patient_name', { required: 'الاسم مطلوب' })}
                      type="text"
                      className="form-input"
                      placeholder="أدخل اسمك الكامل"
                    />
                    {errors.patient_name && (
                      <p className="text-red-500 text-sm mt-1">{errors.patient_name.message}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="form-label">رقم الهاتف</label>
                    <input
                      {...register('phone', { 
                        required: 'رقم الهاتف مطلوب',
                        pattern: {
                          value: /^[0-9+\-\s()]+$/,
                          message: 'رقم هاتف غير صحيح'
                        }
                      })}
                      type="tel"
                      className="form-input"
                      placeholder="+963-XXX-XXXXXX"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="form-label">البريد الإلكتروني</label>
                    <input
                      {...register('email', { 
                        required: 'البريد الإلكتروني مطلوب',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'بريد إلكتروني غير صحيح'
                        }
                      })}
                      type="email"
                      className="form-input"
                      placeholder="example@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Reason */}
                  <div>
                    <label className="form-label">سبب الزيارة</label>
                    <select
                      {...register('reason', { required: 'سبب الزيارة مطلوب' })}
                      className="form-input"
                    >
                      <option value="">اختر سبب الزيارة</option>
                      {reasons.map((reason) => (
                        <option key={reason} value={reason}>
                          {reason}
                        </option>
                      ))}
                    </select>
                    {errors.reason && (
                      <p className="text-red-500 text-sm mt-1">{errors.reason.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting || !selectedDate || !selectedTime}
                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="spinner border-2 border-white border-t-transparent w-5 h-5" />
                        جاري الحجز...
                      </span>
                    ) : (
                      'تأكيد الحجز'
                    )}
                  </button>
                </div>
              </div>

              {/* Info Box */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="font-bold text-primary mb-3">ملاحظات هامة:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>يرجى الوصول قبل موعدك بـ 10 دقائق</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>سيتم إرسال رسالة تأكيد على بريدك الإلكتروني</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>في حالة التأخير، يرجى الاتصال بالعيادة</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>يمكنك إلغاء الموعد قبل 24 ساعة على الأقل</span>
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}


