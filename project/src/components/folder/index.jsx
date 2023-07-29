import { CiFolderOn } from "react-icons/ci";
export default function Folder(props) {
  const { title, content, github, stack, color, state, img } = props;
  return (
    <>
      <div className="bg-white font-poppins bg-opacity-5 rounded-lg flex flex-col text-slate-300 p-4 duration-300 ease-in-out min-w-[300px] lg:min-w-[400px]flex-shrink">
        <a href={github} className="group">
          <div className="flex flex-row items-center gap-6 px-2">
            <CiFolderOn className={`h-14 w-14 ${color}`} />
            <h1 className=" text-xl font-rubik text-white">{title}</h1>
          </div>
          <p className="text-justify w-full p-4">{content}</p>
          <img
            src={img}
            className="group-hover:w-full group-hover:h-full hiddden h-0 w-0 transition-all duration-500 ease-in-out"
          />
          <div className="py-4">{stack}</div>
          <div
            className={`rounded-lg w-fit ${
              state === "finished" ? "bg-red-400/60" : "bg-blue-400/60"
            }  px-4 py-2`}
          >
            {state}
          </div>
        </a>
      </div>
    </>
  );
}
