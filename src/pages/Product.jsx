import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import Breadcurm from '../components/Breadcrum/Breadcurm';
import '../style/product.css';

const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { product_id } = useParams();
  const product = all_products.find(p => p.id === parseInt(product_id));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className='product-page'>
      <Breadcurm product={product} />
      <div className='product-details'>
        <div className='product-image'>
          <img src={product.image} alt={product.name} />
        </div>
        <div className='product-info'>
          <h1>{product.name}</h1>
          <p className='product-description'>{product.description}</p>
          <div className='product-prices'>
            <p className='new-price'>${product.new_price}</p>
            {product.old_price && <p className='old-price'>${product.old_price}</p>}
          </div>
          <div className='sizes'>
            <label htmlFor='sizes'>Select Size:</label>
            <select id='sizes'>
              <option value='s'>S</option>
              <option value='m'>M</option>
              <option value='l'>L</option>
              <option value='xl'>XL</option>
              <option value='xxl'>XXL</option>
            </select>
          </div>
          <button className='add-to-cart-btn'>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
