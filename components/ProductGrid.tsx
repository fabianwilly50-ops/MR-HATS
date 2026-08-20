import type { ProductRow } from '@/lib/types';

export function ProductGrid({ products, error }: { products: ProductRow[]; error?: string }) {
  return (
    <section className="product-section section-shell" id="seleccion">
      <div className="section-heading">
        <div>
          <p className="eyebrow">La selección</p>
          <h2>Ocho formas de llevarla.</h2>
        </div>
        <p className="section-note">Ordenadas por nuestra selección actual</p>
      </div>
      {error ? (
        <div className="state-message">
          <strong>La selección está descansando.</strong>
          <span>Vuelve a intentarlo en un momento.</span>
        </div>
      ) : products.length === 0 ? (
        <div className="state-message">
          <strong>Pronto habrá novedades.</strong>
          <span>Estamos preparando la próxima selección.</span>
        </div>
      ) : (
        <div className="product-grid">
          {products.map((product, index) => (
            <ProductCard key={product.legacy_id} product={product} index={index} />
          ))}
        </div>
      )}
    </section>
  );
}

function ProductCard({ product, index }: { product: ProductRow; index: number }) {
  const price = Number(product.price).toLocaleString('en-US');

  return (
    <a className="product-card" href="/catalogo">
      <div className={`product-art product-art-${(index % 4) + 1}`}>
        <span>MR</span>
        <small>0{index + 1}</small>
      </div>
      <div className="product-info">
        <div>
          <p className="product-brand">{product.brand}</p>
          <h3>{product.name}</h3>
        </div>
        <p className="product-price">${price}</p>
      </div>
    </a>
  );
}
