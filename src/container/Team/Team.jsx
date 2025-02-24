import React from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { MdCheckCircle, MdCheckCircleOutline } from "react-icons/md";
import {
  AiOutlineApartment,
  AiOutlineApi,
  AiOutlineBulb,
  AiOutlineLaptop,
  AiOutlineLinkedin,
} from "react-icons/ai";
import teamJson from "../../json_files/team.json";
import { BsLinkedin } from "react-icons/bs";
import { motion } from 'framer-motion';
function Team() {
  const linkedinIcon = (linkedinUrl) => {
    const navigateToLinkedin = () => {
     
      window.open(linkedinUrl, "_blank");

    }
    return (
     
      <BsLinkedin  className=" cursor-pointer fade-in-animation" color="#0077B5" onClick={navigateToLinkedin}/>
   
      
      

    )
  }
  const photoCard = (
    <div className="w-[90%] md:w-[40%] md:h-[80%] relative h-[300px] mt-[15px] md:m-0 ">
      <div className="h-[35%] w-[50%] rounded-[10px] absolute top-0 left-0 bg-slate-200 drop-shadow-sm hover:drop-shadow-md"
      
      onMouseOver={() => {
        document.getElementById("hemanth-linkedin").style.display = "block";

      }}
      onMouseOut={() => {
        document.getElementById("hemanth-linkedin").style.display = "none";
      }}>
        <img
          src={teamJson.hemanth}
          alt="Hemanth"
          className="h-full w-full object-cover rounded-[15px] p-[8px]"
        />
          <div className="fixed bottom-5 right-5 hidden" id="hemanth-linkedin">
          {linkedinIcon("https://www.linkedin.com/in/hemanth-kumar-veeranala-967ba318a")}
        </div>
      </div>
      <div className="h-[62%] w-[50%] rounded-[10px] absolute bottom-0 left-0 bg-slate-200 drop-shadow-sm hover:drop-shadow-md"
      onMouseOver={() => {
        document.getElementById("sekhar-linkedin").style.display = "block";

      }}
      onMouseOut={() => {
        document.getElementById("sekhar-linkedin").style.display = "none";
      }}
      >
        <img
          src={teamJson.sekhar}
          alt="sekhar"
          className="h-full w-full object-cover rounded-[15px] p-[8px]"
        />
        <div className="fixed bottom-5 right-5 hidden" id="sekhar-linkedin">
          {linkedinIcon("https://www.linkedin.com/in/sekhar-javvadi-987380158")}
        </div>
      </div>
      <div className="h-[62%] w-[48%] rounded-[10px] absolute top-0 right-0 bg-slate-200 drop-shadow-sm hover:drop-shadow-md"
           onMouseOver={() => {
            document.getElementById("satish-linkedin").style.display = "block";
    
          }}
          onMouseOut={() => {
            document.getElementById("satish-linkedin").style.display = "none";
          }}>
        <img
          src={teamJson.satish}
          alt="Satish"
          className="h-full w-full object-cover rounded-[15px] p-[8px]"
        />
          <div className="fixed bottom-5 right-5 hidden" id="satish-linkedin">
          {linkedinIcon("https://www.linkedin.com/in/saride-satish-kumar-59a26a187")}
        </div>
      </div>
      <div className="h-[35%] w-[48%] rounded-[10px] absolute bottom-0 right-0 bg-slate-200 drop-shadow-sm hover:drop-shadow-md"
           onMouseOver={() => {
            document.getElementById("naveen-linkedin").style.display = "block";
    
          }}
          onMouseOut={() => {
            document.getElementById("naveen-linkedin").style.display = "none";
          }}
      >
        <img
          src={teamJson.naveen}
          alt="Hemanth"
          className="h-full w-full object-cover rounded-[15px] p-[8px]"
        />
          <div className="fixed bottom-5 right-5 hidden" id="naveen-linkedin">
          {linkedinIcon("https://www.linkedin.com/in/naveen-kumar-atava-318ba318a")}
        </div>
      </div>
    </div>
  );




  return (
    <div className="w-[90%] h-full flex flex-col items-center justify-between md:flex-row">
      <div className="flex flex-col md:w-[50%] w-full items-start">
        <h2 className="head-text2 text-left">
          {teamJson.heading1}
          <br />
          {teamJson.heading2}
        </h2>
        <br />

        <p className="w-full md:w-[70%] text-justify ">
          {teamJson.description}
        </p>
        <br />
        <div class="grid grid-rows-2 grid-flow-col md:gap-4 gap-2 w-full md:w-[90%] w-[100%]">
          <div className="flex flex-row items-center">
            <AiOutlineBulb className="md:w-[28px] md:h-[28px] w-[18px] h-[18px] text-slate-700" />
            <p className="text-md md:text-2xl font-bold md:ml-[10px] ml-[5px] text-slate-700 ">
              Creative
            </p>
          </div>
          <div className="flex flex-row items-center">
            <AiOutlineApartment className="md:w-[28px] md:h-[28px] w-[18px] h-[18px] text-slate-700" />
            <p className="text-md md:text-2xl font-bold md:ml-[10px] ml-[5px] text-slate-700  ">
              Problem solving
            </p>
          </div>
          <div className="flex flex-row items-center">
            <AiOutlineLaptop className="md:w-[28px] md:h-[28px] w-[18px] h-[18px] text-slate-700" />
            <p className="text-md md:text-2xl font-bold md:ml-[10px] ml-[5px] text-slate-700 ">
              Quality of service
            </p>
          </div>
          <div className="flex flex-row items-center">
            <AiOutlineApi className="md:w-[28px] md:h-[28px] w-[18px] h-[18px] text-slate-700" />
            <p className="text-md md:text-2xl font-bold md:ml-[10px] ml-[5px] text-slate-700 ">
              Like minded
            </p>
          </div>
        </div>
      </div>
      {photoCard}
    </div>
  );
}

export default AppWrap(
  MotionWrap(Team, "app__skills"),
  "team",
  "app__primarybg"
);
