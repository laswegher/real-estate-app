// Components
import Property from '../components/Property';
import Banner from '../components/Banner';

// Utils
import { options, fetchApi } from '../fetch_data';

//constant
import { bannerRent, bannerSale } from '../constant';

export default function Home({
  propertiesForRent,
  propertiesForSale,
}) {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="px-4 max-w-max font-semibold text-4xl  border-b-2 border-red-500 my-4">
        Properties
        <span className=" text-red-500">For Rent</span>
      </h1>
      <Banner {...bannerRent} />
      <Property data={propertiesForRent} />

      <h1 className="px-4 max-w-max mt-10 font-semibold text-4xl  border-b-2 border-red-500">
        Properties
        <span className=" text-red-500">For Sale</span>
      </h1>
      <Banner {...bannerSale} />
      <Property data={propertiesForSale} />
    </div>
  );
}

//Taking API data
export async function getStaticProps() {
  const propertiesForRent = await fetchApi(
    `https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=6&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4`,
    options
  );
  const propertiesForSale = await fetchApi(
    `https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-sale&hitsPerPage=6&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4`,
    options
  );

  return {
    props: {
      propertiesForRent: propertiesForRent?.hits,
      propertiesForSale: propertiesForSale?.hits,
    },
  };
}
