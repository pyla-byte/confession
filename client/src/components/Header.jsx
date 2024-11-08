import React from 'react';

function Header() {
  return (
    <header className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-semibold">CONFEE</h1>
      <div className="flex space-x-4 items-center">
        <span className="bg-gray-700 py-1 px-3 rounded-full text-sm">GPT-4.0</span>
        <button className="text-white bg-gray-800 p-2 rounded-full">
          <i className="fas fa-user"></i>
        </button>
      </div>
    </header>
  );
}

export default Header;