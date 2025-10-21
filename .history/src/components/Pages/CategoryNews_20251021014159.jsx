import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router';

const CategoryNews = () => {
    const {id} = useParams();
    const data = useLoaderData()
    // console.log(data);
    // console.log(id,data);
    const []
    useEffect (()=>{
     const filteredNews = data.filter(news => news.category_id == id

     );
    console.log(filteredNews);
    },[data, id])
    return (
        <div>
            <h1>CategoryNews- {id}</h1>
        </div>
    );
};

export default CategoryNews;