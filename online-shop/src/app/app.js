import React, { Component } from 'react';
import { Route, Redirect, Link, NavLink } from 'react-router-dom';

import axios from 'axios';
import { CSSTransition } from 'react-transition-group';

import ProductContainer from './components/product/product-container.js';
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
          <Route exact path="/login" component={LoginFormContainer} />
          <Route exact path="/logout" render={props => (<Logout {...props} changeLoggedInStatus={this.state.changeLoggedInStatus} handleLogout={this.handleLogout} />)} />
          <Route exact path='/products/:id' render={() => <ProductContainer handleAddToCart = {this.handleAddToCart}/>} />
          <Route exact path='/products' component={ProductListContainer} />
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
    if (cart === null) {
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
    this.setState({ ...this.getCart() });
  }


  handleAddToCart = (id, quantity) => {
    let msg = '';
    

    axios.get('/api/products/' + id)
      .then((res) => {
        let cart = { ...this.state.cart };
        const item = cart.products.find(x => x._id === id);

        if (item) {
          if (res.data.quantity < quantity || res.data.quantity < item.quantity + quantity) {
            msg = 'There are only ' + res.data.quantity + ' items left'; return msg;
          }
          else {
            cart = { ...cart, products: [...cart.products, { ...item, quantity: item.quantity + quantity }] };
          }
        }
        else {
          cart = { ...cart, products: [...cart.products, res.data] };
        }
        msg = "The item was added to cart";

        cart.totalPrice += res.data.price * quantity;
        cart.totalQuantity += quantity;

        localStorage.setItem('cart', JSON.stringify(cart));
        this.setState({ ...cart });
      })
      .catch((err) => {
        if (err) {
          console.error("/api/products", err);
        }
      })
  };


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