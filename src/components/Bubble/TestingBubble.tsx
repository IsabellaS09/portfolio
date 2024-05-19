import type { FC } from "react";
import type { BubbleProps } from "@/interfaces/BubbleProps";

import TechBubble from "./TechBubble";
import { TechType } from "@/interfaces/Project";

const TestingBubble: FC<BubbleProps> = ({ techName, noAnimatedEntry }) => {
  return (
    <TechBubble
      techType={TechType.Testing}
      {...{ techName, noAnimatedEntry }}
    />
  );
};

export default TestingBubble;
