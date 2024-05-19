import type { FC } from "react";
import type { BubbleProps } from "@/interfaces/BubbleProps";

import TechBubble from "./TechBubble";
import { TechType } from "@/interfaces/Project";

const FrontendBubble: FC<BubbleProps> = ({ techName }) => {
  return <TechBubble techType={TechType.Frontend} techName={techName} />;
};

export default FrontendBubble;
