import React from 'react';

import CartListItem from './cart-list-item';


const CartProductList = ({items,handleRemoveFromCart}) => (
<div className="listCart">
<ul>
{items.map( item => ( <li key = {item._id}> <CartListItem item = {item} handleRemoveFromCart={handleRemoveFromCart} /> </li>))}
</ul>
</div>
);

export default CartProductList; 