"use client";
import { useState, useEffect } from "react";
import { Kanit } from "next/font/google";
import { Inconsolata } from "next/font/google";
import { IoPlayCircleOutline, IoPauseCircleOutline } from "react-icons/io5"; // Importing the icons

const titleFont = Kanit({ subsets: ["latin"], weight: ["400", "700"] });
const descFont = Inconsolata({ subsets: ["latin"], weight: ["400"] });

const ProjectCard = ({
  images,
  title,
  description,
  color,
  buttonColor,
  tools,
  livedemo,
  source,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false); // Track whether the slideshow is playing
  const [intervalId, setIntervalId] = useState(null); // Store the interval ID

  useEffect(() => {
    if (isPlaying) {
      // Only set interval if not already set
      const id = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3500); // Change image every 2 seconds (adjust as needed)

      // Set the interval ID
      setIntervalId(id);

      // Cleanup on component unmount or when `isPlaying` changes
      return () => clearInterval(id);
    }
  }, [isPlaying, images.length]); // Only trigger when `isPlaying` changes

  const handleImageClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying); // Toggle between play and pause
  };

  return (
    <div
      className={`relative z-10 bg-white opacity-80 border-1 p-1 pb-0 border-[#00000018] shadow-sm md:flex my-8`}
    >
      <div>
        <img
          src={images[currentIndex]}
          alt={`slide-${currentIndex}`}
          className={`border-1 border-[${buttonColor}] p-1 mx-6 md:mx-0 w-[90%] h-[90%] md:w-60 md:h-60 object-contain cursor-pointer transition-opacity duration-500`}
          style={{ borderColor: `${buttonColor}50` }}
          onClick={handleImageClick}
        />
        <div className="flex justify-around md:justify-between">
          <PlayPause
            isPlaying={isPlaying}
            buttonColor={buttonColor}
            handlePlayPause={handlePlayPause}
          />
          <div className="mt-2 flex justify-center gap-1">
            {images.map((_, index) => (
              <span
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-colors duration-300 ${
                  currentIndex === index ? "bg-[#2b4474]" : "bg-gray-200"
                }`}
              ></span>
            ))}
          </div>
          <div className="w-14"></div>
        </div>
      </div>
      <div className="flex flex-col px-6 md:w-[70%]">
        <div>
          <h2
            className={`px-3 mt-4 text-3xl font-bold ${titleFont.className}`}
            style={{ color: color }}
          >
            {title}
          </h2>
          <p className={`mt-2 text-lg text-gray-600 ${descFont.className}`}>
            {description}
          </p>
        </div>
        <div className="flex">
          <p style={{ color: "#4af", opacity: 0.9 }}>Things used:</p>
          <Tool tools={tools} buttonColor={buttonColor} />
        </div>
        <div className="flex items-end h-full py-2">
          <Button buttonColor={buttonColor} name="Live Demo" link={livedemo} />
          <Button
            buttonColor={buttonColor}
            name="< Source Code />"
            link={source}
          />
        </div>
      </div>
    </div>
  );
};

const Button = ({ buttonColor, name, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button
        className="relative z-10 mx-1 px-4 py-2 rounded text-white font-bold"
        style={{ backgroundColor: buttonColor }}
      >
        {name}
      </button>
    </a>
  );
};
const Tool = ({ tools, buttonColor }) => {
  return (
    <div className="flex flex-wrap gap-2" style={{ color: buttonColor }}>
      {tools &&
        tools.map((tool, index) => (
          <div
            key={index}
            className="border-1 inline-block rounded-full px-2 text-sm "
            style={{ color: buttonColor }}
          >
            {tool}
          </div>
        ))}
    </div>
  );
};

const PlayPause = ({ isPlaying, buttonColor, handlePlayPause }) => {
  return (
    <div className="flex justify-start ">
      <button
        className={`pl-2 py-1 rounded text-[#2b4474]  font-bold ${buttonColor}`}
        onClick={handlePlayPause}
      >
        {isPlaying ? (
          <IoPauseCircleOutline size={27} /> // Show pause icon when playing
        ) : (
          <IoPlayCircleOutline size={27} /> // Show play icon when paused
        )}
      </button>
      <p className="text-gray-500 text-sm mx-1 my-auto">slide</p>
    </div>
  );
};
export default ProjectCard;
