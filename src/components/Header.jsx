import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartItem = useSelector((store) => store.cart.items);

  return (
    <header className=" bg-slate-900 border-b-black text-white p-4 fixed top-0 left-0 w-full z-10 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Shoppy<span className='text-orange-400'>Globe</span></h1>
        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
                  <li>
            <Link to="/cart">
              Cart{' '}
              <sub className="text-orange-400 font-bold text-sm">{cartItem.length}</sub>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};


export default Header;
