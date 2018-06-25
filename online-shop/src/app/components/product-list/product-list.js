import React from 'react';

import ProductListItem from './product-list-item.js';


const ProductList = ({items, handleAddToCart}) => (
<div className = 'container justify-content-center' style = {{padding: '40px'}}>
<div className = 'row '>
{items.map( item => (<div className='col-sm' style = {{maxWidth:'280px'}} key = {item._id}><ProductListItem item = {item} handleAddToCart={handleAddToCart}/></div>))}
</div>
</div>
);

export default ProductList; 