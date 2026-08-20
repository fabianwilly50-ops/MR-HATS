import type { ReactNode } from 'react';

export const metadata = { title: 'MR Hats — W0 test' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, background: '#0b0b0c', color: '#fff', fontFamily: 'system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
