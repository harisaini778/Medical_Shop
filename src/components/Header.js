import React, { useContext } from 'react';
import { MedicineContext } from './MedicineContextProvider';
import Cart from './Cart';
import "./Header.css";

const Header = () => {
  const { isCartOpen, toggleCart } = useContext(MedicineContext);

  return (
    <header className="header">
      <h1 className="header__title">Medicine Shop</h1>
      <button className="header__cart-button" onClick={toggleCart}>
        {isCartOpen ? 'Close Cart' : 'Open Cart'}
      </button>
      {isCartOpen && <Cart />}
    </header>
  );
};

export default Header;
