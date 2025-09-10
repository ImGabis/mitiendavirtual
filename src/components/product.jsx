import { useState } from "react";

const Product = ({ product, onSelectChange }) => {
  const [showDesc, setShowDesc] = useState(false);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Precio: ${product.price.toLocaleString()} COP</p>

      {showDesc && <p className="description">{product.description}</p>}
      <button onClick={() => setShowDesc(!showDesc)}>
        {showDesc ? "Ocultar Descripción" : "Mostrar Descripción"}
      </button>

      <div>
        <label>
          <input
            type="checkbox"
            checked={product.selected}
            onChange={() => onSelectChange(product.id)}
          />
          Seleccionar
        </label>
      </div>
    </div>
  );
};

export default Product;
