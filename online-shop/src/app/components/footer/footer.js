import React from 'react';
import {Link } from 'react-router-dom';
const Footer = () => {
    return (
  <div>     
<footer className="footer sticky-footer-navbar bg-dark ">
  <div className="container-fluid">
        <ul className="list-unstyled list-inline  ">
          <li className="list-inline-item">
            <Link style={{ textDecoration: 'none'}} to='/'>Home</Link>
          </li>
          <li className="list-inline-item">
            <Link style={{ textDecoration: 'none'}} to='/products'>Products</Link>
          </li>
          <li className="list-inline-item">
           <Link style={{ textDecoration: 'none'}} to='/cart'>Cart</Link>
          </li>
          <li className="list-inline-item">
           <Link style={{ textDecoration: 'none'}} to='/contact'>Contact</Link>
          </li>
        </ul>
  <div className="footer-copyright text-center py-3">© 2018 OnlineShop</div>
  </div>
</footer>
      </div>
);
}
  


export default Footer;