import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import authService from './auth-service'
export default function AdminRoute({component:Component,...rest}) {
    const currentUser = authService.getCurrentUser()
    return (
        <Route
            {...rest}
            render = {props => {
                return currentUser && currentUser.role === 'ADMIN' ? <Component {...props} /> : <Redirect to="/loading" />
            }}
        >
        </Route>
    )
}