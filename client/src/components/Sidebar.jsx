import React from 'react';

function Sidebar() {
  return (
    <div className="bg-gray-800 w-64 p-4 flex flex-col space-y-4">
      {['Confession 1', 'Confession 2', 'Confession 3', 'Confession 4'].map((item, index) => (
        <button
          key={index}
          className="bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg text-lg font-medium transition"
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default Sidebar;