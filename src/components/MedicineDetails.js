import React, { useContext } from 'react';
import { MedicineContext } from './MedicineContextProvider';

const MedicineDetails = () => {
  const { medicines, addToCart } = useContext(MedicineContext);

  const handleAddToCart = (medicine) => {
    addToCart(medicine);
  };

  return (
    <div>
      <h2>Medicine Details</h2>
      {medicines.map((medicine) => (
        <div key={medicine.name}>
          <h3>{medicine.name}</h3>
          <p>{medicine.description}</p>
          <p>Price: ${medicine.price}</p>
          <p>Quantity: {medicine.quantity}</p>
          <button onClick={() => handleAddToCart(medicine)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default MedicineDetails;
