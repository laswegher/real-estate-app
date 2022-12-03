import React, { useState } from 'react';

//Components
import Property from '../components/Property';
import SearchFilter from '../components/SearchFilter';
//Icons
import { BiFilter } from 'react-icons/bi';
import { useRouter } from 'next/router';
import { fetchApi, options } from '../fetch_data';

const search = ({ properties }) => {
  const [toggleFilter, setToggleFilter] = useState(false);
  const router = useRouter();

  return (
    <div className="w-full max-w-6xl mx-auto py-10">
      <div
        onClick={() => setToggleFilter((prevState) => !prevState)}
        className="w-full flex items-center justify-center gap-4 cursor-pointer bg-red-200"
      >
        <p className="text-lg font-medium">Search Property By Id</p>
        <BiFilter size={30} />
      </div>
      <p className="text-xl font-medium capitalize">
        Properties {router.query.purpose}
      </p>
      {toggleFilter && <SearchFilter />}
      <Property data={properties} />
    </div>
  );
};

export default search;

export async function getServerSideProps({ query }) {
  const purpose = query.purpose || 'for-rent';
  const rentFrequency = query.rentFrequency || 'yearly';
  const minPrice = query.minPrice || '0';
  const maxPrice = query.maxPrice || '1000000';
  const minBaths = query.minBaths || '0';
  const minRooms = query.minRooms || '0';
  const sort = query.sort || 'price-desc';
  const maxArea = query.maxArea || '35000';
  // const furnishingStatus = query.furnishingStatus || '';
  const categoryExternalID = query.categoryExternalID || 4;
  const locationExternalIDs = query.locationExternalIDs || 5002;

  const data = await fetchApi(
    `https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${minBaths}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${minRooms}&sort=${sort}&areaMax=${maxArea}`,
    options
  );

  return {
    props: {
      properties: data?.hits,
    },
  };
}
