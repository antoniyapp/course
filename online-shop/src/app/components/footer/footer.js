import React from 'react';
import {Link } from 'react-router-dom';
const Footer = () => {
    return (
  <div>     
<footer className="footer navbar-fixed-bottom bg-light pt-4 mt-4">
        <ul className="list-unstyled">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
          <li>
           <Link to='/cart'>Cart</Link>
          </li>
          <li>
           <Link to='/contact'>Contact</Link>
          </li>
        </ul>
  <div className="footer-copyright text-center py-3">© 2018 OnlineShop.com</div>
</footer>
      </div>
);
}
  


export default Footer;