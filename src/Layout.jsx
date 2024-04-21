import React from 'react';
import Navbar from './NewsApi/Skeleton/Navbar';
import Footer from './NewsApi/Skeleton/Footer';

const Layout = ({ children }) => {
  return (
    <div style={{ fontFamily: 'Roboto, sans-serif', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div>
        <Navbar />
        <main style={{ flexGrow: 1 }}>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
