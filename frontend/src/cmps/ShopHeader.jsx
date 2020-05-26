import React, { useContext, useEffect } from 'react'

export default function ShopHeader({ shop }) {

    return (
        <div className="shop-header">
            <div className="main-content ">
                <div className="flex column align-center">
                    <img className="logo" src={shop.style.logoUrl}></img>
                    <p className="headline">{shop.info.name}</p>
                </div>
                <p className="main-text">{shop.info.description}</p>
            </div>


        </div>
    )
}
