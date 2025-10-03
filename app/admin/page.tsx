'use client'

import { useState, useEffect } from 'react'
import { FaCalendarAlt, FaUser, FaPhone, FaEnvelope, FaClock, FaCheckCircle, FaTimesCircle, FaSignOutAlt } from 'react-icons/fa'
import { format } from 'date-fns'
import { ar } from 'date-fns/locale'

interface Appointment {
  id: string
  patient_name: string
  phone: string
  email: string
  date: string
  time: string
  reason: string
  status: 'pending' | 'confirmed' | 'cancelled'
  created_at: string
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [filter, setFilter] = useState<'all' | 'pending' | 'confirmed' | 'cancelled'>('all')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple password check (in production, use proper authentication)
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      localStorage.setItem('admin_auth', 'true')
      loadAppointments()
    } else {
      setError('كلمة مرور خاطئة')
    }
  }

  useEffect(() => {
    const auth = localStorage.getItem('admin_auth')
    if (auth === 'true') {
      setIsAuthenticated(true)
      loadAppointments()
    }
  }, [])

  const loadAppointments = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/admin/appointments')
      if (response.ok) {
        const data = await response.json()
        setAppointments(data.appointments || [])
      }
    } catch (err) {
      console.error('Error loading appointments:', err)
      setError('حدث خطأ في تحميل المواعيد')
    } finally {
      setIsLoading(false)
    }
  }

  const updateAppointmentStatus = async (id: string, status: 'confirmed' | 'cancelled') => {
    try {
      const response = await fetch('/api/admin/appointments/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, status }),
      })

      if (response.ok) {
        loadAppointments()
      }
    } catch (err) {
      console.error('Error updating appointment:', err)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('admin_auth')
    setIsAuthenticated(false)
  }

  const filteredAppointments = appointments.filter((apt) => 
    filter === 'all' ? true : apt.status === filter
  )

  const stats = {
    total: appointments.length,
    pending: appointments.filter((a) => a.status === 'pending').length,
    confirmed: appointments.filter((a) => a.status === 'confirmed').length,
    cancelled: appointments.filter((a) => a.status === 'cancelled').length,
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary to-secondary flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="bg-primary p-4 rounded-full inline-block mb-4">
              <FaUser className="text-white text-3xl" />
            </div>
            <h2 className="text-3xl font-bold text-primary">لوحة التحكم</h2>
            <p className="text-gray-600 mt-2">تسجيل دخول المشرف</p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label className="form-label">كلمة المرور</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
                placeholder="أدخل كلمة المرور"
                required
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
                {error}
              </div>
            )}

            <button type="submit" className="btn-primary w-full">
              تسجيل الدخول
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-8 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold mb-2">لوحة التحكم</h1>
              <p className="text-gray-100">إدارة المواعيد والحجوزات</p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
            >
              <FaSignOutAlt />
              تسجيل الخروج
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border-r-4 border-primary">
            <p className="text-gray-600 mb-2">إجمالي المواعيد</p>
            <p className="text-3xl font-bold text-primary">{stats.total}</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border-r-4 border-yellow-500">
            <p className="text-gray-600 mb-2">قيد الانتظار</p>
            <p className="text-3xl font-bold text-yellow-500">{stats.pending}</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border-r-4 border-green-500">
            <p className="text-gray-600 mb-2">مؤكدة</p>
            <p className="text-3xl font-bold text-green-500">{stats.confirmed}</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border-r-4 border-red-500">
            <p className="text-gray-600 mb-2">ملغاة</p>
            <p className="text-3xl font-bold text-red-500">{stats.cancelled}</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                filter === 'all' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              الكل ({stats.total})
            </button>
            <button
              onClick={() => setFilter('pending')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                filter === 'pending' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              قيد الانتظار ({stats.pending})
            </button>
            <button
              onClick={() => setFilter('confirmed')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                filter === 'confirmed' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              مؤكدة ({stats.confirmed})
            </button>
            <button
              onClick={() => setFilter('cancelled')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                filter === 'cancelled' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              ملغاة ({stats.cancelled})
            </button>
          </div>
        </div>

        {/* Appointments List */}
        {isLoading ? (
          <div className="text-center py-12">
            <div className="spinner mx-auto" />
            <p className="text-gray-600 mt-4">جاري التحميل...</p>
          </div>
        ) : filteredAppointments.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <p className="text-gray-600 text-lg">لا توجد مواعيد</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredAppointments.map((appointment) => (
              <div key={appointment.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Patient Info */}
                  <div className="col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-primary bg-opacity-10 p-3 rounded-lg">
                        <FaUser className="text-primary text-xl" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-dark">{appointment.patient_name}</h3>
                        <p className="text-sm text-gray-600">سبب الزيارة: {appointment.reason}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <FaCalendarAlt className="text-secondary" />
                        <span className="text-gray-700">
                          {format(new Date(appointment.date), 'EEEE، d MMMM yyyy', { locale: ar })}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <FaClock className="text-secondary" />
                        <span className="text-gray-700">{appointment.time}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <FaPhone className="text-secondary" />
                        <a href={`tel:${appointment.phone}`} className="text-gray-700 hover:text-primary">
                          {appointment.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <FaEnvelope className="text-secondary" />
                        <a href={`mailto:${appointment.email}`} className="text-gray-700 hover:text-primary truncate">
                          {appointment.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-3">
                    <div className={`px-4 py-2 rounded-lg text-center font-semibold ${
                      appointment.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                      appointment.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {appointment.status === 'pending' ? 'قيد الانتظار' :
                       appointment.status === 'confirmed' ? 'مؤكد' : 'ملغي'}
                    </div>

                    {appointment.status === 'pending' && (
                      <>
                        <button
                          onClick={() => updateAppointmentStatus(appointment.id, 'confirmed')}
                          className="bg-green-500 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          <FaCheckCircle />
                          تأكيد الموعد
                        </button>
                        <button
                          onClick={() => updateAppointmentStatus(appointment.id, 'cancelled')}
                          className="bg-red-500 text-white px-4 py-3 rounded-lg font-semibold hover:bg-red-600 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          <FaTimesCircle />
                          إلغاء الموعد
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}


