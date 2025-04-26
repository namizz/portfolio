"use client";
import React, { useState } from "react";

const MagicWand = () => {
  const [image, setImage] = useState("/magic-wand.png");

  const handleMouseEnter = () => {
    setImage("/magic-wand (1).png"); // Change image on hover
  };

  const handleMouseLeave = () => {
    setImage("/magic-wand.png"); // Revert image when mouse leaves
  };

  const handleClick = () => {
    setImage("/magic-wand (2).png"); // Change image on click
  };

  return (
    <div className="">
      <button
        className="w-18 h-18 p-0 border-none bg-transparent"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") handleClick();
        }}
        aria-label="Magic Wand"
      >
        <img className="relative z-10" src={image} alt="Magic Wand" />
      </button>
    </div>
  );
};

export default MagicWand;
