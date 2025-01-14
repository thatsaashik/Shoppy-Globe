import React, { useState } from 'react';
import ProductItem from './ProductItem';
import useFetchProducts from '../hooks/useFetchProducts';

const ProductList = () => {
  const { data, loading, error } = useFetchProducts('https://dummyjson.com/products');
  const [searchQuery, setSearchQuery] = useState('');
  const [textColor, setTextColor] = useState('#ffffff'); // Default text color is white

  if (loading) {
    return <p className='text-white font-bold text-2xl'>Loading products...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  // if (!data.product) {
  //   return <p className='text-white text-2xl'>Not Foundes</p>
  // }else{}
  const filteredProducts = data.products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div 
      className="p-8 min-h-screen"
      style={{
        background: ' linear-gradient(to right, #434343 0%, black 100%)', // Black gradient
        color: textColor, // Dynamically set text color
      }}
    >
      {/* Text Color Picker */}
      <div className="mb-4 p-8">
        <label htmlFor="textColorPicker" className="block mb-2">
          Set Input Color:
        </label>
        <input
          id="textColorPicker"
          type="color"
          value={textColor}
          onChange={(e) => setTextColor(e.target.value)}
          className="p-2 rounded"

        />
          <div className='text-center text-2xl font-bold'>All Prod<span className='text-orange-400'>ucts</span></div>
      </div>
    
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-8 p-2 border rounded w-full"
        style={{ color: '#000', backgroundColor: textColor }}
      />

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
