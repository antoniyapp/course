import React from 'react';
import { Link } from 'react-router-dom';

class ListItem extends React.PureComponent{
    constructor(props){
        super(props);
    }
    
    
    render (){
        const item = this.props.item;
        return(
        <div>
            <div >
                <img style={{ width: 210, height: 280 }} src={item.imagePath} />
            </div>
            <div>
                {item.isHovering && <h2>{item.title}</h2>}
            </div>
            <div><button onClick={(e) => this.props.handleAddToCart(e,item._id)}>Add to Cart</button></div>
        </div>

    );}
}
export default ListItem; 