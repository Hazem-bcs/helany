# 📁 هيكل المشروع

دليل شامل لفهم هيكل المشروع وتنظيم الملفات.

---

## 🗂️ الهيكل العام

```
Dr.mohamad_helany/
├── 📁 app/                      # Next.js 14 App Router
│   ├── 📁 about/               # صفحة عن الطبيب
│   ├── 📁 admin/               # لوحة التحكم
│   ├── 📁 api/                 # API Routes
│   ├── 📁 booking/             # صفحة الحجز
│   ├── 📁 contact/             # صفحة التواصل
│   ├── 📁 services/            # صفحة الخدمات
│   ├── 📄 globals.css          # الأنماط العامة
│   ├── 📄 layout.tsx           # Layout الأساسي
│   ├── 📄 page.tsx             # الصفحة الرئيسية
│   ├── 📄 manifest.ts          # PWA Manifest
│   └── 📄 sitemap.ts           # Sitemap للـ SEO
│
├── 📁 components/               # المكونات القابلة لإعادة الاستخدام
│   ├── 📄 CallToAction.tsx
│   ├── 📄 Footer.tsx
│   ├── 📄 Hero.tsx
│   ├── 📄 Navbar.tsx
│   ├── 📄 Services.tsx
│   ├── 📄 Testimonials.tsx
│   └── 📄 WhyChooseUs.tsx
│
├── 📁 lib/                      # المكتبات والأدوات المساعدة
│   ├── 📄 db-setup.sql         # سكريبت إعداد قاعدة البيانات
│   └── 📄 supabase.ts          # إعداد Supabase Client
│
├── 📁 public/                   # الملفات الثابتة (صور، أيقونات)
│   ├── 📄 favicon.ico
│   └── 📄 robots.txt
│
├── 📁 node_modules/            # الحزم المثبتة (لا تعدّله)
│
├── 📄 .env                      # متغيرات البيئة (سري!)
├── 📄 .env.example             # مثال لمتغيرات البيئة
├── 📄 .eslintrc.json           # إعدادات ESLint
├── 📄 .gitignore               # ملفات مستثناة من Git
├── 📄 netlify.toml             # إعدادات Netlify
├── 📄 next.config.js           # إعدادات Next.js
├── 📄 package.json             # معلومات المشروع والحزم
├── 📄 package-lock.json        # قفل إصدارات الحزم
├── 📄 postcss.config.js        # إعدادات PostCSS
├── 📄 tailwind.config.js       # إعدادات Tailwind CSS
├── 📄 tsconfig.json            # إعدادات TypeScript
│
└── 📄 ملفات التوثيق:
    ├── README.md
    ├── QUICK_START.md
    ├── DEPLOYMENT_GUIDE.md
    ├── CUSTOMIZATION_GUIDE.md
    ├── FEATURES.md
    ├── TROUBLESHOOTING.md
    └── PROJECT_STRUCTURE.md
```

---

## 📂 شرح المجلدات الرئيسية

### 📁 `/app` - تطبيق Next.js

المجلد الرئيسي للتطبيق باستخدام App Router من Next.js 14.

#### `/app/about/` - صفحة عن الطبيب
```
about/
└── page.tsx         # محتوى الصفحة
```
**يحتوي على:**
- معلومات الطبيب
- السيرة الذاتية
- الشهادات والخبرات
- فلسفة العلاج

#### `/app/admin/` - لوحة التحكم
```
admin/
└── page.tsx         # Dashboard للطبيب
```
**الميزات:**
- تسجيل دخول محمي
- عرض جميع المواعيد
- تأكيد/إلغاء المواعيد
- إحصائيات

#### `/app/api/` - API Routes
```
api/
├── admin/
│   └── appointments/
│       ├── route.ts         # GET: جلب جميع المواعيد
│       └── update/
│           └── route.ts     # PUT: تحديث حالة موعد
├── appointments/
│   ├── check/
│   │   └── route.ts         # GET: فحص المواعيد المحجوزة
│   └── create/
│       └── route.ts         # POST: إنشاء موعد جديد
└── send-email/
    └── route.ts             # POST: إرسال بريد إلكتروني
```

**API Endpoints:**
- `GET /api/admin/appointments` - جلب كل المواعيد
- `PUT /api/admin/appointments/update` - تحديث موعد
- `GET /api/appointments/check?date=YYYY-MM-DD` - فحص الأوقات المحجوزة
- `POST /api/appointments/create` - حجز موعد جديد
- `POST /api/send-email` - إرسال إيميل

#### `/app/booking/` - صفحة الحجز
```
booking/
└── page.tsx         # نموذج الحجز + التقويم
```
**الميزات:**
- تقويم تفاعلي
- اختيار الوقت
- نموذج معلومات المريض
- تأكيد الحجز

#### `/app/contact/` - صفحة التواصل
```
contact/
└── page.tsx         # معلومات الاتصال
```
**يحتوي على:**
- معلومات الاتصال
- خريطة Google Maps
- ساعات العمل
- روابط السوشيال ميديا

#### `/app/services/` - صفحة الخدمات
```
services/
└── page.tsx         # قائمة الخدمات
```
**يحتوي على:**
- 8 خدمات رئيسية
- وصف تفصيلي لكل خدمة
- أيقونات وألوان مميزة

---

### 📁 `/components` - المكونات

مكونات React قابلة لإعادة الاستخدام.

```typescript
// مثال على استخدام مكون:
import Hero from '@/components/Hero'

export default function Page() {
  return <Hero />
}
```

**المكونات الموجودة:**

| المكون | الاستخدام | الموقع |
|--------|----------|--------|
| `Navbar` | شريط التنقل العلوي | جميع الصفحات |
| `Footer` | التذييل السفلي | جميع الصفحات |
| `Hero` | قسم البطل (Hero Section) | الصفحة الرئيسية |
| `Services` | عرض الخدمات | الصفحة الرئيسية |
| `WhyChooseUs` | أسباب اختيار العيادة | الصفحة الرئيسية |
| `Testimonials` | آراء المرضى | الصفحة الرئيسية |
| `CallToAction` | دعوة لاتخاذ إجراء | الصفحة الرئيسية |

---

### 📁 `/lib` - المكتبات المساعدة

#### `supabase.ts`
```typescript
// إعداد Supabase Client
export const supabase = createClient(url, key)

// Types للـ TypeScript
export interface Appointment { ... }
```

#### `db-setup.sql`
```sql
-- إنشاء الجداول
CREATE TABLE appointments ...
CREATE TABLE available_slots ...

-- Indexes للأداء
CREATE INDEX ...

-- Row Level Security
ALTER TABLE ... ENABLE ROW LEVEL SECURITY
```

---

### 📁 `/public` - الملفات العامة

```
public/
├── favicon.ico         # أيقونة الموقع
├── robots.txt          # لمحركات البحث
├── logo.png            # شعار العيادة (أضفه أنت)
├── doctor.jpg          # صورة الطبيب (أضفها)
└── clinic/             # صور العيادة (أضفها)
    ├── image-1.jpg
    ├── image-2.jpg
    └── ...
```

**ملاحظة:** الملفات في `public/` يمكن الوصول إليها مباشرة:
```
https://your-site.com/logo.png
```

---

## 📄 ملفات الإعداد

### `package.json`
معلومات المشروع والحزم المستخدمة.
```json
{
  "name": "dental-clinic-website",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",      // تشغيل محلي
    "build": "next build",  // بناء للإنتاج
    "start": "next start",  // تشغيل بعد البناء
  },
  "dependencies": { ... },
  "devDependencies": { ... }
}
```

### `next.config.js`
إعدادات Next.js.
```javascript
module.exports = {
  reactStrictMode: true,
  images: {
    unoptimized: true,  // لـ Netlify
  },
  output: 'standalone', // لـ Serverless
}
```

### `tailwind.config.js`
إعدادات Tailwind CSS.
```javascript
module.exports = {
  content: [...],     // مواقع الملفات
  theme: {
    extend: {
      colors: {...}, // الألوان المخصصة
    },
  },
}
```

### `tsconfig.json`
إعدادات TypeScript.
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]  // Alias للـ imports
    }
  }
}
```

### `netlify.toml`
إعدادات النشر على Netlify.
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### `.env`
متغيرات البيئة (سرية!).
```env
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
EMAIL_USER=...
EMAIL_PASS=...
ADMIN_PASSWORD=...
```

---

## 🔄 تدفق البيانات (Data Flow)

### 1️⃣ حجز موعد جديد

```
المريض (Client)
    ↓
/booking (Page)
    ↓
Form Submit
    ↓
POST /api/appointments/create
    ↓
Supabase Database
    ↓
Email Service (Nodemailer)
    ↓
تأكيد للمريض
```

### 2️⃣ عرض المواعيد في لوحة التحكم

```
الطبيب (Client)
    ↓
/admin (Page)
    ↓
Login
    ↓
GET /api/admin/appointments
    ↓
Supabase Database
    ↓
عرض المواعيد
```

### 3️⃣ تأكيد/إلغاء موعد

```
الطبيب (Client)
    ↓
/admin (Page)
    ↓
Click تأكيد/إلغاء
    ↓
PUT /api/admin/appointments/update
    ↓
Supabase Database
    ↓
Email Service
    ↓
إشعار للمريض
```

---

## 🎯 كيفية إضافة ميزات جديدة

### إضافة صفحة جديدة

1. أنشئ مجلد في `/app`:
```
app/
└── new-page/
    └── page.tsx
```

2. أضف المحتوى:
```typescript
export default function NewPage() {
  return (
    <div>
      <h1>صفحة جديدة</h1>
    </div>
  )
}
```

3. أضف رابط في Navbar:
```typescript
// components/Navbar.tsx
const navLinks = [
  // ...
  { href: '/new-page', label: 'صفحة جديدة' },
]
```

### إضافة API Endpoint جديد

1. أنشئ ملف في `/app/api`:
```
app/
└── api/
    └── new-endpoint/
        └── route.ts
```

2. أضف الكود:
```typescript
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ message: 'Hello' })
}

export async function POST(request: Request) {
  const body = await request.json()
  return NextResponse.json({ data: body })
}
```

### إضافة مكون جديد

1. أنشئ ملف في `/components`:
```typescript
// components/NewComponent.tsx
export default function NewComponent() {
  return <div>مكون جديد</div>
}
```

2. استخدمه:
```typescript
import NewComponent from '@/components/NewComponent'

<NewComponent />
```

---

## 📊 حجم الملفات والأداء

### حجم الحزمة (Bundle Size)

بعد `npm run build`:
```
Route (app)              Size     First Load JS
┌ ○ /                    5 KB          90 KB
├ ○ /about              3 KB          88 KB
├ ○ /admin              8 KB          95 KB
├ ○ /booking           12 KB          99 KB
├ ○ /contact            4 KB          89 KB
└ ○ /services           6 KB          91 KB
```

### تحسين الأداء

- ✅ Code Splitting تلقائي
- ✅ Image Optimization
- ✅ Lazy Loading للمكونات
- ✅ Server Components
- ✅ CSS Minification
- ✅ Tree Shaking

---

## 🔍 البحث في المشروع

### العثور على شيء محدد:

```bash
# البحث في جميع الملفات:
grep -r "search term" .

# البحث في ملفات TypeScript فقط:
grep -r "search term" . --include="*.tsx" --include="*.ts"

# البحث عن مكون معين:
grep -r "ComponentName" components/

# البحث عن API endpoint:
grep -r "api/endpoint" app/api/
```

---

## 🛠️ أدوات التطوير المفيدة

### VS Code Extensions الموصى بها:

- **ES7+ React/Redux/React-Native snippets**
- **Tailwind CSS IntelliSense**
- **TypeScript Importer**
- **Prettier - Code formatter**
- **ESLint**

### Git Workflow:

```bash
# 1. إنشاء branch جديد للميزة
git checkout -b feature/new-feature

# 2. التعديلات...

# 3. Commit
git add .
git commit -m "Add new feature"

# 4. Push
git push origin feature/new-feature

# 5. إنشاء Pull Request على GitHub
```

---

## 📚 مصادر إضافية

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Supabase Docs](https://supabase.com/docs)

---

**الآن أنت تفهم هيكل المشروع بالكامل! 🎉**


