import React from 'react';
import { Link } from 'react-router-dom';

class ListItem extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {isHover: false}
    }

    mouseOver = () => this.setState({isHover: true});
    mouseOut = () => this.setState({isHover: false});

    render() {
        const item = this.props.item;
        return (
            <Link to = {'/' + item._id} onMouseOver = {this.mouseOver} onMouseOut = {this.mouseOut}>
            <div style = {{position: 'relative'}}>
                <img className = {this.state.isHover ? 'prod-img hover' : 'prod-img'}  style={{ width: 210, height: 280, display: 'block', 'marginLeft': 'auto', 'marginRight': 'auto'}} src={item.imagePath} />
                <div className = {this.state.isHover ? 'prod-desc hover' : 'prod-desc'} style = {this.state.isHover ? {} : {display: 'none'}}>
                <button style={{position: 'absolute', left: '140px', top: '140px',float: 'left'}} className="btn-primary" onClick={(e) => this.props.handleAddToCart(e, item._id)}> Add to Cart </button>
                </div>
            </div>
            </Link>

        );
    }
}
export default ListItem; 