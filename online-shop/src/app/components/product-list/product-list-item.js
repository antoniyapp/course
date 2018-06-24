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
        <div onMouseEnter={this.props.toggleHoverState} onMouseLeave={this.props.toggleHoverState}>
            <div className={item.isHovering ? 'is-hover' : 'is-not-hover'} style={item.isHovering ? { opacity: 0.5 } : { opacity: 1 }}>
                <img style={{ width: 210, height: 280 }} src={item.imagePath} />
            </div>
            
                {item.isHovering && <h2>{item.title}</h2>}
            </div>
            <div><button className="btn-primary" onClick={(e) => this.props.handleAddToCart(e,item._id)}>Add to Cart</button></div>
        </div>

    );}
}
export default ListItem; 