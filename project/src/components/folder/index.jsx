import { CiFolderOn } from "react-icons/ci";
export default function Folder(props) {
  const { title, content, github, stack, color, state } = props;
  return (
    <>
      <div className="bg-white font-poppins bg-opacity-5 rounded-lg flex flex-col text-slate-300 p-4 hover:scale-105 duration-300 ease-in-out max-w-md min-w-sm flex-wrap ">
        <a href={github}>
          <div className="flex flex-row items-center gap-6 px-2">
            <CiFolderOn className={`h-14 w-14 ${color}`} />
            <h1 className=" text-xl font-rubik text-white">{title}</h1>
          </div>
          <p className="text-justify w-full p-4">{content}</p>
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
