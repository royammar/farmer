
import { NavLink, Link } from 'react-router-dom'
import Search from "../styles/icons/001-loupe.svg"
import User from "../styles/icons/002-user.svg"
import Heart from "../styles/icons/003-passion.svg"
import Cart from "../styles/icons/004-cart.svg"
import Logo from "../styles/icons/logocoral.png"
import Menu from "../styles/icons/menu.svg"
import React, { useState,useContext,useEffect } from 'react'
import ProductService from '../services/ProductService'
import { ProductContext } from '../contexts/ProductContext';
import WishListService from '../services/WishListService'

export default function NavBar() {

    const { products, dispatch,wishlist,cart } = useContext(ProductContext)
    const [toggle, setToggle] = useState('close-menu')



    useEffect(() => {
        console.log('coralit',wishlist.length)
        return () => {
  
        }
    }, [])



    function toggleMenu() {
        if (toggle === 'close-menu') setToggle('open-menu')
        else setToggle('close-menu')
    }




    async function handleInput(ev) {
        let filterBy={txt:ev.target.value}
        
            try {
                // const products = await ProductService.query(filterBy);
                console.log(filterBy,'asd');
                
                dispatch({ type: 'SET_SEARCH',filterBy })

            } catch (err) {
                console.log('ProductActions: err in loadProducts', err);
            }
        }
  


        return (
            <div className={`nav-bar container flex ${toggle}`}>

                <div className="mobile-nav-head flex space-between">
                    <img src={Logo} className="main-logo" ></img>
                    <div className={`hamburger ${toggle}`} onClick={toggleMenu}>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                </div>



                <div className={`center-side-nav flex column align-center${toggle}`}>
                    <NavLink activeClassName="selected" className="section" to="/" exact><li >Home</li></NavLink>
                    <div className={`seperator ${toggle}`}></div>
                    <NavLink activeClassName="selected" className="section" to="/products" exact><li >Products</li></NavLink>
                    <div className={`seperator ${toggle}`}></div>
                    <NavLink activeClassName="selected" className="section" to="/faq" exact><li >FAQ</li></NavLink>

                </div>

                <div className={`right-side-nav flex align-center ${toggle}`}>
                    <div className="main-search flex"><input onChange={handleInput} className="search" type="search" placeholder="Search Here"></input><img className="search-img" src={Search}></img></div>
                    <img src={User}></img>
                    <Link className="flex nav" to="/wishlist" ><img src={Heart}/><span className='wishlist-amount flex align-center justify-center'>{wishlist.length}</span></Link>
                    <Link className="flex nav" to="/cart" ><img src={Cart}/><span className='cart-amount flex align-center justify-center'>{cart.length}</span></Link>
               

                </div>

            </div>
        )
    }










