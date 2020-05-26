import React from 'react'
import Video from '../styles/videos/The Farmer.mp4'

export default function Header() {
    return (
        <div className="header">
            <video className="header-video" autoPlay loop muted >
                <source src={Video} type="video/mp4" />
            </video>
            <div className="main-header container flex column align-center justify-center">
            <div className="header-title">From the field <br/> To your plate</div>
            <button className="header-btn">Lets go</button>
            </div>
        </div>
    )
}
