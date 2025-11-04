import { useState } from 'react';
import { ShoppingCart, Smartphone, Search } from 'lucide-react';

export default function Navbar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    onSearch?.(val);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-indigo-600 text-white">
              <Smartphone className="w-5 h-5" />
            </div>
            <span className="font-semibold text-lg">MobileMart</span>
          </div>

          <div className="hidden md:flex items-center">
            <nav className="flex items-center gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-indigo-600">Home</a>
              <a href="#products" className="hover:text-indigo-600">Products</a>
              <a href="#deals" className="hover:text-indigo-600">Deals</a>
              <a href="#support" className="hover:text-indigo-600">Support</a>
            </nav>
          </div>

          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                value={query}
                onChange={handleChange}
                placeholder="Search phones, brands..."
                className="w-full pl-10 pr-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Search products"
              />
            </div>
          </div>

          <button className="relative p-2 rounded-lg border hover:bg-gray-50" aria-label="Cart">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-[10px] px-1.5 py-0.5 rounded-full">New</span>
          </button>
        </div>
      </div>
    </header>
  );
}
