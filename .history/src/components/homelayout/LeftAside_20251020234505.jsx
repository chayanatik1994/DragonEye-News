import React, { Suspense } from 'react';
import Categories from '../Categories';

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={""}>

            </Suspense>

           <Categories></Categories>
        </div>
    );
};

export default LeftAside;