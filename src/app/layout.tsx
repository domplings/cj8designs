// src/app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'CJ8 Designs',
  description: 'Modern web development agency',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: '1rem 2rem', background: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.1)' }}>
          <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              {/* Logo or Brand Name */}
              <Link href="/" style={{ fontWeight: 'bold', fontSize: '1.25rem', color: '#0070f3' }}>
                CJ8 Designs
              </Link>
            </div>
            <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0 }}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/about">About Us</Link></li>
            </ul>
            <div>
              <a
                href="/contact"
                style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  borderRadius: '9999px',
                  backgroundColor: '#0070f3',
                  color: '#fff',
                  textDecoration: 'none',
                  fontWeight: '600',
                }}
              >
                Contact us
              </a>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer style={{ textAlign: 'center', padding: '1rem 0', background: '#f1f1f1' }}>
          <p>&copy; {new Date().getFullYear()} CJ8 Designs</p>
        </footer>
      </body>
    </html>
  );
}
