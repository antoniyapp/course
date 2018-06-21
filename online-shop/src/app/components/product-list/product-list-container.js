import React from 'react';
import axios from 'axios';
import queryString from 'query-string';

import Paging from './paging.js';
import Sorting from './sorting.js'; 
import ProductList from './product-list.js';

const sortParams = [
    {value: 'pa', text: 'Price: lowest first'},
    {value: 'pd', text: 'Price: highest first'},
    {value: 'dd', text: 'Date: Latest first'},
    {value: 'da', text: 'Date: Oldest first'}
];

class ProductListContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            items: [],
            sort: '',
            curPage: 1,
            numPages: 700}
    };

    render() {
        return( 
        <div>
        <Sorting sort = {this.state.sort} handleOnChange = {this.handleOnChangeSort}>
        {sortParams.map(x => <option key = {x.value} value={x.value}>{x.text}</option>)}
        </Sorting>
        <ProductList items = {this.state.items}/>
        <Paging curPage = {this.state.curPage} numPages = {this.state.numPages}/>
        </div>);
    };

    // loadCommentsFromServer = () => {
    //     axios.get("/api/products",{
    //         sort: this.state.sort,
    //         page: this.state.curPage
    //     })
    //         .then(({ data: posts }) => {
    //             // console.log("GET" , comments);
    //             this.setState({
    //                 blogPosts: posts.reverse()
    //             });
    //         })
    //         .catch((err) => {
    //             if (err.response.data.errors) {
    //                 console.error("/api/posts", err.response.data);
    //             }
    //         });
    // }

    handleOnChangeSort = (e) => {
        this.setState({sort: e.target.value});
    }

    getPageSearch(){
        let page = parseInt(queryString.parse(this.props.location.search).p);
        if(!page || page<1 || page > this.state.numPages) return 1;
        return page;
    }

    getSortSearch(){
        let sort = queryString.parse(this.props.location.search).s;
        if(sortParams.filter(x => x.value === sort) === []) return "";
        return sort;
    }

    setStateSearch(){
        this.setState({curPage: this.getPageSearch(), sort: this.getSortSearch()});
    }

    componentDidUpdate(){

        //this.setStateSearch();
    }

    componentDidMount() {
        console.log(this.props.location);
        this.setStateSearch();
    };
    
};

export default ProductListContainer;