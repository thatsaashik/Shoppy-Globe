import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
const Home = React.lazy(() => import('./pages/home'));
const ProductPage = React.lazy(() => import('./pages/ProductPage'));
const CartPage = React.lazy(() => import('./pages/CartPage'));
const Checkout = React.lazy(() => import('./pages/Checkout'));
const NotFound = React.lazy(() => import('./components/NotFound'));



const App = () => {
  return (
    <Router>
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
