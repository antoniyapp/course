import React ,{ Component } from 'react';
import { Route, Link ,NavLink} from 'react-router-dom';

import axios from 'axios';
import { CSSTransition } from 'react-transition-group';

import ProductFormContainer from './components/productFormContainer';
 
class OnlineShop extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: [] ,
            errors: undefined, 
            messages: undefined,
            showMessages: false,
            showErrors: false
        };

      this.handleProductSubmit=this.handleProductSubmit.bind(this);
    }
   
    render () {
        return (
        <div>
          <div className="navbar-nav">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul id="main-menu">
                <li className="nav-item"><Link to='/'>Home</Link></li>
                <li className="nav-item"><Link to='/products'>All Products</Link></li>
                <li className="nav-item" ><Link to='/cart'>Cart</Link></li>
                </ul>
                </nav>
              </div>
        <Route path="/create" render={props => (<ProductFormContainer {...props} handleProductSubmit = {this.handleProductSubmit} />)} />
        
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

     handleProductSubmit(product) {
        axios.post('/api/products', product)
      .then(({ data: product }) => {
       this.setState(prevState => ({
      products: [
        ...prevState.products,
        { 
          id: Date.now()+prevState.products.length,
          title:product.title,
          imageUrl: product.url,
          description: product.description,
          price:product.price
        }
      ],
       errors: undefined,
      messages: `New post added: ${product.title}`,
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