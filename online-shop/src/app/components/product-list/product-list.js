import React from 'react';

import ProductListItem from './product-list-item.js';


const ProductList = ({items, toggleHoverState,handleAddToCart}) => (
<div>
<ul>
{items.map( item => (<li key = {item._id}><ProductListItem item = {item} toggleHoverState = {toggleHoverState(item._id) } handleAddToCart={handleAddToCart}/></li>))}
</ul>
</div>
);

export default ProductList; 