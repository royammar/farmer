import React, { useEffect, useContext, useState } from 'react';
import { withRouter } from "react-router";
import UserService from '../services/UserService';
import { UserContext } from '../contexts/UserContext';

const NavBarMenu = (props) =>  {
    const { user, userDispatch } = useContext(UserContext)

    async function goToShop() {
        const {loggedInUser} =props
        if (loggedInUser.shopId !== '') props.history.push(`/shop/${loggedInUser.shopId}`)
        else {
            let currUser=loggedInUser
            const shop = await props.createShop()
            currUser.shopId=shop._id
            const user = await UserService.update(currUser);
            userDispatch({type:'SET_USER',user})
            props.history.push(`/shop/${shop._id}`)
        }
    }
    return (
        <div className="navbar-menu" >
            <span className="my-shop" onClick={goToShop}>My Shop</span>
            <hr className="seprator"></hr>
            <span className="logout" onClick={props.handleLogOut}>Logout</span>
        </div>
    )
}


export default withRouter(NavBarMenu)
