import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import LatestNews from '../components/Header/LatestNews';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header />
      </header>

      <section className="w-11/12 mx-auto gap-3">
        <LatestNews />
      </section>

      <Navbar className="w-11/12 mx-auto gap-3">
        <div className="flex gap-4 items-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/career">Career</NavLink>
          <div className="login-btn"></div>
        </div>
      </Navbar>

      <main className="w-11/12 mx-auto py-5">
        <Outlet />
      </main>
    </div>
  );
};

export default HomeLayout;
