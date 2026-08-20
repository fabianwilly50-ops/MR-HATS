const navigation = [
  { label: 'Inicio', href: '/' },
  { label: 'Catálogo', href: '/catalogo' },
];

export function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="/" aria-label="MR Hats, inicio">
        <span className="wordmark-mark">MR</span>
        <span>Hats</span>
      </a>
      <nav className="main-nav" aria-label="Navegación principal">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="cart-link" href="/carrito" aria-label="Ver carrito">
        <span className="cart-icon" aria-hidden="true">
          +
        </span>
        <span>Carrito</span>
        <span className="cart-count">0</span>
      </a>
    </header>
  );
}
