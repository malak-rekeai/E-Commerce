import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Breadcurm from '../components/Breadcrum/Breadcurm';
import { ShopContext } from '../context/ShopContext';
import '../style/product.css';

const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { product_id } = useParams();

  // Convert product_id to a string if the ID in products is a string
  const product = all_products.find((e) => e.id.toString() === product_id);

  if (!product) {
    return <div>Product not found!</div>;
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
          <p className='product-description'>
            This is a detailed description of {product.name}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className='product-prices'>
            <span className='new-price'>${product.new_price}</span>
            <span className='old-price'>${product.old_price}</span>
          </div>
          <button className='add-to-cart-btn'>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
