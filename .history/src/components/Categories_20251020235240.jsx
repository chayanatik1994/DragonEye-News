
import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch ("/categories.json").then((res)=>
res.json());


const Categories = () => {
    const categories = use (categoryPromise)
    return (
        <div className='grid grid-cols-1 mt-5'>
            <h2 className='font-bold'>All Categories({categories.length})</h2>
            {
                categories.map(category =><NavLink to=''>{category.name}</NavLink>)
            }
        </div>
    );
};

export default Categories;