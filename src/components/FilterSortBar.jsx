// src/components/FilterSortBar.jsx

const FilterSortBar = ({
  sortOption,
  setSortOption,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  category,
  setCategory,
}) => {
  return (
    <div className="filter-sort-bar">
      {/* Ordenamiento */}
      <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
        <option value="">Ordenar por</option>
        <option value="price-asc">Precio: Menor a Mayor</option>
        <option value="price-desc">Precio: Mayor a Menor</option>
        <option value="name-asc">Nombre: A-Z</option>
        <option value="name-desc">Nombre: Z-A</option>
      </select>

      {/* Filtro por precio mínimo */}
      <input
        type="number"
        placeholder="Precio mínimo"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />

      {/* Filtro por precio máximo */}
      <input
        type="number"
        placeholder="Precio máximo"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />

      {/* Filtro por categoría */}
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Todas las categorías</option>
        <option value="Audio">Audio</option>
        <option value="Accesorios">Accesorios</option>
        <option value="Wearables">Wearables</option>
        <option value="Almacenamiento">Almacenamiento</option>
        <option value="Oficina">Oficina</option>
        <option value="Limpieza">Limpieza</option>
        <option value="Otros">Otros</option>
      </select>
    </div>
  );
};

export default FilterSortBar;

