import React from 'react';
import {withRouter,Link} from 'react-router-dom';
import queryString from 'query-string';

const Paging = ({curPage,numPages, ...props}) => {

    const path = props.location.pathname;
    const search = queryString.parse(props.location.search);

    const link = (pageNum,pageSym) => {
        let obj = {
            pathname: path,
            search: queryString.stringify({...search, p: pageNum})
        };

        return (<Link to={obj} key = {pageSym}> {pageSym} </Link>);
    };

    const prevArrow = () => {
    if(curPage == 1) return;
    return (link(curPage - 1, '<'));
    }; 

    const nextArrow = () => {
    if(curPage == numPages) return;
    return (link(curPage + 1, '>'));
    };

    const numbers = () => {
        let arr = [0,1,2,3,4];
        arr = arr
        .map(x => x + curPage - 2)
        .filter(x => (x >= 1 && x <= numPages))
        .map(x => x == curPage ? <span key = {x}> {x} </span> : link(x, x));
        return arr;
    };


    return(<div>
    {prevArrow()}
    {numbers()}
    {nextArrow()}
    </div>)

};

export default withRouter(Paging); 