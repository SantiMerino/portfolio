import React from "react";
import CV from "../../assets/cv.pdf";

export default function Header() {
  const scrollToSection = (sectionID) => {
    const section = document.getElementById(sectionID);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const pdfUrl = CV;

  return (
    <>
      <div className="m-4 font-poppins flex md:flex-row  flex-col items-center">
        <div className="flex flex-row text-lg">
          <p className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-3 text-2xl text-white  hover:font-bold hover:text-red-500 hover:text-3xl duration-500 hover:border-cyan-500">
            _santimh
          </p>
        </div>
        <nav className=" flex md:justify-end justify-center md:mt-0 mt-4  w-full">
          <ul className=" text-sm flex gap-4 text-slate-300 flex-col md:flex-row ">
            <li
              className="px-4 py-2 hover:text-red-500 hover:text-base transition-all duration-200 ease-in-out"
              onClick={() => scrollToSection("me")}
            >
              _me
            </li>
            <li
              className="px-4 py-2 hover:text-red-500 hover:text-base transition-all duration-300 ease-in-out"
              onClick={() => scrollToSection("skills")}
            >
              _skills
            </li>
            <li
              className="px-4 py-2 hover:text-red-500 hover:text-base transition-all duration-200 ease-in-out"
              onClick={() => scrollToSection("projects")}
            >
              _projects
            </li>
            <a
              className="px-4 py-2 hover:text-white  hover:text-base transition-all duration-200 ease-in-out"
              href={pdfUrl}
            >
              _cv
            </a>
          </ul>
        </nav>
      </div>
    </>
  );
}
