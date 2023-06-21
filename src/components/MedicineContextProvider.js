import React, { createContext, useState } from 'react';

export const MedicineContext = createContext();

const MedicineContextProvider = (props) => {
  const [medicines, setMedicines] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addMedicine = (medicine) => {
    setMedicines([...medicines, medicine]);
  };

  const addToCart = (medicine) => {
    const existingItemIndex = cart.findIndex((item) => item.name === medicine.name);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      const existingItem = updatedCart[existingItemIndex];
      existingItem.quantity =parseFloat(existingItem.quantity) + parseInt(medicine.quantity);
      existingItem.totalPrice += medicine.price * parseInt(medicine.quantity);
      setCart(updatedCart);
    } else {
      const newCartItem = {
        ...medicine,
        totalPrice: medicine.price * parseInt(medicine.quantity),
      };
      setCart([...cart, newCartItem]);
    }

    setTotalPrice(totalPrice + medicine.price * parseInt(medicine.quantity));
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <MedicineContext.Provider value={{ medicines, cart, totalPrice, addMedicine, addToCart, isCartOpen, toggleCart }}>
      {props.children}
    </MedicineContext.Provider>
  );
};

export default MedicineContextProvider;
