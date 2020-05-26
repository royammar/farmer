import React, { createContext, useReducer } from 'react'
import UserReducer from '../reducers/UserReducer'

export const UserContext = createContext()

const UserContextProvider = (props) => {

    const [{ user}, dispatch] = useReducer(UserReducer, {
        user: {id:1,name:'roy'}
    })

    return (

        <UserContext.Provider value={{ user,dispatch }}>
            {props.children}
        </UserContext.Provider>

    )

}

export default UserContextProvider
