import type { FC } from "react";
import type { BubbleProps } from "@/interfaces/BubbleProps";

import TechBubble from "./TechBubble";
import { TechType } from "@/interfaces/Project";

const DataBubble: FC<BubbleProps> = ({ techName, noAnimatedEntry }) => {
  return (
    <TechBubble techType={TechType.Data} {...{ techName, noAnimatedEntry }} />
  );
};

export default DataBubble;
