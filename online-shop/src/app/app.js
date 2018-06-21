import React ,{ Component } from 'react';
import { Route,Redirect, Link ,NavLink} from 'react-router-dom';

import axios from 'axios';
import { CSSTransition } from 'react-transition-group';

import ProductFormContainer from './components/productFormContainer';
import RegisterFormContainer from './components/register-form/register-form-container';
import LoginFormContainer from './components/login/login-form-container';

class OnlineShop extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: [] ,
            errors: undefined, 
            messages: undefined,
            showMessages: false,
            showErrors: false,
            isLogged: localStorage.getItem('token') !== 'undefined' 
        };

      this.handleProductSubmit=this.handleProductSubmit.bind(this);
    }
   
    render () {
      console.log( this.state.isLogged)
        return (
        <div>
          <div className="navbar-nav">
             {
               localStorage.getItem('token')==='undefined' ? 
             <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul id="main-menu">
                <li className="nav-item"><Link to='/'>Home</Link></li>
                <li className="nav-item"><Link to='/products'>All Products</Link></li>
                <li className="nav-item" ><Link to='/cart'>Cart</Link></li>
                <li className="nav-item" ><Link to='/register'>Register</Link></li>
                <li className="nav-item" ><Link to='/login'>Login</Link></li>
                </ul>
           </nav>
             
          :
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul id="main-menu">
                <li className="nav-item"><Link to='/'>Home</Link></li>
                <li className="nav-item"><Link to='/products'>All Products</Link></li>
                <li className="nav-item" ><Link to='/cart'>Cart</Link></li>
                </ul>
                </nav>
            
          }
              </div>
        <Route path="/create" render={props => (<ProductFormContainer {...props} handleProductSubmit = {this.handleProductSubmit} />)} />
        <Route exact path="/register" render={() => ( this.state.isLogged ? ( <Redirect to="/"/>) : ( <RegisterFormContainer/>) )}/>
        <Route exact path="/login" render={() => ( this.state.isLogged ? ( <Redirect to="/"/>) : ( <LoginFormContainer/>) )}/>
        
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

    
}

export default OnlineShop;