/**
 * Basic Example - Palestine Footer React Component
 * 
 * This example shows the simplest way to use the component
 */

import React from 'react';
import { createRoot } from 'react-dom/client';
import PalestineFooter from '../src/PalestineFooter';

const App: React.FC = () => {
  return (
    <div style={{
      fontFamily: 'system-ui, -apple-system, sans-serif',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        background: 'white',
        borderRadius: '20px',
        padding: '40px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        marginBottom: '100px'
      }}>
        <header style={{
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          <h1 style={{
            fontSize: '3em',
            color: '#008000',
            marginBottom: '10px'
          }}>
            🇵🇸 Palestine Footer
          </h1>
          <p style={{
            fontSize: '1.3em',
            color: '#666'
          }}>
            React Component - مثال بسيط
          </p>
        </header>

        <section style={{
          marginBottom: '40px'
        }}>
          <h2 style={{
            color: '#008000',
            borderBottom: '3px solid #008000',
            paddingBottom: '10px',
            marginBottom: '20px'
          }}>
            📖 نظرة عامة
          </h2>
          <p style={{
            fontSize: '1.1em',
            lineHeight: '1.8',
            color: '#333'
          }}>
            هذا مثال بسيط على استخدام مكون <strong>Palestine Footer</strong> في تطبيق React.
            المكون سهل الاستخدام ولا يحتاج إلى أي إعدادات معقدة.
          </p>
        </section>

        <section style={{
          background: '#f8f9fa',
          padding: '30px',
          borderRadius: '12px',
          marginBottom: '40px'
        }}>
          <h2 style={{
            color: '#008000',
            marginBottom: '20px'
          }}>
            💻 الكود المستخدم
          </h2>
          <pre style={{
            background: '#1a1a1a',
            color: '#4ade80',
            padding: '20px',
            borderRadius: '8px',
            overflow: 'auto',
            fontSize: '14px',
            lineHeight: '1.6'
          }}>
{`import PalestineFooter from 'palestine-footer-react';

function App() {
  return (
    <div>
      <h1>مرحباً بك</h1>
      {/* محتوى صفحتك هنا */}
      
      <PalestineFooter />
    </div>
  );
}`}
          </pre>
        </section>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          margin: '40px 0'
        }}>
          {[
            { icon: '⚡', title: 'سريع', desc: 'أقل من 3KB' },
            { icon: '🎨', title: 'جميل', desc: 'تصميم احترافي' },
            { icon: '📱', title: 'Responsive', desc: 'كل الشاشات' },
            { icon: '🔧', title: 'مرن', desc: 'قابل للتخصيص' }
          ].map((feature, i) => (
            <div key={i} style={{
              background: 'linear-gradient(135deg, #008000 0%, #005a00 100%)',
              color: 'white',
              padding: '30px',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3em', marginBottom: '10px' }}>
                {feature.icon}
              </div>
              <h3 style={{ marginBottom: '10px' }}>{feature.title}</h3>
              <p style={{ opacity: 0.9 }}>{feature.desc}</p>
            </div>
          ))}
        </div>

        <div style={{
          height: '300px',
          background: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5em',
          color: '#666',
          marginTop: '50px'
        }}>
          ⬇️ اسكرول للأسفل لرؤية التذييل ⬇️
        </div>
      </div>

      {/* Palestine Footer Component */}
      <PalestineFooter />
    </div>
  );
};

// Render the app
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
