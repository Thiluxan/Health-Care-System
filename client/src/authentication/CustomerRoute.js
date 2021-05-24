import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import authService from './auth-service'
export default function CustomerRoute({component:Component,...rest}) {
    const currentUser = authService.getCurrentUser()
    return (
        <Route
            {...rest}
            render = {props => {
                return currentUser && currentUser.role === 'CUSTOMER' ? <Component {...props} /> : <Redirect to="/loading" />
            }}
        >
        </Route>
    )
}