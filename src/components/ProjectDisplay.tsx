import type { FC, ReactNode } from "react";
import type {
  Backend,
  Data,
  FrontEnd,
  Libraries,
  Project,
  Testing,
  Tooling,
} from "@/interfaces/Project";

import ToolingBubble from "./Bubble/ToolingBubble";
import DataBubble from "./Bubble/DataBubble";
import BackendBubble from "./Bubble/BackendBubble";
import FrontendBubble from "./Bubble/FrontendBubble";
import LibraryBubble from "./Bubble/LibraryBubble";
import TestingBubble from "./Bubble/TestingBubble";
import ExpandableDescription from "./ExpandableDescription";

type ProjectDisplayProps = {
  project: Project;
  description?: ReactNode;
};

const ProjectDisplay: FC<ProjectDisplayProps> = ({ project, description }) => {
  // TODO: Add brief description of role as prop and then only show full description on expanding
  return (
    <div className="text-left">
      <div>
        <h5>
          {project.link ? (
            <a href={project.link}>
              <strong>{project.title}</strong>
            </a>
          ) : (
            <strong>{project.title}</strong>
          )}
          {project.subtitle && ` / ${project.subtitle}`}
          {project.position && `, ${project.position}`}
        </h5>
        {project.timeFrame && (
          <p className="text-slate-400">{project.timeFrame}</p>
        )}
        {project.inProgress && <p>In Progress</p>}
      </div>
      <div>{project.languages && <p>{project.languages.join(", ")}</p>}</div>
      <div className="flex flex-row gap-2 mt-1 flex-wrap">
        {project.tooling &&
          project.tooling.map((lang: Tooling) => {
            return <ToolingBubble key={lang} techName={lang} />;
          })}
        {project.data &&
          project.data.map((lang: Data) => {
            return <DataBubble key={lang} techName={lang} />;
          })}
        {project.backend &&
          project.backend.map((lang: Backend) => {
            return <BackendBubble key={lang} techName={lang} />;
          })}
        {project.frontend &&
          project.frontend.map((lang: FrontEnd) => {
            return <FrontendBubble key={lang} techName={lang} />;
          })}
        {project.libraries &&
          project.libraries.map((lang: Libraries) => {
            return <LibraryBubble key={lang} techName={lang} />;
          })}
        {project.testing &&
          project.testing.map((lang: Testing) => {
            return <TestingBubble key={lang} techName={lang} />;
          })}
      </div>
      <div className="mt-2">
        <ExpandableDescription>{description}</ExpandableDescription>
      </div>
    </div>
  );
};

export default ProjectDisplay;
