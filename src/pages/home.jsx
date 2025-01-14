import React, { useRef } from 'react';
import ProductList from '../components/ProductList';

const Home = () => {
  const productListRef = useRef(null);

  const scrollToProducts = () => {
    productListRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="w-full h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1603347585534-badcc8b973c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY0fHx8ZW58MHx8fHx8"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-4">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">Welcome to ShoppyGlobe!</h2>
          <p className="text-lg sm:text-xl mb-6 text-center px-4 sm:px-8">
            Discover a wide range of products curated just for you. Shop now and experience the best deals.
          </p>
          <button
            onClick={scrollToProducts}
            className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-md"
          >
            Explore Now
          </button>
        </div>
      </div>

      {/* Product List Section */}
      <div ref={productListRef}>
        <ProductList />
      </div>
    </main>
  );
};

export default Home;
