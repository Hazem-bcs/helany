# ⚡ دليل البدء السريع

هذا دليل مختصر للبدء بالمشروع في أسرع وقت ممكن.

---

## 🚀 خطوات سريعة (5 دقائق)

### 1. تثبيت المشروع
```bash
cd Dr.mohamad_helany
npm install
```

### 2. إنشاء Supabase

1. اذهب إلى [supabase.com](https://supabase.com) → Sign Up
2. أنشئ مشروع جديد
3. اذهب إلى SQL Editor
4. انسخ محتوى `lib/db-setup.sql` وشغّله
5. اذهب إلى Settings → API واحفظ:
   - Project URL
   - anon/public key

### 3. إعداد Gmail

1. [Google Account Security](https://myaccount.google.com/security)
2. فعّل **التحقق بخطوتين**
3. أنشئ **App Password**
4. احفظ الكلمة المكونة من 16 رقم

### 4. ملف `.env`

أنشئ ملف `.env` وضع فيه:
```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-key
EMAIL_USER=your.email@gmail.com
EMAIL_PASS=your-16-digit-app-password
ADMIN_PASSWORD=admin123
```

### 5. شغّل المشروع
```bash
npm run dev
```

افتح [http://localhost:3000](http://localhost:3000)

---

## 📦 النشر على Netlify (10 دقائق)

### الطريقة الأسهل:

```bash
# 1. ثبّت Netlify CLI
npm install -g netlify-cli

# 2. سجّل دخول
netlify login

# 3. ابنِ المشروع
npm run build

# 4. انشر
netlify deploy --prod
```

### في Netlify Dashboard:
1. اذهب إلى Site Settings → Environment Variables
2. أضف جميع المتغيرات من `.env`
3. اذهب إلى Plugins
4. ثبّت `@netlify/plugin-nextjs`
5. Redeploy

✅ **تم! موقعك الآن على الإنترنت**

---

## 🔧 التخصيص الأساسي

### تغيير معلومات العيادة

في `.env`:
```env
NEXT_PUBLIC_CLINIC_NAME=اسم عيادتك
NEXT_PUBLIC_CLINIC_PHONE=+963-XXX-XXXXXX
NEXT_PUBLIC_CLINIC_EMAIL=info@yourclinic.com
```

### تغيير الألوان

في `tailwind.config.js`:
```javascript
colors: {
  primary: '#1865ab',    // لونك الأساسي
  secondary: '#7fbce7',  // لونك الثانوي
  accent: '#d1e9f9',     // لون فاتح
}
```

### إضافة شعار

1. ضع `logo.png` في مجلد `public/`
2. في `components/Navbar.tsx` استبدل أيقونة FaTooth بالشعار

---

## 🎯 الصفحات الرئيسية

- `/` - الصفحة الرئيسية
- `/about` - عن الطبيب
- `/services` - الخدمات
- `/contact` - تواصل معنا
- `/booking` - حجز موعد
- `/admin` - لوحة التحكم (Password: admin123)

---

## 🐛 حل المشاكل الشائعة

### ❌ خطأ في Supabase
✅ تأكد من تشغيل السكريبت SQL

### ❌ لا يصل البريد
✅ استخدم App Password وليس كلمة مرور Gmail العادية

### ❌ خطأ في Build
✅ تأكد من إضافة جميع Environment Variables في Netlify

---

## 📚 أدلة إضافية

- [README.md](./README.md) - دليل شامل
- [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) - دليل النشر المفصل
- [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md) - دليل التخصيص
- [FEATURES.md](./FEATURES.md) - قائمة الميزات

---

## 💡 نصائح سريعة

1. **النسخ الاحتياطي**: اعمل `git commit` قبل أي تعديل كبير
2. **الاختبار**: جرّب الحجز والبريد الإلكتروني قبل النشر
3. **الأمان**: غيّر `ADMIN_PASSWORD` لشيء قوي
4. **الصور**: ضع صور حقيقية بدلاً من Placeholders

---

## 🎉 مبروك!

موقعك جاهز الآن. استمتع! 🚀

**إذا احتجت مساعدة، راجع الأدلة التفصيلية أو افتح Issue.**


