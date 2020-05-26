import React from 'react'
import first from '../styles/imgs/1-3.png'
import second from '../styles/imgs/2-3.png'
import third from '../styles/imgs/3-3.png'


export default function Steps() {
    return (
        <div className="steps container flex column justify-center ">
            <p className="main-headline">How it works?</p>

            <div className="cards flex column align-center">


                <div className="card flex column align-center">
                    <img src={second}></img>

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                </div>

                <div className="card flex column align-center">
                    <img src={third}></img>

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>

                <div className="card flex column align-center">
                    <img src={first}></img>

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div >
        </div >
    )


}