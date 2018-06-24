import React from 'react';
import axios from 'axios';

const getItem = (id) =>
{
    const item = {};
    axios.get("/api/products" + id)
            .then((res) => { item = res.body;})
            .catch((err) => {
                if (err) {
                    //item = ("/api/products/" + id, err.response.data);
                }
            });

    return item;
};

class CartContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {items = []};
    };

    loadCart()
    {
        const cart = JSON.parse(localStorage.getItem(cart));
        const items = cart.items.map(x => getItem(x._id));
        
        this.setState({items: cart.items.map(x => getItem(x._id))});

    }
}