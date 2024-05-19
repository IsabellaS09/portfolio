import type { FC } from "react";

import { useDispatch, useSelector } from "react-redux";

import ToolingBubble from "./Bubble/ToolingBubble";
import BackendBubble from "./Bubble/BackendBubble";
import DataBubble from "./Bubble/DataBubble";
import FrontendBubble from "./Bubble/FrontendBubble";
import LibraryBubble from "./Bubble/LibraryBubble";
import TestingBubble from "./Bubble/TestingBubble";
import { selectDisplay, toggleState } from "@/helpers/reducers";

const SkillCategoryLegendToolbar: FC = () => {
  const dispatch = useDispatch();
  const displayTech = useSelector(selectDisplay);
  return (
    <div className="sticky block md:hidden bottom-0 bg-neutral-950 w-screen flex py-4 flex-col gap-4">
      <div className="flex flex-row justify-between mx-4">
        <p className="font-bold text-lg">Skill Category Legend</p>
        <div className="text-end mt-2">
          <button
            className="text-sm p-1"
            onClick={() => {
              dispatch(toggleState());
            }}
          >
            {displayTech ? "Hide" : "Show"} All Tech Labels
          </button>
          <p className="text-xs mt-1">or click on individual bubbles</p>
        </div>
      </div>
      <div className="flex flex-row gap-3 overflow-scroll px-4">
        <div className="flex flex-row gap-1.5">
          <ToolingBubble techName="Tooling" />
          <p className="whitespace-nowrap">Tooling</p>
        </div>
        <div className="flex flex-row gap-1.5">
          <DataBubble techName="Data Querying" />
          <p className="whitespace-nowrap">Data Querying</p>
        </div>
        <div className="flex flex-row gap-1.5">
          <BackendBubble techName="Backend" />
          <p>Backend</p>
        </div>
        <div className="flex flex-row gap-1.5">
          <FrontendBubble techName="Frontend" />
          <p>Frontend</p>
        </div>
        <div className="flex flex-row gap-1.5">
          <LibraryBubble techName="Library" />
          <p>Library</p>
        </div>
        <div className="flex flex-row gap-1.5">
          <TestingBubble techName="Testing" />
          <p>Testing</p>
        </div>
      </div>
    </div>
  );
};

export default SkillCategoryLegendToolbar;
