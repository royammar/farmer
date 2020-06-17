import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import UserService from '../services/UserService';
import { UserContext } from '../contexts/UserContext';
export default function Login(props) {

    const [loginCred, setLoginCred] = useState('')
    const { user, userDispatch } = useContext(UserContext)

    function handleInput(ev) {
        let name = ev.target.name
        let value = ev.target.value

        setLoginCred({ ...loginCred, [name]: value })

    }

    async function handleLogin(ev) {
        ev.preventDefault()
        try {
            const user = await UserService.login(loginCred);
            userDispatch({type:'SET_USER',user})
            props.history.push('./products')
        }
        catch (err) {
            console.log('ProductActions: err in loadShop', err);
        }
    }



    return (
      
        <div className="login container flex1 flex column justify-center align-center top-padding">
            <form onSubmit={handleLogin} className="login-form flex column ">
                <input onChange={handleInput} name="email" className="email" placeholder="email" type="text"></input>
                <input onChange={handleInput} name="password" className="password" placeholder="Password" type="password"></input>
                <button className="btn2">LOGIN</button>
            </form>
            <p>Do not have an account yet?
              <Link to={`/signUp`}> <span>Signup</span></Link>
            </p>
            <div className={`radish`}> </div>
        </div>
      
    )
}
