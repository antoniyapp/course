import React from 'react';
import { Redirect } from 'react-router-dom';
import * as jwt_decode from "jwt-decode";



const getToken = () => {

    let token = localStorage.getItem('token');
    let role = 'anonymous';
    let expired = false;

    //Not logged 
    if (!token) return { token: token, role: role, expired: expired };

    let tokenDec = undefined;
    try {
        tokenDec = jwt_decode(token);
        if (tokenDec.exp < Date.now() / 1000) {
            //Expired token
            localStorage.removeItem('token');

            expired = true;
            token = null;
            return { token: token, role: role, expired: expired };
        };
    }
    catch (err) {
        //Illigal token
        localStorage.removeItem('token');

        expired = true;
        token = null;
        return { token: token, role: role, expired: expired };
    };

    role = tokenDec.type;

    return { token: token, role: role, expired: expired };
};

export const withAuthorizationHOC = (role, Component) => {

    const obj = getToken();
    console.log(obj);
    if (role !== 'anonymous' && obj.role === 'anonymous') { localStorage.setItem('token', 's'); return (() => <Redirect to='/login' />); }
    if (role !== obj.role && obj.role !== 'admin') return (() => <Redirect to='/' />)

    return (props => <Component {...obj} {...props} />);

};

export const withAuthorization = (Component) => {

    const obj = getToken();

    return (props => <Component {...obj} {...props} />);
};


