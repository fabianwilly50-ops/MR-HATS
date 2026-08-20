import type { ReactNode } from 'react';
import './globals.css';

export const metadata = {
  title: 'MR Hats — Gorras con carácter',
  description: 'Descubre la selección MR Hats.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, background: '#0b0b0c', color: '#fff', fontFamily: 'system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
