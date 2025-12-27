/**
 * Next.js 13+ App Router Example
 * File: app/page.tsx
 */

export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <h1>🇵🇸 Palestine Footer</h1>
        <p className="subtitle">Next.js 13+ App Router Example</p>
      </header>

      <section className="content">
        <div className="info-box">
          <h2>📖 نظرة عامة</h2>
          <p>
            هذا مثال على استخدام مكون <strong>Palestine Footer</strong> مع Next.js 13+ 
            و App Router الجديد.
          </p>
        </div>

        <div className="code-section">
          <h2>💻 الكود المستخدم</h2>
          <pre><code>{`// app/layout.tsx
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
}`}</code></pre>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="icon">⚡</div>
            <h3>SSR Support</h3>
            <p>دعم كامل لـ Server-Side Rendering</p>
          </div>
          
          <div className="feature-card">
            <div className="icon">🚀</div>
            <h3>App Router</h3>
            <p>متوافق مع App Router الجديد</p>
          </div>
          
          <div className="feature-card">
            <div className="icon">📱</div>
            <h3>Responsive</h3>
            <p>يعمل على جميع الشاشات</p>
          </div>
          
          <div className="feature-card">
            <div className="icon">🎨</div>
            <h3>Customizable</h3>
            <p>قابل للتخصيص بالكامل</p>
          </div>
        </div>

        <div className="spacer">
          ⬇️ اسكرول للأسفل لرؤية التذييل ⬇️
        </div>
      </section>

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
          padding-bottom: 120px;
        }

        .header {
          text-align: center;
          margin-bottom: 60px;
        }

        .header h1 {
          font-size: 3em;
          color: #008000;
          margin-bottom: 10px;
        }

        .subtitle {
          font-size: 1.3em;
          color: #666;
        }

        .content {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .info-box {
          background: #f8f9fa;
          padding: 30px;
          border-radius: 12px;
          border-left: 5px solid #008000;
        }

        .info-box h2 {
          color: #008000;
          margin-bottom: 15px;
        }

        .info-box p {
          line-height: 1.8;
          font-size: 1.1em;
        }

        .code-section {
          background: #1a1a1a;
          color: #4ade80;
          padding: 30px;
          border-radius: 12px;
        }

        .code-section h2 {
          color: #4ade80;
          margin-bottom: 20px;
        }

        .code-section pre {
          overflow-x: auto;
          line-height: 1.6;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .feature-card {
          background: linear-gradient(135deg, #008000 0%, #005a00 100%);
          color: white;
          padding: 30px;
          border-radius: 12px;
          text-align: center;
        }

        .feature-card .icon {
          font-size: 3em;
          margin-bottom: 15px;
        }

        .feature-card h3 {
          margin-bottom: 10px;
        }

        .spacer {
          height: 300px;
          background: linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5em;
          color: #666;
        }

        @media (max-width: 768px) {
          .header h1 {
            font-size: 2em;
          }
          
          .container {
            padding: 20px 15px;
          }
        }
      `}</style>
    </div>
  );
}
