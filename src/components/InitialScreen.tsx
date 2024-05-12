import { useState, type FC } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

import { projectURLs } from "@/constants/projectURLs";

const InitialScreen: FC = () => {
  const [hoveredElement, setHoveredElement] = useState("");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0, transition: { duration: 100 } },
    show: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="m-0" id="title">
          Visualizations of
        </h1>
        <motion.div
          className="flex flex-row gap-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {projectURLs.map((project, index) => {
            if (hoveredElement === project.url || !hoveredElement) {
              return (
                <motion.h1
                  className="m-0"
                  key={hoveredElement ? project.url : project.name}
                  variants={listItem}
                  onMouseEnter={() => {
                    setHoveredElement(project.url);
                  }}
                  onMouseLeave={() => {
                    setHoveredElement("");
                  }}
                >
                  <a href={project.url}>
                    {project.url === hoveredElement
                      ? project.name
                      : String.fromCharCode(97 + 26 - 3 + index)}
                  </a>
                </motion.h1>
              );
            } else {
              return <></>;
            }
          })}
        </motion.div>
      </div>
      <motion.div className="absolute bottom-8 flex flex-col items-center right-0 left-0">
        <h3>About Me</h3>
        <a href="#resume">
          <FontAwesomeIcon icon={faChevronDown} />
        </a>
      </motion.div>
    </div>
  );
};

export default InitialScreen;
