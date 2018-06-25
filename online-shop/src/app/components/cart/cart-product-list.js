import React from 'react';

import CartListItem from './cart-list-item';


const CartProductList = ({items}) => (
<div className="listCart">
<ul>
{items.map( item => ( <li key = {item._id}> <CartListItem item = {item} /> </li>))}
</ul>
</div>
);

export default CartProductList; 