import React, { useContext } from "react";

import { MedicineContext } from "./MedicineContextProvider";

const MedicineDetails = ({ medicine }) => {

    const { addToCart } = useContext(MedicineContext);

    const handleAddToCart = () => {
        addToCart(medicine);
    };

    return (
        <div>
            <h3>{medicine.name}</h3>
            <p>{medicine.description}</p>
            <p>Price : ${medicine.price}</p>
            <p>Quantity : {medicine.quantity}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};
export default MedicineDetails;