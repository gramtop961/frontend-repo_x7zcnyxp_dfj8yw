import { Star, Plus } from 'lucide-react';

function ProductCard({ product, onAdd }) {
  return (
    <div className="group bg-white rounded-xl border overflow-hidden hover:shadow-md transition">
      <div className="aspect-[4/3] overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-wide text-gray-500">{product.brand}</p>
            <h3 className="font-semibold leading-snug">{product.name}</h3>
          </div>
          <div className="flex items-center gap-1 text-amber-500">
            <Star className="w-4 h-4 fill-amber-400" />
            <span className="text-sm font-medium text-gray-700">{product.rating.toFixed(1)}</span>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <p className="text-lg font-bold">${product.price.toLocaleString()}</p>
          <button
            onClick={() => onAdd(product)}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700"
          >
            <Plus className="w-4 h-4" /> Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProductGrid({ products, searchQuery, selectedBrand, onBrandChange, onAddToCart }) {
  const brands = Array.from(new Set(products.map(p => p.brand)));

  const filtered = products.filter(p => {
    const matchesQuery = !searchQuery || `${p.name} ${p.brand}`.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBrand = !selectedBrand || p.brand === selectedBrand;
    return matchesQuery && matchesBrand;
  });

  return (
    <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="text-xl sm:text-2xl font-bold">Featured Phones</h2>
        <div className="flex items-center gap-2">
          <label htmlFor="brand" className="text-sm text-gray-600">Filter by brand:</label>
          <select
            id="brand"
            value={selectedBrand || ''}
            onChange={(e) => onBrandChange(e.target.value || null)}
            className="text-sm border rounded-lg px-3 py-2"
          >
            <option value="">All</option>
            {brands.map(b => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="p-10 text-center border rounded-xl bg-gray-50">
          <p className="font-medium">No products match your search.</p>
          <p className="text-sm text-gray-600">Try a different keyword or remove filters.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filtered.map(p => (
            <ProductCard key={p.id} product={p} onAdd={onAddToCart} />
          ))}
        </div>
      )}
    </section>
  );
}
