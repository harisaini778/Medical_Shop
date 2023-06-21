import React, { useContext } from 'react';
import { MedicineContext } from './MedicineContextProvider';
import Cart from './Cart';
import "./Header.css";

const Header = () => {
  const { isCartOpen, toggleCart } = useContext(MedicineContext);

    return (<div>
      <header className="header">
      <h1 className="header__title">Salific Pharmaceuticals</h1>
      <button className="header__cart-button" onClick={toggleCart}>
        {isCartOpen ? 'Close Cart' : 'Open Cart'}
      </button>
      {/* <div className={`cart-wrapper ${isCartOpen ? 'open' : ''}`}> 
      </div> */}
        </header>
        {isCartOpen && <Cart />}
  </div>
    
  );
};

export default Header;
