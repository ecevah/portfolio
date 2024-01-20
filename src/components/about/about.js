import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { constant } from "@/constants/constant";

export default function About(props) {
  const Constant = new constant();
  return (
    <>
      <div className="bgtext">about</div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-row items-start justify-end mr-[50px] mt-[50px] about max-[950px]:flex-col max-[950px]:items-center max-[950px]:justify-start max-[950px]:h-[750px] max-[950px]:mr-0 max-[950px]:pb-[240px] z-[70] max-[500px]:items-center"
      >
        <div className="min-w-[315px] max-w-[315px] min-h-[315px] max-h-[315px] rounded-full overflow-hidden mr-[67px] max-[500px]:mx-auto">
          <Image
            src={"https://www.ahmetecevit.com/baku_photo.jpeg"}
            width={400}
            height={315}
            className="scale-[2] ml-7 pb-[80px]"
          />
        </div>
        <div className="flex flex-col w-[935px] max-[950px]:w-full justify-start min-[1500px]:w-[60%] max-[500px]:items-center">
          <div className="text-[40px] text-[#FFFFFF] leading-[2] cursor-default">
            {props.language ? "ABOUT ME" : "HAKKIMDA"}
          </div>
          <div className="w-[61px] h-[1px] bg-[#FF7E21]"></div>
          {props.language ? (
            <p className="text-[23px] text-white mt-[70px] cursor-default min-[1500px]:w-[80%] max-[500px]:text-center max-[1000px]:mt-[40px]">
              I am a computer engineering student and I want to focus my career
              as a
              <span className="text-[#FF7E21]"> Full Stack Web Developer.</span>{" "}
              I have a comprehensive knowledge and skill set in web development.
              Additionally, I have developed leadership and teamworking skills
              through various work experiences. During my education, I learned
              fundamental web technologies such as{" "}
              <span className="text-[#FF7E21]">HTML, CSS,</span> and{" "}
              <span className="text-[#FF7E21]">JavaScript</span> and I have
              worked on projects using modern frameworks like{" "}
              <span className="text-[#FF7E21]">React.js, Next.js,</span> and{" "}
              <span className="text-[#FF7E21]">Node.js.</span> I also have
              experience in database management. In addition to this, I develop
              mobile applications using{" "}
              <span className="text-[#FF7E21]">Flutter</span> language.
              Furthermore, I have worked in logistics companies as a vehicle
              manager and assistant general manager, which has enhanced my
              organizational, time management, and problem-solving skills. I am
              a good communicator, a fast learner, and a problem solver.
            </p>
          ) : (
            <p className="text-[23px] text-white mt-[70px] cursor-default min-[1500px]:w-[80%] max-[500px]:text-center  max-[1000px]:mt-[40px]">
              Bilgisayar Mühendisliği öğrencisiyim ve Full Stack Web Developer
              olarak kariyerime odaklanmak istiyorum. Web geliştirme konusunda
              kapsamlı bir bilgi ve beceri setine sahibim. Ayrıca, farklı iş
              deneyimlerimle liderlik ve takım çalışması becerilerimi
              geliştirdim. Öğrenimim sırasında{" "}
              <span className="text-[#FF7E21]">HTML, CSS,</span> ve{" "}
              <span className="text-[#FF7E21]">JavaScript</span> gibi temel web
              teknolojilerini öğrendim ve{" "}
              <span className="text-[#FF7E21]">React.js, Next.js,</span> ve{" "}
              <span className="text-[#FF7E21]">Node.js.</span> gibi modern
              framework'leri kullanarak projeler geliştirdim. Veritabanı
              yönetimi konusunda da deneyimim bulunmaktadır. Buna ekstra olarak
              da <span className="text-[#FF7E21]">Flutter</span>
              dili ile de mobile uygulamalar da geliştirmekteyim. Ayrıca,
              lojistik firmalarında araç sorumlusu ve genel müdür yardımcısı
              olarak çalışarak organizasyon, zaman yönetimi ve problem çözme
              becerilerimi geliştirdim. İyi iletişim kurabilen, hızlı öğrenen ve
              problem çözen biriyim.
            </p>
          )}
        </div>
      </motion.div>
    </>
  );
}
