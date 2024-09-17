import React from 'react';
import Navbar from './comp/Navbar';  // Import the Navbar component
import Hero from './comp/Hero';
import ContainerSection from './comp/ContainerSection ';
import './index.css';  // Import Tailwind CSS file

const App = () => {
  return (
    <div>
      <Navbar />  {/* Render the Navbar */}
      <Hero/>
      <ContainerSection/>
    </div>
  );
};

export default App;
