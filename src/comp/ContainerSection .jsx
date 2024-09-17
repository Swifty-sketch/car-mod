import React from 'react';

const ContainerCard = ({ title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="mt-4 text-gray-600">
        {description}
      </p>
      <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-6 py-3 me-2 mb-2 mt-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
        Shop
    </button>


    </div>
  );
};

const ContainerSection = () => {
  const cardsData = [
    {
      title: 'Nissan',
      description:
        'Nissan wide body kits bring an aggressive, race-inspired look to models like the GT-R and 370Z, enhancing style and aerodynamics.',
    },
    {
      title: 'Lexus',
      description:
        'Lexus kits add bold, luxury style to models like the RC F and IS, combining sleek design with performance enhancements.',
    },
    {
      title: 'Volvo',
      description:
        'Volvo wide body kits give models like the S60 and V60 a sportier look, while maintaining the brand’s signature elegance.',
    },
    
  ];

  return (
    <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      {cardsData.map((card, index) => (
        <ContainerCard
          key={index}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default ContainerSection;
