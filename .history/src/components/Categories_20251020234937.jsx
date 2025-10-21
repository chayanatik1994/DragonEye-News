import { ca } from 'date-fns/locale';
import React, { use } from 'react';

const categoryPromise = fetch ("/categories.json").then((res)=>
res.json());


const Categories = () => {
    const categories = use (categoryPromise)
    return (
        <div>
            <h2 className='font-bold'>All Categories({categories.length})</h2>
            {
                categories.map(categories)
            }
        </div>
    );
};

export default Categories;