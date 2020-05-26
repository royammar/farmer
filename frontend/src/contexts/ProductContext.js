import React, { createContext, useReducer } from 'react'
import ProductReducer from '../reducers/ProductReducer'

export const ProductContext = createContext()

const ProductContextProvider = (props) => {

    const [{ products, filterBy,wishlist,cart }, dispatch] = useReducer(ProductReducer, {
        products: [],wishlist:JSON.parse(localStorage.getItem('wishlist'))||[],cart:JSON.parse(localStorage.getItem('cart'))||[], filterBy: {
            label: '',
            title: ''
        }
    })

    return (

        <ProductContext.Provider value={{ products, filterBy,wishlist,cart, dispatch }}>
            {props.children}
        </ProductContext.Provider>

    )

}

export default ProductContextProvider
