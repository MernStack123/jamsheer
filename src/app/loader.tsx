import React from 'react';

const Loading = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-white text-black">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-black border-t-transparent"></div>
      <p className="mt-4 text-lg font-bold">Loading...</p>
    </div>
  );
};

export default Loading;
