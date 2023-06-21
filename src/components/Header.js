import React, { useContext } from 'react';
import { MedicineContext } from './MedicineContextProvider';
import Cart from './Cart';

const Header = () => {
  const { isCartOpen, toggleCart } = useContext(MedicineContext);

  return (
    <header>
      <h1>Medicine Shop</h1>
      <button onClick={toggleCart}>{isCartOpen ? 'Close Cart' : 'Open Cart'}</button>
      {isCartOpen && <Cart />}
    </header>
  );
};

export default Header;
