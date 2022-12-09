import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";
import Lottie from "react-lottie";
import * as workInProgress from "../../json_files/work_slide_lottie.json";
const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => (
  <div className="app__header app__flex h-[100vh] relative">
    <div className="flex md:flex-row flex-col w-full h-full justify-center md:justify-around items-center m-auto">
    <h2 className="head-text">
      We Help Startups <br />
      Launch 🚀  Their <span>Product</span> In the <br />
      New Era Of the <span><u>Internet</u></span>
    </h2>

    <div className="md:w-[600px] md:h-[600px] h-[90%]">
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: workInProgress,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        }}
        // height={500}
        // width={500}
      />
    </div>
    </div>
  </div>
);

export default Header;
