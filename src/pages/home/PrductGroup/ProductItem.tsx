import React from 'react';
import {PiHeartLight} from 'react-icons/pi'
import { CoffeeProduct } from '../../../types';

type ProductItemProps = {
    item: CoffeeProduct
};

const ProductItem:React.FC<ProductItemProps> = ({item}) => {
    
    return <div className='product_item'>
      <img src={item.imgSrc} alt=' coffee' width={24} height={39} />
        <p>{item.title}</p>
        <div className="price">
        <p>{item.sizes[0].price}</p>
        <p className='discount'>{item.sizes[0].discount}</p>
        <PiHeartLight size={24} className='favorite'/>
        </div>
    </div>
}
export default ProductItem;