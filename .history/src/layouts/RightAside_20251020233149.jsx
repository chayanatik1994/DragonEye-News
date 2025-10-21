import React from 'react';

const categoryPromise = fetch("/categories.json").then((res)=>
res.json());
co
const RightAside = () => {
    return (
        <div>
            <h1>RightAside</h1>
        </div>
    );
};

export default RightAside;