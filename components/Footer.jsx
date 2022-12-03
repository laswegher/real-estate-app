import React from 'react';

const Footer = () => {
  return (
    <div className="text-center h-20 max-w-6xl mx-auto flex flex-col items-center justify-center border-t">
      <p className="text-sm opacity-80 tracking-widest">
        Copyright 2022 RealEstate. All Rights Reserved.
      </p>
      <a
        className="font-semibold text-sm opacity-80 tracking-widest"
        href="https://www.ufuktekin.com"
        target="_blank"
      >
        www.ufuktekin.com
      </a>
    </div>
  );
};

export default Footer;
