# MR Hats Web — Fase W0 (scaffolding + conexión a Supabase)

Proyecto Next.js nuevo, separado de `MRHatsApp` (Expo/RN, que se conserva intacto como
respaldo — no se tocó nada ahí). Usa el **mismo** proyecto Supabase: mismas tablas,
mismas políticas RLS, misma anon key pública.

## Qué se creó
```
MRHatsWeb/
  package.json        dependencias: next, react, @supabase/supabase-js
  next.config.js
  tsconfig.json
  .env.local.example   plantilla de credenciales (copiar a .env.local)
  lib/supabase.ts      cliente Supabase (idéntico en espíritu a src/lib/supabase.ts de la app RN)
  app/layout.tsx       layout base (fondo oscuro, sin diseño todavía — eso es W1)
  app/page.tsx         página única de prueba: cuenta products/inventory y lista 5 productos
```

No hay Home, Catálogo, Detalle, Carrito, Checkout, Pedidos, Auth, ni Admin todavía —
eso es a partir de W1, según lo pediste.

## Qué necesitas hacer tú (cuentas/configuración)
1. **Nada nuevo en Supabase** — es el mismo proyecto que ya tienes corriendo para la app RN.
2. Para *ejecutar* este proyecto necesitas Node.js instalado una vez en una computadora
   (no en tu teléfono). Si prefieres evitarlo por completo, ve la sección de abajo
   "Probar sin instalar nada".
3. (Para más adelante, no ahora): cuando quieras publicarlo, una cuenta gratis en
   [vercel.com](https://vercel.com) conectada a este proyecto — ese paso no es parte de W0.

## Cómo correrlo (si tienes o consigues Node)
```bash
cd MRHatsWeb
cp .env.local.example .env.local
# edita .env.local con la URL y anon key de tu Supabase (Settings → API)
npm install
npm run dev
```
Abre `http://localhost:3000` — debe mostrar "products: 77 registros · inventory: 77
registros" y una lista de 5 productos.

## Probar sin instalar nada (sin terminal)
No es posible correr Next.js real sin Node — es un servidor, no un archivo estático.
Para probar la conexión a Supabase con doble-clic en el navegador, usa el archivo
`MR Hats Web Preview.dc.html` (Fase 2/3, ya lo tienes) — usa el mismo mecanismo de
conexión (URL + anon key guardadas en el navegador) y ya lista los 77 productos reales.
Ese archivo seguirá funcionando en paralelo mientras construyo la versión Next.js real
(W1 en adelante) — no se sustituye uno por el otro hasta que la web tenga Catálogo/Carrito
propios.
