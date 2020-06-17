
import { NavLink, Link,useLocation  } from 'react-router-dom'
import Search from "../styles/icons/001-loupe.svg"
import User from "../styles/icons/002-user.svg"
import Heart from "../styles/icons/003-passion.svg"
import Cart from "../styles/icons/004-cart.svg"
import Logo from "../styles/icons/logocoral.png"
import React, { useState,useContext,useEffect } from 'react'
import { ProductContext } from '../contexts/ProductContext';
import UserService from '../services/UserService'
import ShopService from '../services/ShopService'
import { UserContext } from '../contexts/UserContext'
import NavBarMenu from './NavBarMenu'

export default function NavBar(props) {

    const { products, dispatch,wishlist,cart } = useContext(ProductContext)
    const { loggedInUser,userDispatch } = useContext(UserContext)
    const [toggle, setToggle] = useState('close-menu')
    const [showMenu,setShowMenu]=useState(false)
    const [currpatch,setCurrPatch]=useState(null)

    const location = useLocation();
    useEffect(() => {
        setCurrPatch(location.pathname)
  
  }, [location]);

    function toggleMenu() {
        if (toggle === 'close-menu') setToggle('open-menu')
        else setToggle('close-menu')
    }

    async function handleInput(ev) {
        let filterBy={txt:ev.target.value}
            try {
                // const products = await ProductService.query(filterBy);
                dispatch({ type: 'SET_SEARCH',filterBy })

            } catch (err) {
                console.log('ProductActions: err in loadProducts', err);
            }
        }
  

        function handleClick(){
            setShowMenu(!showMenu)
        }

        async function handleLogOut()  {
            const user = await UserService.logout();
            userDispatch({type:'SET_USER',user:null})
        }

        async function createShop() {
         
            const shop=await ShopService.add(loggedInUser)
            return shop

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
                 {currpatch==='/products'&&<div className="main-search flex"><input onChange={handleInput} className="search" type="search" placeholder="Search"></input><img className="search-img" src={Search}></img></div>}  
                 {loggedInUser? <div className="avatar-circle"><span className="avatar" onClick={handleClick}>{loggedInUser.username.substring(0,1)} {showMenu&&<NavBarMenu loggedInUser={loggedInUser} handleLogOut={handleLogOut} createShop={createShop}></NavBarMenu>}</span></div>:<Link className="flex nav" to="/login" > <img src={User}></img></Link>}
                    <Link className="flex nav" to="/wishlist" ><img src={Heart}/><span className='wishlist-amount flex align-center justify-center'>{wishlist.length}</span></Link>
                    <Link className="flex nav" to="/cart" ><img src={Cart}/><span className='cart-amount flex align-center justify-center'>{cart.length}</span></Link>
                </div>
            </div>
        )
    }








    

