import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';


export default function Numbers() {



    const [transform, setTransform] = useState('35%')

    function addEvent() {
        window.addEventListener('scroll', handleScroll);
   
     
    }

    function set(){
        setTransform('')
    }


    function removeEven() {
        window.removeEventListener('scroll', handleScroll);
    }

    function handleScroll() {
        let num = 0;
        let scroll = window.scrollY
        if (scroll !== num){
            num = scroll
            if (scroll > 400) scroll = 500;
            if (scroll < 50) scroll = 50;
            document.documentElement.style.setProperty('--scrollY', scroll + 'px');
            setTransform('move')
        }

    }


    useEffect(() => {
        addEvent()
        return () =>
            removeEven()

            ;
    }, []);







    return (
        <div className="numbers flex align-center space-between">
            <div className="card">
                <CountUp duration={6} className="number" end={100}></CountUp>
                <p className="headline">Sellers</p>
                <p>Anyone from anywhere can sell, join us as a seller</p>
            </div>

            <div className="card">
                <CountUp duration={6} className="number" end={1000}></CountUp>
                <p className="headline">Products </p>
                <p>Fresh and daily updated products just how you like it</p>
            </div>

            <div className="card">
                <CountUp duration={6} className="number" end={30}></CountUp>
                <p className="headline">Locations</p>
                <p>Pickup location all over the country,so you can get it soon</p>
            </div>

            <div className="card">
                <CountUp duration={6} className="number" end={1}></CountUp>
                <p className="headline">User Friendly APP</p>
                <p>Simple, Easy and Fun. Enjoy your experience! enjoy your food</p>
            </div>

            {<div className={`carrot`}> </div>}

        </div>
    )
}

