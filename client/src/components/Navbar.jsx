import React from "react";
import { motion } from "framer-motion";

import styles from "../style";
import { navVariants } from "../utils/motion";
import { react } from "../assets";

const Navbar = () => {
  return (
    <>
      <motion.nav
        variants={navVariants}
        hidden="hidden"
        whileInView="show"
        className="w-full py-6 flex justify-center items-center"
      >
        <div className="w-1/2 flex justify-start items-center cursor-pointer">
          <a href="/" className="flex justify-center items-center">
            <img src={react} alt="bookdes" className="w-[32px] h-[32px]" />

            <h1 className={`${styles.heading2} mx-5`}>BookDes</h1>
          </a>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
