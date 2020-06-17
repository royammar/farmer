import React, { createContext, useReducer } from 'react'
import UserReducer from '../reducers/UserReducer'

export const UserContext = createContext()

const UserContextProvider = (props) => {

    const [{ loggedInUser}, userDispatch] = useReducer(UserReducer, {
      
    })

    return (

        <UserContext.Provider value={{ loggedInUser,userDispatch }}>
            {props.children}
        </UserContext.Provider>

    )

}

export default UserContextProvider
