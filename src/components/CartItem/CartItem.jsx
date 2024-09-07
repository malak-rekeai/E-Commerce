import React, { useContext } from 'react';
import './cartItem.css';
import { ShopContext } from '../../context/ShopContext';

const CartItem = () => {
  const { cart, all_products, addToCart, removeFromCart, cartTotal, cartItemsCount } = useContext(ShopContext);

  return (
    <div className='cartItems'>
      <h2>Your Cart</h2>
      {cartItemsCount() === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {Object.keys(cart).map((id) => {
            if (cart[id] > 0) {
              const product = all_products[id];
              return (
                <div className='cart-item' key={id}>
                  <img src={product.image} alt={product.name} />
                  <div className='item-info'>
                    <p>{product.name}</p>
                    <p>Quantity: {cart[id]}</p>
                    <p>Price: ${product.new_price}</p>
                    <button onClick={() => addToCart(id)}>Add</button>
                    <button onClick={() => removeFromCart(id)}>Remove</button>
                  </div>
                </div>
              );
            }
            return null;
          })}
          <div className='cart-total'>
            <p>Total: ${cartTotal().toFixed(2)}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default CartItem;
