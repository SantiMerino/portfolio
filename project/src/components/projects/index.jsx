import { CiFolderOn } from "react-icons/ci";
import Folder from "../folder";
import {
  SiJavascript,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
} from "react-icons/si";
import Net from "../../assets/net.svg";
import CSharp from "../../assets/Csharp.svg";
import { LiaJava } from "react-icons/lia";
// import Folder from "../../assets/folderoutline.svg";
export default function Projects() {
  return (
    <>
      {/* Container */}
      <h1 className="text-white text-4xl text-center mt-10 mb-6 p-4 font-poppins">
        _projects
      </h1>
      <section id="projects" className=" mx-4 flex gap-4 justify-center">
        <Folder
          title="Gnosis"
          color="text-green-500"
          github="https://github.com/SantiMerino/Gnosis/tree/main"
          state="finished"
          content="Student management system, work platform, time manager and schedule manager for students aimed at students and institutions"
          stack={
            <div className="flex gap-4">
              <LiaJava className="h-12 w-12" />
              <SiMysql className="h-12 w-12" />
            </div>
          }
        />
        <Folder
          title="Locus"
          color="text-violet-700"
          github="https://github.com/jromerooo2/ProyectoExpoWforms/tree/dev"
          content="Locus is a real time location platform, designed to provide security to public transportation in El Salvador. My team won 3rd place in a hackathon"
          stack={
            <div className="flex gap-4">
              <img src={CSharp} className="h-10 w-10" />
              <img src={Net} className="h-10 w-10" />
              <SiMysql className="h-10 w-10" />
            </div>
          }
          state="finished"
        />
        <Folder
          title="BSS"
          color="text-blue-700"
          github="https://github.com/SantiMerino/BS-Stratega-IT"
          content={`Web application for client relation, ticket and invoice management for Stratega-IT, handling notifications & reminders `}
          stack={
            <div className="flex gap-4">
              <SiJavascript className="h-10 w-10" />
              <SiNodedotjs className="h-10 w-10" />
              <SiPostgresql className="h-10 w-10" />
            </div>
          }
          state="in progess"
        />
      </section>
    </>
  );
}
