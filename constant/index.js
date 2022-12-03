// Images
import bannerImageSale from '../public/assets/images/sale_house_image.jpg';
import bannerImageRent from '../public/assets/images/rent_house_image.jpg';

export const bannerSale = {
  subTitle: 'buy a home',
  title_1: 'find, buy & own',
  title_2: 'your dream home',
  text: 'eplore from apartments, builder floors, villas and more',
  buttonText: 'explore buying',
  image: bannerImageSale,
  linkName: '/search?purpose=for-sale',
};

export const bannerRent = {
  subTitle: 'rent a home',
  title_1: 'rental homes for',
  title_2: 'everyone',
  text: 'eplore from apartments, builder floors, villas and more',
  buttonText: 'explore renting',
  image: bannerImageRent,
  linkName: '/search?purpose=for-rent',
};

export const navItems = [
  {
    id: 'home',
    title: 'home',
    link: '/',
  },
  {
    id: 'search',
    title: 'search',
    link: '/search',
  },
  {
    id: 'buy property',
    title: 'buy property',
    link: '/search?purpose=for-sale',
  },
  {
    id: 'rent property',
    title: 'rent property',
    link: '/search?purpose=for-rent',
  },
];
