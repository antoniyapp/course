import React from 'react';

import ProductListItem from './product-list-item.js';


const ProductList = ({items}) => (
<div>
<ul>
{items.map( item => (<li key = {item._id}><ProductListItem item = {item} /></li>))}
</ul>
</div>
);

export default ProductList; 