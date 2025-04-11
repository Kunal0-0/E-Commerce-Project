import React from 'react';
import mainImage from '../assets/dl.beatsnoop 1.jpg';

const ImageSection = () => {
  return (
    <div className="w-full md:w-1/2 h-full flex justify-start items-start md:items-start p-4 md:p-8">
      <img
        src={mainImage}
        alt="Cart and Phone"
        className="w-full h-auto max-w-[600px] rounded-xl"
      />
    </div>
  );
};

export default ImageSection;
