import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

export const PrivateRoute = ({children, path}) => {

    const user = useSelector(state=>state.user);
    
    return (
        <Route path={path}>
            {
                user == '' ? <Redirect to='/login'></Redirect> : <children.type/>
            }
        </Route>
    )
}
