import React from 'react'
import Header from '../cmps/Header'
import Numbers from '../cmps/Numbers'
import HowItWorks from '../cmps/HowItWorks'

export default function Home() {
    return (
        <React.Fragment>
            <Header></Header>
            <Numbers></Numbers>
            <HowItWorks></HowItWorks>
        </React.Fragment>
    )
}
