import React, { useContext } from 'react';
import dropdown from '../Assets/dropdown_icon.png';
import { ShopContext } from '../context/ShopContext';
import Item from '../components/item/Item';
import '../style/shopCategory.css';

const ShopCategory = (props) => {
  // Destructure all_products from the context
  const { all_products } = useContext(ShopContext);

  return (
    <div className='shop-category'>
      <img src={props.banner} alt={props.category} className='shop-category-banner' />
      <div className='allProduct'>
        <div className='shopCategory_index'>
          <p>Enjoy Your Shopping!</p>
        </div>
        <div className='shopCategory_items'>
          {all_products
            .filter(product => product.category === props.category) // Filter products by category
            .map((product) => (
              <Item
                key={product.id}
                image={product.image}
                name={product.name}
                new_price={product.new_price}
                old_price={product.old_price}
              />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShopCategory;
