/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Your technology data
const technologies = [
  {
    name: "HTML",
    imageSrc: "/img/svg/html-logo.svg", // Replace with the actual image path
  },
  {
    name: "Python",
    imageSrc: "/img/svg/python-logo.svg", // Replace with the actual image path
  },
  {
    name: "CSS",
    imageSrc: "/img/svg/css_logo.svg", // Replace with the actual image path
  },
  {
    name: "JavaScript",
    imageSrc: "/img/svg/JavaScript_logo.svg", // Replace with the actual image path
  },
  {
    name: "Angular",
    imageSrc: "/img/svg/Angular_logo.svg", // Replace with the actual image path
  },
  {
    name: "objectiveC",
    imageSrc: "/img/svg/bjectivec-logo.svg", // Replace with the actual image path
  },
  {
    name: "Dart",
    imageSrc: "/img/svg/Dart_logo.svg", // Replace with the actual image path
  },
  {
    name: "Flutter",
    imageSrc: "/img/svg/flutter-logo.svg", // Replace with the actual image path
  },
  {
    name: "GO",
    imageSrc: "/img/svg/GO_logo.svg", // Replace with the actual image path
  },
  {
    name: "Kafka",
    imageSrc: "/img/svg/Apache_kafka.svg", // Replace with the actual image path
  },
  {
    name: "Cassandra",
    imageSrc: "/img/svg/Cassandra_logo.svg", // Replace with the actual image path
  },
  {
    name: "Docker",
    imageSrc: "/img/svg/Docker_logo.svg", // Replace with the actual image path
  },
  {
    name: "Elasticsearch",
    imageSrc: "/img/svg/Elasticsearch_logo.svg", // Replace with the actual image path
  },
  {
    name: "Java",
    imageSrc: "/img/svg/Java_logo.svg", // Replace with the actual image path
  },
  {
    name: "Kubernetes",
    imageSrc: "/img/svg/Kubernetes_logo.svg", // Replace with the actual image path
  },
  {
    name: "MongoDb",

    imageSrc: "/img/svg/MongoDb_logo.svg", // Replace with the actual image path
  },
  {
    name: "Postgresql",
    imageSrc: "/img/svg/Postgresql_elephant.svg", // Replace with the actual image path
  },
  {
    name: "React",
    imageSrc: "/img/svg/React-logosvg.svg", // Replace with the actual image path
  },
  ,
  {
    name: "React Native",
    imageSrc: "/img/svg/react-native.svg", // Replace with the actual image path
  },
  ,
  {
    name: "Rust",
    imageSrc: "/img/svg/Rust_logo.svg", // Replace with the actual image path
  },
  ,
  {
    name: "Swift",
    imageSrc: "/img/svg/Swift_logo.svg", // Replace with the actual image path
  },
  {
    name: "Tensorflow",
    imageSrc: "/img/svg/Tensorflow_logo.svg", // Replace with the actual image path
  },
  {
    name: "Vue",
    imageSrc: "/img/svg/Vue_logo.svg", // Replace with the actual image path
  },
  // Add more technologies with their image sources here
];

const Technologies = () => {
  return (
    <div className="">
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 8,
          },
          1024: {
            slidesPerView: 10,
          },
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          stopOnLastSlide: false,
          waitForTransition: true,
        }}
        modules={[Autoplay]}
        className="mySwiper !w-full"
      >
        {technologies.map((tech, index) => (
          <SwiperSlide
            key={index}
            className="align-middle mb-40 mt-10  !bg-myWhite p-4"
            style={{ height: "12rem" }}
          >
            <div className="flex align-middle   justify-center max-w-[100px] h-[100px] ">
              <img
                src={tech.imageSrc}
                alt={tech.name}
                className="my-auto mx-auto !max-h-[4rem]"
              />
            </div>
            <div className=" text-shark text-center w-full ">{tech.name}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Technologies;
