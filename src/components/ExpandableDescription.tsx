import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type FC, type PropsWithChildren, useState, useCallback } from "react";
import {
  type DurationSpringOptions,
  type SpringOptions,
  motion,
  useAnimationControls,
} from "framer-motion";

// TODO: Make Mass dependent on content length
const springTransition = {
  type: "spring",
  // Duration ignored if stiffness/damping/mass are set
  // duration: .75
  // Bounce ignored if stiffness/damping/mass are set
  // bounce: .5
  stiffness: 300,
  damping: 30,
  mass: 3,
} as SpringOptions | DurationSpringOptions;

const ExpandableDescription: FC<PropsWithChildren> = ({ children }) => {
  // TODO: Add a toggle hook
  // TODO: Add animation
  const [expanded, setExpanded] = useState(false);
  const controls = useAnimationControls();

  const arrowVariants = {
    expand: {
      transform: "rotateZ(-180deg)",
      transition: springTransition,
    },
    collapse: {
      transform: "rotateZ(0deg)",
      transition: springTransition,
    },
  };

  const descriptionVariants = {
    expand: {
      height: "auto",
      transition: springTransition,
    },
    collapse: {
      height: "48px",
      transition: springTransition,
    },
  };

  const expand = useCallback(() => {
    setExpanded((prevState) => {
      return !prevState;
    });
    if (expanded) {
      controls.start("collapse");
    } else {
      controls.start("expand");
    }
  }, [expanded]);

  if (!children) {
    return <></>;
  }

  return (
    <div>
      <motion.div
        variants={descriptionVariants}
        animate={controls}
        initial="collapse"
        className="overflow-hidden relative"
      >
        {children}
        {!expanded && (
          <div className="bg-gradient-to-b from-transparent to-vite absolute h-full w-full top-0 right-0" />
        )}
      </motion.div>
      <div className="text-center">
        <motion.div
          variants={arrowVariants}
          initial="collapse"
          animate={controls}
        >
          <FontAwesomeIcon
            icon={faChevronDown}
            onClick={() => expand()}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                expand();
              }
            }}
            className="cursor-pointer"
            aria-label="expand/collapse description"
            role="button"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ExpandableDescription;
