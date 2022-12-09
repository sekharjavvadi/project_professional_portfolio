import React from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import {MdCheckCircle, MdCheckCircleOutline, } from "react-icons/md";
import { AiFillCheckSquare } from "react-icons/ai";

function Team() {
  const teamImages = {
    hemanth:
      "https://firebasestorage.googleapis.com/v0/b/spotmies-dev.appspot.com/o/website-assets%2Fhemanth.jpg?alt=media&token=98e2e887-0155-4f5f-a1a3-a1571f6d05e6",
    sekhar:
      "https://firebasestorage.googleapis.com/v0/b/spotmies-dev.appspot.com/o/website-assets%2Fsekhar.jpg?alt=media&token=4732c944-5547-4bab-a863-648c06cb174f",
    satish:
      "https://firebasestorage.googleapis.com/v0/b/spotmies-dev.appspot.com/o/website-assets%2Fsatish.jpeg?alt=media&token=5c0f8d93-3682-4209-86ef-00e20e04db2a",
    naveen:
      "https://firebasestorage.googleapis.com/v0/b/spotmies-dev.appspot.com/o/website-assets%2Fnaveen2%20copy.jpeg?alt=media&token=1ffe1cdd-9213-448d-9ae0-75584ec9f694",
  };

  return (
    <div className="w-[90%] h-full flex flex-row items-center justify-between">
      <div className="flex flex-col w-[50%] items-start">
        <h2 className="head-text2 text-left">
          We are a team of <br /> Experts.
        </h2>
        <br />
        <p className="w-[70%] text-justify ">
          We sprouted in 2019 with a couple of college friends with the same
          mindset on entrepreneurship, technologies & ethics. Those things made
          our startup bigger than before. We provide outstanding products and
          unsurpassed service deliver premium value to our customers & clients.
          We are personally accountable for delivering on our commitments,
          values and ethics.
        </p>
        <br />
        <div class="grid grid-rows-2 grid-flow-col gap-4 w-[90%]">
          <div className="flex flex-row items-center">
            <MdCheckCircleOutline size="1.8rem" className="text-slate-700"/> 
            <p className="text-2xl font-bold ml-[10px] text-slate-700 ">Creative</p>
          </div>
          <div className="flex flex-row items-center">
            <MdCheckCircleOutline size="1.8rem" className="text-slate-700"/> 
            <p className="text-2xl font-bold ml-[10px] text-slate-700  ">Problem solving</p>
          </div>
          <div className="flex flex-row items-center">
            <MdCheckCircleOutline size="1.8rem" className="text-slate-700"/> 
            <p className="text-2xl font-bold ml-[10px] text-slate-700 ">Quality of service</p>
          </div>
          <div className="flex flex-row items-center">
            <MdCheckCircleOutline size="1.8rem" className="text-slate-700"/> 
            <p className="text-2xl font-bold ml-[10px] text-slate-700 ">Growing Mindset</p>
          </div>
        </div>
      </div>
      <div className="w-[40%] relative h-[80%]">
        <div className="h-[35%] w-[50%] rounded-[10px] absolute top-0 left-0 bg-slate-200 drop-shadow-sm hover:drop-shadow-md">
          <img
            src={teamImages.hemanth}
            alt="Hemanth"
            className="h-full w-full object-cover rounded-[15px] p-[8px]"
          />
        </div>
        <div className="h-[62%] w-[50%] rounded-[10px] absolute bottom-0 left-0 bg-slate-200 drop-shadow-sm hover:drop-shadow-md">
          <img
            src={teamImages.sekhar}
            alt="Hemanth"
            className="h-full w-full object-cover rounded-[15px] p-[8px]"
          />
        </div>
        <div className="h-[62%] w-[48%] rounded-[10px] absolute top-0 right-0 bg-slate-200 drop-shadow-sm hover:drop-shadow-md">
          <img
            src={teamImages.satish}
            alt="Hemanth"
            className="h-full w-full object-cover rounded-[15px] p-[8px]"
          />
        </div>
        <div className="h-[35%] w-[48%] rounded-[10px] absolute bottom-0 right-0 bg-slate-200 drop-shadow-sm hover:drop-shadow-md">
          <img
            src={teamImages.naveen}
            alt="Hemanth"
            className="h-full w-full object-cover rounded-[15px] p-[8px]"
          />
        </div>
      </div>
    </div>
  );
}

export default AppWrap(
  MotionWrap(Team, "app__skills"),
  "skills",
  "app__primarybg"
);
