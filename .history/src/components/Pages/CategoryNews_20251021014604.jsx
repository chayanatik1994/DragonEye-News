import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CategoryNews = () => {
    const { id } = useParams();
    const [categoryNews, setCategoryNews] = useState([]);
    
    useEffect(() => {
        fetch("/news.json") // assuming all news is here
            .then(res => res.json())
            .then(data => {
                const filteredNews = data.filter(news => news.category_id == id);
                setCategoryNews(filteredNews);
            });
    }, [id]);

    return (
        <div>
            <h1>Category News - {id}</h1>
            <ul>
                {categoryNews.map(news => (
                    <li key={news.id}>{news.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryNews;
