import type { FC, ReactNode } from "react";

type ResumeSectionProps = {
  leftSide: ReactNode;
  rightSide: ReactNode;
};

const ResumeSection: FC<ResumeSectionProps> = ({ leftSide, rightSide }) => {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/3 text-left">{leftSide}</div>
      <div className="w-full md:w-1/2">{rightSide}</div>
    </div>
  );
};

export default ResumeSection;
