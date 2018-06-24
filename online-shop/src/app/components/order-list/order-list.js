import React  from 'react';

import OrderListItem from './order-list-item';

const OrderList = ({items}) => (
<div id="accordion">
{items.map(item => (<OrderListItem {...item} />))}
</div>
);

export default OrderList;