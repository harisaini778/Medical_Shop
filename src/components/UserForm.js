import React, { useState, useContext } from 'react';
import { MedicineContext } from './MedicineContextProvider';
import './UserForm.css';

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
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={medicine.name}
        onChange={handleChange}
        placeholder="Medicine Name"
        required
        className="form__input"
      />
      <input
        type="text"
        name="description"
        value={medicine.description}
        onChange={handleChange}
        placeholder="Medicine Description"
        required
        className="form__input"
      />
      <input
        type="number"
        name="price"
        value={medicine.price}
        onChange={handleChange}
        placeholder="Medicine Price"
        required
        className="form__input"
      />
      <input
        type="number"
        name="quantity"
        value={medicine.quantity}
        onChange={handleChange}
        placeholder="Medicine Quantity"
        required
        className="form__input"
      />
      <button type="submit" className="form__button">Submit</button>
    </form>
  );
};

export default UserForm;
