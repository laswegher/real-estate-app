import React from 'react';
// 3th party
import { millify } from 'millify';
// Constant Data
import { fetchApi, options } from '../../fetch_data';
//Components
import Gallery from '../../components/Gallery';
//Icons
import { MdVerified } from 'react-icons/md';
import { GiBedLamp } from 'react-icons/gi';
import { FaShower } from 'react-icons/fa';
import { RxRulerSquare } from 'react-icons/rx';

const propertyDetail = ({ property }) => {
  const {
    photos,
    isVerified,
    rentFrequency,
    rooms,
    baths,
    area,
    title,
    price,
    description,
    furnishingStatus,
    purpose,
    type,
    amenities,
  } = property;

  return (
    <div className="max-w-6xl mx-auto px-4">
      <Gallery photos={photos} />

      {/* Price-Detail */}
      <div className="flex gap-4 mb-2">
        {isVerified && (
          <MdVerified
            className="text-green-500"
            size={25}
          />
        )}
        <p className="font-semibold capitalize">
          AED {millify(price)} {rentFrequency && `/ ${rentFrequency}`}
        </p>
      </div>

      {/* Detail */}
      <div className="flex gap-4 mb-2">
        <div className="flex gap-4">
          <p>{rooms}</p>{' '}
          <GiBedLamp
            className="text-red-500"
            size={20}
          />{' '}
        </div>
        <p>|</p>
        <div className="flex gap-4">
          <p>{baths}</p>{' '}
          <FaShower
            className="text-red-500"
            size={20}
          />{' '}
        </div>
        <p>|</p>
        <div className="flex gap-4">
          <p>{millify(area)} sqrt</p>{' '}
          <RxRulerSquare
            className="text-red-500"
            size={20}
          />{' '}
        </div>
      </div>

      {/* Title */}
      <p className="font-medium text-lg mb-2">{title}</p>

      {/* Description */}
      <p className="tracking-wide lead">{description}</p>

      {/* Extra Details */}
      <div className="capitalize flex items-center justify-between flex-wrap my-4">
        <div className="flex items-center gap-8">
          <p className="font-semibold text-lg">purpose</p>
          <p className="border-b border-red-500 tracking-wide">
            {purpose}
          </p>
        </div>
        <div className="flex items-center gap-8">
          <p className="font-semibold text-lg">type</p>
          <p className="border-b border-red-500 tracking-wide">
            {type}
          </p>
        </div>
        <div className="flex items-center gap-8">
          <p className="font-semibold text-lg">furnishingStatus</p>
          <p className="border-b border-red-500 tracking-wide">
            {furnishingStatus}
          </p>
        </div>
      </div>

      {/* Amenities */}
      <div className="my-8">
        <p className="max-w-max text-xl font-semibold border-b-2 border-red-500 mb-4">
          Amenities
        </p>
        {!amenities.length && <p>There is nothing to show</p>}
        <div className="flex flex-wrap gap-x-10 gap-y-3 md:gap-x-16 md:gap-y-6">
          {amenities.map((item) => {
            return (
              <div
                className=""
                key={item.text}
              >
                <p className="text-md font-medium mb-2">
                  {item.text}
                </p>
                <div className="flex gap-4 flex-wrap">
                  {item.amenities.map((amenity) => {
                    return (
                      <p
                        key={amenity.text}
                        className="max-w-max bg-red-300 rounded-lg text-white p-2 text-sm md:text-md"
                      >
                        {amenity.text}
                      </p>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default propertyDetail;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(
    `https://bayut.p.rapidapi.com/properties/detail?externalID=${id}`,
    options
  );

  return {
    props: { property: data },
  };
}
