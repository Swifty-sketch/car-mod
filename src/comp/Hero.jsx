import React from 'react';

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      <div className='max-h-[500px] relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/50 flex flex-col justify-center'>
          <h1 className='px-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold'>
            The <span className='text-gray-500'>Best</span>
          </h1>
          <h1 className='px-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold'>
            <span className='text-gray-500'>Car</span> Visual Mods
          </h1>
        </div>
        <img
          className='w-full max-h-[500px] object-cover'
          src='https://libertywalk-eu.com/cdn/shop/products/6_b15f338b-ffae-4f68-99a2-ac0ffd135a96.jpg?v=1674729893'
          alt='/'
        />
      </div>
    </div>
  );
};

export default Hero;
