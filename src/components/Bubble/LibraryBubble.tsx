import type { FC } from "react";
import type { BubbleProps } from "@/interfaces/BubbleProps";

import TechBubble from "./TechBubble";
import { TechType } from "@/interfaces/Project";

const LibraryBubble: FC<BubbleProps> = ({ techName }) => {
  return <TechBubble techType={TechType.Libraries} techName={techName} />;
};

export default LibraryBubble;
