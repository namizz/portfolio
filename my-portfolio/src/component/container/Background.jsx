"use client";
import React, { Children } from "react";
import { Boxes } from "../BackgroundBoxes";
import { cn } from "../../../lib/utils";

const Background = ({ children }) => {
  return (
    <div className=" relative w-full overflow-hidden bg-white flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-transparent z-10 pointer-events-none" />
      <Boxes />
      {children}
    </div>
  );
};
export default Background;
