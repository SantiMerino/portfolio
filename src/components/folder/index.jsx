import { CiFolderOn } from "react-icons/ci";

export default function Folder(props) {
  const { title, content, github, stack, color, state, img } = props;
  
  return (
    <div className="project-card bg-white font-poppins bg-opacity-5 rounded-lg flex flex-col text-slate-300 p-4 min-w-[300px] lg:min-w-[400px] flex-shrink hover:bg-opacity-10">
      <a href={github} className="group" target="_blank" rel="noopener noreferrer">
        <div className="flex flex-row items-center gap-6 px-2">
          <CiFolderOn className={`h-14 w-14 ${color}`} />
          <h2 className="text-xl font-rubik text-white">{title}</h2>
        </div>
        
        <p className="text-justify w-full p-4">{content}</p>
        
        <div className="relative overflow-hidden rounded-lg aspect-video mb-4">
          <div className="skeleton absolute inset-0"></div>
          <img
            src={img}
            alt={`${title} project preview`}
            className="w-full h-full object-cover transform transition-all duration-500 ease-in-out group-hover:scale-105"
            loading="lazy"
          />
        </div>

        <div className="mt-auto">
          <div className="py-4 flex flex-wrap gap-3">{stack}</div>
          <div className={`rounded-lg w-fit ${
            state === "finished" ? "bg-red-400/60" : "bg-blue-400/60"
          } px-4 py-2 transition-colors duration-300`}>
            {state}
          </div>
        </div>
      </a>
    </div>
  );
}