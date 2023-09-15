import React,{useState} from 'react';
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';
import { CoffeeProduct } from '../../../types';



type ProductGroupProps = {
    data:any
};

const ProductGroup:React.FC<ProductGroupProps> = ({data}) => {
 
  
    return <div className='product_group' id='menu'>
        <h1>{data.title}</h1>
        <div className="product_list">
        {data.products.map((item:any)=>(
            <Link to={`/${item.id}`} className='product_group_li' key={item.id} >{<ProductItem item={item}/>}</Link>
        ))}
        </div>
    </div>
}
export default ProductGroup;