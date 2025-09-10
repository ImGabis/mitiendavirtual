import { Link } from "react-router-dom";

const Header = () => (
  <header className="header">
    <h1>🛒 ArteDiverso Group</h1>
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/compras">Mis Compras</Link>
    </nav>
  </header>
);

export default Header;