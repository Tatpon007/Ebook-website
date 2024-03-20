import PropTypes from "prop-types";
import React from "react";
class Item extends React.Component{
    
    render(){
        const {title,price} =  this.props
        return (
            <li>{title} : {price}</li>
        ) ;
    }
} 
Item.propTypes = {
    title: PropTypes.string,
    price: PropTypes.number
} ;

export default Item