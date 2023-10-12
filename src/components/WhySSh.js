import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const slideVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const reasons = [
  {
    title: "Customer-Centric Approach",
    description:
      "We prioritize our clients' success, understanding your unique needs and delivering tailored solutions that drive your business growth.",
  },
  {
    title: "Collaboration and Transparency",
    description:
      "We value open communication and collaboration, involving our clients at every stage of the development process to ensure alignment with expectations.",
  },
  {
    title: "Innovation and Excellence",
    description:
      "As a team on the cutting edge of technology trends, we consistently deliver innovative, high-quality solutions.",
  },
  {
    title: "Integrity and Trust",
    description:
      "We build relationships based on integrity and trust, delivering on our promises and maintaining professionalism at all times.",
  },
];

const WhySSHGroup = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the viewport width is less than a certain threshold (e.g., 768px for mobile)
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="mt-10 mb-40 md:mb-20 h-screen md:h-max w-full">
      <h2 className="text-lg md:text-4xl mb-8 font-semibold text-center">
        Why
        <span className="text-CarrotOrange text-2xl md:text-5xl ">
          &nbsp;SSH&nbsp;
        </span>
        Group?
      </h2>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={slideVariants}
        className="w-full !h-[12rem]"
      >
        <div className="flex flex-wrap justify-center">
          {reasons.map((reason, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/4 p-4">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-jordyBlue/20 text-shark p-4 rounded-2xl h-full"
              >
                <h3 className="text-xl w-full text-salem font-semibold mt-3 mb-4">
                  {reason.title}
                </h3>
                <p className="text-shark">{reason.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default WhySSHGroup;
