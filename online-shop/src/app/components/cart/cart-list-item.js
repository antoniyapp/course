import React from 'react';

const CartListItem = ({
  item
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
      </div>
  );
};


export default CartListItem;