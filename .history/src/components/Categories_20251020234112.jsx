import React from 'react';

const categorypromise = fetch ("/categories.json").then((res)=>
res.json());


const Categories = () => {
    const categories = use (categoryPromise)
    return (
        <div>
            <h2 className='font-bold'>All Categories</h2>
        </div>
    );
};

export default Categories;