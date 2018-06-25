import React from 'react';
import { Link } from 'react-router-dom';

import {withAuthorization} from './helpers/authorization.js';


const Header = ({role}) => (
    <div className='container'>
        <img className=''
            src='https://scontent.fsof3-1.fna.fbcdn.net/v/t1.0-9/35993646_2026701557405351_3142164933785944064_n.jpg?_nc_cat=0&oh=28c94363e81f7fcfa5e213c009e902fd&oe=5BB6F4B9'
            style={{ width: '240px', height: '240px', maxWidth: '500px', display: 'block', 'marginLeft': 'auto', 'marginRight': 'auto' }}
        />
        <br /><br />
        <ul className='row justify-content-center' id="main-menu">
            <li className='col-sm' style={{ fontFamily: 'monospace', fontSize: '1.6rem', textAlign: 'center' }}><Link to='/products'>Shop</Link></li>
            <li className='col-sm' style={{ fontFamily: 'monospace', fontSize: '1.6rem', textAlign: 'center' }}><Link to='/contact'>Contact</Link></li>
            <li className='col-sm' style={{ fontFamily: 'monospace', fontSize: '1.6rem', textAlign: 'center' }}><Link to='/cart'>About</Link></li>
            <li className='col-sm' style={{ fontFamily: 'monospace', fontSize: '1.6rem', textAlign: 'center' }}>{role === 'anonymous' ? <Link to='/login'>Log in</Link> : <Link to='/user'>User</Link>}</li>
            <li className='col-sm' style={{ fontFamily: 'monospace', fontSize: '1.6rem', textAlign: 'center' }}><Link to='/cart'>Cart</Link></li>
        </ul>
        <br /><br />
    </div>
);

export default withAuthorization(Header);