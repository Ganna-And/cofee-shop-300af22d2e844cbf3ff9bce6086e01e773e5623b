import React, { useState } from "react";
import "./ProductFull.css";
import { CoffeeProduct } from "../../../types";
import ProductItem from "../PrductGroup/ProductItem";
import { Link } from "react-router-dom";
import { Button } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCartItems } from "../../../features/language/cartSlice";
type ProductFullProps = {
  product: CoffeeProduct;
  otherProducts: any;
  randomProducts: any;
 
};

interface CartItem extends CoffeeProduct {
  price: number;
  selectedSize: string;
}

const ProductFull: React.FC<ProductFullProps> = ({ product, otherProducts, randomProducts }) => {

  const [price, setPrice] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>("M");


  const dispatch = useDispatch();
  const addedProducts = useSelector(selectCartItems)


  const addProductToCart = () => {
    const cartItem: CartItem = {
      ...product,
      price, 
      selectedSize 
    };

    dispatch(addToCart(cartItem))
  };
 


  const handlePriceSize = (size: string) => {
    setSelectedSize(size);
    if (size === 'L') {
      setPrice(19.99);
    } else if (size === 'XL') {
      setPrice(29.99);
    } else {
      setPrice(9.99);
    }
  };

  console.log(selectedSize)

console.log(addedProducts)
  return (
    <div className="container" style={{ marginTop: "10rem" }}>
      <h1>{product.title}</h1>
      <div className="full_product_top">
        <div className="img_wrapper">
          <img
            src={product.imgSrc}
            alt="coffee"
            style={{ height: "11rem" }}
          />
        </div>
        <div className="full_product_variety">
          <div className="full_product_price">
            <h3>Sizes</h3>
            <h4>{price}</h4>
          </div>
          <div className="full_product_sizes">
            <ul className="full_product_ul">
              {product.sizes.map((item) => (
                <li
                  className="full_product_li"
                  key={item.id} onClick={()=>handlePriceSize(item.size)}
                >
                  {item.size}
                </li>
              ))}
            </ul>
          </div>
          <button className="btn_intro" style={{height:'2.1rem'}}  onClick={addProductToCart}>{product.btn_txt}</button>
        </div>
      </div>
      <div className="full_product_description">
        <h3 className="description_text">{product.description}</h3></div>
    <div>
        <h1>{otherProducts.title}</h1>
        <ul className="product_list">{randomProducts.map((product:any)=>(
           <Link to={`/${product.id}`}><li key={product.id} ><ProductItem item={product} /></li></Link> 
        ))}</ul>
    </div>
    </div>
  );
};
export default ProductFull;
