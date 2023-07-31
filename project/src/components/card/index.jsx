import Me from "../../assets/me2.png";
import { SiGithub, SiGmail, SiInstagram } from "react-icons/si";
export default function Card() {
  const iconClass = "h-8 w-8 duration-300 ease-in-out hover:h-10 hover:w-10";

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
      <section
        id="me"
        className="font-rubik text-white font-bold flex flex-col m-4 rounded-lg duration-200 ease-in-out"
      >
        <div className="flex md:flex-row flex-col-reverse gap-4 lg:gap-10 lg:px-24 px-8 py-8 items-center">
          <div className="w-2/3 font-normal font-poppins text-slate-300 lg:text-xl lg:max-w-[1000px] text-justify flex flex-col">
            <div className="flex md:flex-row flex-col md:gap-0 gap-4 self-start justify-between w-full my-6">
              <h1 className="text-4xl text-white duration-300 ease-in-out w-fit self-center hover:font-bold hover:text-red-500 hover:text-5xl">
                _me
              </h1>
              <div className="bg-white bg-opacity-5 rounded-lg p-4 flex gap-4 self-center lg:self-end">
                <SiGithub
                  className={`hover:text-purple-500 ${iconClass}`}
                  onClick={() =>
                    handleRedirectClick("https://github.com/SantiMerino")
                  }
                />
                <SiInstagram
                  className={`hover:text-pink-500 ${iconClass}`}
                  onClick={() =>
                    handleRedirectClick("https://www.instagram.com/_santimh/")
                  }
                />
                <SiGmail
                  className={`hover:text-red-500 ${iconClass}`}
                  onClick={handleCopyClick}
                />
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
          <img
            src={Me}
            alt=""
            className="text-white sm:h-[500px] hover:scale-105 duration-500 hover:rotate-2"
          />
        </div>
      </section>
    </>
  );
}
