import React, { useState } from 'react';
import Link from 'next/link';
// Framer Motion
import { motion } from 'framer-motion';
//Constant data
import { navItems } from '../constant';
//Icons
import { AiOutlineBars, AiOutlineClose } from 'react-icons/ai';
import {
  RiHomeHeartLine,
  RiSearchLine,
  RiFolderKeyholeLine,
  RiKey2Line,
} from 'react-icons/ri';

// Framer motion variants
const list = {
  close: {
    opacity: 0,
  },
  open: {
    opacity: 1,
  },
};
const items = {
  close: {
    x: -200,
  },
  open: {
    x: 0,
  },
};

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle((prevState) => !prevState);
  };
  return (
    <div className="relative overflow-hidden h-20 flex items-center justify-center px-4">
      <div className="w-full  max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <p className="text-2xl font-extrabold text-[#444] tracking-wide border-b-2 border-[#333] max-w-max font-Oswald">
            RealEstate
          </p>
        </Link>

        {/* Navigation */}
        <nav className="hidden sm:block">
          <ul className="flex gap-5">
            {navItems.map((item) => (
              <Link
                href={item.link}
                key={item.id}
              >
                <motion.li
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 500 }}
                  className="uppercase text-lg font-medium tracking-wide"
                >
                  {item.title}
                </motion.li>
              </Link>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Icon */}
        <div
          onClick={handleToggle}
          className="block sm:hidden"
        >
          {!toggle ? (
            <AiOutlineBars size={25} />
          ) : (
            <AiOutlineClose size={25} />
          )}
        </div>

        {/* Mobile Navigation */}
        <motion.ul
          variants={list}
          initial="close"
          animate={toggle ? 'open' : 'close'}
          className="overflow-hidden absolute top-[100px] right-5 bg-white p-10 z-20 rounded-xl w-[90%] "
        >
          <Link href="/">
            <motion.li
              variants={items}
              whileHover={{ scale: 1.1 }}
              className="uppercase font-semibold tracking-wider text-xl mb-4  flex gap-4 items-start"
            >
              <RiHomeHeartLine size={23} /> Home
            </motion.li>
          </Link>

          <Link href="/search">
            <motion.li
              variants={items}
              whileHover={{ scale: 1.1 }}
              className="uppercase font-semibold tracking-wider text-xl mb-4  flex gap-4 items-start"
            >
              <RiSearchLine size={23} /> Search
            </motion.li>
          </Link>

          <Link href="/search?purpose=for-sale">
            <motion.li
              variants={items}
              whileHover={{ scale: 1.1 }}
              className="uppercase font-semibold tracking-wider text-xl mb-4  flex gap-4 items-start"
            >
              <RiFolderKeyholeLine size={23} /> Buy Property
            </motion.li>
          </Link>

          <Link href="/search?purpose=for-rent">
            <motion.li
              variants={items}
              whileHover={{ scale: 1.1 }}
              className="uppercase font-semibold tracking-wider text-xl mb-4  flex gap-4 items-start "
            >
              <RiKey2Line size={25} /> Rent Property
            </motion.li>
          </Link>
        </motion.ul>
      </div>
    </div>
  );
};

export default Header;
