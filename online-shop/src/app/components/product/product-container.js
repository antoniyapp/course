import React from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

import Product from './product.js';

class ProductContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            item: {},
            quantity: 1,
            msg: ''
        };
        this.handleAddToCart=this.handleAddToCart.bind(this);
       
    };

    render(){
        return <Product item = {this.state.item} handleOnClick = {this.handleAddToCart}/>
    };
    
      handleAddToCart(e,id){
       e.preventDefault();
       console.log('yes')
      axios.get('http://localhost:3000/api/products/'+id)
       .then((res) => {
       if(res.data.quantity === 0) {
          this.setState({msg:"No items available"});
       }
       else{
          let cart = JSON.parse(localStorage.getItem('cart'));
          this.setState({msg:"Item is added to cart"});
          let [item]=cart.products.filter(x=>x._id===id);
          if(item)
          {
              console.log('yes');
            cart.totalPrice+=res.data.price;
            cart.totalQuantity+=1;
          }
          else {
               cart.products.push(res.data);
           cart.totalPrice+=res.data.price;
           cart.totalQuantity+=1;
          }
           localStorage.setItem('cart',JSON.stringify(cart));
      }
     })
     .catch((err) =>{
       if (err.response.data.errors) {
            console.error("/api/products", err.response.data);
        }
    })
    }
   
    loadProduct = () => {
        axios.get("/api/products/" + this.props.match.params.id)
            .then((res) => {
                this.setState({ item: res.data });
            })
            .catch((err) => {
                if (err) {
                    console.error("/api/products/" + this.props.match.params.id, err);
                }
            });
    };

    componentDidMount(){
        this.loadProduct();
    }

};

export default withRouter(ProductContainer);