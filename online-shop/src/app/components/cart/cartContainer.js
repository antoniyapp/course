import React, { Component } from 'react';
import CartProductList from './cart-product-list';
import axios from 'axios';

class CartContainer extends Component {
   constructor(props){
     super(props)
    this.state = {
    msg:''
  };
  this.handleSubmit=this.handleSubmit.bind(this);
  this.removeFromCart=this.removeFromCart.bind(this);
   }

   handleSubmit(e){
     e.preventDefault();
     let cart=localStorage.getItem('cart');
     let orderToSubmit={
         products:cart.products,
         address:'Some address',
         user_email:'someemail@abv.bg',
         totalQuantity:cart.totalQuantity,
         totalPrice:cart.totalPrice
     }
     axios.post('http://localhost:3000/api/orders', orderToSubmit)
      .then(({data}) => {
        console.log("Order is submitted");
    })
       .catch((err) => {
        if (err.response.data.errors) {
          this.setState({
            msg: err.response.data.errors.reduce((errs, err) => errs + ' ' + err.message, '')
          });
          console.error(this.props.url, err.response.data);
        }
      }
      );
   }

    removeFromCart(e,id) {
         let cart = JSON.parse(localStorage.getItem('cart'));
         let [item]=cart.products.filter(x=>x._id===id);
         console.log(item);
         let newProducts=cart.products.filter(x=>x._id!==id);
         let newCart = {...cart,products:newProducts};
         newCart.totalQuantity-=1;
         newCart.totalPrice-=item.price;
         localStorage.setItem('cart',JSON.stringify(newCart));
    }

  render(){
     let cart=JSON.parse(localStorage.getItem('cart'));
     console.log(cart);
        return (
           cart.products.length===0 ?
          <div className="cartContainer"><h1>Cart</h1>
           <p className="total">Cart is empty</p> 
           </div>
          :
            <div className="cartContainer">
          <h1>Cart</h1> 
        <CartProductList
           items={cart.products}
           handleRemoveFromCart={this.removeFromCart}
         />  
         <div className="totalWrapper listCart">
         <div className='total'>Total quantity: {cart.totalQuantity}</div>
         <div className='total'>Total price: {cart.totalPrice}</div>
         <button className="btn-primary" onClick={this.handleSubmit}>Buy</button>
         </div>
         </div>  
        )
      }

}

export default CartContainer;