/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Processes from "../components/processes";
import ServiceCardSwiper from "../components/Services";
import dynamic from "next/dynamic";
import WhySSHGroup from "../components/WhySSh";
import Technologies from "../components/TecWeUse";

// Load the problematic component dynamically on the client side
const DynamicLine = dynamic(() => import("../components/DynamicLine"), {
  ssr: false, // Disable server-side rendering for this component
});

function Index() {
  return (
    <>
      <div className="flex md:mt-20 justify-between w-full p-10">
        <div className="w-[90%]  my-auto ">
          <p className="inline-block mt-20 w-[90%] md:w-[60%] text-lg md:text-6xl md:inline-block md:tracking-wider md:leading-[100px] relative">
            We believe in turning ideas into reality. Let&apos;s build something
            great together.
            <DynamicLine />
            <button
              className="bg-CarrotOrange md:absolute md:translate-x-80 md:-translate-y-[6.2rem] flex items-center md:text-xl text-white  py-1 md:py-3 px-4 md:px-10 rounded-xl shadow-md hover-bg-dark-salem mt-8 transition delay-300 duration-300 ease-in-out"
              onClick={() => {
                // Handle the click event to show your "Let’s chat" form
              }}
            >
              <div>Let&apos; s chat</div>
              <FiArrowRight className="ml-3 mt-2 animate-bounce" />
            </button>
          </p>
        </div>
        <div className="w-[40%] md:w-[20%]   items-center  text-center relative">
          <img
            src="/img/phone-screen.svg"
            alt="Your Alt Text"
            className="w-[80%] md:w-full md:h-max mt-20 md:mt-10  -translate-x-1/3 md:-translate-x-1/2 object-cover skew-x-[-15deg] mx-auto mb-5 relative z-10"
          />
          <div className="absolute bottom-10 md:bottom-0 skew-x-[-15deg] -translate-x-1/4  left-[2rem] w-[80%] md:w-[14rem] h-[9rem] md:h-[28rem] opacity-30 shadow-2xl bg-salem shadow-salem rounded-xl"></div>
        </div>
      </div>
      <Processes />
      <ServiceCardSwiper />
      <WhySSHGroup />
      <Technologies />
    </>
  );
}

export default Index;
