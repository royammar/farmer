
import React, { useContext,useState,useEffect } from 'react';
import {Link } from 'react-router-dom'

import { ProductContext } from '../contexts/ProductContext';
import ProductService from '../services/ProductService'
import WishListService from '../services/WishListService'
import location from '../styles/imgs/location.png'
import Minus from '../styles/imgs/minus.png'
import Plus from '../styles/imgs/plus.png'
import Heart from '../styles/imgs/heart.png'
import EmptyHeart from '../styles/imgs/emptyHeart.png'

import CartService from '../services/CartService';
import Edit from '../styles/icons/edit.png'

export default function ProductPreview({ product,listMode,setEditMode }) {

    const {cart, dispatch } = useContext(ProductContext)
    const [quantity, setQuantity] = useState(1)
    const [wishlistSatatus, setWishListStatus] = useState(EmptyHeart)

   


    function onChangeNumber(ev) {
        let { name } = ev.target
        if (name === 'plus') {
            if (quantity < 10)
                setQuantity(quantity + 1)
        } else {
            if (quantity > 1)
                setQuantity(quantity - 1)
        }

    }


    async function toggleWishList(){
        let item = await WishListService.toggleWishList(product)
        let icon =(item)? Heart:EmptyHeart
        setWishListStatus(icon)

        try {
            let wishlist = await WishListService.getWishList()
            dispatch({ type:'SET_WISHLIST',wishlist})

        } catch (err) {
            console.log(err);
        }

    }
    
    useEffect(()=> {
        getWishListStatus()
        return () => {
            
        }
    }, [])


    async function getWishListStatus() {
        let itemInWishList = await WishListService.itemFromWishList(product._id)
        let icon =(itemInWishList)? Heart:EmptyHeart
        setWishListStatus(icon)
    }
    

    async function toggleCart() {
        product.quantity=quantity
        let item = await CartService.toggleItemToCart(product)
        try {
            let cart = await CartService.getCart()
            dispatch({ type:'SET_CART',cart})

        } catch (err) {
            console.log(err);
        }
    }

    function HandleEdit() {
       setEditMode(product)
    }

    return (
        <li className="card flex column align-center"  >
            {listMode==='shop'?<button className='edit-btn' onClick={HandleEdit}><img src={Edit}></img></button>:null}
          
            <Link className="logo" to={`/shop/${product.itemOwner.id}`}><img  src={product.itemOwner.logoUrl}></img></Link>
            <img className="product-img" src={product.img}></img>
            <p   className="product-title">{product.title}</p>
            <div className="location flex align-center justify-center">
                <img className="location-img" src={location}></img>
                <p className="location-text">{product.itemOwner.location}</p>
            </div>

            <hr className="seperator" />

            <p className="price">{product.price}</p>

            <div className="panel flex align-center justify-center">
                <img value="minus" className="minus" onClick={onChangeNumber} src={Minus}></img>
             <p className="number"> {listMode==='cart'?cart.find(item=>item._id===product._id).quantity:quantity}</p>
                <img name="plus" className="plus" onClick={onChangeNumber} src={Plus}></img>
            </div>

            <div className="whishlist-cart flex space-between">
                <img className="heart" src={wishlistSatatus} onClick={toggleWishList}></img>
                <button className="add-to-cart" onClick={toggleCart}>ADD TO CART</button>
            </div>

        </li>
    )
}
