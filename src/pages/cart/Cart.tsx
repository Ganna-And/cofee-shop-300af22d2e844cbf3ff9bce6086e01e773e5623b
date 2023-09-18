import React, { useEffect, useState } from 'react';
import './Cart.css';
import {PiTrashThin} from'react-icons/pi';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../features/language/cartSlice';
import { addToCart, removeFromCart } from '../../features/language/cartSlice';

type CartProps = {};

const Cart: React.FC<CartProps> = () => {
  const dispatch = useDispatch();
  const productsInCart = useSelector(selectCartItems);
  const [selectedQuantities, setSelectedQuantities] = useState<{ [key: number]: number }>({});
  const deliveryPrice = 10;

  // Retrieve cart data from local storage when the component mounts
  useEffect(() => {
    const cartItemsFromLocalStorage = localStorage.getItem('cartItems');
    if (cartItemsFromLocalStorage) {
      // Parse the JSON if it exists
      const parsedCartItems = JSON.parse(cartItemsFromLocalStorage);

      // Dispatch actions to add each item from local storage to the Redux store
      Object.values(parsedCartItems).forEach((item: any) => {
        dispatch(addToCart(item));
      });
    }
  }, [dispatch]);

  // Function to handle quantity change for a specific product
  const handleQuantityChange = (productId: number, quantity: number) => {
    setSelectedQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: quantity,
    }));
  };

  // Calculate the total price of all items in the cart
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const product of productsInCart) {
      const quantity = selectedQuantities[product.id] || 0;
      totalPrice += quantity * product.price;
    }
    return totalPrice;
  };

  return (
    <div className="container_cart">
      <div className='cart_items_wrapper'>
        {productsInCart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          productsInCart.map((product: any) => (
            <div key={product.id} className="cart_item">
              <img src={product.imgSrc} width={60} alt="" />
              <div>
                <h3>{product.title}</h3>
                <h4>{product.selectedSize}</h4>
                <h4>{product.price}</h4>
              </div>
              <label htmlFor={`quantity-${product.id}`}></label>
              <select
                className="cart-dropdown-select"
                id={`quantity-${product.id}`}
                value={selectedQuantities[product.id] || 0}
                onChange={(e) =>
                  handleQuantityChange(product.id, parseInt(e.target.value))
                }
              >
                <option value={0} className="cart-dropdown-option">
                  0
                </option>
                <option value={1} className="cart-dropdown-option">
                  1
                </option>
                <option value={2} className="cart-dropdown-option">
                  2
                </option>
                <option value={3} className="cart-dropdown-option">
                  3
                </option>
              </select>
              <PiTrashThin
                size={32}
                className='icon_cart_remove'
                onClick={() => dispatch(removeFromCart(product.id))}
              />
            </div>
          ))
        )}
      </div>
      <div className="cart_right">
        <h1>Payment Summary</h1>
        <h3>Total Price: {calculateTotalPrice().toFixed(2)}</h3>
        <h3>Delivery: {deliveryPrice}$</h3>
        <h3>Total: {(calculateTotalPrice() + deliveryPrice).toFixed(2)}</h3>
        <button className="btn_intro cart">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;

    
