# 🇵🇸 Palestine Footer - Next.js

[![npm version](https://img.shields.io/npm/v/palestine-footer-nextjs.svg)](https://www.npmjs.com/package/palestine-footer-nextjs)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-12%2B-black.svg)](https://nextjs.org/)

> تذييل احترافي للتضامن مع فلسطين - مكون Next.js مع دعم SSR و App Router

---

## ✨ المميزات | Features

- ✅ **Next.js 12+ Support** - Pages Router
- ✅ **Next.js 13+ Support** - App Router
- ✅ **SSR Compatible** - Server-Side Rendering
- ✅ **SSG Compatible** - Static Site Generation
- ✅ **TypeScript** - دعم كامل
- ✅ **Zero Hydration Issues** - لا مشاكل في الـ hydration
- ✅ **styled-jsx** - التصميم مدمج

---

## 📦 التثبيت | Installation

```bash
npm install palestine-footer-nextjs
# or
yarn add palestine-footer-nextjs
# or
pnpm add palestine-footer-nextjs
```

---

## 🚀 الاستخدام | Usage

### Next.js 13+ (App Router)

```jsx
// app/layout.js أو app/layout.tsx
import PalestineFooter from 'palestine-footer-nextjs';

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        {children}
        <PalestineFooter />
      </body>
    </html>
  );
}
```

---

### Next.js 12 (Pages Router)

```jsx
// pages/_app.js أو pages/_app.tsx
import PalestineFooter from 'palestine-footer-nextjs';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <PalestineFooter />
    </>
  );
}
```

---

### استخدام في صفحة معينة

```jsx
// pages/index.js
import PalestineFooter from 'palestine-footer-nextjs';

export default function Home() {
  return (
    <div>
      <h1>مرحباً بك</h1>
      <p>محتوى الصفحة...</p>
      
      <PalestineFooter />
    </div>
  );
}
```

---

## 🎨 Props API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `year` | `number` | `new Date().getFullYear()` | السنة |
| `hostName` | `string` | `window.location.hostname` | اسم الموقع |
| `message` | `string` | `"نحن نقف مع..."` | الرسالة |
| `showMessage` | `boolean` | `true` | إظهار الرسالة |
| `backgroundColor` | `string` | `"#000000"` | لون الخلفية |
| `textColor` | `string` | `"#ffffff"` | لون النص |

---

## 📖 أمثلة | Examples

### مع Props مخصصة

```jsx
<PalestineFooter 
  year={2024}
  hostName="موقع فلسطين"
  message="من النهر إلى البحر"
  backgroundColor="#1a1a1a"
  textColor="#f0f0f0"
/>
```

---

### مع TypeScript

```tsx
import PalestineFooter, { PalestineFooterProps } from 'palestine-footer-nextjs';

const footerProps: PalestineFooterProps = {
  year: 2024,
  hostName: 'موقعنا',
  showMessage: true
};

export default function Layout({ children }) {
  return (
    <>
      {children}
      <PalestineFooter {...footerProps} />
    </>
  );
}
```

---

### في Server Component (Next.js 13+)

```jsx
// app/layout.tsx
import PalestineFooter from 'palestine-footer-nextjs';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <main>{children}</main>
        <PalestineFooter />
      </body>
    </html>
  );
}
```

---

### مع Metadata (Next.js 13+)

```jsx
// app/layout.tsx
import { Metadata } from 'next';
import PalestineFooter from 'palestine-footer-nextjs';

export const metadata: Metadata = {
  title: 'موقعي',
  description: 'وصف الموقع',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        {children}
        <PalestineFooter />
      </body>
    </html>
  );
}
```

---

## 🌐 التوافق | Compatibility

| Version | Support |
|---------|---------|
| Next.js 12.x | ✅ Pages Router |
| Next.js 13.x | ✅ App Router + Pages Router |
| Next.js 14.x | ✅ App Router + Pages Router |
| React 17.x | ✅ |
| React 18.x | ✅ |

---

## 🔧 ملاحظات تقنية | Technical Notes

### SSR (Server-Side Rendering)

المكون يدعم SSR بشكل كامل. يتم استخدام `useEffect` و `useState` لتجنب مشاكل hydration.

### Hydration

المكون يستخدم `mounted` state لتجنب hydration mismatch بين server و client.

### styled-jsx

المكون يستخدم `styled-jsx` المدمج في Next.js، لذلك لا تحتاج لتثبيت أي شيء إضافي.

---

## 📂 هيكل المشروع | Project Structure

```
packages/nextjs/
├── src/
│   ├── PalestineFooter.tsx    # المكون الرئيسي
│   └── index.ts               # Entry point
├── examples/
│   ├── app-router/            # مثال App Router
│   └── pages-router/          # مثال Pages Router
├── dist/
│   ├── index.js               # CommonJS
│   ├── index.mjs              # ES Module
│   └── index.d.ts             # Types
├── tsconfig.json
├── tsup.config.ts
├── package.json
└── README.md
```

---

## 🤝 المساهمة | Contributing

نرحب بجميع المساهمات! 🇵🇸

راجع [CONTRIBUTING.md](../../CONTRIBUTING.md)

---

## 📄 الترخيص | License

MIT License

---

## 🔗 الروابط | Links

- [GitHub](https://github.com/Youssef-osama33/Support-Palestine-)
- [Issues](https://github.com/Youssef-osama33/Support-Palestine-/issues)
- [Documentation](../../docs/)

---

<div align="center">

### 🇵🇸 من النهر إلى البحر، فلسطين حرة 🇵🇸

**Made with ❤️ for Palestine**

</div>
