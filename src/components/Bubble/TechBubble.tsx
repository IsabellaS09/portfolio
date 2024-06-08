import type { BubbleProps } from "@/interfaces/BubbleProps";

import { useCallback, useEffect, useRef, useState, type FC } from "react";
import {
  AnimatePresence,
  type Variants,
  motion,
  useAnimationControls,
} from "framer-motion";
import { useSelector } from "react-redux";

import { type TechType, TechTypeToColor } from "@/interfaces/Project";
import { selectDisplay } from "@/helpers/reducers";
import { useBubbleAnimationProvider } from "@/store/BubbleAnimationProvider";

interface TechBubbleProps extends BubbleProps {
  techType: TechType;
}

const transitionTime = 1;

// TODO: Reorganize this file
const TechBubble: FC<TechBubbleProps> = ({
  techType,
  techName,
  noAnimatedEntry,
}) => {
  const { triggerBubbleAnimation } = useBubbleAnimationProvider();
  const displayTech = useSelector(selectDisplay);
  const [showTech, setShowTech] = useState(false);
  const [showName, setShowName] = useState(showTech || displayTech);
  const controls = useAnimationControls();
  const currentElement = useRef<HTMLDivElement>(null);
  const [width] = useState(window.innerWidth);
  const resumeContainer = useRef(document.getElementById("resume"));
  const firstStartingPosition = Math.random() > 0.5 ? "-100vw" : "100vw";
  const [topDifference, setTopDifference] = useState(0);
  const [leftDifference, setLeftDifference] = useState(0);
  const initialScale = Math.random() * 3;

  useEffect(() => {
    setShowName(displayTech || showTech);
  }, [displayTech, showTech]);

  useEffect(() => {
    if (triggerBubbleAnimation) {
      controls.start("target");
    }
  }, [triggerBubbleAnimation]);

  useEffect(() => {
    resumeContainer.current = document.getElementById("resume");

    const resumeInnerContainer = document.getElementById(
      "inner-resume-container",
    );
    if (resumeContainer.current && currentElement.current) {
      const top =
        currentElement.current.getBoundingClientRect().top -
        resumeContainer.current.getBoundingClientRect().top;
      setTopDifference(top * -1);
    }
    if (
      resumeContainer.current &&
      currentElement.current &&
      resumeInnerContainer
    ) {
      const xPosition =
        currentElement.current.getBoundingClientRect().left -
        resumeContainer.current.getBoundingClientRect().left;
      setLeftDifference(
        Math.random() * Math.min(width, resumeInnerContainer.clientWidth) -
          xPosition,
      );
    }
  }, []);

  const bubbleContainer = useCallback(() => {
    return {
      initial: {
        translateX: firstStartingPosition,
        translateY: `calc(${topDifference}px - calc(1.5rem * ${initialScale}))`,
        scale: initialScale,
        opacity: 0,
      },
      target: {
        translateX: [leftDifference, 0],
        translateY: [null, 0],
        scale: [Math.random() * 3, 1],
        opacity: [1, null],
        transition: {
          times: [0, 1],
          duration: 2,
          delay: Math.random() * 0.5,
          type: "spring",
          bounce: 0.7,
        },
      },
    } as Variants;
  }, [topDifference, leftDifference]);

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

  if (!topDifference) {
    return <div ref={currentElement} className="h-6 w-6" />;
  }

  // TODO: On a singluar click want a different animation smoother spring open, maybe on hover too
  return (
    <motion.div
      ref={currentElement}
      className="flex flex-row gap-2 z-10"
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
      variants={noAnimatedEntry ? undefined : bubbleContainer()}
      initial="initial"
      animate={controls}
    >
      <motion.div
        variants={noAnimatedEntry ? container : undefined}
        custom={showName}
        initial="initial"
        animate="target"
        className={`h-6 min-w-6 px-3 rounded-full ${TechTypeToColor(techType)}`}
      >
        <AnimatePresence>
          {!noAnimatedEntry && showName && (
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
    </motion.div>
  );
};

export default TechBubble;
