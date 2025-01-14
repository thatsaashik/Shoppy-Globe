import React from 'react';
import Cart from '../components/Cart';

const CartPage = () => {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Shopping Cart</h1>
      <Cart />
    </main>
  );
};

export default CartPage;
