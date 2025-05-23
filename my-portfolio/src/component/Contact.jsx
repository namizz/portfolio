import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { RiTelegram2Fill } from "react-icons/ri";
import { FaUpwork } from "react-icons/fa6";
import FloatingDockDemo from "./container/Footer";
import ContactSection from "./container/DM";

const SocialIcons = () => {
  return (
    <div className="flex justify-center space-x-6 my-6">
      <a
        href="https://github.com/namizz"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <FaGithub
          size={70}
          className="github-icon duration-200 group-hover:bg-gray-800 group-hover:text-gray-100 rounded-full border-2 p-2"
        />
      </a>
      <a href="mailto:naomizerfu@gmail.com">
        <SiGmail
          size={65}
          className="text-red-400 hover:text-red-500 hover:bg-gray-100 duration-200 rounded-sm p-2"
        />
      </a>
      <a
        href="https://t.me/naomizerfu"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sky-500 hover:text-sky-600 duration-200 hover:bg-gray-100 "
      >
        <RiTelegram2Fill size={70} className="p-2" />
      </a>
      <a
        href="https://www.linkedin.com/in/naomi-zerfu-705045333" // Replace with your LinkedIn URL
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-500 duration-200 hover:bg-gray-100 "
      >
        <FaLinkedin size={70} className="p-2" />
      </a>
      <a
        href="https://www.upwork.com/freelancers/~0127b7b761e3bb2314" // Replace with your LinkedIn URL
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-600 hover:text-green-700 duration-200 hover:bg-gray-100 "
      >
        <FaUpwork size={70} className="p-2" />
      </a>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="my-30 lg:my-40 flex flex-col justify-center items-center text-center text-slate-700">
      <div></div>
      <h2 className="text-3xl md:text-4xl xl:text-5xl mb-4 ">
        You can reach out to me on social media and explore my work:
      </h2>
      <div className="my-4">
        <FloatingDockDemo />
      </div>

      {/* <SocialIcons /> */}
      <p className="text-2xl md:text-3xl xl:text-5xl mb-20">
        Let's Work Together
      </p>
      <div className="sm:p-5 text-left">
        <ContactSection />
      </div>
      {/* <p className="mt-6 text-lg">
        Reminder: My speciality is on front-end, but I can also do backend very well. So,
        let's work together!
      </p> */}
    </div>
  );
};

export default Contact;
