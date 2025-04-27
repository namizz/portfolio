import React from "react";
import { FloatingDock } from "../FooterComp";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { RiTelegram2Fill } from "react-icons/ri";
import { FaUpwork } from "react-icons/fa6";

const FloatingDockDemo = () => {
  const links = [
    {
      title: "GitHub",
      icon: (
        <FaGithub className="h-full w-full text-neutral-700 dark:text-neutral-300" />
      ),
      href: "https://github.com/namizz",
    },
    {
      title: "Gmail",
      icon: (
        <SiGmail className="h-full w-full text-red-400 dark:text-red-500" />
      ),
      href: "mailto:naomizerfu@gmail.com",
    },
    {
      title: "Telegram",
      icon: (
        <RiTelegram2Fill className="h-full w-full text-sky-500 dark:text-sky-400" />
      ),
      href: "https://t.me/naomizerfu",
    },
    {
      title: "LinkedIn",
      icon: (
        <FaLinkedin className="h-full w-full text-blue-500 dark:text-blue-300" />
      ),
      href: "https://www.linkedin.com/in/naomi-zerfu-705045333",
    },
    {
      title: "Upwork",
      icon: (
        <FaUpwork className="h-full w-full text-green-600 dark:text-green-500" />
      ),
      href: "https://www.upwork.com/freelancers/~0127b7b761e3bb2314",
    },
  ];

  return (
    <div className="flex items-center justify-center w-full">
      <FloatingDock mobileClassName="translate-y-20" items={links} />
    </div>
  );
};

export default FloatingDockDemo;
