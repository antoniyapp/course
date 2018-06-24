import React from 'react';

import ProductListItem from './product-list-item.js';


<<<<<<< HEAD
const ProductList = ({items}) => (
<div>
<ul>
{items.map( item => (<li key = {item._id}><ProductListItem item = {item} /></li>))}
=======
const ProductList = ({items, toggleHoverState,handleAddToCart}) => (
<div>
<ul>
{items.map( item => (<li key = {item._id}><ProductListItem item = {item} toggleHoverState = {toggleHoverState(item._id) } handleAddToCart={handleAddToCart}/></li>))}
>>>>>>> f54d182be524eb9069aea359715c380f9ec38bbd
</ul>
</div>
);

export default ProductList; 