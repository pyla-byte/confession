import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import ConfessionDisplay from './ConfessionDisplay';
import Footer from '../../components/Footer';

function AppLayout() {
  return (
    <div className="bg-gray-900 min-h-screen flex text-white">
      <Sidebar />
      <div className="flex-1 p-8 flex flex-col justify-between">
        <Header />
        <ConfessionDisplay />
        <Footer />
      </div>
    </div>
  );
}

export default AppLayout;