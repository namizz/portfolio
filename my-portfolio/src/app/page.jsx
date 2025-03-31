import NavBar from "../component/NavBar";
import Achivement from "../component/container/Achivement";
import Skill from "../component/container/Skill";
import Timeline from "../component/Achivment";
import Contact from "../component/Contact";
import Project from "../component/container/ProjectSection";
import { color } from "motion/react";
import Main from "../component/container/Home";

export default function Home() {
  return (
    <div className="bg-white">
      <div className="fixed bg-white w-full z-50 top-0">
        <NavBar />
      </div>
      <div className="px-4 lg:px-6 xl:px-0 mt-40">
        <div className="max-w-[1100px] w-full mx-auto my-10 ">
          <div id="main">
            <Main />
          </div>
          <div id="project">
            <Project />
          </div>
          <div id="skills">
            <Skill />
          </div>
          <Achivement />
          <Contact />
        </div>
      </div>
    </div>
  );
}
