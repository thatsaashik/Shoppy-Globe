import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addItemToCart({
      id: product.id,
      title: product.title,
      price: product.price,
    }));
  };

  return (
    <div className="bg-zinc-400 m-1 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-45 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
        <p className="text-gray-500 text-sm mt-1">${product.price}</p>
        <div className="flex justify-between items-center mt-4">
          <Link
            to={`/product/${product.id}`}
            className="text-slate-900 text-sm font-medium hover:underline"
          >
            View Details
          </Link>
          <button
            onClick={addToCartHandler}
            className="bg-orange-400 text-white text-sm py-1 px-3 rounded hover:bg-orange-600 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
