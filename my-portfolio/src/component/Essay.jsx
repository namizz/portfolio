import { Kanit } from "next/font/google";
import { Inconsolata } from "next/font/google";
import GradientButton from "./Button";

const smtxt = Inconsolata({
  subsets: ["latin"],
  weight: ["400"],
});
const txt = Kanit({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Essay = () => {
  return (
    <div
      className={`font-sans ${smtxt.className} text-base sm:text-lg md:text-xl py-[3vw] px-3 max-w-[600px]`}
    >
      <p className={`${txt.className} text-xl xl:text-3xl`}>I'm</p>
      <div className={`${txt.className} inline-block`}>
        <p className="text-2xl md:text-3xl xl:text-4xl">Naomi Zerfu Shiferaw</p>
        {/* <p className="relative text-xs sm:text-sm text-right font-extralight -top-1 text-gray-800 opacity-60">
          (you can call me Mr. Shiferaw)
        </p> */}
      </div>

      <p className="-top-3 text-base xl:text-lg">
        A Full-Stack Web Developer specializing in Next.js and React. I build
        responsive, high-performing web applications that help businesses grow
        and engage users effectively. Beyond the front end, I develop reliable
        APIs and server logic using Go, Java, and Express.js to ensure seamless
        performance across the stack. I focus on delivering clean, scalable, and
        maintainable code — always aiming for precision, quality, and client
        satisfaction.
      </p>
      <div className="p-2">
        <GradientButton />
      </div>
    </div>
  );
};

export default Essay;
