import "./navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__logo">WhereToPurchase</div>
      <nav className="navbar__links">
        <a href="/">Find Products</a>
        <a href="/shops">Shops</a>
        <a href="/how-it-works">How It Works</a>
        <button className="btn-login">Log in</button>
        <button className="btn-signup">Sign up</button>
      </nav>
    </header>
  );
}
