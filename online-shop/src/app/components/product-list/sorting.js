import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import queryString from 'query-string';

const setUrlSearch = (history, location) => {
    let path = location.pathname;
    let search = queryString.parse(location.search);

    return (e) => {
        let obj = {
            pathname: path,
            search: queryString.stringify({ ...search, s: e.target.value })
        };

        history.push(obj);
    };
};

const Sorting = ({ sort, handleOnChange, ...props }) => (
    <select value={sort} onChange={e => {handleOnChange(e);setUrlSearch(props.history, props.location)(e);}}>
        <option style={{ display: 'none' }}> Sort </option>
        {props.children}
    </select>
);

export default withRouter(Sorting); 