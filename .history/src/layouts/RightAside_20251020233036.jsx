import React from 'react';
fetch("/categories.json")
  .then(res)
  .then(data => console.log(data));
console.log(categoryPromise);
const RightAside = () => {
    return (
        <div>
            <h1>RightAside</h1>
        </div>
    );
};

export default RightAside;