import { FiGithub, FiMail, FiLinkedin, FiInstagram } from "react-icons/fi";
import Coffee from "../../assets/coffee.svg";
import Heart from "../../assets/heart.svg";
import { SiGithub, SiGmail, SiInstagram, SiLinkedin } from "react-icons/si";
export default function Footer() {
  return (
    <>
      <footer className="bg-white bg-opacity-5 m-4 rounded-lg p-4 text-white font-poppins flex flex-col justify-center items-center gap-8">
        {/* Tag */}
        <div>
          <ul className="text-base flex flex-row justify-center gap-4">
            <li className="hover:text-white text-slate-300 duration-300 hover:text-xl">
              <SiGmail className="w-8 h-8" />
            </li>
            <li className="hover:text-white text-slate-300 duration-300 hover:text-xl">
              <SiGithub className="w-8 h-8" />
            </li>
            <li className="hover:text-white text-slate-300 duration-300 hover:text-xl">
              <SiInstagram className="w-8 h-8" />
            </li>
          </ul>
        </div>
        <div className="flex flex-row justify-center items-center text-xl gap-1 text-slate-300 hover:text-white duration-300 ">
          Made with {"  "}
          <img src={Heart} className="h-8 w-8 text-white" /> &{" "}
          <img src={Coffee} className="h-8 w-8 text-white" /> in 2023
        </div>
      </footer>
    </>
  );
}
