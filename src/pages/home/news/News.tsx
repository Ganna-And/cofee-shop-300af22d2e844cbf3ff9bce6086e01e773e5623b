import React from "react";
import NewsItem from "./NewsItem";

interface NewsProps {
    data: any;
};

const News:React.FC<NewsProps> = ({data}) => {
   
    return (
    <div className="news_group" id='news'>
      <h1>{data.title}</h1>
      <div className="new_list">
        {data.newsItem.map((item:any)=>(
            <li className='product_group_li' key={item.id}>{<NewsItem item={item}/>}</li>
        ))}
        </div>
    </div>)
  
}
export default News;