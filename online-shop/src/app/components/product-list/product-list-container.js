import React from 'react';
import axios from 'axios';

import Paging from '../helpers/paging.js';
import Sorting from '../helpers/sorting.js';
import ProductList from './product-list.js';

const sortOptions = [
    { value: 'pa', key: 'Price: Lowest first' },
    { value: 'pd', key: 'Price: Highest first' },
    { value: 'dd', key: 'Date: Latest first' },
    { value: 'da', key: 'Date: Oldest first' }
];

const itemsPerPage = 4;

class ProductListContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [{ isHovering: false, _id: '1', price: 7, title: 'test', image: 'https://www.stinkyfamily.com/wp-content/uploads/2018/04/WINGS_RED_STINKY_SOCKS-300x450.png' }],
            sort: '',
            curPage: 1,
            numPages: 1
        }
        this.handleAddToCart=this.handleAddToCart.bind(this);
    };

    render() {
        return (
            <div className='container'>
                <div className='float-right'>
                    <Sorting.Component
                        sort={this.state.sort}
                        options={sortOptions}
                        urlSearchParams={Paging.defaultSearchParam} />
                </div>
                <div>
                    <ProductList items={this.filterItems()} toggleHoverState={this.toggleHoverState} handleAddToCart={this.handleAddToCart} />
                </div>
                <div>
                    <Paging.Component
                        curPage={this.state.curPage}
                        numPages={this.state.numPages} />
                </div>
            </div>);
    };

    //list-item change state when hover over an item
    toggleHoverState = (id) => {
        return () => (
            this.setState(prevState => (
                { items: prevState.items.map(item => (item._id === id ? { ...item, isHovering: !item.isHovering } : item)) }
            )));
    };

    // get search params for paging and sort
    // and and update the state with these values
    setStateSearch(location) {
        this.setState({
            curPage: Paging.getSearchParamValue(location.search),
            sort: Sorting.getSearchParamValue(location.search, sortOptions.map(x => x.value))
        });
    };

    // load products from the server and update the state (the items + numPages)
    loadProducts = () => {
        axios.get("/api/products"
            // ,{
            //     sort: this.state.sort,
            //     page: this.state.curPage}
        )
            .then((res) => {
                this.setState({
                    items: res.data.map(x => ({ ...x, isHovering: false })),
                    numPages: Math.floor(res.data.length / itemsPerPage) + 1
                });
            })
            .catch((err) => {
                if (err.response.data.errors) {
                    console.error("/api/products", err.response.data);
                }
            });
    };

    componentDidMount() {
        this.setStateSearch(this.props.location);
        this.loadProducts();
    };

    componentWillReceiveProps(nextProps) {
        this.setStateSearch(nextProps.location);
        this.loadProducts();
    }

    //to be deleted when back end supports paging and sortitng

    filterItems = () => {

        const sortFunction = (criteria) => {
            switch (criteria) {
                case 'pa': return (x, y) => (x.price >= y.price ? x : y);
                    break;
                case 'pd': return (x, y) => (x.price <= y.price ? x : y);
                    break;
                    // case 'dd' : return (x,y) => (x.price > y.price ? x : y);
                    // break;
                    // case 'da' : return (x,y) => (x.price > y.price ? x : y);
                    break;
                default: return undefined;
            }
        }

        return this.state.items
            .sort(sortFunction(this.state.sort))
            .slice(itemsPerPage * (this.state.curPage - 1), itemsPerPage * this.state.curPage - 1);
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
           this.setState({msg:"Item is added to cart"});
          let newCart=JSON.parse(localStorage.getItem('cart'));
           newCart.products.push(res.data);
           newCart.totalPrice+=res.data.price;
           newCart.totalQuantity+=1;
           localStorage.setItem('cart',JSON.stringify(newCart));
          // this.props.addToCart(res.data);
       }
     })
     .catch((err) =>{
        if (err.response.data.errors) {
            console.error("/api/products", err.response.data);
        }
    })
    }

};

export default ProductListContainer;