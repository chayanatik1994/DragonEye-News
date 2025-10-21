import React from 'react';

const categoryPromise = fetch ("/categories.json").then((res)=>
res.json());


const Categories = () => {
    const categories = use (care)
    return (
        <div>
            <h2 className='font-bold'>All Categories</h2>
        </div>
    );
};

export default Categories;