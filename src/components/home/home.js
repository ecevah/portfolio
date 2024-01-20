import React from "react";
import { motion } from "framer-motion";

export default function HomeComponents(props) {
  return (
    <>
      <div className="bgtext">dev</div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col w-[1200px] max-[1200px]:w-[90%] items-start justify-start max-[630px]:ml-[0px] ml-[60px] max-[630px]:justify-center max-[630px]:h-[70vh]"
      >
        <div className="text-[#FFFFFF] text-[150px] max-[500px]:leading-[1.2] max-[500px]:mb-[30px] max-[500px]:text-[90px] leading-[1.7] mt-[7%] cursor-default max-[810px]:text-[100px] max-[630px]:text-[75px] max-[334px]:text-[60px]">
          Hello World!
        </div>
        {props.language ? (
          <p className="text-[#FFFFFF] text-[60px] cursor-default max-[810px]:text-[40px] max-[630px]:text-[35px] max-[334px]:text-[25px]">
            Welcome To My <span className="text-[#FF7E21]">Portfolio!</span> I'm
            A <span className="text-[#FF7E21]">Full Stack Developer</span>
          </p>
        ) : (
          <p className="text-[#FFFFFF] text-[60px] cursor-default max-[810px]:text-[40px] max-[630px]:text-[35px]  max-[334px]:text-[25px]">
            <span className="text-[#FF7E21]">Portfölyüme</span> hoş geldiniz!
            Ben bir{" "}
            <span className="text-[#FF7E21]">Full Stack Geliştiriciyim</span>.
          </p>
        )}
      </motion.div>
    </>
  );
}
