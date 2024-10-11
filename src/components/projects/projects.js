import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { constant } from "@/constants/constant";
import Link from "next/link";

export default function Projects(props) {
  const Constant = new constant();
  return (
    <>
      <div className="bgtext">projects</div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex justify-end max-[1340px]:justify-start max-[500px]:justify-center"
      >
        <div className="flex flex-col w-[74%] max-[1340px]:w-[90%] justify-start max-[500px]:items-center">
          <div className="text-[40px] text-[#FFFFFF] leading-[2] cursor-default">
            {props.language ? "PROJECTS" : "PROJELER"}
          </div>
          <div className="w-[61px] h-[1px] bg-[#FF7E21] mb-[15px]"></div>
          <div className="projects max-[600px]:!grid-cols-1 w-fit items-start justify-self-start h-[700px] overflow-scroll pt-[55px] pb-[255px]">
            {props.language
              ? Constant.projects.map((item, index) => (
                  <Link href={item.link}>
                    <div
                      className="flex flex-col items-center mb-[10px] mr-[10px]"
                      key={index}
                    >
                      {item.isVideo ? (
                        <video
                          width="640"
                          height="360"
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="rounded-md"
                        >
                          <source src={item.image} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <Image
                          src={item.image}
                          width={300}
                          height={150}
                          className="rounded-md"
                        />
                      )}

                      <div className="text-[22px] text-white mt-[25px] cursor-default">
                        {item.name}
                      </div>
                      <div className="flex flex-row items-start">
                        <div className="w-[4.5px] h-[4.5px] bg-[#FF7E21] rounded-full mt-2 mr-1"></div>
                        <div className="w-[250px] text-white text-[14px] cursor-default">
                          {item.title}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              : Constant.projectsTR.map((item) => (
                  <Link href={item.link}>
                    <div className="flex flex-col items-center mb-[10px]  mr-[10px]">
                      {item.isVideo ? (
                        <video
                          width="640"
                          height="360"
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="rounded-md"
                        >
                          <source src={item.image} type="video/mp4" />
                          Tarayıcınız video etiketini desteklemiyor.
                        </video>
                      ) : (
                        <Image
                          src={item.image}
                          width={300}
                          height={150}
                          className="rounded-md"
                        />
                      )}
                      <div className="text-[22px] text-white mt-[25px] cursor-default">
                        {item.name}
                      </div>
                      <div className="flex flex-row items-start">
                        <div className="w-[4.5px] h-[4.5px] bg-[#FF7E21] rounded-full mt-2 mr-1"></div>
                        <div className="w-[250px] text-white text-[14px] cursor-default">
                          {item.title}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}
