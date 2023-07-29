import Me from "../../assets/me2.png";
import { SiGithub, SiGmail, SiInstagram } from "react-icons/si";
export default function Card() {
  const iconClass =
    "h-8 w-8 hover:text-white duration-300 ease-in-out hover:h-10 hover:w-10";
  return (
    <>
      <section
        id="me"
        className="font-rubik text-white font-bold flex flex-col m-4 rounded-lg duration-200 ease-in-out"
      >
        <div className="flex flex-row gap-4 lg:gap-10 lg:px-24 px-8 py-8 items-center">
          <div className="w-2/3 font-normal font-poppins text-slate-300 lg:text-xl lg:max-w-[1000px] text-justify flex flex-col">
            <div className="flex self-start justify-between w-full my-6">
              <h1 className="text-4xl text-white duration-200 ease-in-out w-fit self-center">
                _me
              </h1>
              <div className="bg-white bg-opacity-5 rounded-lg p-4 flex gap-4 self-end">
                <SiGithub className={iconClass} />
                <SiInstagram className={iconClass} />
                <SiGmail className={iconClass} />
              </div>
            </div>
            <h1 className="text-white italic p-2">
              José Santiago Merino Herrera
            </h1>
            Aspiring computer science engineer, currently finishing technical
            high school, very self-taught, creative, problem solver, and putting
            high attention to details <br />
            Enthusiastic in the design, UX/UI, and frontend development, aiming
            for a specialty in any of those areas
          </div>
          <img src={Me} alt="" className="text-white h-[500px] " />
        </div>
      </section>
    </>
  );
}
