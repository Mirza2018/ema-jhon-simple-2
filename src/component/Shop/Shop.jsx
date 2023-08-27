import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { adddb, getData } from '../../utilities/fackdata';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setcart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])



    const handleToAdd = (product) => {
        let newCart = [...cart, product];
        setcart(newCart)
        addToDb(product.id)
    }

    useEffect(() => {

        const storedCart = getShoppingCart()
        const saveCart = []
        for (const id in storedCart) {

            const saveProducts = products.find(product => product.id === id);
            if (saveProducts) {

                const quantity = storedCart[id];
                saveProducts.quantity = quantity;
                saveCart.push(saveProducts)
                console.log(saveProducts);
            }

        }
        setcart(saveCart)

    }, [products])





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
                {
                    <Cart cart={cart}></Cart>
                }
            </div>
        </div>
    );
};

export default Shop;