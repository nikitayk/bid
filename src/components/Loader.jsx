import React from 'react';

const Loader = ({ message = "Loading..." }) => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full p-8 text-center">
      <div className="w-12 h-12 border-4 border-purple-500 border-dashed rounded-full animate-spin mb-4" />
      <p className="text-lg text-gray-600 dark:text-gray-300 animate-pulse">{message}</p>
    </div>
  );
};

export default Loader;
