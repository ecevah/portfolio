"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { constant } from "@/constants/constant";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import {
  RiInstagramFill,
  RiTranslate2,
  RiMenu3Line,
  RiCloseLine,
} from "react-icons/ri";
import HomeComponents from "@/components/home/home";
import About from "@/components/about/about";
import Contact from "@/components/contact/contact";
import Projects from "@/components/projects/projects";
import { slide as Menu } from "react-burger-menu";

export default function Home() {
  const Constant = new constant();
  const [page, setPage] = useState(0);
  const [language, setLanguage] = useState(true);
  const [show, setShow] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5.5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: -1000000,
    cssEase: "linear",
    pauseOnHover: false,
    prevArrow: false,
    nextArrow: false,
  };

  return (
    <div className="relative w-[100%] h-[125%] overflow-hidden">
      <motion.div
        className={`sidebar w-[100vw] h-[117vh] bg-[#0d0c0c] ${
          show ? "absolute opacity-100" : "hidden opacity-0"
        } absolute  min-[1340px]:hidden `}
        initial={
          show
            ? { width: "0px", display: "none" }
            : { width: "100%", display: "block" }
        }
        animate={
          show
            ? { width: "100%", display: "block" }
            : { width: "0px", display: "none" }
        }
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col justify-between items-center w-full h-full">
          <div
            onClick={() => setShow(false)}
            className="flex flex-row w-full justify-between px-[55px] py-[70px]"
          >
            <div></div>
            <RiCloseLine className="buttons scale-[2]" />
          </div>
          <div className="flex flex-col items-center">
            <div
              className={`text-[16px] my-2 ${
                page == 0 ? "text-[#FF7E21]" : "text-[#FFFFFF]"
              } cursor-pointer hover:text-[#FF7E21]`}
              onClick={() => {
                setPage(0);
                setShow(false);
              }}
            >
              {language ? Constant.header[0] : Constant.headerTR[0]}
            </div>
            <div
              className={`text-[16px] my-2 ${
                page == 1 ? "text-[#FF7E21]" : "text-[#FFFFFF]"
              } cursor-pointer hover:text-[#FF7E21]`}
              onClick={() => {
                setPage(1);
                setShow(false);
              }}
            >
              {language ? Constant.header[1] : Constant.headerTR[1]}
            </div>

            <div
              className={`text-[16px] my-2 ${
                page == 2 ? "text-[#FF7E21]" : "text-[#FFFFFF]"
              } cursor-pointer hover:text-[#FF7E21]`}
              onClick={() => {
                setPage(2);
                setShow(false);
              }}
            >
              {language ? Constant.header[2] : Constant.headerTR[2]}
            </div>
            <div
              className={`text-[16px] my-2 ${
                page == 3 ? "text-[#FF7E21]" : "text-[#FFFFFF]"
              } cursor-pointer hover:text-[#FF7E21]`}
              onClick={() => {
                setPage(3);
                setShow(false);
              }}
            >
              {language ? Constant.header[3] : Constant.headerTR[3]}
            </div>
          </div>
          <div className="flex flex-row items-center">
            <a
              href="https://github.com/ecevah"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                color="#FF7E21"
                className="scale-[1.6] mx-1 cursor-pointer"
              />
            </a>
            <a
              href="https://www.instagram.com/eecevah"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[26px] h-[26px] bg-[#FF7E21] rounded-full flex items-center justify-center cursor-pointer mx-[20px]"
            >
              <RiInstagramFill className="scale-[1.1]" />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmet-ecevit"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[26px] h-[26px] bg-[#FF7E21] rounded-full flex items-center justify-center cursor-pointer"
            >
              <FaLinkedinIn />
            </a>
            {/* mx yerine ml yap*/}
            <div
              className="w-[26px] h-[26px] flex items-center justify-center rounded-full cursor-pointer ml-[20px] overflow-hidden"
              onClick={() => setLanguage(!language)}
            >
              <Image
                src={language ? "/en.svg" : "/tr.svg"}
                width={100}
                height={100}
                className={language ? "scale-[1.5]" : "scale-[1.8] pb-[0.5px]"}
              />
            </div>
          </div>
          <div></div>
        </div>
      </motion.div>
      <motion.div
        initial={{ rotate: 42, y: 60 }}
        animate={
          page === 0
            ? { rotate: 45, left: "23%", top: "30%" }
            : page === 1
            ? { rotate: -8, x: "-2vw", y: "78vh" }
            : page === 2
            ? { rotate: 8, x: "-10vw", y: "114vh" }
            : page === 3
            ? { rotate: 30, x: "-70vw", y: "70vh" }
            : { rotate: 45, y: 60 }
        }
        transition={{ duration: 1.5 }}
        className="overflow-hidden min-[1580px]:!block !hidden absolute w-[2500px] h-[94px] bg-white shadow-[0_45px_65px_rgba(0,0,0,0.5)] drop-shadow-[0_45px_65px_rgba(0,0,0,0.5)] z-[90]"
      >
        <Slider {...settings}>
          {Constant.lightCarousel.map((item, index) => (
            <div key={`L${index}`}>
              <div className="h-[100px] flex flex-row items-center justify-around">
                <div className="roboto text-[32px] text-[#212121] cursor-default flex flex-row items-center">
                  {item}
                </div>
                <div className="w-[16px] h-[16px] rounded-full bg-[#FF7E21] mx-[80px]"></div>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
      <motion.div
        initial={{ rotate: 42, y: 60 }}
        animate={
          page === 0
            ? { rotate: 45, left: "10%", top: "30%" }
            : page === 1
            ? { rotate: -8, x: "-6vw", y: "78vh" }
            : page === 2
            ? { rotate: 8, x: "-10vw", y: "114vh" }
            : page === 3
            ? { rotate: 30, x: "-70vw", y: "70vh" }
            : { rotate: 45, y: 60 }
        }
        transition={{ duration: 1.5 }}
        className={` overflow-hidden min-[1350px]:!block min-[1580px]:!hidden ${
          page == 0 || page == 3 ? "!hidden" : "!block"
        } absolute w-[2500px] h-[94px] bg-white shadow-[0_45px_65px_rgba(0,0,0,0.5)] drop-shadow-[0_45px_65px_rgba(0,0,0,0.5)] z-[90] `}
      >
        <Slider {...settings}>
          {Constant.lightCarousel.map((item, index) => (
            <div key={`L${index}`}>
              <div className="h-[100px] flex flex-row items-center justify-around">
                <div className="roboto text-[32px] text-[#212121] cursor-default flex flex-row items-center">
                  {item}
                </div>
                <div className="w-[16px] h-[16px] rounded-full bg-[#FF7E21] mx-[80px]"></div>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
      <motion.div
        initial={{ rotate: 42, y: 60 }}
        animate={
          page === 0
            ? { rotate: 45, left: "4%", top: "30%" }
            : page === 1
            ? { rotate: -8, x: "-2vw", y: "78vh" }
            : page === 2
            ? { rotate: 8, x: "-10vw", y: "114vh" }
            : page === 3
            ? { rotate: 5, x: "-55vw", y: "100vh" }
            : { rotate: 45, y: 60 }
        }
        transition={{ duration: 1.5 }}
        className={`${
          page == 3 ? "max-[1350px]:!block" : "max-[1350px]:!hidden"
        } overflow-hidden min-[1350px]:!hidden absolute w-[2500px] h-[94px] bg-white shadow-[0_45px_65px_rgba(0,0,0,0.5)] drop-shadow-[0_45px_65px_rgba(0,0,0,0.5)] z-[90]`}
      >
        <Slider {...settings}>
          {Constant.lightCarousel.map((item, index) => (
            <div key={`L${index}`}>
              <div className="h-[100px] flex flex-row items-center justify-around">
                <div className="roboto text-[32px] text-[#212121] cursor-default flex flex-row items-center">
                  {item}
                </div>
                <div className="w-[16px] h-[16px] rounded-full bg-[#FF7E21] mx-[80px]"></div>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
      <motion.div
        initial={{ rotate: -10, y: "65vh", x: -100 }}
        animate={
          page == 0
            ? { rotate: -9, y: "83vh", x: -40 }
            : page == 1
            ? { rotate: -47, y: "30vh", x: "-60vw" }
            : page == 2
            ? { rotate: -70, y: "75vh", x: "-80vw" }
            : page == 3
            ? { rotate: -70, y: "67vh", x: "-73vw" }
            : { rotate: -10, y: "65vh", x: -100 }
        }
        transition={{ duration: 0.5 }}
        className={`${
          page == 0
            ? "block"
            : "min-[1350px]:!block min-[1500px]:!hidden !hidden"
        } absolute w-[2500px] h-[94px] bg-[#212121] shadow-[0_45px_65px_rgba(0,0,0,0.5)] drop-shadow-[0_45px_65px_rgba(0,0,0,0.5)] z-[89]`}
      >
        <Slider {...settings} className="w-full">
          {Constant.darkCarousel.map((item, index) => (
            <div key={`D${index}`}>
              <div className="h-[100px] flex flex-row items-center justify-around">
                <div className="roboto text-[32px] text-[#FFFFFF] cursor-default flex flex-row items-center">
                  {item}
                </div>
                <div className="w-[16px] h-[16px] rounded-full bg-[#FF7E21] mx-[80px]"></div>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
      <motion.div
        initial={{ rotate: -10, y: "65vh", x: -100 }}
        animate={
          page == 0
            ? { rotate: -9, y: "85vh", x: -40 }
            : page == 1
            ? { rotate: -47, y: "30vh", x: "-60vw" }
            : page == 2
            ? { rotate: -70, y: "75vh", x: "-63vw" }
            : page == 3
            ? { rotate: -70, y: "67vh", x: "-61vw" }
            : { rotate: -10, y: "65vh", x: -100 }
        }
        transition={{ duration: 0.5 }}
        className={`z-[10] ${
          page == 0 ? "hidden" : "min-[1500px]:!block !hidden"
        } absolute w-[2500px] h-[94px] bg-[#212121] shadow-[0_45px_65px_rgba(0,0,0,0.5)] drop-shadow-[0_45px_65px_rgba(0,0,0,0.5)]`}
      >
        <Slider {...settings} className="w-full">
          {Constant.darkCarousel.map((item, index) => (
            <div key={`D${index}`}>
              <div className="h-[100px] flex flex-row items-center justify-around">
                <div className="roboto text-[32px] text-[#FFFFFF] cursor-default flex flex-row items-center">
                  {item}
                </div>
                <div className="w-[16px] h-[16px] rounded-full bg-[#FF7E21] mx-[80px]"></div>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
      <div className="w-full px-[50px] flex flex-col z-[88]">
        <div className="flex flex-row justify-between items-center w-full h-[150px]">
          <div className="flex flex-row w-[470px] items-center max-[1340px]:hidden">
            <div
              className="w-[26px] h-[26px] flex items-center justify-center rounded-full cursor-pointer mx-[20px] overflow-hidden"
              onClick={() => setLanguage(!language)}
            >
              <Image
                src={language ? "/en.svg" : "/tr.svg"}
                width={100}
                height={100}
                className={language ? "scale-[1.5]" : "scale-[1.8] pb-[0.5px]"}
              />
            </div>
            <a
              href="https://github.com/ecevah"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                color="#FF7E21"
                className="scale-[1.6] mx-1 cursor-pointer"
              />
            </a>
            <a
              href="https://www.instagram.com/eecevah"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[26px] h-[26px] bg-[#FF7E21] rounded-full flex items-center justify-center cursor-pointer mx-[20px]"
            >
              <RiInstagramFill className="scale-[1.1]" />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmet-ecevit"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[26px] h-[26px] bg-[#FF7E21] rounded-full flex items-center justify-center cursor-pointer"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <h1 className="text-[50px] text-[#FFFFFF] cursor-default max-[334px]:text-[30px]">
            Ahmet Ecevit
          </h1>
          <div className="flex flex-row items-center max-[1340px]:hidden">
            <div
              className={`text-[16px] ${
                page == 0 ? "text-[#FF7E21]" : "text-[#FFFFFF]"
              } cursor-pointer hover:text-[#FF7E21]`}
              onClick={() => setPage(0)}
            >
              {language ? Constant.header[0] : Constant.headerTR[0]}
            </div>
            <div
              className={`h-[28px] w-[1px] bg-gradient-to-b from-[#2D2D2D] via-white to-[#2D2D2D] ${
                language ? "mx-[40px]" : "mx-[30px]"
              }`}
            ></div>
            <div
              className={`text-[16px] ${
                page == 1 ? "text-[#FF7E21]" : "text-[#FFFFFF]"
              } cursor-pointer hover:text-[#FF7E21]`}
              onClick={() => setPage(1)}
            >
              {language ? Constant.header[1] : Constant.headerTR[1]}
            </div>
            <div
              className={`h-[28px] w-[1px] bg-gradient-to-b from-[#2D2D2D] via-white to-[#2D2D2D] ${
                language ? "mx-[40px]" : "mx-[30px]"
              }`}
            ></div>{" "}
            <div
              className={`text-[16px] ${
                page == 2 ? "text-[#FF7E21]" : "text-[#FFFFFF]"
              } cursor-pointer hover:text-[#FF7E21]`}
              onClick={() => setPage(2)}
            >
              {language ? Constant.header[2] : Constant.headerTR[2]}
            </div>
            <div
              className={`h-[28px] w-[1px] bg-gradient-to-b from-[#2D2D2D] via-white to-[#2D2D2D] ${
                language ? "mx-[40px]" : "mx-[30px]"
              }`}
            ></div>{" "}
            <div
              className={`text-[16px] ${
                page == 3 ? "text-[#FF7E21]" : "text-[#FFFFFF]"
              } cursor-pointer hover:text-[#FF7E21]`}
              onClick={() => setPage(3)}
            >
              {language ? Constant.header[3] : Constant.headerTR[3]}
            </div>
          </div>
          <div
            onClick={() => setShow(!show)}
            className="min-[1340px]:hidden scale-[1.7]"
          >
            <RiMenu3Line className="buttons" />
          </div>
        </div>
        {page == 0 ? <HomeComponents language={language} /> : null}
        {page == 1 ? <Contact language={language} /> : null}
        {page == 2 ? <Projects language={language} /> : null}
        {page == 3 ? <About language={language} /> : null}
      </div>
    </div>
  );
}
