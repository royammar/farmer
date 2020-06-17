import React, {useEffect, useContext, useState } from 'react';
import ProductList from '../cmps/ProductList'
import { ProductContext } from '../contexts/ProductContext';
import EmptyWishList from '../cmps/EmptyWishList';

export default function WishList() {

    const { wishlist, dispatch } = useContext(ProductContext)

  

    return (
        <div className='wishlist flex1'>
              {wishlist&&wishlist.length > 0 ?
                <ProductList products={wishlist}></ProductList>:
                <EmptyWishList></EmptyWishList>
                } 
                
        </div>
    )
}
