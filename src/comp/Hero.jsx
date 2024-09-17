import React from 'react';
const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      <div className='max-h-[500px] relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
            The <span className='text-blue-700'>Best</span>
          </h1>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
            <span className='text-blue-700'>Car</span> Visual Mods
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