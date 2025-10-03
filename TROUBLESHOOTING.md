# 🔧 دليل حل المشاكل الشائعة

هذا الدليل يساعدك في حل المشاكل التي قد تواجهها.

---

## 🐛 مشاكل التثبيت

### ❌ المشكلة: `npm install` يفشل

**الأسباب المحتملة:**
- نسخة Node.js قديمة
- مشاكل في الاتصال بالإنترنت
- Cache تالف

**الحلول:**
```bash
# 1. تحديث Node.js إلى 18+ من nodejs.org

# 2. مسح Cache
npm cache clean --force

# 3. حذف node_modules وإعادة التثبيت
rm -rf node_modules package-lock.json
npm install

# 4. إذا لم ينفع، استخدم yarn
npm install -g yarn
yarn install
```

### ❌ المشكلة: `npm run dev` يعطي خطأ

**الحل:**
```bash
# تأكد من وجود ملف .env
# تأكد من تثبيت جميع الحزم
npm install
npm run dev
```

---

## 💾 مشاكل قاعدة البيانات (Supabase)

### ❌ المشكلة: "Invalid API key"

**السبب:** مفاتيح API خاطئة في `.env`

**الحل:**
1. اذهب إلى Supabase → Settings → API
2. انسخ المفاتيح الصحيحة
3. تأكد من عدم وجود مسافات إضافية
4. أعد تشغيل `npm run dev`

### ❌ المشكلة: "relation 'appointments' does not exist"

**السبب:** لم يتم تشغيل السكريبت SQL

**الحل:**
1. افتح Supabase → SQL Editor
2. انسخ محتوى `lib/db-setup.sql` كاملاً
3. شغّل السكريبت
4. تأكد من ظهور رسالة نجاح

### ❌ المشكلة: لا يمكن الحجز، خطأ في قاعدة البيانات

**الحل:**
```sql
-- تحقق من وجود الجداول
SELECT * FROM appointments;
SELECT * FROM available_slots;

-- إذا كانت غير موجودة، أعد تشغيل db-setup.sql
```

---

## 📧 مشاكل البريد الإلكتروني

### ❌ المشكلة: لا يصل البريد الإلكتروني

**الأسباب المحتملة:**

#### 1. App Password خاطئ
**الحل:**
- تأكد من استخدام App Password (16 رقم) وليس كلمة مرور Gmail العادية
- أنشئ App Password جديد من [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
- الصقه في `.env` بدون مسافات

#### 2. التحقق بخطوتين غير مفعّل
**الحل:**
- فعّل التحقق بخطوتين في حساب Google
- ثم أنشئ App Password

#### 3. خطأ في SMTP
**الحل:**
```env
# تأكد من الإعدادات في .env:
EMAIL_USER=your.actual.email@gmail.com
EMAIL_PASS=abcdefghijklmnop  # 16 رقم بدون مسافات
```

#### 4. البريد في Spam
**الحل:**
- تحقق من مجلد Spam/Junk
- أضف البريد إلى جهات الاتصال

### ❌ المشكلة: "Invalid login" عند إرسال البريد

**الحل:**
```bash
# اختبر إعدادات البريد:
node -e "
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your.email@gmail.com',
    pass: 'your-app-password'
  }
});
transporter.verify((error, success) => {
  if (error) console.log('Error:', error);
  else console.log('Success! Server is ready');
});
"
```

---

## 🌐 مشاكل النشر على Netlify

### ❌ المشكلة: Build Failed

**الأسباب والحلول:**

#### 1. Environment Variables ناقصة
**الحل:**
- اذهب إلى Site Settings → Environment Variables
- تأكد من إضافة جميع المتغيرات من `.env`
- لا تنسَ `NEXT_PUBLIC_SUPABASE_URL` و `NEXT_PUBLIC_SUPABASE_ANON_KEY`

#### 2. Next.js Plugin غير مثبت
**الحل:**
- اذهب إلى Plugins
- ثبّت `@netlify/plugin-nextjs`
- أعد Deploy

#### 3. خطأ في النسخة
**الحل:**
في `netlify.toml`:
```toml
[build.environment]
  NODE_VERSION = "18"
```

#### 4. خطأ في Build Command
**الحل:**
في Netlify Settings → Build & Deploy:
- Build command: `npm run build`
- Publish directory: `.next`

### ❌ المشكلة: الموقع يعمل محلياً ولكن ليس على Netlify

**الحل:**
1. تحقق من Build logs في Netlify
2. تأكد من إضافة جميع Environment Variables
3. تأكد من عدم وجود أخطاء في Console (F12)

### ❌ المشكلة: API Routes لا تعمل

**الحل:**
- تأكد من تثبيت `@netlify/plugin-nextjs`
- تأكد من أن `next.config.js` يحتوي على:
```javascript
output: 'standalone',
```

---

## 🔐 مشاكل لوحة التحكم

### ❌ المشكلة: لا يمكن تسجيل الدخول

**الأسباب:**

#### 1. كلمة المرور خاطئة
**الحل:**
- كلمة المرور الافتراضية: `admin123`
- أو تحقق من `.env` → `ADMIN_PASSWORD`

#### 2. لا يتذكر تسجيل الدخول
**الحل:**
- مسح Cookies
- تسجيل دخول جديد
- أو عدّل الكود لاستخدام Session بدلاً من localStorage

### ❌ المشكلة: لا تظهر المواعيد

**الحل:**
1. تحقق من اتصال Supabase
2. افتح Console (F12) وابحث عن أخطاء
3. تأكد من وجود بيانات:
```sql
SELECT * FROM appointments;
```

---

## 🎨 مشاكل التصميم

### ❌ المشكلة: الألوان لا تتغير

**الحل:**
```bash
# بعد تعديل tailwind.config.js:
npm run dev  # أوقف وشغّل من جديد

# أو امسح Cache:
rm -rf .next
npm run dev
```

### ❌ المشكلة: الخطوط لا تظهر

**الحل:**
1. تحقق من الاتصال بالإنترنت (الخطوط من Google Fonts)
2. تأكد من صحة رابط الخط في `globals.css`
3. امسح Cache المتصفح (Ctrl+Shift+R)

### ❌ المشكلة: التصميم مكسور على الموبايل

**الحل:**
- افتح DevTools (F12) → Toggle Device Toolbar
- اختبر على أحجام مختلفة
- تأكد من استخدام Responsive Classes في Tailwind

---

## 📱 مشاكل متنوعة

### ❌ المشكلة: الصور لا تظهر

**الأسباب:**

#### 1. المسار خاطئ
**الحل:**
```typescript
// الصحيح:
<Image src="/logo.png" ... />

// الخاطئ:
<Image src="public/logo.png" ... />
```

#### 2. الصورة غير موجودة
**الحل:**
- تأكد من وجود الصورة في مجلد `public/`
- تحقق من اسم الملف (حساس لحالة الأحرف)

### ❌ المشكلة: التقويم (Calendar) لا يعمل

**الحل:**
```bash
# تأكد من تثبيت الحزمة:
npm install react-calendar

# استورد CSS:
import 'react-calendar/dist/Calendar.css'
```

### ❌ المشكلة: بطء في التحميل

**الحلول:**
1. **تحسين الصور:**
```bash
# استخدم WebP بدلاً من PNG/JPG
# قلل حجم الصور قبل الرفع
```

2. **Code Splitting:**
```typescript
// استخدم Dynamic Import
const Component = dynamic(() => import('./Component'))
```

3. **تقليل الحزم:**
```bash
npm run build
# تحقق من حجم الحزم في التقرير
```

---

## 🔄 مشاكل Git و GitHub

### ❌ المشكلة: لا يمكن Push

**الحل:**
```bash
# إذا كان المشروع جديد:
git remote add origin https://github.com/username/repo.git
git branch -M main
git push -u origin main

# إذا كان هناك تعارض:
git pull origin main --rebase
git push origin main
```

### ❌ المشكلة: .env موجود في Git

**الحل:**
```bash
# احذفه من Git (لكن ابقه محلياً):
git rm --cached .env
git commit -m "Remove .env from git"
git push

# تأكد من وجود .env في .gitignore
```

---

## 🆘 عندما لا ينفع أي شيء

### الحل الأخير: إعادة التثبيت الكاملة

```bash
# 1. احفظ نسخة من .env
cp .env .env.backup

# 2. احذف كل شيء
rm -rf node_modules package-lock.json .next

# 3. أعد التثبيت
npm install

# 4. أعد ملف .env
cp .env.backup .env

# 5. شغّل المشروع
npm run dev
```

---

## 📞 احتاج مساعدة إضافية؟

إذا لم تحل المشكلة:

1. **تحقق من الأخطاء في Console:**
   - اضغط F12 في المتصفح
   - اذهب إلى Console
   - انسخ الخطأ وابحث عنه في Google

2. **تحقق من Build Logs:**
   - في Netlify، اذهب إلى Deploys
   - اضغط على آخر Deploy
   - تحقق من Logs

3. **اطلب المساعدة:**
   - افتح Issue على GitHub
   - ضع معلومات المشكلة بالتفصيل
   - أرفق Screenshots إن أمكن

4. **مصادر إضافية:**
   - [Next.js Docs](https://nextjs.org/docs)
   - [Supabase Docs](https://supabase.com/docs)
   - [Netlify Docs](https://docs.netlify.com)
   - [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

## ✅ نصائح للوقاية من المشاكل

1. **اعمل Backup دائماً:**
```bash
git add .
git commit -m "Working version"
git push
```

2. **اختبر محلياً أولاً:**
- لا تنشر مباشرة على Production
- اختبر جميع الميزات محلياً

3. **استخدم Environment Variables:**
- لا تكتب معلومات حساسة مباشرة في الكود
- استخدم `.env`

4. **تابع التحديثات:**
```bash
npm outdated  # لرؤية الحزم القديمة
npm update    # لتحديث الحزم
```

5. **اقرأ الأخطاء:**
- معظم الأخطاء تخبرك بالمشكلة بالضبط
- اقرأ الرسالة جيداً قبل البحث عن حل

---

**بالتوفيق! إذا واجهت مشكلة غير مذكورة هنا، لا تتردد في فتح Issue.** 💪


