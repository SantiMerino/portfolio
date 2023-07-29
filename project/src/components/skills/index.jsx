import {
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiPostgresql,
  SiPrisma,
  SiNodedotjs,
  SiPhp,
  SiReact,
  SiFigma,
  SiVite,
  SiCanva,
} from "react-icons/si";
import { LiaJava } from "react-icons/lia";
import CSharp from "../../assets/Csharp.svg";

export default function Skill() {
  const iconsClass =
    "text-slate-300 justify-center h-16 w-16 lg:h-24 lg:w-24 hover:scale-110 duration-200 ease-in-out";

  return (
    <>
      <section className="font-poppins hover:bg-white hover:bg-opacity-5 duration-200 ease-in-out mx-4 p-4 text-center rounded-lg text-white flex justify-center flex-col">
        <h1 className="text-4xl font-poppins ">s_kills</h1>
        <p className="text-justify text-slate-300 lg:max-w-[1000px] self-center lg:text-xl px-10 py-8 ">
          The main area of interest and development in my projects and studies
          is the Front-End, built small and medium web applications projects
          with React, TailwindCSS, and Node, have a bit of experience being
          full-stack within most projects, and worked with many javascript
          libraries and frameworks{" "}
        </p>

        <div className="flex flex-col gap-10 justify-center">
          {/* Frontend */}
          {/* <h1 className="text-xl font-rubik col-span-6">_frontend</h1> */}
          <div className="pb-4 grid grid-flow-col grid-rows-4 max-sm:grid-flow-row max-sm:grid-cols-2 sm:grid-rows-2 gap-10 justify-center">
            <SiJavascript className={iconsClass} />
            <SiTailwindcss className={iconsClass} />
            <SiHtml5 className={iconsClass} />
            <SiCss3 className={iconsClass} />
            <SiReact className={iconsClass} />
            <SiPhp className={iconsClass} />
            <img src={CSharp} className={iconsClass} />
            <LiaJava className={iconsClass} />
            <SiMysql className={iconsClass} />
            <SiPostgresql className={iconsClass} />
            <SiPrisma className={iconsClass} />
            <SiNodedotjs className={iconsClass} />
            <SiFigma className={iconsClass} />
            <SiVite className={iconsClass} />
          </div>
          {/* Backend */}
          {/* <div className="grid grid-cols-2 gap-3">
            <h1 className="col-span-2 text-xl">_backend</h1>
          </div> */}
        </div>
      </section>
    </>
  );
}