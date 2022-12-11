import React, { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { urlFor, client } from "../../client";
import aboutJson from "../../json_files/about.json";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    setAbouts(aboutJson);
    // const query = '*[_type == "abouts"]';

    // client.fetch(query).then((data) => {
    //   setAbouts(data);

    // });
  }, []);

  return (
    <>
      <h2 className="head-text">
        What We <span>Offer</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <Suspense fallback={<h1>Loading...</h1>}>
             
              <img src={about?.image}  />
            </Suspense>
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about?.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about?.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};


export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
