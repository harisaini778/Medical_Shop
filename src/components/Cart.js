import React, { useContext } from 'react';
import { MedicineContext } from './MedicineContextProvider';
import "./Cart.css";

const Cart = () => {
  const { cart, totalPrice } = useContext(MedicineContext);

  return (
    <div className='container-cart'>
    <nav className='cart-title-nav'><h2 className="cart-title">Cart</h2></nav>
    <div className="cart">
      {cart.length === 0 ? (
        <p className="cart-empty-message">Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.name} className="cart-item">
              <p className="cart-item-name">{item.name}</p>
              <p className='cart-item-quantity'>{item.description }</p>
              <p className="cart-item-quantity">Quantity: {item.quantity}</p>
              <p className="cart-item-price">Price: ${item.totalPrice}</p>
            </div>
          ))}
          <p className="cart-total">Total Price: ${totalPrice}</p>
        </>
      )}
    </div>
    </div>
  );
};

export default Cart;
