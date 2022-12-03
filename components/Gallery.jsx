import Image from 'next/image';
import React from 'react';
import {
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
} from 'react-icons/fa';
const Gallery = ({ photos }) => {
  const left = () => {
    document.getElementById('carousel').scrollBy({
      left: -600,
      behavior: 'smooth',
    });
  };
  const right = () => {
    document.getElementById('carousel').scrollBy({
      left: 600,
      behavior: 'smooth',
    });
  };

  return (
    <div className="mt-10 mb-5 max-w-6xl mx-auto">
      <div
        id="carousel"
        className="flex overflow-x-scroll items-center  gap-4"
      >
        {photos.map((photo) => {
          return (
            <Image
              placeholder="blur"
              blurDataURL={photo.url}
              key={photo.id}
              src={photo.url}
              alt={photo.id}
              width={600}
              height={400}
              className="object-cover"
              sizes="(max-width:500px) 300px, (max-width:1023px) 400px, 600px"
            />
          );
        })}
      </div>
      <div className="p-4 flex justify-between cursor-pointer">
        <FaLongArrowAltLeft
          onClick={left}
          size={30}
        />
        <FaLongArrowAltRight
          onClick={right}
          size={30}
        />
      </div>
    </div>
  );
};

export default Gallery;
