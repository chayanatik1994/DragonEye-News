import React from 'react';
import { useParams } from 'react-router';

const CategoryNews = () => {
    const {id} = useParams();
    const data 
    console.log(id);
    return (
        <div>
            <h1>CategoryNews- {id}</h1>
        </div>
    );
};

export default CategoryNews;