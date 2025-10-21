import React, { Suspense } from 'react';
import Categories from '../Categories';

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={""<span className="loading loading-dots loading-xl"></span>
}>

            </Suspense>

           <Categories></Categories>
        </div>
    );
};

export default LeftAside;