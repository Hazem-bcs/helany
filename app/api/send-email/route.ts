import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { to, subject, type, appointmentData } = body

    // Create transporter (configure with your email service)
    // For Gmail, you need to enable "Less secure app access" or use App Password
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    let htmlContent = ''

    if (type === 'confirmation') {
      htmlContent = `
        <!DOCTYPE html>
        <html dir="rtl" lang="ar">
        <head>
          <meta charset="UTF-8">
          <style>
            body { font-family: Arial, sans-serif; background-color: #f5f5f5; }
            .container { max-width: 600px; margin: 0 auto; background-color: white; padding: 20px; border-radius: 10px; }
            .header { background: linear-gradient(135deg, #1865ab, #7fbce7); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { padding: 30px; }
            .info-box { background-color: #d1e9f9; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .footer { text-align: center; padding: 20px; color: #666; }
            .phone-number { direction: ltr; text-align: right; font-family: monospace; font-size: 18px; color: #1865ab; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🦷 تأكيد موعدك</h1>
              <p>عيادة د. محمد حيلاني للأسنان</p>
            </div>
            <div class="content">
              <h2>عزيزي/عزيزتي ${appointmentData.patient_name}</h2>
              <p>شكراً لك على حجز موعدك معنا. نحن سعداء باستقبالك!</p>
              
              <div class="info-box">
                <h3>تفاصيل الموعد:</h3>
                <p><strong>التاريخ:</strong> ${appointmentData.date}</p>
                <p><strong>الوقت:</strong> ${appointmentData.time}</p>
                <p><strong>سبب الزيارة:</strong> ${appointmentData.reason}</p>
              </div>

              <h3>ملاحظات هامة:</h3>
              <ul>
                <li>يرجى الوصول قبل موعدك بـ 10 دقائق</li>
                <li>في حالة الحاجة لإلغاء أو تعديل الموعد، يرجى الاتصال بنا قبل 24 ساعة على الأقل</li>
                <li>إذا كانت لديك أية أسئلة، لا تتردد في الاتصال بنا</li>
              </ul>

              <p><strong>رقم الهاتف:</strong></p>
              <p class="phone-number">+963 962 625 044</p>
            </div>
            <div class="footer">
              <p>عيادة د. محمد حيلاني للأسنان</p>
              <p>جامعة قرطبة كلية طب الاسنان<br />جانب ساعة باب الفرج</p>
            </div>
          </div>
        </body>
        </html>
      `
    } else if (type === 'approved') {
      htmlContent = `
        <!DOCTYPE html>
        <html dir="rtl" lang="ar">
        <head>
          <meta charset="UTF-8">
          <style>
            body { font-family: Arial, sans-serif; background-color: #f5f5f5; }
            .container { max-width: 600px; margin: 0 auto; background-color: white; padding: 20px; border-radius: 10px; }
            .header { background: linear-gradient(135deg, #28a745, #20c997); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { padding: 30px; }
            .info-box { background-color: #d4edda; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .footer { text-align: center; padding: 20px; color: #666; }
            .phone-number { direction: ltr; text-align: right; font-family: monospace; font-size: 18px; color: #28a745; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>✅ تم قبول موعدك</h1>
              <p>عيادة د. محمد حيلاني للأسنان</p>
            </div>
            <div class="content">
              <h2>عزيزي/عزيزتي ${appointmentData.patient_name}</h2>
              <p>نحن سعداء لإعلامك بأن موعدك قد تم قبوله! نتطلع لرؤيتك قريباً.</p>
              
              <div class="info-box">
                <h3>تفاصيل الموعد المؤكد:</h3>
                <p><strong>التاريخ:</strong> ${appointmentData.date}</p>
                <p><strong>الوقت:</strong> ${appointmentData.time}</p>
                <p><strong>سبب الزيارة:</strong> ${appointmentData.reason}</p>
              </div>

              <h3>ملاحظات هامة:</h3>
              <ul>
                <li>يرجى الوصول قبل موعدك بـ 10 دقائق</li>
                <li>في حالة الحاجة لإلغاء أو تعديل الموعد، يرجى الاتصال بنا قبل 24 ساعة على الأقل</li>
                <li>إذا كانت لديك أية أسئلة، لا تتردد في الاتصال بنا</li>
              </ul>

              <p><strong>رقم الهاتف:</strong></p>
              <p class="phone-number">+963 962 625 044</p>
            </div>
            <div class="footer">
              <p>عيادة د. محمد حيلاني للأسنان</p>
              <p>جامعة قرطبة كلية طب الاسنان<br />جانب ساعة باب الفرج</p>
            </div>
          </div>
        </body>
        </html>
      `
    } else if (type === 'rejected') {
      htmlContent = `
        <!DOCTYPE html>
        <html dir="rtl" lang="ar">
        <head>
          <meta charset="UTF-8">
          <style>
            body { font-family: Arial, sans-serif; background-color: #f5f5f5; }
            .container { max-width: 600px; margin: 0 auto; background-color: white; padding: 20px; border-radius: 10px; }
            .header { background: linear-gradient(135deg, #dc3545, #fd7e14); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { padding: 30px; }
            .info-box { background-color: #f8d7da; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .footer { text-align: center; padding: 20px; color: #666; }
            .phone-number { direction: ltr; text-align: right; font-family: monospace; font-size: 18px; color: #dc3545; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>❌ تم رفض موعدك</h1>
              <p>عيادة د. محمد حيلاني للأسنان</p>
            </div>
            <div class="content">
              <h2>عزيزي/عزيزتي ${appointmentData.patient_name}</h2>
              <p>نأسف لإعلامك بأن موعدك المطلوب غير متاح في الوقت المحدد.</p>
              
              <div class="info-box">
                <h3>تفاصيل الموعد المرفوض:</h3>
                <p><strong>التاريخ:</strong> ${appointmentData.date}</p>
                <p><strong>الوقت:</strong> ${appointmentData.time}</p>
                <p><strong>سبب الزيارة:</strong> ${appointmentData.reason}</p>
              </div>

              <h3>البدائل المتاحة:</h3>
              <ul>
                <li>يمكنك حجز موعد جديد في تاريخ ووقت آخر</li>
                <li>يرجى الاتصال بنا لترتيب موعد مناسب</li>
                <li>نعتذر عن أي إزعاج قد تسببناه لك</li>
              </ul>

              <p><strong>رقم الهاتف:</strong></p>
              <p class="phone-number">+963 962 625 044</p>
            </div>
            <div class="footer">
              <p>عيادة د. محمد حيلاني للأسنان</p>
              <p>جامعة قرطبة كلية طب الاسنان<br />جانب ساعة باب الفرج</p>
            </div>
          </div>
        </body>
        </html>
      `
    }

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      html: htmlContent,
    })

    return NextResponse.json(
      { message: 'تم إرسال البريد الإلكتروني بنجاح' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { message: 'فشل إرسال البريد الإلكتروني' },
      { status: 500 }
    )
  }
}


