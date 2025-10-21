import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const CategoryNews = () => {
    const {id} = useParams();
    const data = useLoaderData()
    // console.log(data);
    // console.log(id,data);
    const [CategoryNews, setCategoryNews] = useState([]);
    useEffect (()=>{

        if(id ==="0"){
            setCategoryNews(data);
            return
        }else if (id="1"){
      const filteredNews = data.filter(news => news.others.is_today_pick == true

     );
     setCategoryNews(filteredNews);
        }else
  
    console.log(filteredNews);
    setCategoryNews(filteredNews);
    },[data, id])
    return (
        <div>
          Total {CategoryNews.length} News Found
        </div>
    );
};

export default CategoryNews;