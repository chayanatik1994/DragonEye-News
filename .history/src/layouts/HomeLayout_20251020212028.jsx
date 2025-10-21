import React from 'react';
import { NavLink, Outlet } from 'react-router';
import Header from '../components/Header/Header';
import LatestNews from '../components/Header/LatestNews';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-base-100">
      {/* Header */}
      <header>
        <Header />
      </header>

      {/* Latest News */}
      <section className="w-11/12 mx-auto my-3">
        <LatestNews />
      </section>

      {/* Navbar */}
      <nav className="w-11/12 mx-auto flex items-center justify-between py-3 border-b">
        <Navbar>
          <div className="flex gap-6">
            <NavLink to="/" className="nav">Home</NavLink>
            <NavLink to="/about" className="nav">About</NavLink>
            <NavLink to="/career" className="nav">Career</NavLink>
          </div>
          <div className="login-btn"></div>
        </Navbar>
      </nav>

      {/* Main Content */}
      <main className="flex flex-1 w-11/12 mx-auto py-5">
        <section className="left-nav w-1/5"></section>
        <section className="main flex-1 px-5">
          <Outlet />
        </section>
        <section className="right-nav w-1/5"></section>
      </main>
    </div>
  );
};

export default HomeLayout;
