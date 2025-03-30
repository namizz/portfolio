import { RiReactjsFill, RiVuejsFill } from "react-icons/ri";
import {
  SiApollographql,
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiGraphql,
  SiPostgresql,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { FaNode, FaGitAlt, FaJava } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { Inconsolata } from "next/font/google";
import { Kanit } from "next/font/google";

const smtxt = Inconsolata({
  subsets: ["latin"],
  weight: ["400"],
});
const txt = Kanit({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const skills = [
  {
    category: "Front-End Development Skills",
    items: [
      {
        icon: <RiReactjsFill className="text-sky-400" size={50} />,
        name: "React",
      },
      {
        icon: <RiVuejsFill className="text-green-500" size={50} />,
        name: "Vue.js",
      },
      {
        icon: <SiJavascript className="text-yellow-400" size={50} />,
        name: "JavaScript",
      },
      {
        icon: <SiTypescript className="text-blue-500" size={50} />,
        name: "TypeScript",
      },
      {
        icon: <SiTailwindcss className="text-sky-500" size={50} />,
        name: "Tailwind CSS",
      },
    ],
  },
  {
    category: "Back-End Development Skill & Databases Managment Skill",
    items: [
      { icon: <FaGolang className="text-blue-400" size={50} />, name: "Go" },
      {
        icon: <SiPostgresql className="text-blue-400" size={50} />,
        name: "PostgreSQL",
      },
      {
        icon: <FaJava className="text-sky-700" size={50} />,
        name: "Java",
      },
      {
        icon: <FaNode className="text-green-700" size={50} />,
        name: "Node.js with Express",
      },
    ],
  },
  {
    category: "API & Tools",
    items: [
      {
        icon: <SiGraphql className="text-red-400" size={50} />,
        name: "GraphQL",
      },
      {
        icon: <TbApi className="text-yellow-500" size={50} />,
        name: "REST API",
      },
      {
        icon: <SiApollographql className="text-blue-600" size={50} />,
        name: "Apollo",
      },

      { icon: <FaGitAlt className="text-red-800" size={50} />, name: "Git" },
    ],
  },
];

const Skill = () => {
  return (
    <div className={`lg:py-30 md:py-10 py-10 text-[#1f2341e0]`}>
      <p className="text-4xl font-bold mx-7 my-10">Skills</p>
      <div className={`font-sans ${smtxt.className}`}>
        {skills.map((section, index) => (
          <div
            key={index}
            className="shadow-md border-2 border-[#00000048] border-double p-3 pt-2 flex-col rounded-2xl mx-4 my-6 border-b-0"
          >
            <h3 className="text-xl font-bold mx-8 mb-3">{section.category}</h3>
            <div className="flex gap-6 flex-wrap mx-6">
              {section.items.map((skill, idx) => (
                <div key={idx} className="text-center justify-center">
                  {skill.icon}
                  <p className="font-light mt-1">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
