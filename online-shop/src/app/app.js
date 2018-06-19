import React ,{ Component } from 'react';
import { Route, Link ,NavLink} from 'react-router-dom';
 
class OnlineShop extends Component {
    constructor(props){
        super(props);
      
    }
    render () {
        return (
          <div className="navbar-nav">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul id="main-menu">
                <li className="nav-item"><Link to='/'>Home</Link></li>
                <li className="nav-item"><Link to='/products'>All Products</Link></li>
                <li className="nav-item" ><Link to='/cart'>Cart</Link></li>
                </ul>
                </nav>
              </div>
        
        )
    }
}

export default OnlineShop;