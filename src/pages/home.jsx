// src/pages/Home.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import ProductList from "../components/ProductList";
import Total from "../components/Total";
import ThemeToggle from "../components/ThemeToggle";
import Cart from "../components/Cart";
import SearchBar from "../components/SearchBar"; // ✅ Nuevo componente
import productsData from "../data/products";

const Home = () => {
  const [products, setProducts] = useState(productsData);
  const [cart, setCart] = useState([]);
  const [theme, setTheme] = useState("light");
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  // ✅ Alternar selección de producto
  const handleSelectChange = (id) => {
    setProducts((prev) =>
      prev.map((prod) =>
        prod.id === id ? { ...prod, selected: !prod.selected } : prod
      )
    );

    setCart((prevCart) => {
      const product = products.find((p) => p.id === id);
      const isInCart = prevCart.some((item) => item.id === id);

      if (!isInCart) {
        return [...prevCart, product];
      } else {
        return prevCart.filter((item) => item.id !== id);
      }
    });
  };

  // ✅ Eliminar producto del carrito
  const handleRemoveFromCart = (id) => {
    setProducts((prev) =>
      prev.map((prod) =>
        prod.id === id ? { ...prod, selected: false } : prod
      )
    );
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // ✅ Cambiar tema claro/oscuro
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  // ✅ Calcular total del carrito
  const total = cart.reduce((sum, prod) => sum + prod.price, 0);

  // ✅ Filtrar productos por término de búsqueda
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`app ${theme}`}>
      <Header />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <SearchBar value={searchTerm} onChange={setSearchTerm} /> {/* ✅ Barra de búsqueda */}
      <ProductList
        products={filteredProducts}
        onSelectChange={handleSelectChange}
      />
      <Cart cartItems={cart} onRemove={handleRemoveFromCart} />
      <Total total={total} />

      {cart.length > 0 && (
        <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <button
            onClick={() =>
              navigate("/pago", {
                state: {
                  carrito: cart,
                  total,
                },
              })
            }
          >
            Pagar ({cart.length} productos)
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;