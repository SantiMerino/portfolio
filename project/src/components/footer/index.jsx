import { CiCoffeeCup, CiHeart } from "react-icons/ci";
import { FiGithub, FiMail, FiLinkedin, FiInstagram } from "react-icons/fi";
import {
  SiGithub,
  SiGmail,
  SiInstagram,
  SiLinkedin,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
export default function Footer() {
  const email = "santimerinoh12@gmail.com";

  const handleCopyClick = () => {
    // Create a temporary textarea element to copy the text
    const textarea = document.createElement("textarea");
    textarea.value = email;
    document.body.appendChild(textarea);

    // Select the text inside the textarea
    textarea.select();

    try {
      // Copy the selected text to the clipboard
      document.execCommand("copy");
      alert("Email me!");
    } catch (error) {
      console.error("Error copying text:", error);
    }

    // Remove the temporary textarea from the DOM
    document.body.removeChild(textarea);
  };

  const handleRedirectClick = (email) => {
    const externalURL = email; // Replace with your desired external URL
    window.location.href = externalURL;
  };
  return (
    <>
      <footer className=" m-4 rounded-lg p-4 text-white font-poppins flex flex-col justify-center items-center gap-8">
        {/* Tag */}
        <div>
          <ul className="text-base flex flex-row justify-center gap-4">
            <li className="hover:text-red-500 duration-300 text-slate-300 hover:text-xl">
              <SiGmail className=" w-8 h-8" onClick={handleCopyClick} />
            </li>
            <li className="hover:text-purple-500 text-slate-300 duration-300 hover:text-xl">
              <SiGithub
                className="w-8 h-8"
                onClick={() =>
                  handleRedirectClick("https://github.com/SantiMerino")
                }
              />
            </li>
            <li className="hover:text-pink-500 text-slate-300 duration-300 hover:text-xl">
              <SiInstagram
                className="w-8 h-8"
                onClick={() =>
                  handleRedirectClick("https://www.instagram.com/_santimh/")
                }
              />
            </li>
          </ul>
        </div>
        <div className="flex flex-row justify-center items-center text-xl gap-1 text-slate-300 hover:text-white duration-300 ">
          Made with {"  "}
          <SiReact className="h-8 w-8 hover:text-orange-500 duration-300 mx-2" />{" "}
          &{" "}
          <SiTailwindcss className="h-8 w-8 hover:text-red-500 duration-300 mx-2" />{" "}
          in 2023
        </div>
      </footer>
    </>
  );
}
