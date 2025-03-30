import Photo from "../Photo";
import SocialIcons from "../SocialIcons";
const PhtSocial = () => {
  return (
    <div className="flex max-w-xs my-auto ">
      <SocialIcons />
      <Photo />
      <SocialIcons />
    </div>
  );
};

export default PhtSocial;
