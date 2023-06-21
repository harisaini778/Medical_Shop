import React, { createContext, useState } from "react";

export const MedicineContext = createContext();

const MedicineContextProvider = (props) => {

    const [medicines, setMedicines] = useState([]);
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const addmedicine = (medicine) => {
        setMedicines([...medicines, medicine])
    }

    const addToCart = (medicine) => {
        const existingItem = cart.find((item) => item.name === medicine.name);

        if (existingItem) {
            existingItem.quantity = existingItem.quantity + medicine.quantity;
            existingItem.totalPrice = existingItem.totalPrice + medicine.totalPrice;
        }
        else {
            const newCartItem = {
                ...medicine,
                totalPrice: medicine.price * medicine.quantity
            };
            setCart([...cart, newCartItem]);
        };
        setTotalPrice(totalPrice + medicine.price * medicine.quantity)
    };
 
    return (
        <MedicineContext.Provider value={{ medicines, cart, totalPrice, addmedicine, addToCart }}>
            {props.children}
        </MedicineContext.Provider>
    );
};
export default MedicineContextProvider;