import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header/Header';
import LatestNews from '../components/Header/LatestNews';
import { NavLink } from 'react-router';
import Navbar from '../components/Navbar';
import Navbar  from ""

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
           <section className='w-11/12 mx-auto gap-3'>
             <LatestNews></LatestNews>
           </section>
         <nav className='w-11/12 mx-auto gap-3'>
        <Navbar >

        </Navbar>
         </nav>
 
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