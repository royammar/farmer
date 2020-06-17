import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import React, { useEffect, useContext, useState } from 'react';
export default class App extends React.Component {
    //other logic
    render() {
        return (
            <Loader
                className="container flex column justify-center align-center top-padding"
                type="Bars"
                color="#00BFFF"
                height={80}
                width={80}
                timeout={8000} //3 secs
            />
        );
    }
}
