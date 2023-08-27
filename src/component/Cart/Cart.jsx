import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    let sum=(a,b)=>a+b.price;
    let total=cart.reduce((sum),0)
    console.log(total);
    return (
        <div className='cart'>
            <h3>Order summery</h3>
            <p>Selected items: {cart.length}</p>
            <p>Total Price: {total} </p>
            <p>Total Shipping: </p>
            <p>Tax: </p>
            <h6>Grand Total: </h6>
        </div>
    );
};

export default Cart;