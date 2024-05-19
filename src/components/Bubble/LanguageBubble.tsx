import type { FC } from "react";

import TechBubble from "./TechBubble";
import { TechType } from "@/interfaces/Project";

const LanguageBubble: FC = () => {
  return <TechBubble techType={TechType.Language} />;
};

export default LanguageBubble;
