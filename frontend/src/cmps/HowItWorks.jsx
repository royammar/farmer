import React from 'react'
import first from '../styles/imgs/1-3.png'
import second from '../styles/imgs/2-3.png'
import third from '../styles/imgs/3-3.png'


export default function Steps() {
    return (
        <div className="steps flex column justify-center ">
            <p className="main-headline">How it works?</p>

            <div className="cards flex column align-center">


                <div className="card flex column align-center">
                    <img src={second}></img>

                    <p>Just add the items you want to the cart and complete the purchase.
                      
                    </p>

                </div>

                <div className="card flex column align-center">
                    <img src={third}></img>

                    <p>The Seller will contact you as soon as your order is ready</p>
                </div>

                <div className="card flex column align-center">
                    <img src={first}></img>

                    <p>Enjoy your fresh order! don't forget to tell all your friends and family</p>
                </div>
            </div >
        </div >
    )


}