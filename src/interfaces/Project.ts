export enum TechType {
  Language = "Programming Language",
  Libraries = "Library",
  Databases = "Database",
  Backend = "Backend Framework",
  Frontend = "Frontend Framework",
  Testing = "Testing",
  Tooling = "Tooling",
  Data = "Data",
}

export const TechTypeToColor = (techType: TechType) => {
  switch (techType) {
    case TechType.Backend:
      return "bg-green-500";
    case TechType.Databases:
      return "bg-mustard";
    case TechType.Frontend:
      return "bg-blue-500";
    case TechType.Language:
      return "bg-red-500";
    case TechType.Libraries:
      return "bg-purple-500";
    case TechType.Tooling:
      return "bg-orange-500";
    case TechType.Data:
      return "bg-yellow-500";
    case TechType.Testing:
      return "bg-pink-500";
  }
};

export enum Languages {
  Python = "Python",
  Javascript = "JavaScript",
  TypeScript = "TypeScript",
  Swift = "Swift",
  CSharp = "C#",
}

export enum Tooling {
  NextJS = "Next.js",
  Vite = "Vite",
  Amplify = "AWS Amplify",
}

export enum FrontEnd {
  React = "React",
  ReactNative = "ReactNative",
  Angular = "Angular",
  AngularJS = "AngularJS",
}

export enum Testing {
  Jest = "Jest",
  Cypress = "Cypress",
}

export enum Libraries {
  FluentUI = "Fluent UI React",
  MUI = "MUI",
  antd = "antd",
  TailwindCSS = "Tailwind",
  FramerMotion = "FramerMotion",
  IVS = "AWS IVS",
  D3 = "D3",
  Leaflet = "Leaflet",
  OpenCV = "OpenCV",
  OpenAI = "OpenAI",
  GSAP = "GSAP",
  llamaIndex = "Llama Index",
  jQuery = "jQuery",
  Tesseract = "Tesseract",
  Pandas = "Pandas",
}

export enum Data {
  MSSQL = "MSSQL",
  MongoDB = "MongoDB",
  GraphQL = "GraphQL",
}

export enum Backend {
  NodeJS = "NodeJS",
  Flask = "Flask",
}

export type Project = {
  title: string;
  link?: string;
  position?: string;
  timeFrame?: string;
  type?: "WORK" | "PERSONAL";
  inProgress?: boolean;
  subtitle?: string;
  languages?: Languages[];
  backend?: Backend[];
  testing?: Testing[];
  libraries?: Libraries[];
  data?: Data[];
  frontend?: FrontEnd[];
  tooling?: Tooling[];
  githubLink?: string;
};
