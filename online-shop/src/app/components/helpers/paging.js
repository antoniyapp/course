import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import queryString from 'query-string';

const Paging = ({ curPage, numPages, handleOnClick, ...props }) => {

    const path = props.location.pathname;
    const search = queryString.parse(props.location.search);

    const link = (pageNum, pageSym) => {
        let obj = {
            pathname: path,
            search: queryString.stringify({ ...search, p: pageNum })
        };

        return (<Link to={obj} className='page-link' > {pageSym} </Link>);
    };

    const prevArrow = () => {
        if(curPage > numPages) return;
        const cn = curPage === 1 ? 'disabled' : '';
        const child = curPage === 1 ? <span className='page-link'>{'<'}</span> : link(curPage - 1, '<');
        return (
            <li className={'page-item ' + cn} key='<' > {child} </li>);
    };

    const nextArrow = () => {
        if(curPage > numPages) return;
        const cn = curPage === numPages ? 'disabled' : '';
        const child = curPage === numPages ? <span className='page-link'>{'>'}</span> : link(curPage + 1, '>');
        return (
            <li className={'page-item ' + cn} key='>' > {child} </li>);
    };


    const numbers = () => {
        if(curPage > numPages) return;
        let arr = [0, 1, 2, 3, 4];
        arr = arr
            .map(x => (curPage <= 2) ? (x + 1) : (curPage >= numPages - 2 ? (x + numPages - 4) : x + curPage - 2))
            .filter(x => (x >= 1 && x <= numPages))
            .map(x =>
                <li key={x} className={'page-item ' + (x === curPage ? 'active' : '')} >
                    {x == curPage ? <span className = 'page-link'> {x} </span> : link(x, x)}
                </li>);
        return arr;
    };

    return (<ul className='pagination justify-content-center'>
        {prevArrow()}
        {numbers()}
        {nextArrow()}
    </ul>)
};

const Component = withRouter(Paging);

const searchParamValue = (search) => {
    let page = parseInt(queryString.parse(search).p);
    if (!page || page < 1) return 1;
    return page;
}

const Page = {
    Component: Component,
    defaultSearchParam: { p: 1 },
    getSearchParamValue: searchParamValue
};

export default Page;
