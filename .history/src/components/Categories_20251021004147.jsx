import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className='grid grid-cols-1 mt-5 gap-3'>
      <h2 className='font-bold'>All Categories ({categories.length})</h2>
      {categories.map(category => (
        <NavLink
          key={category.id}
          to={`/category/${category.id}`} // correct dynamic route
          className="btn bg-base-100 border-0 hover:bg-base-200"
        >
          {category.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
