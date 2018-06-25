import React, { Component } from 'react';
import { Route, Redirect, Link, NavLink } from 'react-router-dom';

import axios from 'axios';
import { CSSTransition } from 'react-transition-group';


import ProductFormContainer from './components/productFormContainer';
import RegisterFormContainer from './components/register-form/register-form-container';
import LoginFormContainer from './components/login/login-form-container';
import Logout from './components/logout/logout'
import ContactContainer from './components/contact/contactContainer';
import CartContainer from './components/cart/cartContainer';
import Header from './components/header.js';
import Footer from './components/footer/footer.js'


import ProductListContainer from './components/product-list/product-list-container.js';
import OrderListContainer from './components/order-list/order-list-container.js';


class OnlineShop extends Component {

  constructor(props) {
    super(props);
    this.state = {

      cart: {
        products: [],
        totalQuantity: 0,
        totalPrice: 0
      }
    };

    // this.handleProductSubmit = this.handleProductSubmit.bind(this);
    // this.handleLogout = this.handleLogout.bind(this);
    // this.changeLoggedInStatus = this.changeLoggedInStatus.bind(this);
  }

  render() {

    return (
      <div className="container">

        <Header role={this.state.role} />

        <div className="container">
          {/* <Route path="/create" render={props => (<ProductFormContainer {...props} handleProductSubmit={this.handleProductSubmit} />)} /> */}
          <Route exact path="/register" component={RegisterFormContainer} />
          <Route exact path="/login" component={LoginFormContainer}/>
          <Route exact path="/logout" render={props => (<Logout {...props} changeLoggedInStatus={this.state.changeLoggedInStatus} handleLogout={this.handleLogout} />)} />
          <Route path='/products' component={ProductListContainer} />
          <Route exact path="/contact" component={ContactContainer} />
          <Route exact path="/orders" component={OrderListContainer} />
          <Route exact path="/cart" component={CartContainer} />
          <Route exact path='/' component={ProductListContainer} />


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



  getCart = () => {
    let cart = localStorage.getItem('cart');
    if (cart === undefined) {
      cart = {
        products: [],
        totalQuantity: 0,
        totalPrice: 0
      };

      localStorage.setItem('cart', JSON.stringify(cart));
      return cart;
    };

    cart = JSON.parse(cart);
    if (cart.products === undefined || cart.totalQuantity === undefined || cart.totalPrice === undefined) {
      cart = {
        products: [],
        totalQuantity: 0,
        totalPrice: 0
      };

      localStorage.setItem('cart', JSON.stringify(cart));
      return cart;
    };

    return {
      products: cart.products,
      totalQuantity: cart.totalQuantity,
      totalPrice: cart.totalPrice
    };
  };

  loadCart = () => {
    this.setState({...this.getCart()});
  }

 
  // handleProductSubmit(newProduct) {
  //   axios.post(this.props.url, newProduct)
  //     .then(({ data: product }) => {
  //       this.setState(prevState => ({
  //         products: [
  //           ...prevState.products,
  //           {
  //             id: Date.now() + prevState.products.length,
  //             title: product.title,
  //             imagePath: product.url,
  //             description: product.description,
  //             price: Number(product.price)
  //           }
  //         ],
  //         errors: undefined,
  //         messages: `New post added: ${newProduct.title}`,
  //         showMessages: true,
  //         showErrors: false
  //       }));
  //     })
  //     .catch((err) => {
  //       if (err.response.data.errors) {
  //         this.setState({
  //           errors: err.response.data.errors.reduce((errs, err) => errs + ' ' + err.message, ''),
  //           messages: undefined,
  //           showMessages: false,
  //           showErrors: true
  //         });
  //         console.error(this.props.url, err.response.data);
  //       }
  //     }
  //     );
  // }

  handleLogout(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    this.changeLoggedInStatus(false);
  };

  componentDidMount() {
    this.loadCart();
    // this.loadToken();
  };

  componentWillReceiveProps() {
    this.loadCart();
    // this.loadToken();
  }

}

export default OnlineShop;