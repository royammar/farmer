import React, {useEffect, useContext, useState } from 'react';
import ProductList from '../cmps/ProductList'
import { ProductContext } from '../contexts/ProductContext';

export default function WishList() {

    const { wishlist, dispatch } = useContext(ProductContext)

  

    return (
        <div className='wishlist'>
              {wishlist&&wishlist.length > 0 &&
                <ProductList products={wishlist}></ProductList>} 
                
        </div>
    )
}
