import React from 'react';
import axios from 'axios';

import OrderList from './order-list.js';
//discounts(name,amount,max_uses,curr_uses,starts_at,expires_at)
class DiscountContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        discountName: ''
     };
     this.handleInputChange=this.handleInputChange.bind(this);
    };
    
    handleInputChange(e){
     this.setState({[e.target.name]: e.target.value});
   }
    handleSubmit(e) {
     e.preventDefault();
     getDiscount();
    }

    render(){
        return (
        <DiscountForm 
        handleInputChange= {this.handleInputChange}
        discountName={this.state.discountName}
        handleSubmit={this.handleSubmit}
        />);
    };

    
    getDiscount = () => {
        axios.get('/api/discounts')
        .then((res) => {
            discount=res.data.filter(x => x.name===this.state.discountName);
            if(!discount){
              this.setState({msg:'Invalid discount name'});
              return;
            }
            else if(discount.expires_at < Date.now() / 1000 ){
              this.setState({msg:'Discount has expired'});
              return;
            }
            else if(discount.starts_at > Date.now() / 1000 ) {
              this.setState({msg:'Discount is not available yet.'});
              return;
            }
            else if(curr_uses++ > max_uses ) {
              this.setState({msg:'Discount is not more available.'});
              return;
            }
            let cart=JSON.parse(localStorage.getItem('cart'));
            cart.totalPrice-=discount.amount;
            localStorage.setItem('cart',JSON.stringify(cart));
        })
        .catch((err) =>{console.log(err)});
    };
};

export default DiscountContainer;