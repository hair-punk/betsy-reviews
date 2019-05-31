import React from 'react';
import Item from './Item.jsx';

var ReviewList = ({items, handleClick}) => (
  <div className="jnz-reviewList">
    {items.map((item, index) => {
        return <Item key={index} item={item} handleClick={handleClick}/>

    })}
  </div>
)

export default ReviewList