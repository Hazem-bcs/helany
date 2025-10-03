# 🎨 دليل التخصيص الكامل

هذا الدليل سيساعدك على تخصيص الموقع ليناسب احتياجاتك بالضبط.

---

## 🎨 تخصيص الألوان

### تغيير لوحة الألوان الكاملة

افتح ملف `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#1865ab',    // اللون الأساسي
      secondary: '#7fbce7',  // اللون الثانوي
      accent: '#d1e9f9',     // لون فاتح
      dark: '#000000',       // لون النص الأساسي
      light: '#ffffff',      // الأبيض
    },
  },
}
```

غيّر القيم حسب رغبتك، مثلاً:
```javascript
primary: '#2563eb',    // أزرق أغمق
secondary: '#60a5fa',  // أزرق فاتح
accent: '#dbeafe',     // أزرق فاتح جداً
```

### تغيير ألوان محددة

#### لون الأزرار
في `app/globals.css`:
```css
.btn-primary {
  @apply bg-primary text-white px-6 py-3 rounded-lg font-semibold 
         hover:bg-opacity-90 transition-all duration-300 
         shadow-lg hover:shadow-xl transform hover:-translate-y-1;
}
```

#### لون الروابط
```css
a {
  color: #1865ab; /* primary color */
}
```

---

## 🔤 تخصيص الخطوط

### تغيير الخط العربي

1. اذهب إلى [Google Fonts](https://fonts.google.com/?subset=arabic)
2. اختر خط عربي جديد (مثلاً: Almarai, Amiri, Tajawal)
3. في `app/globals.css`، غيّر:

```css
@import url('https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap');
```

4. في `tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['Almarai', 'system-ui', 'sans-serif'],
},
```

---

## 📝 تخصيص النصوص

### معلومات العيادة

في ملف `.env`:
```env
NEXT_PUBLIC_CLINIC_NAME=عيادة د. [اسم الطبيب]
NEXT_PUBLIC_CLINIC_PHONE=+963-XXX-XXXXXX
NEXT_PUBLIC_CLINIC_EMAIL=info@yourclinic.com
NEXT_PUBLIC_CLINIC_ADDRESS=[عنوانك الكامل]
```

### تعديل النصوص في الصفحات

#### الصفحة الرئيسية (`components/Hero.tsx`)
```typescript
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
  <span className="text-primary">ابتسامتك</span>{' '}
  <span className="text-dark">هي</span>{' '}
  <span className="text-secondary">أولويتنا</span>
</h1>
```
غيّر النص كما تريد.

#### إضافة/تعديل الخدمات (`components/Services.tsx`)

ابحث عن:
```typescript
const services = [
  {
    icon: FaSmile,
    title: 'تبييض الأسنان',
    description: 'احصل على ابتسامة بيضاء...',
    color: 'from-blue-500 to-cyan-500',
  },
  // أضف المزيد هنا
]
```

لإضافة خدمة جديدة:
```typescript
{
  icon: FaTooth, // أو أي أيقونة أخرى
  title: 'اسم الخدمة الجديدة',
  description: 'وصف الخدمة...',
  color: 'from-green-500 to-emerald-500',
},
```

---

## 📸 إضافة الصور

### شعار العيادة

1. ضع صورة الشعار في `public/logo.png`
2. في `components/Navbar.tsx`:

```typescript
import Image from 'next/image'

// استبدل الأيقونة بالشعار
<Image 
  src="/logo.png" 
  alt="Logo" 
  width={50} 
  height={50}
  className="rounded-lg"
/>
```

### صورة الطبيب

1. ضع صورة الطبيب في `public/doctor.jpg`
2. في `app/about/page.tsx`:

```typescript
<Image 
  src="/doctor.jpg" 
  alt="د. محمد حلاني" 
  width={400} 
  height={500}
  className="rounded-2xl object-cover"
/>
```

### صور العيادة

1. ضع الصور في `public/clinic/`
2. في `app/contact/page.tsx`:

```typescript
{[1, 2, 3, 4].map((num) => (
  <Image 
    key={num}
    src={`/clinic/image-${num}.jpg`}
    alt={`صورة العيادة ${num}`}
    width={300}
    height={200}
    className="rounded-lg"
  />
))}
```

---

## 🗺️ تخصيص الخريطة

في `app/contact/page.tsx`، ابحث عن:
```html
<iframe
  src="https://www.google.com/maps/embed?pb=..."
```

### كيفية الحصول على رابط الخريطة:
1. اذهب إلى [Google Maps](https://maps.google.com)
2. ابحث عن عنوانك
3. اضغط **Share** > **Embed a map**
4. انسخ الكود
5. استخدم فقط قيمة `src` في الـ iframe

---

## ⏰ تخصيص أوقات العمل

### تعديل الأوقات المتاحة للحجز

في `app/booking/page.tsx`:
```typescript
const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  // أضف أو احذف أوقات حسب الحاجة
]
```

### تعديل أيام العمل

في `app/booking/page.tsx`:
```typescript
const tileDisabled = ({ date }: { date: Date }) => {
  const day = date.getDay()
  // 5 = الجمعة, 6 = السبت
  return day === 5 || day === 6 // تعطيل الجمعة والسبت
}
```

لتعطيل يوم واحد فقط (الجمعة):
```typescript
return date.getDay() === 5
```

---

## 📋 تخصيص أسباب الزيارة

في `app/booking/page.tsx`:
```typescript
const reasons = [
  'فحص دوري',
  'تنظيف الأسنان',
  'ألم في الأسنان',
  'تبييض الأسنان',
  // أضف المزيد هنا
  'خدمة جديدة',
]
```

---

## 🌐 تخصيص روابط السوشيال ميديا

### في الـ Footer (`components/Footer.tsx`)

```typescript
<a
  href="https://facebook.com/your-page"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaFacebook />
</a>

<a
  href="https://instagram.com/your-account"
  target="_blank"
>
  <FaInstagram />
</a>

<a
  href="https://wa.me/963XXXXXXXXX"
  target="_blank"
>
  <FaWhatsapp />
</a>
```

غيّر الروابط بروابطك الخاصة.

---

## 💬 تخصيص آراء المرضى

في `components/Testimonials.tsx`:
```typescript
const testimonials = [
  {
    name: 'أحمد محمد',
    rating: 5,
    text: 'تجربة رائعة! ...',
    service: 'زراعة أسنان',
  },
  // أضف المزيد من الآراء
  {
    name: 'اسم المريض',
    rating: 5,
    text: 'رأي المريض...',
    service: 'اسم الخدمة',
  },
]
```

---

## 📧 تخصيص رسائل البريد الإلكتروني

في `app/api/send-email/route.ts`:

```typescript
htmlContent = `
  <!DOCTYPE html>
  <html dir="rtl" lang="ar">
  <head>
    <style>
      /* غيّر الألوان والتصميم هنا */
      .header { 
        background: linear-gradient(135deg, #1865ab, #7fbce7); 
      }
    </style>
  </head>
  <body>
    <!-- غيّر النصوص والمحتوى -->
  </body>
  </html>
`
```

---

## 🎯 تخصيص صفحة "عن الطبيب"

في `app/about/page.tsx`:

### تعديل السيرة الذاتية
```typescript
<p>
  مرحباً بكم في عيادتي! أنا د. [اسمك]، طبيب أسنان متخصص بخبرة تزيد عن [عدد] سنة...
</p>
```

### إضافة/تعديل الشهادات
```typescript
<li className="flex items-start gap-3">
  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
  <div>
    <p className="font-semibold text-dark">اسم الشهادة</p>
    <p className="text-sm text-gray-600">الجامعة/المؤسسة</p>
  </div>
</li>
```

---

## 🔢 تخصيص الإحصائيات

في `components/Hero.tsx`:
```typescript
<div className="grid grid-cols-3 gap-6 pt-8">
  <div className="text-center">
    <p className="text-3xl font-bold text-primary">+5000</p>
    <p className="text-sm text-gray-600">مريض سعيد</p>
  </div>
  <div className="text-center">
    <p className="text-3xl font-bold text-secondary">+15</p>
    <p className="text-sm text-gray-600">سنة خبرة</p>
  </div>
  // غيّر الأرقام حسب واقعك
</div>
```

---

## 🔐 تخصيص الأمان

### تغيير كلمة مرور لوحة التحكم

في ملف `.env`:
```env
ADMIN_PASSWORD=your-very-secure-password-here
```

استخدم كلمة مرور قوية تحتوي على:
- حروف كبيرة وصغيرة
- أرقام
- رموز خاصة
- على الأقل 12 حرف

---

## 🎨 تخصيص الرسوم المتحركة

### تغيير سرعة الانيميشن

في `app/globals.css`:
```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.6s ease-out; /* غيّر 0.6s لأسرع أو أبطأ */
}
```

### إضافة انيميشن جديد
```css
@keyframes yourAnimation {
  /* أضف keyframes هنا */
}

.your-animation-class {
  animation: yourAnimation 1s ease-in-out;
}
```

---

## 📱 تخصيص الـ Responsive Design

### تغيير Breakpoints

في `tailwind.config.js`:
```javascript
theme: {
  screens: {
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',
  },
}
```

---

## 🌍 إضافة لغات إضافية

### تحضير البنية للغات متعددة

1. أنشئ مجلد `locales/`:
```
locales/
  ar.json
  en.json
```

2. في `ar.json`:
```json
{
  "home": "الرئيسية",
  "about": "عن الطبيب",
  "services": "الخدمات",
  // ... المزيد
}
```

3. استخدم مكتبة مثل `next-intl` أو `i18next`

---

## 🎁 نصائح إضافية

### استخدام أيقونات مخصصة

إذا أردت استخدام أيقونات SVG خاصة:

1. ضع ملف SVG في `public/icons/`
2. استخدمه:
```typescript
<Image src="/icons/your-icon.svg" alt="Icon" width={24} height={24} />
```

### تحسين الأداء

- استخدم صور WebP بدلاً من PNG/JPG
- قلل حجم الصور قبل رفعها
- استخدم lazy loading للصور

### النسخ الاحتياطي

قبل أي تعديل كبير:
```bash
git add .
git commit -m "Backup before customization"
git push
```

---

## 📞 احتاج مساعدة؟

إذا واجهت أي مشكلة في التخصيص:
1. راجع الكود الأصلي
2. ابحث في التوثيق
3. افتح Issue على GitHub

---

**بالتوفيق في التخصيص! 🎨**


