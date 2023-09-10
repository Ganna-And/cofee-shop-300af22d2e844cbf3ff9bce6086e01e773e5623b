import React, { useState } from "react";
import "./ProductFull.css";
import { CoffeeProduct } from "../../../types";
import ProductItem from "../PrductGroup/ProductItem";
type ProductFullProps = {
  product: CoffeeProduct;
  otherProducts: any;
  randomProducts: any;
};

const ProductFull: React.FC<ProductFullProps> = ({ product, otherProducts, randomProducts }) => {

  const [price, setPrice] = useState(product.sizes[0].price);
  const [currentProduct, setCurrentProduct] = useState()

const handlePriceSize = (size:string)=>{
size === 'L' ? setPrice(product.sizes[1].price) :
size === 'XL' ? setPrice(product.sizes[2].price):
setPrice(product.sizes[0].price)
}
 
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
          <button className="btn_intro" style={{height:'2.1rem'}}>{product.btn_txt}</button>
        </div>
      </div>
      <div className="full_product_description">
        <h3 className="description_text">{product.description}</h3></div>
    <div>
        <h1>{otherProducts.title}</h1>
        <ul className="product_list">{randomProducts.map((product:any)=>(
            <li key={product.id} ><ProductItem item={product}/></li>
        ))}</ul>
    </div>
    </div>
  );
};
export default ProductFull;
