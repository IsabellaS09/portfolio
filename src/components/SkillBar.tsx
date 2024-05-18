import type { FC } from "react";
import type {
  Backend,
  FrontEnd,
  Libraries,
  Testing,
} from "@/interfaces/Project";

import BackendBubble from "./BackendBubble";
import FrontendBubble from "./FrontendBubble";
import LibraryBubble from "./LibraryBubble";
import TestingBubble from "./TestingBubble";

type SkillBarProps = {
  title: string;
  frontend?: FrontEnd[];
  testing?: Testing[];
  libraries?: Libraries[];
  backend?: Backend[];
};

const SkillBar: FC<SkillBarProps> = ({
  title,
  frontend,
  testing,
  libraries,
  backend,
}) => {
  return (
    <div className="flex flex-col gap-0 md:gap-1 mt-1 items-start">
      <div>
        <strong>{title}</strong>
      </div>
      <div className="flex flex-row gap-2 mt-1 flex-wrap">
        {backend &&
          backend.map((x) => {
            return <BackendBubble key={x} techName={x} />;
          })}
        {frontend &&
          frontend.map((x) => {
            return <FrontendBubble key={x} techName={x} />;
          })}
        {libraries &&
          libraries.map((x) => {
            return <LibraryBubble key={x} techName={x} />;
          })}
        {testing &&
          testing.map((x) => {
            return <TestingBubble key={x} techName={x} />;
          })}
      </div>
    </div>
  );
};

export default SkillBar;
