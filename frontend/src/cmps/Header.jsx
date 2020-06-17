import React from 'react'
import Video from '../styles/videos/The Farmer.mp4'
import { withRouter } from "react-router";

const Header=(props)=> {
    return (
        <div className="header">
            <video className="header-video" autoPlay loop muted >
                <source src={Video} type="video/mp4" />
            </video>
            <div className="main-header container flex column align-center justify-center">
            <div className="header-title">From the field <br/> To your plate</div>
            <button className="header-btn" onClick={()=> props.history.push(`./products`)}>Lets go</button>
            </div>
        </div>
    )
}

export default withRouter(Header)