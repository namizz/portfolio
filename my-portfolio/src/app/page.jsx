import NavBar from "../component/NavBar";
import Achivement from "../component/container/Achivement";
import Skill from "../component/container/Skill";
import Contact from "../component/Contact";
import Project from "../component/container/ProjectSection";
import Main from "../component/container/Home";
import Background from "../component/container/Background";

export default function Home() {
  return (
    <div className="bg-white">
      <div className="fixed bg-white w-full z-50 top-0">
        <NavBar />
      </div>
      <Background>
        <div className="max-w-[1100px] w-full mx-auto my-10 mt-40 px-4 lg:px-6 xl:px-0">
          <div id="main">
            <Main />
          </div>
          <div id="project">
            <Project />
          </div>
        </div>
      </Background>
      <Background>
        <div className="max-w-[1100px] w-full mx-auto my-10 px-4 lg:px-6 xl:px-0">
          <div id="skills">
            <Skill />
          </div>
        </div>
      </Background>
      <Background>
        <div className="max-w-[1100px] w-full mx-auto my-10 px-4 lg:px-6 xl:px-0">
          <Achivement />
          <Contact />
        </div>
      </Background>
      {/* <Background /> */}
    </div>
  );
}
