import React ,{ Component } from 'react';
import { Route,Redirect, Link ,NavLink} from 'react-router-dom';

import axios from 'axios';
import { CSSTransition } from 'react-transition-group';

import ProductFormContainer from './components/productFormContainer';
import RegisterFormContainer from './components/register-form/register-form-container';
import LoginFormContainer from './components/login/login-form-container';
import Logout from './components/logout/logout'
import ContactContainer from './components/contact/contactContainer';
import CartContainer from './components/cart/cartContainer';

import Footer from './components/footer/footer.js'


import ProductListContainer from './components/product-list/product-list-container.js';

class OnlineShop extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: [] ,
            errors: undefined, 
            messages: undefined,
            showMessages: false,
            showErrors: false,
            isLogged: localStorage.getItem('token') !== 'undefined' && localStorage.getItem('token') !== null
        };

      this.handleProductSubmit=this.handleProductSubmit.bind(this);
      this.handleLogout=this.handleLogout.bind(this);
      this.changeLoggedInStatus=this.changeLoggedInStatus.bind(this);
    }
   
    render () {
      
      //   console.log(this.state.isLogged);
        return (
        <div className="containr">
          <div className="navBar">
             {
               localStorage.getItem('token') !== 'undefined' && localStorage.getItem('token') !== null  ? 
          
           <nav className="navigBar">
                <ul className="navUl">
                <li className="liNav"><Link style={{ textDecoration: 'none'}} to='/'>Home</Link></li>
                <li className="liNav"><Link vto='/products'>All Products</Link></li>
                <li className="liNav" ><Link style={{ textDecoration: 'none'}} to='/cart'>Cart</Link></li>
                <li className="liNav" ><Link style={{ textDecoration: 'none'}} to='/logout'>Logout</Link></li>
                </ul>
                </nav> 
                :
                <nav className="navigBar">
                <ul id="navUl">
                <li className="liNav "><Link style={{ textDecoration: 'none'}} to='/'>Home</Link></li>
                <li className="liNav "><Link style={{ textDecoration: 'none'}}to='/products'>All Products</Link></li>
                <li className="liNav " ><Link style={{ textDecoration: 'none'}} to='/cart'>Cart</Link></li>
                <li className="liNav" ><Link style={{ textDecoration: 'none'}} to='/register'>Register</Link></li>
                <li className="liNav " ><Link style={{ textDecoration: 'none'}} to='/login'>Login</Link></li>
                <li className="liNav " ><Link style={{ textDecoration: 'none'}} to='/contact'>Contact</Link></li>
                </ul>
           </nav>
            
          }
              </div>
              <div className="container">
        <Route path="/create" render={props => (<ProductFormContainer {...props} handleProductSubmit = {this.handleProductSubmit} />)} />
        <Route exact path="/register" render={(props) => ( this.state.isLogged ? ( <Redirect to="/"/>) : ( <RegisterFormContainer {...props} changeLoggedInStatus={this.state.changeLoggedInStatus}/>) )}/>
        <Route exact path="/login" render={(props) => ( this.state.isLogged ? ( <Redirect to="/"/>) : ( <LoginFormContainer {...props} changeLoggedInStatus={this.state.changeLoggedInStatus}/>) )}/>
        <Route exact path="/logout"  render={props => (<Logout {...props} changeLoggedInStatus={this.state.changeLoggedInStatus} handleLogout = {this.handleLogout} />)} />
        <Route path = '/products' component={ProductListContainer}/>
        <Route exact path="/contact" component={ContactContainer}/>
        <Route exact path="/cart" component={CartContainer}/>
        <Route exact path = '/' component={ProductListContainer}/>
       

         <CSSTransition in={this.state.showErrors} timeout={1000} 
        unmountOnExit classNames="messages">
          <div>  
            <div className="errors">{this.state.errors}</div>
          </div>
        </CSSTransition>  
        <CSSTransition in={this.state.showMessages} timeout={1000} 
        unmountOnExit classNames="messages">
          <div> 
            <div className="messages">{this.state.messages}</div>
          </div>
        </CSSTransition>
        </div>
        <Footer />
    </div>
       
        )
    }

     handleProductSubmit(newProduct) {
        axios.post(this.props.url, newProduct)
      .then(({ data: product }) => {
       this.setState(prevState => ({
      products: [
        ...prevState.products,
        { 
          id: Date.now()+prevState.products.length,
          title:product.title,
          imagePath: product.url,
          description: product.description,
          price:Number(product.price)
        }
      ],
       errors: undefined,
      messages: `New post added: ${newProduct.title}`,
      showMessages: true,
      showErrors: false
    }));
      })
      .catch((err) => {
        if (err.response.data.errors) {
          this.setState({
            errors: err.response.data.errors.reduce((errs, err) => errs + ' ' + err.message, ''),
            messages: undefined,
            showMessages: false,
            showErrors: true
          });
          console.error(this.props.url, err.response.data);
        }
      }
      );
    }
  handleLogout(e){
  e.preventDefault();
   localStorage.removeItem("token");
   this.changeLoggedInStatus(false);
  }
  changeLoggedInStatus(param){
   this.setState({isLogged:param})
  }
  componentDidMount(){
    let cart ={};
    cart.products=[];
    cart.totalQuantity=0;
    cart.totalPrice=0;
    localStorage.setItem('cart',JSON.stringify(cart));
   // console.log(JSON.parse(localStorage.getItem('cart')))
  }
    
}

export default OnlineShop;