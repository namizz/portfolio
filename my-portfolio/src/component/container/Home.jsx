import MagicWand from "../Magic";
import Essay from "../Essay";
import PhtSocial from "./PhotoSocailMedia";
const Main = () => {
  return (
    <div className="flex flex-wrap items-center justify-around gap-6 mt-10 mb-20 md:mb-40 xl:mb-50">
      <MagicWand />
      <Essay />
      <PhtSocial />
    </div>
  );
};
export default Main;
