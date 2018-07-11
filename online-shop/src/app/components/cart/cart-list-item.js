import React from 'react';

const CartListItem = ({
  item,
  handleRemoveFromCart
}) => {

  return (
  
    <div className="listWrapper">
          <img className="listImg" src={item.imagePath}/>
       <div  className='listItem'>
          <span>{item.title}</span>
       </div> 
        <div  className='listItem'>
          <span>{item.price}</span>
       </div>
       <button onClick={(e) => handleRemoveFromCart(e,item._id)}>Remove</button>
      </div>
  );
};


export default CartListItem;