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
              I began my Computer Engineering education in Izmir and focused my
              career on web technologies. During a voluntary internship at
              Fonetsan, I developed my first website. In 2023, with the Logos
              Team that I founded, we achieved second place in the Teknofest
              category for Technological Applications in Psychology. After Logos
              dissolved, I established the Psynexa team, focusing on mobile
              development, and we placed fifth in the Teknofest Entrepreneurship
              Health Technologies Pre-Incubation Category. I expanded my
              experience with a five-month long-term internship as an IoT
              Developer at Enko Control Systems. During this period, by pivoting
              the Psynexa project twice, we earned the Seal of Excellence in the
              TÜBİTAK Bigg call. Currently, I am working as a{" "}
              <span className="text-[#FF7E21]">Full Stack Web Developer</span>{" "}
              at Üniteks. In my projects, I use technologies like
              <span className="text-[#FF7E21]">
                React.js, React Native, Flutter, Next.js, Express.js
              </span>{" "}
              and <span className="text-[#FF7E21]">FastAPI.</span>
            </p>
          ) : (
            <p className="text-[23px] text-white mt-[70px] cursor-default min-[1500px]:w-[80%] max-[500px]:text-center  max-[1000px]:mt-[40px]">
              2020 yılında İzmir'de Bilgisayar Mühendisliği eğitimime başladım
              ve kariyerimi web teknolojileri üzerine yoğunlaştırdım. Fonetsan
              firmasında yaptığım gönüllü stajda ilk web sitemi geliştirdim.
              2023 yılında kurduğum Logos Ekibi ile Teknofest Psikolojide
              Teknolojik Uygulamalar kategorisinde ikincilik elde ettik.
              Logos'un dağılmasının ardından, Psynexa ekibini kurarak mobil
              geliştirme alanında çalışmaya başladım ve Teknofest Girişim Sağlık
              Teknolojileri Ön Kuluçka Kategorisinde beşinci olduk. 5 aylık uzun
              dönem stajımı Enko Kontrol Sistemleri'nde IoT Developer olarak
              yaparak deneyimlerimi genişlettim. Bu süreçte Psynexa projesini
              iki defa pivot ederek TÜBİTAK Bigg çağrısında Mükemmelliyet Mührü
              kazandık. Şu anda Üniteks'te{" "}
              <span className="text-[#FF7E21]">Full Stack Web Developer</span>{" "}
              olarak görev almaktayım. Projelerimde{" "}
              <span className="text-[#FF7E21]">
                React.js, React Native, Flutter, Next.js, Express.js
              </span>{" "}
              ve <span className="text-[#FF7E21]">FastAPI</span> gibi
              teknolojileri kullanıyorum.
            </p>
          )}
        </div>
      </motion.div>
    </>
  );
}
