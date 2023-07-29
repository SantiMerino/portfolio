import CardImg from "../../assets/card.png";
// import academic-cap from ""
import Cap from "../../assets/cap.svg";
import Me from "../../assets/me22.png";
import { SiGithub, SiGmail, SiInstagram } from "react-icons/si";
export default function Card() {
  const iconClass = "h-10 w-10 p-2";
  return (
    <>
      <section className="font-rubik text-white font-bold flex flex-col m-4 rounded-lg hover:bg-white hover:bg-opacity-5 duration-200 ease-in-out">
        <div className="flex flex-row gap-4 lg:gap-10 lg:px-24 px-8 py-8">
          <div className="w-2/3 font-normal font-poppins text-slate-300 lg:text-xl lg:max-w-[1000px] text-justify">
            <h1 className="text-4xl self-center text-white pb-4">_me</h1>
            Aspiring computer science engineer, currently finishing technical
            high school, very self-taught, creative, problem solver, and putting
            high attention to details Enthusiastic in the design, UX/UI, and
            frontend development, aiming for a specialty in any of those areas
            <div className="bg-white bg-opacity-5 rounded-lg mt-10 p-4 flex flex-row">
              <SiGithub className={iconClass} />
              <SiInstagram className={iconClass} />
              <SiGmail className={iconClass} />
            </div>
          </div>
          <img src={Me} alt="" className="text-white h-[500px] " />
        </div>
      </section>
    </>
  );
}
