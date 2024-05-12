import type { FC } from "react";
import type { BubbleProps } from "@/interfaces/BubbleProps";

import TechBubble from "./TechBubble";
import { TechType } from "@/interfaces/Project";

const ToolingBubble: FC<BubbleProps> = ({ techName }) => {
  return <TechBubble techType={TechType.Tooling} techName={techName} />;
};

export default ToolingBubble;
