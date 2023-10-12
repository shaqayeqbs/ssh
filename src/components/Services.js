/* eslint-disable @next/next/link-passhref */
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

const services = [
  {
    title: "Mobile App Development",
    description: "We create powerful native iOS and Android mobile apps.",
  },
  {
    title: "Web Development",
    description:
      "We deliver robust web interfaces and high-load back-end infrastructures with great usability and adaptivity.",
  },
  {
    title: "Design",
    description:
      "We follow trends in UI/UX and industry standards while infusing artistic vision into each product.",
  },
  {
    title: "Custom Software Development",
    description: "We develop software for any business task.",
  },
  {
    title: "AI Development",
    description: "Sophisticated machine learning solutions.",
  },
];

const ServiceCardSwiper = () => {
  return (
    <div className="py-10 pb-20 text-shark">
      <h1 className="text-center mb-8 text-2xl mx-2 md:mx-32 my-auto align-middle">
        Our &nbsp;
        <span className="text-CarrotOrange font-semibold text-4xl">
          services
        </span>
      </h1>
      <div className="md:flex  justify-center gap-4">
        {services.map((service, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/5 p-2">
            <div className="p-2 pb-16 w-full h-full rounded-lg relative bg-salem/10  px-3 shadow-md">
              <h3 className="p text-xl font-bold text-salem mt-4 mb-2">
                {service.title}
              </h3>
              <p className="py-2 font-display my-2 text-ellipsis text-shark">
                {service.description}
              </p>
              <Link
                href="/services"
                className="no-underline flex absolute bottom-4 left-1/2 transform -translate-x-1/2 text-myWhite p-2 px-4 rounded-lg bg-salem"
              >
                <div>explore</div>
                <div className="mx-2 my-auto">
                  <FiArrowRight />
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCardSwiper;
