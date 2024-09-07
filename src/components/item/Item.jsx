import React from 'react';
import { Link } from 'react-router-dom';
import './item.css';

const Item = (props) => {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}> 
        <img src={props.image} alt={props.name} />
      </Link>
      <p>{props.name}</p>
      <div className='item-prices'>
        <div className='item-price-new'>
          <p>{props.new_price}$</p>
        </div>
        <div className='item-price-old'>
          <p>{props.old_price}$</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
