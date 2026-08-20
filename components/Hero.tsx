export function Hero() {
  return (
    <section className="hero section-shell">
      <div className="hero-copy">
        <p className="eyebrow">MR Hats / selección 2026</p>
        <h1>El detalle que cambia todo.</h1>
        <p className="hero-intro">
          Gorras con identidad para moverte a tu manera. Una selección precisa,
          hecha para llevarla todos los días.
        </p>
        <a className="button button-dark" href="/catalogo">
          Explorar colección <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="hero-image-wrap">
        <img
          className="hero-image"
          src="https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=1200&q=85"
          alt="Gorra negra de MR Hats"
        />
        <div className="hero-stamp" aria-hidden="true">
          <span>MR</span>
          <span>est. 2026</span>
        </div>
      </div>
    </section>
  );
}
