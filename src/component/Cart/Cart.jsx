import React from 'react';
import './Cart.css'


const Cart = ({ cart }) => {
    let sum = (a, b) => a + b.price;
    let total = cart.reduce((sum), 0)
    let sum2 = (a, b) => a + b.shipping;
    let shipping = cart.reduce((sum2), 0)
    const tax = total * 7 / 100;
    const allTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h3>Order summery</h3>
            <p>Selected items: {cart.length}</p>
            <p>Total Price:${total} </p>
            <p>Total Shipping:${shipping} </p>
            <p>Tax:${tax.toFixed(2)} </p>
            <h5>Grand Total:${allTotal.toFixed(2)} </h5>
        </div>
    );
};

export default Cart;