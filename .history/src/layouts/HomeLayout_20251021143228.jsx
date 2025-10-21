import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header/Header';
import LatestNews from '../components/Header/LatestNews';
import { NavLink } from 'react-router';
import Navbar from '../components/Navbar';
import LeftAside from '../components/homelayout/LeftAside';
import RightAside from './RightAside';

// HomeLayout component acts as the main layout for the home page
const HomeLayout = () => {
    return (
        <div>
            {/* Header section */}
            <header>
                <Header></Header>
            </header>

            {/* Latest news section */}
            <section className='w-11/12 mx-auto gap-3'>
                <LatestNews></LatestNews>
            </section>

            {/* Navigation bar */}
            <nav className='w-11/12 mx-auto gap-3'>
                <Navbar></Navbar>
            </nav>

            {/* Main content section with left and right sidebar */}
            <main className='w-11/12 mx-auto my-3  grid grid-cols-12 gap-5'>
                {/* Left sidebar */}
                <aside className='col-span-3 sticky top-2 h-fit'>
                    <LeftAside></LeftAside>
                </aside>

                {/* Main content area for nested routes */}
                <section className='main col-span-6'>
                    <Outlet></Outlet>
                </section>

                {/* Right sidebar */}
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

// Exporting HomeLayout component
export default HomeLayout;
