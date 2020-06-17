import React, { useEffect, useContext, useState } from 'react';
import ProductList from '../cmps/ProductList'
import { ProductContext } from '../contexts/ProductContext';
import CartService from '../services/CartService';
import { UserContext } from '../contexts/UserContext';
import EmptyCart from '../cmps/EmptyCart';

export default function Cart(props) {

    const { cart, dispatch } = useContext(ProductContext)

    const { loggedInUser } = useContext(UserContext)


    async function handleSubmitOrder() {
        if(!loggedInUser) props.history.push('./login')
        else{
        let order = { user: loggedInUser, items: cart, CreatedAt: Date.now() }
        CartService.saveOrder(order)
        dispatch({ type: 'SET_CART', cart: [] })
    }

    }


    function calculateTotal() {
        const totalPrice = cart.reduce((acc, item) => {
            return acc += +item.price
        }, 0)
        return Math.floor(totalPrice)


    }
    return (

        <div className='wishlist flex flex1 justify-center align-center'>
            {cart && cart.length > 0 ?
                <ProductList listMode='cart' products={cart}></ProductList> :
                <EmptyCart></EmptyCart>}
            {cart.length > 0 &&
                <div className="summary">
                        <h4 className="summary-title">Summary</h4>
                    <div className="total flex space-around">
                        <p>Total</p>
                        <p>${calculateTotal()}</p>
                    </div>
                    <button className="submit-btn" onClick={handleSubmitOrder}>Submit order</button>
                </div>
            }

        </div>

    )
}
