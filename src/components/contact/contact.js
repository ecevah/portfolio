import React from "react";
import { motion } from "framer-motion";

export default function Contact(props) {
  return (
    <>
      <div className="bgtext">contact</div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex justify-end max-[1340px]:justify-start max-[500px]:justify-center contact"
      >
        <div className="flex flex-col w-[68%] max-[1340px]:w-[95%] justify-end  max-[500px]:items-center">
          <div className="text-[40px] text-[#FFFFFF] leading-[2] cursor-default contact-title">
            {props.language ? "CONTACT ME" : "İLETİŞİM"}
          </div>
          <div className="w-[61px] h-[1px] bg-[#FF7E21] mb-[70px]"></div>
          <div className="grid grid-cols-4  max-[900px]:grid-cols-2 max-[500px]:grid-cols-1 w-[95%] justify-between">
            <div className="flex flex-col w-fit mb-[15px]">
              <p className="text-[32px] text-[#FFFFFF] cursor-default ">
                E-mail:
              </p>
              <p className="text-[#CBCBCB] text-[16px] cursor-default">
                eecevah@gmail.com
              </p>
            </div>
            <div className="flex flex-col w-fit mb-[15px]">
              <p className="text-[32px] text-[#FFFFFF] cursor-default">
                {props.language ? "Phone:" : "Telefon:"}
              </p>
              <p className="text-[#CBCBCB] text-[16px] cursor-default">
                +90 542 279 3365
              </p>
            </div>
            <div className="flex flex-col w-fit mb-[15px]">
              <p className="text-[32px] text-[#FFFFFF] cursor-default">
                GitHub:
              </p>
              <a
                href="https://github.com/ecevah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#CBCBCB] text-[16px]"
              >
                https://github.com/ecevah
              </a>
            </div>
            <div className="flex flex-col w-fit mb-[15px]">
              <p className="text-[32px] text-[#FFFFFF] cursor-default">
                Linkedin:
              </p>
              <a
                href="https://www.linkedin.com/in/ahmet-ecevit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#CBCBCB] text-[16px]"
              >
                https://www.linkedin.com/in/ahmet-ecevit
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
