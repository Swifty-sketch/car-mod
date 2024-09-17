import React, { useState } from "react";
import { Button } from "@material-tailwind/react";

const ContainerCard = ({ imageSrc, secondImageSrc, title, description }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative h-56 mb-4">
        <img
          src={hovered ? secondImageSrc : imageSrc}
          alt="card-image"
          className="w-full h-full object-cover rounded-lg transition-all duration-300"
        />
      </div>
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="mt-4 text-gray-600">{description}</p>
      <Button className="mt-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-6 py-3 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
        Read More
      </Button>
    </div>
  );
};

const ContainerSection = () => {
  const cardsData = [
    {
      imageSrc:
        "https://autoid.co/cdn/shop/products/ADRO-BMW-F87M2-SS-A14A20-1401_4_1620x1080_jpg.webp?v=1670576389&width=1620",
      secondImageSrc:
        "https://autoid.co/cdn/shop/products/ADRO-BMW-F87M2-SS-A14A20-1401_3_1550x1080_jpg_1550x.webp?v=1670576389",
      title: "Nissan",
      description:
        'Nissan wide body kits bring an aggressive, race-inspired look to models like the GT-R and 370Z, enhancing style and aerodynamics',
    },
    {
      imageSrc:
        "https://autoid.co/cdn/shop/files/adro-tesla-model-3-front-lip-v2-03_4fa04301-6ac3-4a5f-b74c-1ec4832d4997_800x_jpg_800x.webp?v=1696934057",
      secondImageSrc:
        "https://autoid.co/cdn/shop/files/adro-tesla-model-3-front-lip-v2-01_df2a0f26-6398-4dcb-9069-627966d2df65_800x_jpg.webp?v=1696934087&width=800",
      title: "Lexus Wide Body Kits",
      description:
        "Lexus kits add bold, luxury style to models like the RC F and IS, combining sleek design with performance enhancements.",
    },
    {
      imageSrc:
        "https://autoid.co/cdn/shop/files/gr86-brz-widebody-kit-front-q-left_1600x_jpg.webp?v=1687427486&width=1600",
      secondImageSrc:
        "https://autoid.co/cdn/shop/files/gr86-brz-widebody-kit-side-left_1600x_jpg.webp?v=1687427486&width=1600",
      title: "Volvo Wide Body Kits",
      description:
        "Volvo wide body kits give models like the S60 and V60 a sportier look, while maintaining the brand’s signature elegance.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      {cardsData.map((card, index) => (
        <ContainerCard
          key={index}
          imageSrc={card.imageSrc}
          secondImageSrc={card.secondImageSrc}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default ContainerSection;
