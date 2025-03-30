"use client";
const NavBar = () => {
  return (
    <div className=" shadow-md p-4  px-8 flex justify-between md:px-10 xl:px-70 2xl:px-100">
      <Image />
      {/* <div><p className="text-4xl">Welcome</p>{" "}</div> */}
      <div className="flex space-x-7">
        <Button text="Home" id="main" />
        <Button text="Project" id="project" />
        <DownloadCVButton />
      </div>
    </div>
  );
};

const DownloadCVButton = () => {
  return (
    <div className="my-auto font-semibold">
      <a
        href="/Resume.pdf" // Path to your CV file
        download="Naomi_Zerfu_CV" // Optional: Specify a name for the downloaded file
        className="btn-download"
      >
        <button className="bg-gradient-to-tl from-[#000] to-[#696969] text-white py-2 px-4 rounded">
          Download CV
        </button>
      </a>
    </div>
  );
};
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 110;
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
  }
};
const Button = ({ text, href, id }) => {
  return (
    <div className=" my-auto" onClick={() => scrollToSection(id)}>
      <a href={href} className="text-xl font-semibold">
        {text}
      </a>
    </div>
  );
};
const Image = () => {
  return (
    <div
      className="flex align-middle relative group "
      onClick={() => scrollToSection("main")}
    >
      <a className="relative group block w-16 h-16 rounded-full">
        <img
          src="/IMG_20240908_150558_078.jpg"
          alt="back-to-home"
          className="w-16 h-16 rounded-full border-2 border-gray-600 transition-all duration-500 group-hover:border-transparent"
        />
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <img
            src="/IMG_20240908_150558_078.jpg"
            alt="back-to-home"
            className="w-16 h-15 rounded-full border-2 border-gray-500 transition-all duration-500 group-hover:border-transparent"
          />
        </span>
      </a>
      <div className=" mx-2 my-auto text-xl font-semibold text-[#000000c2]">
        Mr. Shiferaw
      </div>
    </div>
  );
};
export default NavBar;
