import React from 'react';
import Image from 'next/image';

//Framer Motion
import { motion } from 'framer-motion';

const Banner = ({
  subTitle,
  title_1,
  title_2,
  image,
  text,
  buttonText,
}) => (
  <div className="max-w-6xl mx-auto flex sm:flex-row flex-col-reverse items-start px-4 md:items-center gap-10 my-10">
    <div className="flex-2 max-w-[500px] h-[350px]">
      <Image
        src={image}
        alt={title_1}
        width={500}
        height={350}
        priority
        className="w-full h-full object-cover"
      />
    </div>
    <div className="flex-1">
      <p className="text-lg uppercase font-medium opacity-80">
        {subTitle}
      </p>
      <h2 className=" max-w-max text-3xl capitalize font-semibold my-2">
        {title_1}
      </h2>
      <h2 className="border-b-2 border-red-500 max-w-max text-3xl capitalize font-semibold mb-4">
        {title_2}
      </h2>
      <p className="tracking-widest capitalize font-medium text-lg max-w-[300px]">
        {text}
      </p>
      <motion.button
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.06 }}
        transition={{ type: 'spring', stiffness: 400 }}
        className="border rounded-sm mt-2 font-medium capitalize tracking-wide  px-3 py-1 border-red-500"
      >
        {buttonText}
      </motion.button>
    </div>
  </div>
);

export default Banner;
