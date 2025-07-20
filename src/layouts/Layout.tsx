import React from 'react';

import Footer from '@components/Footer';
import Navbar from '@components/Navbar';

// eslint-disable-next-line react/prop-types
const Layout: React.FC<{ component: React.ReactNode }> = ({ component }) => {
  return (
    <>
      <Navbar />
      <main>{component}</main>
      <Footer />
    </>
  );
};

export default Layout;
