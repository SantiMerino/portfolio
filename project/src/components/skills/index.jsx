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
  SiTypescript,
} from "react-icons/si";
import { LiaJava, LiaVolleyballBallSolid } from "react-icons/lia";
import CSharp from "../../assets/Csharp.svg";

export default function Skill() {
  const iconsClass =
    "text-slate-300 justify-center h-16 w-16 lg:h-24 lg:w-24 hover:scale-110 duration-200 ease-in-out";

  return (
    <>
      <section
        id="skills"
        className="font-poppins duration-200 ease-in-out mx-4 p-4 text-center rounded-lg text-white flex justify-center flex-col"
      >
        <h1 className="text-4xl font-poppins hover:font-bold hover:text-red-500 hover:text-5xl duration-500 hover:border-cyan-500">
          _skills
        </h1>
        <p className="text-justify text-slate-300 lg:max-w-[1000px] self-center lg:text-xl px-10 py-8 ">
          The main area of interest and development in my projects and studies
          is the Front-End, built small and medium web applications projects
          with React, TailwindCSS, and Node, have a bit of experience being
          full-stack within most projects, and worked with many javascript
          libraries and frameworks{" "}
        </p>

        <div className="flex flex-grow lg:flex-col gap-10 justify-center mt-10 px-20">
          {/* Frontend */}
          {/* <h1 className="text-xl font-rubik col-span-6">_frontend</h1> */}
          <div className=" pb-4 grid grid-cols-2 grid-flow-row max-sm:grid-flow-row max-sm:grid-cols-3 sm:grid-rows-2 sm:grid-cols-5 gap-10 lg:grid-cols-5 lg:gap-y-8 items-center justify-items-center  justify-center">
            <SiJavascript className={`hover:text-yellow-500 ${iconsClass}`} />
            <SiTailwindcss className={`hover:text-cyan-500 ${iconsClass}`} />
            <SiHtml5 className={`hover:text-red-500 ${iconsClass}`} />
            <SiCss3 className={`hover:text-blue-500 ${iconsClass}`} />
            <SiReact className={`hover:text-blue-400 ${iconsClass}`} />
            <SiPhp className={`hover:text-purple-500 ${iconsClass}`} />
            <img src={CSharp} className={`${iconsClass}`} alt="" />
            <LiaJava className={`hover:fill-sky-500 ${iconsClass}`} />
            <SiMysql className={`hover:text-orange-500  ${iconsClass}`} />
            <SiPostgresql className={`hover:text-cyan-500 ${iconsClass}`} />
            <SiPrisma className={`hover:text-white ${iconsClass}`} />
            <SiNodedotjs className={`hover:text-green-600 ${iconsClass}`} />
            <SiFigma className={`hover:text-red-400 ${iconsClass}`} />
            <SiVite className={`hover:text-yellow-300 ${iconsClass}`} />
            <SiTypescript className={`hover:text-blue-600 ${iconsClass}`} />
          </div>
          <div>
            
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
