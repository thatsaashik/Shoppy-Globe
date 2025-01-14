import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart } from '../redux/cartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  if (cartItems.length === 0) {
    return (
      <p className="p-10 text-center font-bold text-2xl text-white">
        Your cart is empty!
      </p>
    );
  }

  return (
    <div className="container mx-auto p-4  shadow rounded-md" style={{background:""}}>
      <h1 className="text-2xl font-bold mb-4 text-white">Your Cart</h1>
      <ul className="space-y-4">
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center border-b pb-4"
          >
            <div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-white">Price: ${item.price}</p>
              <p className="text-white">Quantity: {item.quantity}</p>
              <p className="text-white">Total: ${item.totalPrice}</p>
            </div>
            <button
              onClick={() => dispatch(removeItemFromCart(item.id))}
              className="bg-white text-back py-1 px-3 rounded hover:bg-gray-300 transition"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <p className="text-right font-bold text-lg mt-4 text-orange-400">
        Total Items: {totalQuantity}
      </p>
    </div>
  );
};

export default Cart;
