import Product from "./Product";

const ProductList = ({ products, onSelectChange }) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          onSelectChange={onSelectChange}
        />
      ))}
    </div>
  );
};

export default ProductList;
