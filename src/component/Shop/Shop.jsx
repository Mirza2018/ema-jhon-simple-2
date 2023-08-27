import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart,setcart]=useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleToAdd=(product)=>{
        console.log(product);
        let newCart=[...cart,product];
        setcart(newCart)
    }
   


    return (
        <div className='shopc'>
            <div className='products-container'>
                {
                    products.map(product => <Product 
                        product={product} 
                        key={product.id}
                        handleToAdd={handleToAdd}
                        ></Product>)
                }
            </div>
            <div className='cart-container'> 
            <h3>Order summery</h3>
            <p>Selected items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;