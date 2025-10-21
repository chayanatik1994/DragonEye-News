import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const CategoryNews = () => {
    const {id} = useParams();
    const data = useLoaderData()
    co
    console.log(id);
    return (
        <div>
            <h1>CategoryNews- {id}</h1>
        </div>
    );
};

export default CategoryNews;