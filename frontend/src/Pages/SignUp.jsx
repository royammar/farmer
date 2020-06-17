import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import UserService from '../services/UserService';
import { UserContext } from '../contexts/UserContext';

export default function SignUp(props) {

    const [loginCred, setLoginCred] = useState('')
    const { user, userDispatch } = useContext(UserContext)

    async function handleLogin(ev) {
        ev.preventDefault()
        try {
            const user = await UserService.signup(loginCred);
            userDispatch({type:'SET_USER',user})
            props.history.push('./products')
        }
        catch (err) {
            console.log('error set user', err);
        }
    }

    function handleInput(ev) {
        let name=ev.target.name
        let value=ev.target.value

        setLoginCred({...loginCred,[name]:value})
    }



    return (
        <div className="login container flex flex1 column justify-center align-center top-padding">
            <form onSubmit={handleLogin} className="login-form flex column">
                <input onChange={handleInput} name="email" className="email" placeholder="Email" type="mail"></input>
                <input onChange={handleInput} name="username" className="username" placeholder="Username" type="text"></input>
                <input onChange={handleInput} name="password" className="password" placeholder="Password" type="password"></input>
                <button className="btn2">Signup</button>
            </form>
            <p>Already have an account?
              <Link to={`/login`}> <span>Login</span></Link>
            </p>
            <div className={`eggplant`}> </div>
        </div>

    )
}
