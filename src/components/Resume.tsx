import type { FC } from "react";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  FrontEnd,
  Testing,
  Libraries,
  Backend,
  Languages,
  Tooling,
  Data,
} from "@/interfaces/Project";
import Divider from "./Divider";
import ProjectDisplay from "./ProjectDisplay";
import ResumeSection from "./ResumeSection";
import SkillBar from "./SkillBar";
import SkillCategoryLegend from "./SkillCategoryLegend";
import SkillCategoryLegendToolbar from "./SkillCategoryLegendToolbar";

const Resume: FC = () => {
  return (
    <div id="resume" className="min-h-screen flex flex-col mb-4">
      <div className="w-4/5 self-center">
        <div className="flex justify-between items-center pt-8">
          <div>
            <h1>Ella</h1>
            <p>(she/her)</p>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/isabella-seeman-b93b90a3/"
              className="mr-4"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://github.com/IsabellaS09">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>
        <ResumeSection
          leftSide={<></>}
          rightSide={
            <h5 className="text-left text-2xl">
              Product-focused software engineer with a strong emphasis on
              user-centered design – making data easy and enjoyable to interact
              with.
            </h5>
          }
        />
        <div className="mt-4 md:mx-4">
          <div className="flex flex-col gap-8">
            <ResumeSection
              leftSide={
                <div>
                  <div className="md:hidden">
                    <h4 className="text-2xl md:text-base">
                      <strong>Skill Overview</strong>
                    </h4>
                  </div>
                  <div className="hidden md:block">
                    <SkillCategoryLegend />
                  </div>
                </div>
              }
              rightSide={
                <div className="flex flex-col gap-2 md:gap-4">
                  <SkillBar
                    title="TypeScript"
                    frontend={[FrontEnd.React]}
                    testing={[Testing.Jest, Testing.Cypress]}
                    libraries={[
                      Libraries.MUI,
                      Libraries.antd,
                      Libraries.FluentUI,
                      Libraries.FramerMotion,
                      Libraries.GSAP,
                      Libraries.D3,
                      Libraries.Leaflet,
                    ]}
                  />
                  <SkillBar
                    title="Python"
                    backend={[Backend.Flask]}
                    libraries={[
                      Libraries.Pandas,
                      Libraries.llamaIndex,
                      Libraries.OpenCV,
                      Libraries.Tesseract,
                    ]}
                  />
                  <SkillBar
                    title="JavaScript"
                    frontend={[
                      FrontEnd.ReactNative,
                      FrontEnd.Angular,
                      FrontEnd.AngularJS,
                    ]}
                    backend={[Backend.NodeJS]}
                    libraries={[
                      Libraries.D3,
                      Libraries.Leaflet,
                      Libraries.jQuery,
                    ]}
                  />
                </div>
              }
            />
            <Divider />
            <ResumeSection
              leftSide={
                <div>
                  <h4 className="text-2xl md:text-base">
                    <strong>Work Experience</strong>
                  </h4>
                </div>
              }
              rightSide={
                <div className="flex flex-col gap-4 items-start">
                  <ProjectDisplay
                    project={{
                      title: "InfernoRed Technology",
                      position: "Contractor, Software Engineer",
                      timeFrame: "JULY 2021 - PRESENT",
                      languages: [
                        Languages.Javascript,
                        Languages.CSharp,
                        Languages.TypeScript,
                      ],
                      tooling: [Tooling.NextJS, Tooling.Vite],
                      testing: [Testing.Jest, Testing.Cypress],
                      libraries: [
                        Libraries.FluentUI,
                        Libraries.IVS,
                        Libraries.MUI,
                        Libraries.TailwindCSS,
                        Libraries.jQuery,
                      ],
                      frontend: [FrontEnd.React],
                    }}
                    description={
                      <div className="text-left mb-4 ">
                        <div className="flex flex-col gap-4">
                          <div className="text-justify">
                            Created Website with Azure deploy pipeline, to
                            modernize the tech (Next.js, react-query) and design
                            of website used by millions of customers. Focus on
                            making reusable components, data models, and test
                            suite to set up incoming team for success.
                            Redeveloped main functionality and ideated new
                            functionality to encourage user interaction.
                          </div>
                          <div className="text-justify">
                            Led a team of beginner React developers on building
                            a website to verify the validity of images based on
                            C2PA SDK.
                          </div>
                          <div className="text-justify">
                            NEXT.js website linked to DatoCMS, using
                            TailwindCSS. UI updates managed through firestore
                            and implemented new stream viewing tech, AWS IVS.
                            Broadcast state management, broadcast info (chat,
                            inventory, etc.) and stream status.
                          </div>
                          <div className="text-justify">
                            Implemented and designed JSON-based multi-screen
                            form generator in jQuery, multiple different types
                            of components dependent on different backend
                            callbacks.
                          </div>
                        </div>
                      </div>
                    }
                  />
                  <ProjectDisplay
                    project={{
                      title: "Fireside21",
                      position: "Software Engineer, Product Manager",
                      timeFrame: "JUNE 2017 - JULY 2021",
                      languages: [
                        Languages.CSharp,
                        Languages.Javascript,
                        Languages.Python,
                      ],
                      frontend: [FrontEnd.Angular, FrontEnd.AngularJS],
                      data: [Data.MSSQL],
                      libraries: [Libraries.D3],
                    }}
                    description={
                      <div className="text-left">
                        <div>
                          <p>
                            Responsible for determining the overall direction of
                            the product
                          </p>
                          <p>
                            Drag and drop newsletter editor comparable to
                            MailChimp, (AngularJS)
                          </p>
                          <p>
                            Cross-office voting system with drag and drop card
                            and board UI (Angular); services to populate/update
                            voting members and email vote digests (C#)
                          </p>
                          <p>
                            Message sentiment analysis project (Python);
                            interactive bubble visualization (D3.js) showing
                            sentiment across keyword/topic
                          </p>
                        </div>
                      </div>
                    }
                  />
                </div>
              }
            />
            <Divider />
            <ResumeSection
              leftSide={
                <div>
                  <h4 className="text-2xl md:text-base">
                    <strong>Personal Projects</strong>
                  </h4>
                </div>
              }
              rightSide={
                <div className="flex flex-col gap-4 items-start">
                  <ProjectDisplay
                    project={{
                      title: "New Orleans Event Feed",
                      inProgress: true,
                      languages: [Languages.Python, Languages.TypeScript],
                      libraries: [Libraries.OpenAI, Libraries.llamaIndex],
                      tooling: [Tooling.Vite],
                      backend: [Backend.Flask],
                      frontend: [FrontEnd.React],
                    }}
                    description={
                      <p>
                        Building an application that processes instagram posts
                        from local businesses to build an index that can be
                        queried to retrieve events going on a particular day.
                      </p>
                    }
                  />
                  <ProjectDisplay
                    project={{
                      title: "Visualizations of xyz",
                      inProgress: true,
                      languages: [Languages.TypeScript],
                      libraries: [
                        Libraries.FramerMotion,
                        Libraries.TailwindCSS,
                      ],
                      frontend: [FrontEnd.React],
                      tooling: [Tooling.Vite],
                    }}
                  />
                  <ProjectDisplay
                    project={{
                      title: "Mardi Gras Parade Calendar",
                      link: "https://www.mardigrascalendar.com/",
                      languages: [Languages.TypeScript],
                      tooling: [Tooling.Amplify, Tooling.NextJS],
                      frontend: [FrontEnd.React],
                      libraries: [Libraries.MUI],
                      data: [Data.GraphQL],
                    }}
                    description={
                      <p>
                        CMS for viewing and managing Mardi Gras Parades in a
                        calendar view. Offers enhanced filtering and allows user
                        to track which parades are important to them.{" "}
                      </p>
                    }
                  />
                  <ProjectDisplay
                    project={{
                      title: "Travel Photography Website",
                      link: "https://www.misadventurer.me/",
                      subtitle: "CMS for trip data",
                      languages: [Languages.TypeScript],
                      tooling: [Tooling.Amplify, Tooling.NextJS],
                      frontend: [FrontEnd.React],
                      libraries: [Libraries.antd],
                      data: [Data.GraphQL],
                    }}
                    description={
                      <p>
                        Built AWS-backed CMS to manage past trips, itinerary
                        events, and associated photographs. GraphQL retrieval of
                        data.
                      </p>
                    }
                  />
                  <ProjectDisplay
                    project={{
                      title: "Governorship Eligibility App",
                      languages: [Languages.Javascript],
                      frontend: [FrontEnd.ReactNative],
                      libraries: [Libraries.D3],
                    }}
                    description={
                      <p>
                        React Native app that updated a d3.js map of the US to
                        indicate user’s governorship eligibility based on three
                        questions
                      </p>
                    }
                  />
                  <ProjectDisplay
                    project={{
                      title: "The Amazing Race* Tour Website",
                      link: "https://amazingracetravelguide.com/",
                      languages: [Languages.TypeScript],
                      tooling: [Tooling.Amplify, Tooling.NextJS],
                      frontend: [FrontEnd.React],
                      libraries: [Libraries.GSAP, Libraries.Leaflet],
                    }}
                    description={
                      <div>
                        <p>
                          NextJS website for perusal of past “The Amazing Race”
                          clue locations, and clue discovery. Used Leaflet
                          mapping for display and traversal through locations,
                          implemented RTree for faster search.
                        </p>
                        <p className="text-xs mt-1">
                          *I am not affiliated with The Amazing Race
                        </p>
                      </div>
                    }
                  />
                  <ProjectDisplay
                    project={{
                      title: "Recipe Index",
                      subtitle: "Custom OCR for parsing recipes",
                      timeFrame: "2019 - 2020",
                      languages: [Languages.Python, Languages.Swift],
                      libraries: [Libraries.OpenCV, Libraries.Tesseract],
                    }}
                    description={
                      <p>
                        NextJS website for perusal of past “The Amazing Race”
                        clue locations, and clue discovery. Used Leaflet mapping
                        for display and traversal through locations, implemented
                        RTree for faster search.
                      </p>
                    }
                  />
                </div>
              }
            />
            <Divider />
            <ResumeSection
              leftSide={
                <div>
                  <h4 className="text-2xl md:text-base">
                    <strong>Education</strong>
                  </h4>
                </div>
              }
              rightSide={
                <div className="text-left">
                  <p>
                    <strong>BS Computer Science</strong>
                  </p>
                  <p>University of Maryland, College Park</p>
                  <p className="text-slate-400">AUGUST 2013 - MAY 2017</p>
                  <p>Data Science Specialization</p>
                  <p>GIS Minor</p>
                </div>
              }
            />
          </div>
        </div>
      </div>
      <SkillCategoryLegendToolbar />
    </div>
  );
};

export default Resume;
