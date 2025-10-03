# 🦷 موقع عيادة د. محمد حلاني للأسنان

موقع ويب احترافي متكامل لعيادة أسنان، مبني باستخدام Next.js 14 و TypeScript و Tailwind CSS.

## ✨ الميزات

### 🎯 الميزات الأساسية
- ✅ تصميم احترافي وعصري متجاوب مع جميع الأجهزة
- ✅ دعم كامل للغة العربية (RTL)
- ✅ نظام حجز مواعيد تفاعلي
- ✅ لوحة تحكم للطبيب
- ✅ نظام إشعارات بالبريد الإلكتروني
- ✅ صفحات مخصصة (الرئيسية، عن الطبيب، الخدمات، تواصل معنا)
- ✅ تحسين محركات البحث (SEO)
- ✅ أداء عالي وسرعة تحميل ممتازة

### 🎨 التصميم
- لوحة ألوان احترافية:
  - **اللون الأساسي**: `#1865ab`
  - **لون ثانوي**: `#7fbce7`
  - **لون فاتح**: `#d1e9f9`
- خطوط عربية جميلة (Cairo & Tajawal)
- رسوم متحركة سلسة
- واجهة مستخدم بديهية وسهلة الاستخدام

## 🛠️ التقنيات المستخدمة

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Forms**: React Hook Form
- **Date Handling**: date-fns
- **Icons**: React Icons
- **Email**: Nodemailer
- **Animations**: Framer Motion
- **Deployment**: Netlify

## 📋 المتطلبات الأولية

قبل البدء، تأكد من تثبيت:
- Node.js 18 أو أحدث
- npm أو yarn
- حساب Supabase (مجاني)
- حساب Gmail (لإرسال البريد الإلكتروني)

## 🚀 التثبيت والتشغيل محلياً

### 1. استنساخ المشروع
```bash
git clone <repository-url>
cd Dr.mohamad_helany
```

### 2. تثبيت الحزم
```bash
npm install
```

### 3. إعداد قاعدة البيانات (Supabase)

#### أ. إنشاء مشروع Supabase
1. اذهب إلى [supabase.com](https://supabase.com)
2. أنشئ حساب جديد (مجاني)
3. أنشئ مشروع جديد

#### ب. إنشاء الجداول
1. اذهب إلى **SQL Editor** في لوحة تحكم Supabase
2. انسخ محتوى ملف `lib/db-setup.sql`
3. قم بتشغيله في SQL Editor

#### ج. الحصول على مفاتيح API
1. اذهب إلى **Settings** > **API**
2. انسخ:
   - Project URL
   - anon/public key

### 4. إعداد متغيرات البيئة

أنشئ ملف `.env` في المجلد الرئيسي:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here

# Email Configuration (Gmail)
EMAIL_USER=your.email@gmail.com
EMAIL_PASS=your-app-password

# Admin Configuration
ADMIN_EMAIL=doctor@example.com
ADMIN_PASSWORD=your-secure-password

# Clinic Information
NEXT_PUBLIC_CLINIC_NAME=عيادة د. محمد حلاني للأسنان
NEXT_PUBLIC_CLINIC_PHONE=+963-XXX-XXXXXX
NEXT_PUBLIC_CLINIC_EMAIL=info@dentalclinic.com
NEXT_PUBLIC_CLINIC_ADDRESS=دمشق، سوريا
NEXT_PUBLIC_CLINIC_MAPS_URL=https://maps.google.com
```

#### إعداد Gmail للبريد الإلكتروني:
1. اذهب إلى [Google Account Security](https://myaccount.google.com/security)
2. قم بتفعيل **التحقق بخطوتين**
3. اذهب إلى **App Passwords**
4. أنشئ كلمة مرور للتطبيق واستخدمها في `EMAIL_PASS`

### 5. تشغيل المشروع
```bash
npm run dev
```

افتح المتصفح على [http://localhost:3000](http://localhost:3000)

## 📦 النشر على Netlify

### الطريقة الأولى: عبر واجهة Netlify (الأسهل)

1. **إنشاء حساب Netlify**
   - اذهب إلى [netlify.com](https://netlify.com)
   - أنشئ حساب مجاني

2. **رفع المشروع**
   ```bash
   # قم بتثبيت Netlify CLI
   npm install -g netlify-cli
   
   # تسجيل الدخول
   netlify login
   
   # بناء المشروع
   npm run build
   
   # نشر المشروع
   netlify deploy --prod
   ```

3. **إضافة متغيرات البيئة**
   - اذهب إلى **Site settings** > **Environment variables**
   - أضف جميع المتغيرات من ملف `.env`

4. **إضافة Next.js Plugin**
   - اذهب إلى **Plugins**
   - ثبت **@netlify/plugin-nextjs**

### الطريقة الثانية: عبر Git (موصى بها)

1. **رفع الكود على GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **ربط مع Netlify**
   - اذهب إلى Netlify Dashboard
   - اضغط **New site from Git**
   - اختر GitHub واختر repository
   - ضبط الإعدادات:
     - Build command: `npm run build`
     - Publish directory: `.next`
   
3. **إضافة متغيرات البيئة** في إعدادات الموقع

4. **Deploy!** - سيتم النشر تلقائياً

## 📱 الصفحات والمسارات

- `/` - الصفحة الرئيسية
- `/about` - عن الطبيب
- `/services` - الخدمات
- `/contact` - تواصل معنا
- `/booking` - حجز موعد
- `/admin` - لوحة التحكم (محمية بكلمة مرور)

## 🔐 لوحة التحكم

للدخول إلى لوحة التحكم:
1. اذهب إلى `/admin`
2. أدخل كلمة المرور (الافتراضية: `admin123`)
3. يمكنك تغيير كلمة المرور في `.env` (`ADMIN_PASSWORD`)

### ميزات لوحة التحكم:
- عرض جميع المواعيد
- تصفية المواعيد حسب الحالة
- تأكيد أو إلغاء المواعيد
- عرض إحصائيات

## 📧 نظام البريد الإلكتروني

يتم إرسال رسائل بريد إلكتروني تلقائياً في الحالات التالية:
- ✅ عند حجز موعد جديد (للمريض)
- ✅ عند تأكيد الموعد (للمريض)
- ✅ عند إلغاء الموعد (للمريض)

## 🎨 التخصيص

### تغيير الألوان
عدّل الألوان في `tailwind.config.js`:
```js
colors: {
  primary: '#1865ab',
  secondary: '#7fbce7',
  accent: '#d1e9f9',
}
```

### تغيير الخطوط
عدّل الخطوط في `app/globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont&display=swap');
```

### إضافة خدمات جديدة
عدّل ملف `components/Services.tsx` وأضف الخدمات الجديدة إلى array `services`.

## 🐛 حل المشاكل الشائعة

### مشكلة: خطأ في الاتصال بـ Supabase
- تأكد من صحة `NEXT_PUBLIC_SUPABASE_URL` و `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- تأكد من تشغيل السكريبت SQL في Supabase

### مشكلة: لا يتم إرسال البريد الإلكتروني
- تأكد من صحة `EMAIL_USER` و `EMAIL_PASS`
- تأكد من إنشاء App Password في Gmail
- تأكد من تفعيل التحقق بخطوتين

### مشكلة: خطأ في البناء على Netlify
- تأكد من إضافة جميع متغيرات البيئة
- تأكد من تثبيت `@netlify/plugin-nextjs`
- تحقق من النسخة الصحيحة لـ Node.js (18+)

## 📝 قائمة المهام (To-Do)

- [ ] إضافة نظام تعديل/إلغاء الموعد للمريض
- [ ] إضافة قسم للمقالات والنصائح الطبية
- [ ] إضافة معرض صور للنتائج قبل وبعد
- [ ] إضافة نظام تقييمات ومراجعات
- [ ] إضافة دردشة مباشرة (Live Chat)
- [ ] إضافة دعم متعدد اللغات (EN/AR)
- [ ] تحسين SEO بمحتوى إضافي

## 🤝 المساهمة

إذا كنت ترغب في المساهمة في تطوير المشروع:
1. Fork المشروع
2. أنشئ branch جديد (`git checkout -b feature/AmazingFeature`)
3. Commit التغييرات (`git commit -m 'Add some AmazingFeature'`)
4. Push إلى Branch (`git push origin feature/AmazingFeature`)
5. افتح Pull Request

## 📄 الترخيص

هذا المشروع مفتوح المصدر ومتاح للاستخدام الشخصي والتجاري.

## 📞 الدعم

إذا كان لديك أي أسئلة أو مشاكل:
- افتح Issue على GitHub
- أرسل بريد إلكتروني إلى: your.email@example.com

## 🙏 شكر خاص

- Next.js Team
- Supabase Team
- Tailwind CSS Team
- جميع المساهمين في المكتبات مفتوحة المصدر المستخدمة

---

صنع بـ ❤️ من أجل د. محمد حلاني

**نتمنى لك تجربة ممتعة! 🚀**


