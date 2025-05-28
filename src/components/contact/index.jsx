import { SiGithub, SiGmail, SiInstagram, SiLinkedin } from "react-icons/si";

export default function Contact() {
  const email = "santimerinoh12@gmail.com";
  const iconClass = "w-8 h-8 contact-icon";

  const handleCopyClick = () => {
    navigator.clipboard.writeText(email)
      .then(() => alert("Email copied to clipboard!"))
      .catch(err => console.error("Failed to copy:", err));
  };

  const handleRedirectClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="font-poppins text-white m-4 p-8 rounded-lg">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 hover:text-red-500 transition-colors duration-300">
        _contact
      </h2>
      
      <div className="max-w-2xl mx-auto bg-white bg-opacity-5 rounded-lg p-6 md:p-8">
        <p className="text-slate-300 text-center mb-8 text-lg">
          Let's connect! Feel free to reach out through any of these platforms.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
          <button
            onClick={() => handleRedirectClick("https://github.com/SantiMerino")}
            className="flex flex-col items-center gap-2 group"
            aria-label="GitHub Profile"
          >
            <SiGithub className={`${iconClass} group-hover:text-purple-500`} />
            <span className="text-sm text-slate-300 group-hover:text-purple-500">GitHub</span>
          </button>

          <button
            onClick={() => handleRedirectClick("https://www.linkedin.com/in/santiago-merino")}
            className="flex flex-col items-center gap-2 group"
            aria-label="LinkedIn Profile"
          >
            <SiLinkedin className={`${iconClass} group-hover:text-blue-500`} />
            <span className="text-sm text-slate-300 group-hover:text-blue-500">LinkedIn</span>
          </button>

          <button
            onClick={handleCopyClick}
            className="flex flex-col items-center gap-2 group"
            aria-label="Copy Email Address"
          >
            <SiGmail className={`${iconClass} group-hover:text-red-500`} />
            <span className="text-sm text-slate-300 group-hover:text-red-500">Email</span>
          </button>

          <button
            onClick={() => handleRedirectClick("https://www.instagram.com/_santimh/")}
            className="flex flex-col items-center gap-2 group"
            aria-label="Instagram Profile"
          >
            <SiInstagram className={`${iconClass} group-hover:text-pink-500`} />
            <span className="text-sm text-slate-300 group-hover:text-pink-500">Instagram</span>
          </button>
        </div>
      </div>
    </section>
  );
}