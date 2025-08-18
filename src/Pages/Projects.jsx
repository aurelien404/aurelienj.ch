import { useTranslation } from "react-i18next";
import Todolist from "../components/projects/toDoList";
import AuthApp from "../components/projects/auth";
import InputApp from "../components/projects/input";
import MemoryApp from "../components/projects/memory";

import { IoLogoReact } from "react-icons/io5";
import { SiLaravel } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { BsTranslate } from "react-icons/bs";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
function UiUxLab() {
  const { t } = useTranslation();
  return (
    <>
      <div className="w-full px-[3vw] pt-10 md:pt-30 md:px-[15vw] ">
        <h1 className="text-3xl md:text-6xl font-extrabold text-zzlink md:text-zzbase pb-5">
          {t("UiUxLab.title")}
        </h1>
        <h3 className="text-xl md:text-3xl font-extrabold text-zzbase">
          {t("UiUxLab.subTitle")}
        </h3>
        <p className="w5-6 md:w-5/6 text-base md:text-xl text-zzbase">
          {t("UiUxLab.content")}
        </p>
        <div className=" w-full h-0 border-b-2 mx-auto my-15"></div>
        <div className="w-full">
          {/* --------------------------------------------------------------------------------------------------------- */}
          <div className="w-full max-w-[600px] mx-auto border-b-2 mt-5">
            <div className="w-full h-[200px] md:h-[300px] mx-auto bg-zzlink">
              <div className="bg-[url(../images/weather-app-screenshots.png)] bg-cover bg-center w-full h-full"></div>
            </div>
            <div className="w-full text-center py-5">
              <h2 className="text-xl md:text-3xl font-extrabold text-zzbase">
                {t("UiUxLab.p61")}
              </h2>
              <p className="text-sm md:text-base font-light text-zzbase">
                {t("UiUxLab.p62")}
              </p>

              <p className="text-sm mt-2">
                <b>Weather API: </b>
                <a>open-meteo.com</a>
              </p>
              <p className="text-sm">
                <b>City API: </b>
                <a>geonames.org</a>
              </p>
              <span className="w-full md:w-7/10 inline-flex justify-center gap-3 py-3 text-xs md:text-sm font-medium text-zzlink">
                <a
                  href="https://w8ther.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="border-2 border-zzlink text-zzlink px-5 py-2 transition-all ease-in-out duration-150 hover:scale-110 active:scale-90">
                    {t("UiUxLab.p63")}
                  </button>
                </a>
                <a
                  href="https://github.com/aurelien404/Forecast-weather"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="border-2 border-zzlink text-zzlink px-5 py-2 transition-all ease-in-out duration-150 hover:scale-110 active:scale-90">
                    {t("UiUxLab.p64")}
                  </button>
                </a>
              </span>
              <span className="app-icons ">
                <IoLogoReact />
                <SiLaravel />
                <RiTailwindCssFill />
                <SiMysql />
              </span>
            </div>
          </div>
          {/* --------------------------------------------------------------------------------------------------------- */}
          <div className="w-full max-w-[600px] mx-auto border-b-2 mt-5">
            <div className="w-full h-[200px] md:h-[300px] mx-auto bg-zzlink">
              <div className="bg-[url(../images/screenshoot.png)] bg-cover bg-center w-full h-full"></div>
            </div>
            <div className="w-full text-center py-5">
              <h2 className="text-xl md:text-3xl font-extrabold text-zzbase">
                {t("UiUxLab.p51")}
              </h2>
              <p className="text-sm md:text-base font-light text-zzbase">
                {t("UiUxLab.p52")}
              </p>
              <span className="w-full md:w-7/10 inline-flex justify-around py-3 text-xs md:text-sm font-medium text-zzlink">
                <a
                  href="https://dev.to.aurelienj.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="border-2 border-zzlink text-zzlink px-5 py-2 transition-all ease-in-out duration-150 hover:scale-110 active:scale-90">
                    {t("UiUxLab.p53")}
                  </button>
                </a>
                <a
                  href="https://github.com/aurelien404/https-dev.to-challenges-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="border-2 border-zzlink text-zzlink px-5 py-2 transition-all ease-in-out duration-150 hover:scale-110 active:scale-90">
                    {t("UiUxLab.p54")}
                  </button>
                </a>
                <a
                  href="https://dev.to/challenges/frontend/axero"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="border-2 border-zzlink text-zzlink px-5 py-2 transition-all ease-in-out duration-150 hover:scale-110 active:scale-90">
                    {t("UiUxLab.p55")}
                  </button>
                </a>
              </span>
              <span className="app-icons ">
                <FaHtml5 />
                <IoLogoCss3 />
              </span>
            </div>
          </div>
          {/* --------------------------------------------------------------------------------------------------------- */}
          <div className="w-full max-w-[600px] mx-auto border-b-2 mt-5">
            <MemoryApp />
            <div className="w-full text-center py-5">
              <h2 className="text-xl md:text-3xl font-extrabold text-zzbase">
                {t("UiUxLab.p41")}
              </h2>
              <p className="text-sm md:text-base font-light text-zzbase">
                {t("UiUxLab.p42")}
              </p>
              <span className="w-full inline-flex justify-around py-3 text-xs md:text-sm font-medium text-zzlink">
                <a
                  href="https://memory-game.aurelienj.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="border-2 border-zzlink text-zzlink px-5 py-2 transition-all ease-in-out duration-150 hover:scale-110 active:scale-90">
                    {t("UiUxLab.p43")}
                  </button>
                </a>
              </span>
              <span className="app-icons">
                <IoLogoReact />
                <RiTailwindCssFill />
              </span>
            </div>
          </div>
          {/* --------------------------------------------------------------------------------------------------------- */}
          <div className="w-full max-w-[600px] mx-auto border-b-2 mt-5">
            <Todolist />
            <div className="w-full text-center py-5">
              <h2 className="text-xl md:text-3xl font-extrabold text-zzbase">
                {t("UiUxLab.p14")}
              </h2>
              <p className="text-sm md:text-base font-light text-zzbase">
                {t("UiUxLab.p15")}
              </p>
              <span className="app-icons ">
                <IoLogoReact />
                <RiTailwindCssFill />
                <BsTranslate />
              </span>
            </div>
          </div>
          {/* --------------------------------------------------------------------------------------------------------- */}
          <div className="w-full max-w-[600px] mx-auto border-b-2 mt-5">
            <AuthApp />
            <div className="w-full text-center py-5">
              <h2 className="text-xl md:text-3xl font-extrabold text-zzbase">
                {t("UiUxLab.p21")}
              </h2>
              <p className="text-sm md:text-base font-light text-zzbase">
                {t("UiUxLab.p22")}
              </p>
              <span className="app-icons ">
                <IoLogoReact />
                <RiTailwindCssFill />
                <BsTranslate />
              </span>
            </div>
          </div>
          {/* --------------------------------------------------------------------------------------------------------- */}
          <div className="w-full max-w-[600px] mx-auto border-b-2 mt-5">
            <InputApp />
            <div className="w-full text-center py-5">
              <h2 className="text-xl md:text-3xl font-extrabold text-zzbase">
                {t("UiUxLab.p31")}
              </h2>
              <p className="text-sm md:text-base font-light text-zzbase">
                {t("UiUxLab.p32")}
              </p>
              <span className="app-icons ">
                <IoLogoReact />
                <RiTailwindCssFill />
                <BsTranslate />
              </span>
            </div>
          </div>
          {/* --------------------------------------------------------------------------------------------------------- */}
          <div className="w-full max-w-[600px] mx-auto mt-5 grid place-items-center text-center">
            <div>
              <img
                src="./logo_aurelienj.png"
                alt="Image"
                className="w-3xs h-3xs bg-center"
              />
            </div>
            <div className="w-full py-5 ">
              <h2 className="text-xl md:text-3xl font-extrabold text-zzbase">
                {t("UiUxLab.p99")}
              </h2>
              <p className="text-sm md:text-base font-light text-zzbase">
                {t("UiUxLab.p98")}
              </p>
              <span className="w-2/6 inline-flex justify-around py-3 text-xs md:text-sm font-medium text-zzlink">
                <p>Coming soon</p>
              </span>
            </div>
          </div>
          {/* --------------------------------------------------------------------------------------------------------- */}
        </div>
      </div>
    </>
  );
}

export default UiUxLab;
