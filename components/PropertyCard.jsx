import React from 'react';
import Image from 'next/image';

//Motion
import { motion } from 'framer-motion';

// Icons
import { MdVerified } from 'react-icons/md';
import { GiBedLamp } from 'react-icons/gi';
import { FaShower } from 'react-icons/fa';
import { RxRulerSquare } from 'react-icons/rx';
import Link from 'next/link';

//Image
import defaultImage from '../public/assets/images/default_image.jpg';
import millify from 'millify';

const PropertyCard = ({
  id,
  coverPhoto,
  price,
  rentFrequency,
  agency,
  baths,
  area,
  rooms,
  title,
  externalID,
  isVerified,
}) => {
  return (
    <Link
      href={`/property/${externalID}`}
      passHref
    >
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 400 }}
        className=" col-span-1 p-2 cursor-pointer max-w-[400px]"
        title={title}
      >
        <Image
          src={coverPhoto ? coverPhoto.url : defaultImage}
          alt={id}
          width={400}
          height={250}
          className="w-[400px] h-[250px] object-cover mb-4"
        />
        {/* layer - 1 */}
        <div className=" flex gap-2">
          {isVerified && (
            <div className="text-green-500">
              <MdVerified size={18} />
            </div>
          )}
          <p className="font-semibold text-lg">
            {millify(price)} {rentFrequency && `/ ${rentFrequency}`}
          </p>
          <div className=" w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] ml-auto">
            <Image
              src={agency.logo.url}
              alt={id}
              width={35}
              height={35}
              className="w-full h-full object-cover rounded-full "
            />
          </div>
        </div>
        {/* layer - 2 */}
        <div className="flex gap-5 font-medium mb-2">
          <div className="flex gap-2">
            <GiBedLamp
              size={20}
              className="text-red-500"
            />
            <p>{rooms}</p>
          </div>
          <span>|</span>
          <div className="flex gap-2">
            <FaShower
              size={20}
              className="text-red-500"
            />
            <p>{baths}</p>
          </div>
          <span>|</span>
          <div className="flex gap-2">
            <RxRulerSquare
              size={20}
              className="text-red-500"
            />
            <p>{millify(area)} sqrt</p>
          </div>
        </div>
        {/* Layer - 3 */}

        <p className="text-lg font-medium">
          {title.length > 30 ? `${title.slice(0, 30)}...` : title}
        </p>
      </motion.div>
    </Link>
  );
};

export default PropertyCard;
