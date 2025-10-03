# 🚀 دليل النشر المفصل على Netlify

## المتطلبات الأساسية

1. ✅ حساب GitHub
2. ✅ حساب Netlify (مجاني)
3. ✅ حساب Supabase (مجاني)
4. ✅ حساب Gmail (لإرسال الإيميلات)

---

## الخطوة 1: إعداد Supabase

### 1.1 إنشاء مشروع جديد

1. اذهب إلى [supabase.com](https://supabase.com)
2. اضغط **Sign Up** وأنشئ حساب جديد
3. اضغط **New Project**
4. املأ المعلومات:
   - Project Name: `dental-clinic`
   - Database Password: (اختر كلمة مرور قوية واحفظها)
   - Region: اختر الأقرب لك
5. انتظر بضع دقائق حتى يتم إنشاء المشروع

### 1.2 إنشاء قاعدة البيانات

1. بعد إنشاء المشروع، اذهب إلى **SQL Editor** من القائمة الجانبية
2. افتح ملف `lib/db-setup.sql` من المشروع
3. انسخ كامل المحتوى
4. الصقه في SQL Editor في Supabase
5. اضغط **RUN** أو **Ctrl+Enter**
6. تأكد من ظهور رسالة نجاح

### 1.3 الحصول على مفاتيح API

1. اذهب إلى **Settings** > **API**
2. ستجد:
   - **Project URL** (مثل: `https://xxxxx.supabase.co`)
   - **anon public** key (مفتاح طويل)
3. احفظ هذين المفتاحين - ستحتاجهما لاحقاً

---

## الخطوة 2: إعداد Gmail للبريد الإلكتروني

### 2.1 تفعيل التحقق بخطوتين

1. اذهب إلى [Google Account Security](https://myaccount.google.com/security)
2. تأكد من تفعيل **التحقق بخطوتين** (2-Step Verification)
3. إذا لم يكن مفعلاً، اضغط عليه واتبع التعليمات

### 2.2 إنشاء App Password

1. بعد تفعيل التحقق بخطوتين، ارجع إلى Security
2. اضغط على **App Passwords** (كلمات مرور التطبيقات)
3. اختر:
   - Select app: **Mail**
   - Select device: **Other** واكتب "Dental Clinic Website"
4. اضغط **Generate**
5. ستظهر لك كلمة مرور مكونة من 16 رقم (مثل: `abcd efgh ijkl mnop`)
6. احفظ هذه الكلمة - لن تظهر مرة أخرى!

---

## الخطوة 3: رفع الكود على GitHub

### 3.1 إنشاء repository جديد

1. اذهب إلى [github.com](https://github.com)
2. اضغط **New Repository**
3. املأ المعلومات:
   - Repository name: `dental-clinic-website`
   - Description: "Professional dental clinic website"
   - اختر **Public** أو **Private**
4. اضغط **Create repository**

### 3.2 رفع الملفات

افتح Terminal في مجلد المشروع واكتب:

```bash
# تهيئة Git
git init

# إضافة جميع الملفات
git add .

# عمل Commit
git commit -m "Initial commit: Complete dental clinic website"

# إضافة Remote
git remote add origin https://github.com/your-username/dental-clinic-website.git

# رفع الملفات
git branch -M main
git push -u origin main
```

استبدل `your-username` باسم المستخدم الخاص بك على GitHub.

---

## الخطوة 4: النشر على Netlify

### 4.1 إنشاء حساب Netlify

1. اذهب إلى [netlify.com](https://netlify.com)
2. اضغط **Sign Up**
3. اختر **Sign up with GitHub**
4. امنح Netlify الصلاحيات المطلوبة

### 4.2 إنشاء موقع جديد

1. من Dashboard، اضغط **Add new site** > **Import an existing project**
2. اختر **GitHub**
3. اختر repository `dental-clinic-website`
4. في صفحة الإعدادات:
   - **Branch to deploy**: `main`
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
5. **لا تضغط Deploy بعد!** سنضيف المتغيرات أولاً

### 4.3 إضافة Environment Variables

1. قبل النشر، اضغط **Advanced settings**
2. اضغط **New variable** وأضف كل متغير:

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

EMAIL_USER=your.email@gmail.com
EMAIL_PASS=your-16-digit-app-password

ADMIN_PASSWORD=your-secure-password

NEXT_PUBLIC_CLINIC_NAME=عيادة د. محمد حلاني للأسنان
NEXT_PUBLIC_CLINIC_PHONE=+963-XXX-XXXXXX
NEXT_PUBLIC_CLINIC_EMAIL=info@dentalclinic.com
NEXT_PUBLIC_CLINIC_ADDRESS=دمشق، سوريا
NEXT_PUBLIC_CLINIC_MAPS_URL=https://maps.google.com
```

⚠️ **مهم جداً**: 
- لا تضع مسافات حول علامة `=`
- استخدم نفس القيم التي حصلت عليها من Supabase و Gmail
- `EMAIL_PASS` يجب أن يكون الـ App Password (16 رقم بدون مسافات)

### 4.4 تثبيت Next.js Plugin

1. اضغط **Deploy site** (سيبدأ أول نشر)
2. بعد اكتمال النشر (قد يفشل، لا مشكلة)
3. اذهب إلى **Site settings** > **Plugins**
4. ابحث عن `@netlify/plugin-nextjs`
5. اضغط **Install**

### 4.5 إعادة النشر

1. اذهب إلى **Deploys**
2. اضغط **Trigger deploy** > **Deploy site**
3. انتظر حتى يكتمل النشر (2-5 دقائق)

---

## الخطوة 5: التحقق من الموقع

### 5.1 فتح الموقع

1. بعد اكتمال النشر، اضغط على رابط الموقع (مثل: `https://random-name-123.netlify.app`)
2. تأكد من فتح الصفحة الرئيسية بشكل صحيح

### 5.2 اختبار الحجز

1. اذهب إلى صفحة **احجز موعدك** (`/booking`)
2. اختر تاريخ ووقت
3. املأ البيانات واضغط **تأكيد الحجز**
4. تأكد من ظهور رسالة النجاح
5. تحقق من بريدك الإلكتروني (قد يأخذ 1-2 دقيقة)

### 5.3 اختبار لوحة التحكم

1. اذهب إلى `/admin`
2. أدخل كلمة المرور التي حددتها في `ADMIN_PASSWORD`
3. تأكد من ظهور الموعد الذي حجزته
4. جرب تأكيد أو إلغاء الموعد

---

## الخطوة 6: تخصيص الموقع

### 6.1 تغيير اسم النطاق

1. في Netlify، اذهب إلى **Site settings** > **Domain management**
2. اضغط **Options** > **Edit site name**
3. غيّر الاسم إلى شيء أفضل (مثل: `dr-helany-dental`)
4. الآن رابطك سيكون: `https://dr-helany-dental.netlify.app`

### 6.2 إضافة نطاق مخصص (اختياري)

إذا كان لديك نطاق خاص (مثل: `drhelany.com`):

1. في **Domain management**، اضغط **Add custom domain**
2. أدخل النطاق
3. اتبع التعليمات لتحديث DNS

---

## استكشاف الأخطاء وحلها

### ❌ خطأ: Build failed

**الحل:**
1. تأكد من إضافة جميع Environment Variables
2. تأكد من تثبيت `@netlify/plugin-nextjs`
3. تحقق من Build logs لمعرفة الخطأ بالضبط

### ❌ خطأ: لا يعمل الحجز

**الحل:**
1. تأكد من صحة `NEXT_PUBLIC_SUPABASE_URL` و `NEXT_PUBLIC_SUPABASE_ANON_KEY`
2. تأكد من تشغيل السكريبت SQL في Supabase
3. افتح Console في المتصفح (F12) وابحث عن أخطاء

### ❌ خطأ: لا يصل البريد الإلكتروني

**الحل:**
1. تأكد من `EMAIL_USER` و `EMAIL_PASS` صحيحين
2. تأكد أن `EMAIL_PASS` هو App Password (16 رقم) وليس كلمة مرور Gmail العادية
3. تحقق من مجلد Spam
4. جرب إرسال بريد اختباري من Gmail للتأكد من الإعدادات

### ❌ خطأ: Environment variables لا تعمل

**الحل:**
1. تأكد من عدم وجود مسافات قبل أو بعد اسم المتغير أو قيمته
2. بعد تعديل المتغيرات، يجب عمل Deploy جديد
3. المتغيرات التي تبدأ بـ `NEXT_PUBLIC_` فقط يمكن الوصول لها من المتصفح

---

## نصائح إضافية

### 🔄 التحديثات التلقائية

كل مرة تعمل `git push` إلى GitHub، سيتم نشر التحديثات تلقائياً!

### 📊 مراقبة الأداء

1. اذهب إلى **Analytics** في Netlify
2. يمكنك رؤية عدد الزوار، سرعة الموقع، وغيرها

### 🔒 الأمان

- غيّر `ADMIN_PASSWORD` إلى كلمة مرور قوية
- لا تشارك ملف `.env` مع أحد
- احفظ نسخة احتياطية من جميع المفاتيح

### 💰 التكلفة

جميع الخدمات المستخدمة مجانية:
- ✅ Netlify: 300 GB bandwidth شهرياً (مجاني)
- ✅ Supabase: 500 MB database, 2 GB bandwidth (مجاني)
- ✅ Gmail: إرسال غير محدود (مجاني)

---

## 🎉 تهانينا!

موقعك الآن نشط ويعمل! 🚀

إذا كان لديك أي أسئلة، افتح Issue على GitHub أو راسلني.

**بالتوفيق! 💪**


