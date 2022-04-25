import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function PrivateRoute({ component, ...rest }) {

    const user = localStorage.getItem("user");

    if(!user){
        return <Redirect to="/" />
    }

    return <Route {...rest} component={component} />
}

export default PrivateRoute

