import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Not = () => {
  return (
    <div className='hero'>
      <div className='text-center hero-content'>
        <div className='max-w-lg'>
          <h1 className='text-8xl mb-8'>Ooops!!!</h1>
          <p className='mb-8'>Page Not Found</p>
          <Link to='/' className='btn btn-accent btn-lg flex items-center justify-center space-x-2 hover:bg-gray-600 hover:text-white'>
            <FaHome />
            <span>Back Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Not;
