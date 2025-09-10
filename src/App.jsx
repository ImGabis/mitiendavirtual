// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Payment from "./pages/Payment";
import PurchaseHistory from "./pages/PurchaseHistory"; // ← nuevo import

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pago" element={<Payment />} />
      <Route path="/compras" element={<PurchaseHistory />} /> {/* ← nueva ruta */}
    </Routes>
  </Router>
);

export default App;
