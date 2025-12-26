# 🇵🇸 Palestine Footer - React

[![npm version](https://img.shields.io/npm/v/palestine-footer-react.svg)](https://www.npmjs.com/package/palestine-footer-react)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

> تذييل احترافي للتضامن مع فلسطين - مكون React مع TypeScript

---

## ✨ المميزات | Features

- ✅ **React 18 Ready** - يدعم آخر إصدار
- ✅ **TypeScript** - مع types كاملة
- ✅ **Zero Dependencies** - لا يحتاج مكتبات خارجية
- ✅ **Hooks Based** - استخدام useState & useEffect
- ✅ **Customizable** - Props للتخصيص الكامل
- ✅ **Responsive** - يعمل على جميع الشاشات
- ✅ **SSR Compatible** - يعمل مع Next.js
- ✅ **Lightweight** - أقل من 3KB

---

## 📦 التثبيت | Installation

```bash
npm install palestine-footer-react
# or
yarn add palestine-footer-react
# or
pnpm add palestine-footer-react
```

---

## 🚀 الاستخدام | Usage

### استخدام أساسي

```jsx
import React from 'react';
import PalestineFooter from 'palestine-footer-react';

function App() {
  return (
    <div className="App">
      <h1>مرحباً بك في موقعي</h1>
      <p>محتوى الصفحة...</p>
      
      <PalestineFooter />
    </div>
  );
}

export default App;
```

---

### مع Props مخصصة

```jsx
import PalestineFooter from 'palestine-footer-react';

function App() {
  return (
    <div>
      <YourContent />
      
      <PalestineFooter 
        year={2024}
        hostName="موقع فلسطين"
        message="من النهر إلى البحر"
        backgroundColor="#1a1a1a"
        textColor="#ffffff"
      />
    </div>
  );
}
```

---

### مع TypeScript

```tsx
import React from 'react';
import PalestineFooter, { PalestineFooterProps } from 'palestine-footer-react';

const App: React.FC = () => {
  const footerProps: PalestineFooterProps = {
    year: 2024,
    hostName: 'موقعنا',
    showMessage: true
  };

  return (
    <div>
      <YourContent />
      <PalestineFooter {...footerProps} />
    </div>
  );
};

export default App;
```

---

## 🎨 Props API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `year` | `number` | `new Date().getFullYear()` | السنة المعروضة |
| `hostName` | `string` | `window.location.hostname` | اسم الموقع |
| `message` | `string` | `"نحن نقف مع..."` | رسالة مخصصة |
| `showMessage` | `boolean` | `true` | إظهار/إخفاء الرسالة |
| `backgroundColor` | `string` | `"#000000"` | لون الخلفية |
| `textColor` | `string` | `"#ffffff"` | لون النص |

---

## 📖 أمثلة | Examples

### مثال 1: استخدام بسيط

```jsx
import PalestineFooter from 'palestine-footer-react';

export default function Home() {
  return (
    <>
      <main>محتوى صفحتك</main>
      <PalestineFooter />
    </>
  );
}
```

---

### مثال 2: تخصيص كامل

```jsx
<PalestineFooter 
  year={2024}
  hostName="Palestine Website"
  message="Free Palestine from River to Sea 🇵🇸"
  backgroundColor="#0a0a0a"
  textColor="#f0f0f0"
  showMessage={true}
/>
```

---

### مثال 3: إخفاء الرسالة

```jsx
<PalestineFooter 
  showMessage={false}
/>
```

---

### مثال 4: استخدام مع Next.js

```jsx
// pages/_app.js
import PalestineFooter from 'palestine-footer-react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <PalestineFooter />
    </>
  );
}

export default MyApp;
```

---

### مثال 5: استخدام مع Next.js 13 (App Router)

```jsx
// app/layout.js
import PalestineFooter from 'palestine-footer-react';

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

## 🎨 التخصيص المتقدم | Advanced Customization

### استخدام CSS Modules

```jsx
import PalestineFooter from 'palestine-footer-react';
import styles from './MyFooter.module.css';

function App() {
  return (
    <div>
      <div className={styles.container}>
        <YourContent />
      </div>
      <PalestineFooter />
    </div>
  );
}
```

---

### استخدام مع Styled Components

```jsx
import styled from 'styled-components';
import PalestineFooter from 'palestine-footer-react';

const Container = styled.div`
  min-height: 100vh;
`;

function App() {
  return (
    <Container>
      <YourContent />
      <PalestineFooter />
    </Container>
  );
}
```

---

## 🌐 التوافق | Compatibility

- ✅ React 16.8+ (Hooks)
- ✅ React 17.x
- ✅ React 18.x
- ✅ Next.js 12+
- ✅ Next.js 13+ (App Router)
- ✅ Create React App
- ✅ Vite
- ✅ Remix

---

## 📱 Responsive Design

المكون متجاوب بالكامل ويعمل على:

- 🖥️ Desktop (1920px+)
- 💻 Laptop (1024px - 1919px)
- 📱 Tablet (768px - 1023px)
- 📱 Mobile (< 768px)

---

## 🧪 الاختبار | Testing

```bash
npm test
```

---

## 🛠️ التطوير | Development

```bash
# Clone المستودع
git clone https://github.com/yourusername/palestine-footer.git

# الانتقال للمجلد
cd palestine-footer/packages/react

# تثبيت Dependencies
npm install

# Build
npm run build

# Watch mode
npm run dev
```

---

## 📂 هيكل المشروع | Project Structure

```
packages/react/
├── src/
│   ├── PalestineFooter.tsx    # المكون الرئيسي
│   └── index.ts               # Entry point
├── dist/
│   ├── index.js               # CommonJS build
│   ├── index.esm.js           # ES Module build
│   └── index.d.ts             # TypeScript types
├── package.json
└── README.md
```

---

## 🤝 المساهمة | Contributing

نرحب بجميع المساهمات! 🇵🇸

1. Fork المشروع
2. أنشئ Branch (`git checkout -b feature/AmazingFeature`)
3. Commit (`git commit -m 'Add AmazingFeature'`)
4. Push (`git push origin feature/AmazingFeature`)
5. افتح Pull Request

---

## 📄 الترخيص | License

MIT License - يمكنك استخدام هذا الكود بحرية

---

## 👨‍💻 المطور | Author

**Yusuf Osama**

- Website: [your-website.com](https://your-website.com)
- LinkedIn: [linkedin.com/in/yusufosama](https://linkedin.com/in/yusufosama)
- GitHub: [@yourusername](https://github.com/yourusername)

---

## 🙏 شكر وتقدير | Acknowledgments

- شكراً لكل من يدعم القضية الفلسطينية 🇵🇸
- خط Cairo من Google Fonts
- مستوحى من حب فلسطين ❤️

---

## 🔗 روابط مفيدة | Links

- [Documentation](../../docs/)
- [Examples](./examples/)
- [Changelog](./CHANGELOG.md)
- [Issues](https://github.com/yourusername/palestine-footer/issues)

---

<div align="center">

### 🇵🇸 من النهر إلى البحر، فلسطين حرة 🇵🇸

**Made with ❤️ for Palestine**

</div>
