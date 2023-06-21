import React, { useContext } from "react";

import { MedicineContext } from "./MedicineContextProvider";

const Cart = () => {
   
    const { cart, totalPrice } = useContext(MedicineContext);

    return (
        <div>
            <h2>Cart</h2>
            {cart.length === 0 ? (<p>Your cart is empty</p>) :
                <>
                    {cart.map((item) => (
                        <div key={item.name}>
                            <p>{item.name}</p>
                            <p>Quantity : {item.quantity}</p>
                            <p>Price : ${item.totalPrice}</p>
                        </div>
                    ))}
                    <p>Total Price : $(totalPrice)</p>
                </>}
        </div>
    );
};
export default Cart;