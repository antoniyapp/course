import React from 'react';
import { Redirect } from 'react-router-dom';
import * as jwt_decode from "jwt-decode";


const AuthorizationHOC = (NotLogged, propsNL, Logged, propsL) => {
    let token = localStorage.getItem('token');
    //Not logged
    if (token === undefined) return (props) => (<NotLogged  {...propsNL} {...props} />);

    try {
        token = jwt_decode(token);
        if (token.exp < Date.now() / 1000) {
            //Expired token
            localStorage.removeItem('token');
            return (props) => (<NotLogged  {...propsNL} {...props} />);
        };
    }
    catch (err) { 
        //Illigal token
        localStorage.removeItem('token'); 
        return (props) => (<NotLogged  {...propsNL} {...props} />); 
    };

    //Allowed 
    return (props) => (<Logged {...propsL} {...props} />);
};





const Logged = (Component) => {
return(<div/>)    
}

const NotLogged = (Component) => {
    let token = localStorage.getItem('token');
    //Not logged
    if (token === undefined) return (props) => (<Component {...props} />);

    try {
        token = jwt_decode(token);
        //Logged
        if (token.exp > Date.now() / 1000) return (props) => (<Redirect to='/user' />);
    }
    catch (err) {
        //Illigal token
        localStorage.removeItem('token');
        return (props) => (<Component {...props} />);
    }

    //Expired token
    localStorage.removeItem('token');
    return (props) => (<Component {...props} />);
};

const AuthorizationHOC1 = (role, Component) => {
    let token = localStorage.getItem('token');
    //Not logged
    if (token === undefined) return (props) => (<Redirect to='/login' />);

    try {
        token = jwt_decode(token);
        if (token.exp < Date.now() / 1000) {
            //Expired token
            localStorage.removeItem('token');
            return (props) => (<Redirect to='/login' />);
        };
    }
    catch (err) { 
        //Illigal token
        localStorage.removeItem('token'); 
        return (props) => (<Redirect to='/login' />); 
    };

    //Forbidden
    if (token.type !== role) return (props) => (<Redirect to='/' />)

    //Allowed 
    return (props) => (<Component {...props} />);
};

const User = (Component) => (AuthorizationHOC1("user", Component));
const AdminOnly = (Component) => (AuthorizationHOC1("admin", Component));

const Auth = {
    logged: Logged,
    notLogged: NotLogged,
    user: User,
    admin: AdminOnly
};

export default Auth;