import { useMemo, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ProductGrid from './components/ProductGrid.jsx';
import CartBar from './components/CartBar.jsx';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [cart, setCart] = useState([]);

  const products = useMemo(() => ([
    {
      id: 'iphone-15-pro',
      name: 'iPhone 15 Pro',
      brand: 'Apple',
      price: 1099,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1695619575474-9b45e37bc1e6?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxpUGhvbmUlMjAxNSUyMFByb3xlbnwwfDB8fHwxNzYyMjc2NTkyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
    },
    {
      id: 'iphone-14',
      name: 'iPhone 14',
      brand: 'Apple',
      price: 799,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1680776785024-5223d7a75ea8?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxpUGhvbmUlMjAxNHxlbnwwfDB8fHwxNzYyMjc2NTkyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
    },
    {
      id: 's23-ultra',
      name: 'Galaxy S23 Ultra',
      brand: 'Samsung',
      price: 1199,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1681651585822-b2edab241341?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHYWxheHklMjBTMjMlMjBVbHRyYXxlbnwwfDB8fHwxNzYyMjc2NTkzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
    },
    {
      id: 's23',
      name: 'Galaxy S23',
      brand: 'Samsung',
      price: 899,
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1706832608032-61cced969d6a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHYWxheHklMjBTMjN8ZW58MHwwfHx8MTc2MjI3NjU5NHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
    },
    {
      id: 'pixel-8-pro',
      name: 'Pixel 8 Pro',
      brand: 'Google',
      price: 999,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1706412703794-d944cd3625b3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQaXhlbCUyMDglMjBQcm98ZW58MHwwfHx8MTc2MjI3NjU5NHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
    },
    {
      id: 'oneplus-11',
      name: 'OnePlus 11',
      brand: 'OnePlus',
      price: 749,
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1641815217625-cccb222225c1?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxPbmVQbHVzJTIwMTF8ZW58MHwwfHx8MTc2MjI3NjU5NXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
    },
    {
      id: 'xiaomi-13',
      name: 'Xiaomi 13',
      brand: 'Xiaomi',
      price: 699,
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1658817774203-341b9b9e67a4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxYaWFvbWklMjAxM3xlbnwwfDB8fHwxNzYyMjc2NTk1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
    },
    {
      id: 'nothing-phone-2',
      name: 'Nothing Phone (2)',
      brand: 'Nothing',
      price: 649,
      rating: 4.2,
      image: 'https://images.unsplash.com/photo-1711129250487-42c9078effe6?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOb3RoaW5nJTIwUGhvbmUlMjAlMjgyJTI5fGVufDB8MHx8fDE3NjIyNzY1OTZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
    }
  ]), []);

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        return prev.map((p) => (p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p));
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleIncrement = (id) => {
    setCart((prev) => prev.map((p) => (p.id === id ? { ...p, quantity: p.quantity + 1 } : p)));
  };

  const handleDecrement = (id) => {
    setCart((prev) => prev
      .map((p) => (p.id === id ? { ...p, quantity: Math.max(0, p.quantity - 1) } : p))
      .filter((p) => p.quantity > 0)
    );
  };

  const handleRemove = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onSearch={setSearchQuery} />
      <Hero />
      <ProductGrid
        products={products}
        searchQuery={searchQuery}
        selectedBrand={selectedBrand}
        onBrandChange={setSelectedBrand}
        onAddToCart={handleAddToCart}
      />
      <div className="h-10" />
      <CartBar
        items={cart}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onRemove={handleRemove}
      />
      <footer className="mt-12 border-t py-10 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} MobileMart. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
