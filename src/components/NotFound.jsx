import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
