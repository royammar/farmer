import React, { useEffect, useContext, useState } from 'react';
import ProductList from '../cmps/ProductList'
import { ProductContext } from '../contexts/ProductContext';
import CartService from '../services/CartService';
import { UserContext } from '../contexts/UserContext';

export default function Cart() {

    const { cart, dispatch } = useContext(ProductContext)

    const { user } = useContext(UserContext)


    async function handleSubmitOrder() {
        let order = { user: user, items: cart, CreatedAt: Date.now() }
        CartService.saveOrder(order)
        dispatch({ type: 'SET_CART', cart: [] })

    }
    return (

        <div className='wishlist'>
            {cart && cart.length > 0 &&
                <ProductList listMode='cart' products={cart}></ProductList>}
            <button onClick={handleSubmitOrder}>Submit order</button>
        </div>

    )
}
