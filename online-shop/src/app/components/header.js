import React from 'react';
import { Link } from 'react-router-dom';

const HeaderOld = (props) => (
    <div className="navbar-nav">
        {
            localStorage.getItem('token') !== 'undefined' && localStorage.getItem('token') !== null ?

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul id="main-menu">
                        <li className="nav-item"><Link to='/'>Home</Link></li>
                        <li className="nav-item"><Link to='/products'>All Products</Link></li>
                        <li className="nav-item" ><Link to='/cart'>Cart</Link></li>
                        <li className="nav-item" ><Link to='/logout'>Logout</Link></li>
                    </ul>
                </nav>
                :
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul id="main-menu">
                        <li className="nav-item"><Link to='/'>Home</Link></li>
                        <li className="nav-item"><Link to='/products'>All Products</Link></li>
                        <li className="nav-item" ><Link to='/cart'>Cart</Link></li>
                        <li className="nav-item" ><Link to='/register'>Register</Link></li>
                        <li className="nav-item" ><Link to='/login'>Login</Link></li>
                        <li className="nav-item" ><Link to='/contact'>Contact</Link></li>
                    </ul>
                </nav>

        }
    </div>
);

const Header = (props) => (
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
            <li className='col-sm' style={{ fontFamily: 'monospace', fontSize: '1.6rem', textAlign: 'center' }}><Link to='/login'>Log in</Link></li>
            <li className='col-sm' style={{ fontFamily: 'monospace', fontSize: '1.6rem', textAlign: 'center' }}><Link to='/cart'>Cart</Link></li>
        </ul>
        <br /><br />

        {/* <ul className='nav nav-pills nav-fill' id="main-menu">
            <li className='nav-item' style = {{fontFamily: 'monospace', fontSize: '1.6rem'}}><Link to='/products'>Shop</Link></li>
            <li className='nav-item' style = {{fontFamily: 'monospace', fontSize: '1.6rem'}}><Link to='/contact'>Contact</Link></li>
            <li className='nav-item' style = {{fontFamily: 'monospace', fontSize: '1.6rem'}}><Link to='/cart'>About</Link></li>
            <li className='nav-item' style = {{fontFamily: 'monospace', fontSize: '1.6rem'}}><Link to='/login'>Log in</Link></li>
            <li className='nav-item' style = {{fontFamily: 'monospace', fontSize: '1.6rem'}}><Link to='/cart'>Cart</Link></li>
        </ul> */}
    </div>
);

export default Header;