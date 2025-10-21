
import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoryPromise = fetch ("/categories.json").then((res)=>
res.json());

const Categories = () => {
    const categories = use (categoryPromise)
    return (
        <div className='grid grid-cols-1 mt-5 gap-3'>
            <h2 className='font-bold'>All Categories({categories.length})</h2>
            
           
        </div>
    );
};

export default Categories;