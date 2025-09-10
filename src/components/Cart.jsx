const Cart = ({ cartItems, onRemove }) => {
  if (cartItems.length === 0) {
    return <div className="cart-box">El carrito está vacío</div>;
  }

  return (
    <div className="cart-box">
      <h2>Carrito de Compras</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price.toLocaleString()} COP
            <button onClick={() => onRemove(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;