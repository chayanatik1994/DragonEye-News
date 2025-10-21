import React from 'react';
import { Outlet } from 'react-router';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <He
            </header>
            <main></main>
            <section className="left-nav"></section>
            <section className="right-nav"></section>
            <section className="main">
            <Outlet>

            </Outlet>

            </section>
        </div>
    );
};

export default HomeLayout;