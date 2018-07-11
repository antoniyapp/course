import React from 'react';

const Product = ({item, handleOnClick}) => {
return(
<div>
<img src = {item.imagePath}/>
<span>
Desc: {item.description}
price: {item.price}
</span>
<button onClick = {(e) => handleOnClick(e,item._id)}> Add to Cart</button>
</div>
);
};

export default Product;