import React from 'react';

import ProductListItem from './product-list-item.js';


const ProductList = ({items, toggleHoverState}) => (
<div>
<ul>
{items.map( item => (<li key = {item._id}><ProductListItem item = {item} toggleHoverState = {toggleHoverState(item._id)}/></li>))}
</ul>
</div>
);

export default ProductList; 