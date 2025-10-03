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
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🦷 تأكيد موعدك</h1>
              <p>عيادة د. محمد حلاني للأسنان</p>
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

              <p><strong>رقم الهاتف:</strong> +963-XXX-XXXXXX</p>
            </div>
            <div class="footer">
              <p>عيادة د. محمد حلاني للأسنان</p>
              <p>دمشق، سوريا</p>
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


