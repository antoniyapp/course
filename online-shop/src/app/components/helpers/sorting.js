import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import queryString from 'query-string';



const Sorting = ({ sort, handleOnClick, options, urlSearchParams = {}, ...props }) => {

    const selectedOption = () =>{
        const pair = options.filter(x => x.value == sort);
        if(sort === '' || pair.length === 0) return 'Sort';
        return pair[0].key;   
    };

    const link = (key, value) => {
        const path = props.location.pathname;
        const search = queryString.parse(props.location.search);

        const obj = {
            pathname: path,
            search: queryString.stringify({ ...search, ...urlSearchParams, s: value })
        };

        return (<Link to={obj} className='dropdown-item' key={value}> {key} </Link>);
    };

    return (
        <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {selectedOption()}
            </button>
            <div className='dropdown-menu' aria-labelledby="dropdownMenuButton">
                {options.map(x => (x.value === sort) ? <span className='dropdown-item' key={x.value}> {x.key} </span> : link(x.key, x.value))}
            </div>
        </div>
    );
};




// const Sorting = ({ sort, handleOnChange, urlSearchParams = {}, ...props }) => {

//     const setUrlSearch = () => {
//         let path = props.location.pathname;
//         let search = queryString.parse(props.location.search);

//         return (e) => {
//             let obj = {
//                 pathname: path,
//                 search: queryString.stringify({ ...search, ...urlSearchParams, s: e.target.value })
//             };

//             props.history.push(obj);
//             handleOnChange(e);
//         };
//     };

//     return (
//         <select className='btn btn-secondary' value={sort} onChange={setUrlSearch()}>
//             <option style={{ display: 'none' }} value=""> Sort </option>
//             {props.children}
//         </select>);
// };

const Component = withRouter(Sorting);

const searchParamValue = (search, sortValues) => {
    let sort = queryString.parse(search).s;
    if (sortValues.filter(x => x == sort).length === 0) return "";
    return sort;
};

const Sort = {
    Component: Component,
    getSearchParamValue: searchParamValue
};

export default Sort; 