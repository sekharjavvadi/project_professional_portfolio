import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Testimonial.scss';
import testimonialJson from "../../json_files/testimonials.json";
import clientJson from "../../json_files/clients.json"

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {

    setTestimonials(testimonialJson)
    setBrands(clientJson)

    // const query = '*[_type == "testimonials"]';
    // const brandsQuery = '*[_type == "brands"]';

    // client.fetch(query).then((data) => {
    //   setTestimonials(data);
      
    // });

    // client.fetch(brandsQuery).then((data) => {
    //   setBrands(data);
      
    // });
  }, []);

  return (
    <>
    <h2 className="head-text">What <span>Client</span> say's about us</h2>
      {testimonials.length && (
        <>
        <div className='flex flex-col w-full justify-center items-center pt-[20px]'>
          <div className="app__testimonial-item app__flex">
            <div className='flex flex-col h-full justify-start items-start mt-[20px]'>
            <img src={urlFor(testimonials[currentIndex].imgurl)} alt={testimonials[currentIndex].name} />
            </div>
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

        <div className='flex flex-row w-[60%] justify-end'>
          <div className=" app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
          </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex cursor-pointer">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand?._id}
          >
            <img src={brand.image} alt={brand.title} onClick={() => {
              window.open(brand.link, '_blank');
            }} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg',
);
