import { FaGithub, FaBriefcase, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { RiTelegram2Fill } from "react-icons/ri";

const SocialIcons = () => {
  return (
    <div className="flex-col space-x-4 text-xl my-auto">
      <a
        href="https://github.com/namizz"
        target="_blank"
        rel="noopener noreferrer"
        className=" group"
      >
        <FaGithub
          size={40}
          className="github-icon duration-200 group-hover:bg-gray-800 group-hover:text-gray-100 rounded-full border-1"
        />
      </a>
      <a href="mailto:naomizerfu@gmail.com" className="">
        <SiGmail
          size={35}
          className="hover:text-red-400  hover:bg-gray-100 duration-200 rounded-sm"
        />
      </a>
      <a
        href="https://t.me/naomizerfu"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-sky-500 duration-200"
      >
        <RiTelegram2Fill size={40} />
      </a>
      <a
        href="https://www.linkedin.com/in/naomi-zerfu-705045333"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-500 duration-200"
      >
        <FaLinkedin size={35} />
      </a>
    </div>
  );
};

export default SocialIcons;
