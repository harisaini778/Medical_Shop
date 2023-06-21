import React, { useState, useContext } from 'react';
import { MedicineContext } from './MedicineContextProvider';

const UserForm = () => {
  const { addMedicine } = useContext(MedicineContext);

  const [medicine, setMedicine] = useState({
    name: '',
    description: '',
    price: '',
    quantity: '',
  });

  const handleChange = (e) => {
    setMedicine({ ...medicine, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMedicine(medicine);
    setMedicine({
      name: '',
      description: '',
      price: '',
      quantity: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={medicine.name}
        onChange={handleChange}
        placeholder="Medicine Name"
        required
      />
      <input
        type="text"
        name="description"
        value={medicine.description}
        onChange={handleChange}
        placeholder="Medicine Description"
        required
      />
      <input
        type="number"
        name="price"
        value={medicine.price}
        onChange={handleChange}
        placeholder="Medicine Price"
        required
      />
      <input
        type="number"
        name="quantity"
        value={medicine.quantity}
        onChange={handleChange}
        placeholder="Medicine Quantity"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
