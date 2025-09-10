// src/pages/PurchaseHistory.jsx

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PurchaseHistory = () => {
  const [compras, setCompras] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("compras") || "[]");
    setCompras(data.reverse()); // Mostrar primero las más recientes
  }, []);

  const borrarHistorial = () => {
    if (confirm("¿Estás seguro de borrar todo el historial de compras?")) {
      localStorage.removeItem("compras");
      setCompras([]);
    }
  };

  return (
    <div className="purchase-container">
      <div className="purchase-header">
        <h1>🧾 Historial de Compras</h1>
        <Link to="/" className="back-link">← Volver a la tienda</Link>
      </div>

      {compras.length === 0 ? (
        <p className="no-purchases">No hay compras registradas aún.</p>
      ) : (
        <>
          <div className="purchase-list">
            {compras.map((compra, index) => (
              <div className="purchase-card" key={index}>
                <div className="purchase-row">
                  <strong>Cliente:</strong> {compra.nombre} {compra.apellidos}
                </div>
                <div className="purchase-row">
                  <strong>Correo:</strong> {compra.correo}
                </div>
                <div className="purchase-row">
                  <strong>Dirección:</strong> {compra.direccion}
                </div>
                <div className="purchase-row">
                  <strong>Cédula:</strong> {compra.cedula}
                </div>
                <div className="purchase-row">
                  <strong>Fecha:</strong> {new Date(compra.fecha).toLocaleString()}
                </div>

                {compra.carrito && compra.carrito.length > 0 && (
                  <div className="product-list">
                    <p><strong>Productos comprados:</strong></p>
                    <ul>
                      {compra.carrito.map((producto, i) => (
                        <li key={i}>
                          {producto.name} — ${producto.price.toLocaleString()} COP
                        </li>
                      ))}
                    </ul>
                    <p><strong>Total pagado:</strong> ${compra.totalPagado.toLocaleString()} COP</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="center-btn">
            <button className="clear-button" onClick={borrarHistorial}>
              🗑 Borrar historial de compras
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PurchaseHistory;
