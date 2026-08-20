import { supabase } from '@/lib/supabase';

type ProductRow = {
  legacy_id: string;
  brand: string;
  name: string;
  price: number;
};

// Fase W0: solo verifica la conexión — cuenta productos en `products` e
// `inventory`, y lista los primeros 5 nombres. Nada de Home/Catálogo/Carrito
// todavía (eso es W1+).
export default async function W0TestPage() {
  const { count: productsCount, error: productsError } = await supabase
    .from('products')
    .select('*', { count: 'exact', head: true });

  const { count: inventoryCount, error: inventoryError } = await supabase
    .from('inventory')
    .select('*', { count: 'exact', head: true });

  const { data: sampleData, error: sampleError } = await supabase
    .from('products')
    .select('legacy_id, brand, name, price')
    .order('page', { ascending: true })
    .limit(5);

  const sample: ProductRow[] = sampleData ?? [];

  const error = productsError || inventoryError || sampleError;

  return (
    <main style={{ maxWidth: 480, margin: '0 auto', padding: 24 }}>
      <h1 style={{ fontSize: 20, fontWeight: 800, textTransform: 'uppercase' }}>MR Hats — prueba de conexión (W0)</h1>
      {error ? (
        <div style={{ marginTop: 16, color: '#ff8a8a', fontSize: 13 }}>
          Error de conexión: {error.message}
        </div>
      ) : (
        <>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>
            products: <b>{productsCount}</b> registros · inventory: <b>{inventoryCount}</b> registros
          </p>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>Esperado: 77 y 77.</p>
          <div style={{ marginTop: 16, fontSize: 12.5 }}>
            {(sample ?? []).map((p) => (
              <div key={p.legacy_id} style={{ padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                {p.legacy_id} · {p.brand} · {p.name} · ${Number(p.price).toLocaleString('en-US')}
              </div>
            ))}
          </div>
        </>
      )}
    </main>
  );
}
