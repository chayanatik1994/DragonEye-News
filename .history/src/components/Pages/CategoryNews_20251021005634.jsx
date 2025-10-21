import React from 'react';
import { useParams } from 'react-router';

const CategoryNews = () => {
    const obj = useParams();
    console.log(obj);
    return (
        <div>
            <h1>CategoryNews</h1>
        </div>
    );
};

export default CategoryNews;