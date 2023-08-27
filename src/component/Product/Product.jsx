import React from 'react';
import './products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    const { id, img, name, price, seller, ratings } = props.product;
    const handleToAdd = props.handleToAdd;
    return (
        <div className='product-container'>
            <center><img className='imgc' src={img} alt="" /></center>

            <h5 className='hh5'>{name}</h5>
            <p className='p1'><b> price: ${price}</b></p>
            <p className='p2'>ManuFacturer:{seller}</p>
            <p className='p2'>Rating: {ratings} stars</p>

            <button onClick={() => handleToAdd(props.product)} className='button1'>
                Add to Cart
                <FontAwesomeIcon icon={faCartPlus} />
            </button>
        </div>
    );
};

export default Product;