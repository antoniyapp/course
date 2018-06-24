import React from 'react';
import axios from 'axios';

import OrderList from './order-list.js';

class OrderListContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            orders: [{id: 1, date: 'today', user: {firstName: 'Pavel', secondlastName:'Koev', phoneNumber: '0883350413', adress: 'all work and no play makes danny a dull boy.all work and no play makes danny a dull boy.all work and no play makes danny a dull boy.all work and no play makes danny a dull boy.'}, status: 'active', totalPrice: 10, items: []}]
        };
    };

    render(){
        return (<OrderList items= {this.state.orders}/>);
    };

    getOrders = () => {
        axios.get('/api/orders')
        .then((res) => {
            this.setState({orders: res.data});
        })
        .catch((err) =>{});
    };

    componentDidMount(){
        this.getOrders();
    };
};

export default OrderListContainer;