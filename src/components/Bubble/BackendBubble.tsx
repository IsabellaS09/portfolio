import type { FC } from "react";
import type { BubbleProps } from "@/interfaces/BubbleProps";

import TechBubble from "./TechBubble";
import { TechType } from "@/interfaces/Project";

const BackendBubble: FC<BubbleProps> = ({ techName, noAnimatedEntry }) => {
  return (
    <TechBubble
      techType={TechType.Backend}
      {...{ techName, noAnimatedEntry }}
    />
  );
};

export default BackendBubble;
