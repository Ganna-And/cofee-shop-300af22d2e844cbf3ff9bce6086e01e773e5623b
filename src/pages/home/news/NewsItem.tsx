import React from 'react';

interface NewsItemProps {
    item:any
};

const NewsItem:React.FC<NewsItemProps> = ({item}) => {
    
    return <div className='news_item'>
    <img src={item.imgSrc} alt=' coffee' className='news_img' />
      <h4>{item.title}</h4>
      <p style={{marginLeft:'2rem'}}>{item.description}</p>
      </div>
  
}
export default NewsItem;