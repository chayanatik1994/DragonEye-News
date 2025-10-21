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

            {/* Main content area */}
            <main className='w-11/12 mx-auto gap-3'>

            </main>

         

            {/* Additional layout sections (optional) */}
            <section className="right-nav"></section>

            {/* Main outlet to render nested routes */}
            <section className="main">
                <Outlet></Outlet>
            </section>
        </div>
    );
};

// Exporting HomeLayout component
export default HomeLayout;
