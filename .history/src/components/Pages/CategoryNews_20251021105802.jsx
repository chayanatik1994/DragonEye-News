import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const CategoryNews = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const [categoryNews, setCategoryNews] = useState([]);

    useEffect(() => {
        let filteredNews = [];

        if (id === "0") {
            filteredNews = data; // show all news
        } else if (id === "1") {
            filteredNews = data.filter(news => news.others.is_today_pick === true);
        } else {
            filteredNews = data.filter(news => news.category_id == id); // default filter by category
        }

        setCategoryNews(filteredNews);
    }, [data, id]);

    return (
        <div>
            h2
        </div>
    );
};

export default CategoryNews;
