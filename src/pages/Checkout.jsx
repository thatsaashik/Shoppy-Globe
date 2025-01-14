import React from 'react';

const Checkout = () => {
  return (
    <main className="container mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <p className="text-lg mb-4">
        Thank you for shopping with us! Please proceed to payment to complete your order.
      </p>
      <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
        Proceed to Payment
      </button>
    </main>
  );
};

export default Checkout;
