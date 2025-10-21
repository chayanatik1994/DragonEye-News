import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header/Header';
import LatestNews from '../components/Header/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/homelayout/LeftAside';
import RightAside from '../components/homelayout/RightAside'; // fixed import path

const HomeLayout = () => {
  return (
    <div>
      {/* Header Section */}
      <header>
        <Header />
      </header>

      {/* Breaking news / ticker section */}
      <section className="w-11/12 mx-auto gap-3">
        <LatestNews />
      </section>

      {/* Navigation bar */}
      <nav className="w-11/12 mx-auto gap-3">
        <Navbar />
      </nav>

      {/* Main content layout */}
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-4 mt-4">
        {/* Left sidebar */}
        <aside className="col-span-3">
          <LeftAside />
        </aside>

        {/* Main outlet area (page content) */}
        <section className="col-span-6">
          <Outlet />
        </section>

        {/* Right sidebar */}
        <aside className="col-span-3">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
