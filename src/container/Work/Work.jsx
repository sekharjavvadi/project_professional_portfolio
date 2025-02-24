import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Work.scss";
import workJson from "../../json_files/work.json";

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works"]';

    console.log(workJson);
    setWorks(workJson);
    console.log(workJson);

    // in setfilterwork show only 4 items at a time

    setFilterWork(workJson.slice(0, 4));

    // client.fetch(query).then((data) => {
    //   setWorks(data);
    //   console.log(data);

    //   setFilterWork(data);
    // });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };
  const navigateToProject = (index) => {
    const project = works[index];
    if (project.completed) {
      return window.open(project.projectLink, "_blank");
    }
    alert("Project is under development");
  };

  return (
    <>
      <h2 className="head-text">
        Our Creative <span>Portfolio</span> Section
      </h2>

      {filterSection({ arrayy: ["All", "Web 3", "Web 2"] })}

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.image} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <motion.div
                  onClick={() => navigateToProject(index)}
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{ duration: 0.25 }}
                  className="app__flex"
                >
                  <AiFillEye />
                </motion.div>

                {/* <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a> */}
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text text-ellipsis" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      {works.length !== filterWork.length && activeFilter === "All"
        ? filterSection({
            arrayy: ["Show More"],
            onClick: () => {
              handleWorkFilter("All");
            },
          })
        : null}
    </>
  );

  function filterSection({ onClick, arrayy }) {
    return (
      <div className="app__work-filter">
        {arrayy?.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              if (onClick != null) {
                return onClick(item);
              }
              handleWorkFilter(item);
            }}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>
    );
  }
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
