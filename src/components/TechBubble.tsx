import type { BubbleProps } from "@/interfaces/BubbleProps";

import { useEffect, useState, type FC } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";

import { type TechType, TechTypeToColor } from "@/interfaces/Project";
import { selectDisplay } from "@/helpers/reducers";

interface TechBubbleProps extends BubbleProps {
  techType: TechType;
}

const transitionTime = 1.5;

const TechBubble: FC<TechBubbleProps> = ({ techType, techName }) => {
  const displayTech = useSelector(selectDisplay);
  const [showTech, setShowTech] = useState(false);
  const [showName, setShowName] = useState(showTech || displayTech);

  useEffect(() => {
    setShowName(displayTech || showTech);
  }, [displayTech, showTech]);

  // useEffect(() => {
  //   if(!techName) return
  //   if (showName) {
  //     techName.split('').forEach((x, i) => {
  //       setTimeout(() => {
  //         setDisplayTechName((prevState) => {
  //         const newState = prevState + x
  //         return newState
  //       })
  //     }, transitionTime*1000/(techName.length)* i)

  //     })
  //   } else {
  //     techName.split('').forEach((x, i) => {
  //       setTimeout(() => {
  //         setDisplayTechName((prevState) => {
  //           prevState.split('').pop()
  //         return newState
  //       })
  //     }, transitionTime*1000/(techName.length)* i)

  //     })
  //   }
  // }, [showName])

  // const [width] = useState(window.innerWidth);
  // const node = useRef(document.getElementById("resume"));
  // const isInView = useInView(node);
  // const startingPosition = (Math.random() - 0.5) * width;

  // useEffect(() => {
  //   node.current = document.getElementById("resume");
  //   document.getElementById("title");
  // }, []);

  // TODO: Need to revisit these variants
  // const spring = {
  //   gentle: {
  //     type: `spring`,
  //     mass: 1,
  //     damping: 50,
  //     stiffness: 100,
  //     velocity: 2,
  //     duration: 10
  //   },
  //   rough: {
  //     type: `spring`,
  //     mass: 50,
  //     damping: 50,
  //     stiffness: 1,
  //     velocity: 2,
  //     duration: 10
  //   }
  // }

  // const container = {
  //   initial: {
  //     transform: `translateY(-1000px) translateX(${startingPosition}px)`,
  //     opacity: 0,
  //   },
  //   expanded: {
  //     transform: [
  //       `translateY(0px) translateX(${startingPosition / 3}px)`,
  //       `translateY(-300px) translateX(${startingPosition / 4}px)`,
  //       `translateY(-100px) translateX(25px)`,
  //       `none`,
  //     ],
  //     opacity: 1,
  //     transition: { times: [0, 0.45, 0.85, 0.95, 1], duration: 10 },
  //     delay: Math.random() * 3,
  //   },
  // };

  const container = {
    initial: {
      transition: {
        duration: transitionTime,
      },
    },
    target: {
      transition: {
        duration: transitionTime,
      },
    },
  };

  const techNameContainer = {
    initial: (showName: boolean) => {
      return {
        opacity: showName ? 0 : 1,
        transition: {
          duration: transitionTime,
          staggerChildren: techName
            ? transitionTime / techName?.length
            : transitionTime,
          staggerDirection: -1,
        },
      };
    },
    target: (showName: boolean) => {
      return {
        opacity: showName ? 1 : 0,
        transition: {
          duration: transitionTime,
          staggerChildren: techName
            ? transitionTime / techName?.length
            : transitionTime,
          staggerDirection: 1,
        },
      };
    },
  };

  const techNameLetter = {
    initial: (showName: boolean) => {
      return {
        display: showName ? "none" : "inline-block",
      };
    },
    target: (showName: boolean) => {
      return {
        display: showName ? "inline-block" : "none",
      };
    },
  };

  return (
    <div
      className="flex flex-row gap-2"
      aria-label={techName}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          setShowTech((prevState) => {
            return !prevState;
          });
        }
      }}
      onClick={() => {
        setShowTech((prevState) => {
          return !prevState;
        });
      }}
    >
      <motion.div
        variants={container}
        custom={showName}
        initial="initial"
        animate="target"
        className={`h-6 min-w-6 px-3 rounded-full ${TechTypeToColor(techType)}`}
      >
        <AnimatePresence>
          {showName && (
            <motion.div
              key={`tech${techName}`}
              variants={techNameContainer}
              custom={showName}
              initial="initial"
              animate="target"
              exit="initial"
              className="whitespace-nowrap"
            >
              {techName?.split("").map((letter, i) => {
                return (
                  <motion.span
                    custom={showName}
                    key={letter + i}
                    variants={techNameLetter}
                  >
                    {letter}
                  </motion.span>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default TechBubble;
