import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useFetchProducts from '../hooks/useFetchProducts';


const ProductDetail = () => {
  const { id } = useParams();
  const { data: product, loading, error } = useFetchProducts(`https://dummyjson.com/products/${id}`);

  if (loading) {
    return <p className='text-white font-bold'>Loading product details...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  return (
    <>
    <div className="container mt-8 mx-auto p-4">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-80 h-64 object-cover rounded"
      />
      <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
      <p className="text-gray-700 mt-2">{product.description}</p>
      <p className="text-xl font-semibold mt-4">${product.price}</p>
    </div>
    <Link to="/" className=' px-4 py-2 rounded bg-blue-500 text-white'>Back</Link>
    </>
  );
};

export default ProductDetail;
