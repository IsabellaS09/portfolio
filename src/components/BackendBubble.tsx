import type { FC } from "react";
import type { BubbleProps } from "@/interfaces/BubbleProps";

import TechBubble from "./TechBubble";
import { TechType } from "@/interfaces/Project";

const BackendBubble: FC<BubbleProps> = ({ techName }) => {
  return <TechBubble techType={TechType.Backend} techName={techName} />;
};

export default BackendBubble;
