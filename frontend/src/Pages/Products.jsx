import React, {useEffect, useContext, useState } from 'react';
import ProductList from '../cmps/ProductList'
import { ProductContext } from '../contexts/ProductContext';
import ProductService from '../services/ProductService'
import Filters from '../cmps/Filters'
import { UserContext } from '../contexts/UserContext';



export default function ProductsPage() {

    const { products,filterBy, dispatch } = useContext(ProductContext)
    const {user}=useContext(UserContext)
 

    async function load(filterBy) {
            try {
                console.log('test',filterBy)
                const products = await ProductService.query(filterBy);
                dispatch({ type: 'SET_PRODUCTS',products })

            } catch (err) {
                console.log('ProductActions: err in loadProducts', err);
            }
        }


    useEffect(() => {
        load(filterBy)
        
        return () => {

        }
    }, [filterBy])

    


    return (
        <div>
        <Filters ></Filters>
            {products&&products.length > 0 &&
                <ProductList listMode='list' products={products}></ProductList>}
        </div>
    )
}
