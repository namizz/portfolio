import NavBar from "../component/NavBar";
import Achivement from "../component/container/Achivement";
import Skill from "../component/container/Skill";
import Contact from "../component/Contact";
import Project from "../component/container/ProjectSection";
import Main from "../component/container/Home";
import Background from "../component/container/Background";
import NavbarDemo from "../component/container/NavContainer";
import FloatingDockDemo from "../component/container/Footer";

export default function Home() {
  return (
    <div className="">
      {/* <div className="fixed w-full z-50 top-0"> */}
      <NavbarDemo />
      {/* <NavBar /> */}

      <Background>
        <div className="max-w-[1100px] w-full mx-auto pb-10 pt-30 px-4 lg:px-6 xl:px-0">
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
          <div id="contact">
            <Contact />
          </div>
        </div>
      </Background>
      <FloatingDockDemo />
    </div>
  );
}
