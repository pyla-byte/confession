import React from 'react';

function ConfessionDisplay() {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col space-y-4">
      <h2 className="text-xl font-semibold">CONFESSION 1</h2>
      <hr className="border-gray-700" />
      <p className="text-gray-400 text-sm leading-relaxed overflow-y-auto max-h-[500px]">
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled...
        "In moments of quiet, when all the noise and expectations fade, I feel the weight of choices I've made. There's a thrill in the unknown, a comfort in rebellion, and a certain satisfaction in dancing on the edge of what others deem acceptable. Yet, I wonder if the exhilaration is worth the quiet regret that follows, lingering in the shadows of my thoughts. I know I am not alone in this feeling; perhaps we are all wanderers, secretly searching for freedom in places we know we shouldn’t go. And perhaps, this silent craving for chaos is the most human part of us all."


        {/* Add the rest of the text here */}
      </p>
      <div className="flex space-x-4 mt-4">
        <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg">
          <i className="fas fa-pen"></i>
        </button>
        <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg">
          <i className="fas fa-trash"></i>
        </button>
        <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg">
          <i className="fas fa-share"></i>
        </button>
      </div>
    </div>
  );
}

export default ConfessionDisplay;