import React from "react";

export default function Header() {
  const scrollToSection = (sectionID) => {
    const section = document.getElementById(sectionID);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="m-4 font-poppins flex flex-row ">
        <div className="flex flex-row text-lg">
          <p className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-3 text-2xl text-white">
            _santimh
          </p>
        </div>
        <nav className=" flex justify-end w-full">
          <ul className=" text-sm flex flex-row gap-4 text-slate-300 ">
            <li
              className="px-4 py-2 hover:text-white hover:text-base transition-all duration-200 ease-in-out"
              onClick={() => scrollToSection("me")}
            >
              _me
            </li>
            <li
              className="px-4 py-2 hover:text-white hover:text-base transition-all duration-300 ease-in-out"
              onClick={() => scrollToSection("skills")}
            >
              _skills
            </li>
            <li
              className="px-4 py-2 hover:text-white hover:text-base transition-all duration-200 ease-in-out"
              onClick={() => scrollToSection("projects")}
            >
              _projects
            </li>
            {/* <li
              className="px-4 py-2 hover:text-white  hover:text-base transition-all duration-200 ease-in-out"
              onClick={() => scrollToSection("contact")}
            >
              _contact
            </li> */}
          </ul>
        </nav>
      </div>
    </>
  );
}
