import type { FC } from "react";
import type { BubbleProps } from "@/interfaces/BubbleProps";

import TechBubble from "./TechBubble";
import { TechType } from "@/interfaces/Project";

const ToolingBubble: FC<BubbleProps> = ({ techName, noAnimatedEntry }) => {
  return (
    <TechBubble
      techType={TechType.Tooling}
      {...{ techName, noAnimatedEntry }}
    />
  );
};

export default ToolingBubble;
