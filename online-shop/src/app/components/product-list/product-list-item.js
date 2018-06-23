import React from 'react';
import { Link } from 'react-router-dom';

class ListItem extends React.PureComponent{
    constructor(props){
        super(props);
    }
    
    
    render (){
        const item = this.props.item;
        const toggleHoverState = this.props.toggleHoverState;
        return(
        <div onMouseEnter={toggleHoverState} onMouseLeave={toggleHoverState}>
            <div className={item.isHovering ? 'is-hover' : 'is-not-hover'} style={item.isHovering ? { opacity: 0.5 } : { opacity: 1 }}>
                <img style={{ width: 210, height: 280 }} src={item.image} />
            </div>
            <div>
                {item.isHovering && <h2>{item.title}</h2>}
            </div>
        </div>
    );}
}
export default ListItem; 