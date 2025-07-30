import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { IoLogoYoutube } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

import { IoLogoReact } from "react-icons/io5";
import { SiLaravel } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";

function About() {
  const { t } = useTranslation();

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <>
      <div className="w-full h-auto md:h-screen flex flex-col justify-between md:flex-row px-6 md:px-20 md:py-20 py-10">
        <div className="w-full md:w-3/5 md:pr-10 h-full ">
          <div className="mx-auto overflow-hidden bg-[url(../images/photodeprofile.jpeg)] rounded-full bg-cover bg-center  w-45 h-45 mt-10 block md:hidden bg-zzlink border-6 border-zzlink"></div>
          <div className=" h-full text-center md:text-left">
            <h1 className="text-6xl mb-6 font-extrabold mt-10 md:mt-auto cursor-pointer">
              {[..."aurelienj."].map((char, i) => (
                <span
                  key={i}
                  className="inline-block transition-transform duration-200 ease-out hover:rotate-45 hover:text-zzbase hover:text-shadow-zzbase"
                >
                  {char}
                </span>
              ))}
            </h1>
            <div className="my-2 py-2 md:ml-5 w-3/4 md:w-2/6 inline-flex justify-center md:justify-start gap-4">
              <a
                href="https://github.com/aurelien404"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-6 h-6 text-zzlink hover:scale-120 active:scale-90 hover:rotate-360 transform-all ease-out duration-150" />
              </a>
              <a
                href="https://www.youtube.com/@aurelienfybmx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoYoutube className="w-6 h-6 text-zzlink hover:scale-120 active:scale-90 hover:rotate-360 transform-all ease-out duration-150" />
              </a>
            </div>
            <h2 className="text-left">{t("about.content")}</h2>
            <div className="w-full h-auto mt-10 block md:inline-flex">
              <div className="flex flex-row items-center justify-center gap-5 w-full  text-zzlink text-6xl">
                <IoLogoReact />
                <SiLaravel />
                <RiTailwindCssFill />
                <SiMysql />
                <FaWordpress />
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block relative w-2/6 h-5/6 self-center bg-zzlink border-0">
          <div
            className={`bg-[url(../images/photodeprofile.jpeg)] bg-cover bg-center w-full h-full`}
          ></div>
        </div>
      </div>
    </>
  );
}

export default About;
