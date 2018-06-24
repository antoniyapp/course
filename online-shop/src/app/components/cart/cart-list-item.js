import React from 'react';

const CartListItem = ({
  item
}) => {
  return (
    <div>
        <p>Name: Title: {item.title} Quantity {item.quantity} Price {item.quantity*item.price}</p>
      </div>
  );
};


export default CartListItem;