"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Inconsolata } from "next/font/google";
import { Kanit } from "next/font/google";
const smtxt = Inconsolata({
  subsets: ["latin"],
  weight: ["400"],
});
const txt = Kanit({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [expandedItems, setExpandedItems] = useState({});

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 40%", "end 70%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const toggleExpand = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className={` w-full font-sans md:px-3`} ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl text-neutral-800 max-w-4xl font-bold">
          Achievements and Certificates
        </h2>
      </div>
      <div className="flex">
        <div
          style={{ height: height + "px" }}
          className="relative p-5 md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 left-9 r-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
        <div ref={ref} className={`${txt.className}static max-w-7xl mx-auto `}>
          {data.map((item, index) => {
            const showAll = expandedItems[index];
            const visibleImages = showAll
              ? item.images
              : item.images?.slice(0, 2);
            return (
              <div
                key={index}
                className=" flex justify-start pt-10 md:pt-30 md:gap-10 "
              >
                <div className=" sticky flex flex-col md:flex-row z-0 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                  <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-neutral-200 border border-neutral-300 p-2" />
                  </div>
                  <div className="flex-col">
                    <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-[#213864de]">
                      {item.title}
                    </h3>
                    {item.images && item.images.length > 0 && (
                      <div
                        className={`flex gap-1 flex-wrap justify-center my-4 ${
                          item.images.length > 2 ? "ml-10 lg:ml-20" : ""
                        }`}
                      >
                        {visibleImages.map((imgSrc, imgIndex) => (
                          <img
                            key={imgIndex}
                            src={imgSrc}
                            alt={`Image ${imgIndex}`}
                            className="w-30 h-20 object-cover rounded-sm cursor-pointer border-2 border-[#0000006e] shadow-md hover:border-[#3979da]"
                            onClick={() => setSelectedImage(imgSrc)}
                          />
                        ))}
                        {item.images.length > 2 && (
                          <button
                            className=" relative text-white bg-[#00000079] rounded-md  my-auto px-1.5 text-xs right-8 border-1"
                            onClick={() => toggleExpand(index)}
                          >
                            {showAll ? "Show Less" : "+more"}
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                <div className=" text-lg pl-20 pr-4 md:pl-4 w-full">
                  <div className="flex justify-between">
                    <h3 className="block text-2xl mb-8 text-left font-bold text-neutral-700 dark:text-neutral-500">
                      {item.title}
                    </h3>
                    <p className="mx-6">{item.date ? item.date : ""}</p>
                  </div>
                  <p>{item.content}</p>
                  {item.references && Array.isArray(item.references) && (
                    <div className="mt-4">
                      <h4 className="text-lg font-semibold text-neutral-700">
                        More Detail:
                      </h4>
                      <ul className="list-disc pl-2 text-blue-500">
                        {item.references.map((ref, refIndex) => (
                          <li key={refIndex}>
                            <a
                              href={ref.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              {ref.label || ref.url}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {selectedImage && (
            <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-0">
              <div className="relative">
                <button
                  className="absolute top-2 right-2 text-white text-2xl bg-gray-700 rounded-full p-2"
                  onClick={() => setSelectedImage(null)}
                >
                  ✕
                </button>
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="max-w-[90vw] max-h-[90vh] rounded-lg"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
