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
    };

    render(){
        return <Product item = {this.state.item} handleOnClick = {this.handleOnClick}/>;
    };

    handleOnClick = () => {
       const msg = this.props.handleAddToCart(this.props.match.params.id, this.state.quantity);
       this.setState({msg: msg});
       return (e) => (e.preventDefault());
    };
    

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