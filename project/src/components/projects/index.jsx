import { CiFolderOn } from "react-icons/ci";
import Folder from "../folder";
import {
  SiJavascript,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import Net from "../../assets/net.svg";
import CSharp from "../../assets/Csharp.svg";
import { LiaJava } from "react-icons/lia";
import Gnosis from "../../assets/gnosis.png";
import Locus from "../../assets/locus.png";
import Mambos from "../../assets/mambos.png";
import BSS from "../../assets/BSS.png";
// import Folder from "../../assets/folderoutline.svg";
export default function Projects() {
  return (
    <>
      {/* Container */}
      <h1 className="text-white text-4xl text-center mt-10 mb-6 p-4 font-poppins hover:font-bold hover:text-red-500 hover:text-5xl duration-500 hover:border-cyan-500">
        _projects
      </h1>
      <section
        id="projects"
        className=" mx-4 flex lg:grid lg:grid-cols-2 mt-10 flex-col items-center  gap-4 justify-center"
      >
        <Folder
          title="Gnosis"
          color="text-green-500"
          github="https://github.com/SantiMerino/Gnosis/tree/main"
          state="finished"
          content="Student management system, work platform, time manager and schedule manager aimed for students, Pomodoro technique and study sessions manager, built-in text editor, task manager and personal repository for each student"
          stack={
            <div className="flex gap-4">
              <LiaJava className="h-12 w-12" />
              <SiMysql className="h-12 w-12" />
            </div>
          }
          img={Gnosis}
        />
        <Folder
          title="Mambo's"
          color="text-orange-700"
          github="https://github.com/SantiMerino/BS-Stratega-IT"
          content="Web E-commerce for a library & coffee shop located in El Salvador(fictional) managing the public and administrative site, reports, stadistics, shopping cart, invoice & dashboard"
          stack={
            <div className="flex gap-4">
              <SiJavascript className="h-10 w-10" />
              <SiPhp className="h-10 w-10" />
              <SiPostgresql className="h-10 w-10" />
              <SiTailwindcss className="h-10 w-10" />
            </div>
          }
          img={Mambos}
          state="in progess"
        />
        <Folder
          title="Locus"
          color="text-violet-700"
          github="https://github.com/jromerooo2/ProyectoExpoWforms/tree/dev"
          content="Locus is a real time location platform, designed to provide security to public transportation in El Salvador, Providing real-time location of public transport at all times, and its entry or exit from the facilities. My team won 3rd place in a hackathon"
          stack={
            <div className="flex gap-4">
              <img src={CSharp} className="h-10 w-10" />
              <img src={Net} className="h-10 w-10" />
              <SiMysql className="h-10 w-10" />
            </div>
          }
          img={Locus}
          state="finished"
        />
        <Folder
          title="BSS"
          color="text-blue-700"
          github="https://stratega-it.com/"
          content={`Web application for client relations, ticket, and invoice
          management for Stratega-IT, handling notifications &
          reminders, for confidentiality, I am not allowed to share more
          information.`}
          stack={
            <div className="flex gap-4">
              <SiJavascript className="h-10 w-10" />
              <SiNodedotjs className="h-10 w-10" />
              <SiPostgresql className="h-10 w-10" />
              <SiTailwindcss className="h-10 w-10" />
              <SiReact className="h-10 w-10" />
            </div>
          }
          img={BSS}
          state="in progess"
        />
      </section>
    </>
  );
}
