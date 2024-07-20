import React from 'react';
import Marquee from 'react-fast-marquee';

interface ImageMarqueeProps {
  images?: string[];
}

const ImageMarquee: React.FC<ImageMarqueeProps> = ({ images = [] }) => {
  return (
    <div className='relative w-full flex justify-center'>
      <div className='absolute top-[280px] md:w-[70vw] lg:w-[60vw] w-[90vw] h-20 bg-gradient-black-transparent-black flex items-center'>
        <Marquee speed={50} gradient={false}>
          {images.map((image, index) => (
            <img
              key={index}
              className='object-cover h-full w-20 mx-6'
              src={image}
              alt={`Image ${index + 1}`}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default ImageMarquee;
