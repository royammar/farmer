import React, {useEffect, useContext, useState } from 'react';
import ProductList from '../cmps/ProductList'
import { ProductContext } from '../contexts/ProductContext';
import ProductService from '../services/ProductService'
import Filters from '../cmps/Filters'
import { UserContext } from '../contexts/UserContext';
import Loader from '../cmps/Loader'



export default function ProductsPage() {

    const { products,filterBy, dispatch } = useContext(ProductContext)
    const {user}=useContext(UserContext)
 

    async function load(filterBy) {
            try {
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
        <div className="flex1">
        <Filters ></Filters>
            {products&&products.length > 0 ?
                <ProductList listMode='list' products={products}></ProductList>:
                <Loader></Loader>
            
            }
        </div>
    )
}
