import React from 'react';
import { Redirect } from 'react-router-dom';
import * as jwt_decode from "jwt-decode";



const getToken = () => {

    let token = localStorage.getItem('token');
    let role = 'anonymous';
    let expired = false;

    () => {
        //Not logged
        if (token === undefined) return;

        try {
            token = jwt_decode(token);
            if (token.exp < Date.now() / 1000) {
                //Expired token
                localStorage.removeItem('token');

                expired = true;
                token = undefined;
                return;
            };
        }
        catch (err) {
            //Illigal token
            localStorage.removeItem('token');

            expired = true;
            token = undefined;
            return;
        };

        role = token.type;
    };

    return { token: token, role: role, expired: expired };
};

export const withAuthorizationHOC = (role, Component) => {
    
    const obj = getToken();

    if(role !== 'anonymous' && obj.role === 'anonymous') { localStorage.setItem('token','s'); return (() => <Redirect to = '/login'/>);}
    if(role !== obj.role && obj.role !== 'admin') return ( () => <Redirect to = '/'/>)
    
    return ( props => <Component {...obj} {...props} />);

};

export const withAuthorization = (Component) => {

    const obj = getToken();
    
    return ( props => <Component {...obj} {...props} />);
};


