import type { FC } from "react";

import { useDispatch, useSelector } from "react-redux";

import { selectDisplay, toggleState } from "@/helpers/reducers";
import BackendBubble from "./BackendBubble";
import DataBubble from "./DataBubble";
import FrontendBubble from "./FrontendBubble";
import LibraryBubble from "./LibraryBubble";
import TestingBubble from "./TestingBubble";
import ToolingBubble from "./ToolingBubble";

const SkillCategoryLegend: FC = () => {
  const dispatch = useDispatch();
  const displayTech = useSelector(selectDisplay);

  return (
    <div className="p-4 border-solid border-2 border-slate-400 hidden md:block">
      <p className="font-bold text-lg mb-1">Skill Category Legend</p>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2">
          <ToolingBubble techName="Tooling" />
          <p>Tooling</p>
        </div>
        <div className="flex flex-row gap-2">
          <DataBubble techName="Data Querying" />
          <p>Data Querying</p>
        </div>
        <div className="flex flex-row gap-2">
          <BackendBubble techName="Backend" />
          <p>Backend</p>
        </div>
        <div className="flex flex-row gap-2">
          <FrontendBubble techName="Frontend" />
          <p>Frontend</p>
        </div>
        <div className="flex flex-row gap-2">
          <LibraryBubble techName="Library" />
          <p>Library</p>
        </div>
        <div className="flex flex-row gap-2">
          <TestingBubble techName="Testing" />
          <p>Testing</p>
        </div>
      </div>
      <div className="text-end mt-2">
        <button
          className="text-sm"
          onClick={() => {
            dispatch(toggleState());
          }}
        >
          {displayTech ? "Hide" : "Show"} All Tech Labels
        </button>
        <p className="text-xs mt-1">or click on individual bubbles</p>
      </div>
    </div>
  );
};

export default SkillCategoryLegend;
