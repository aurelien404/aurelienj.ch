import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IoLogoYoutube } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

function About() {
  const { t } = useTranslation();
  const [loaded, setLoaded] = useState(false);
  const itemsLeft = [
    { label: "HTML", width: "80%" },
    { label: "CSS", width: "90%" },
    { label: "Js", width: "70%" },
    { label: "Python", width: "60%" },
    { label: "Php", width: "40%" },
  ];

  const itemsRight = [
    { label: "React", width: "40%" },
    { label: "Tailwind", width: "70%" },
    { label: "Django", width: "35%" },
    { label: "Laravel", width: "25%" },
    { label: "WP", width: "85%" },
  ];

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <>
      <div className="w-full h-auto md:h-screen flex flex-col md:flex-row px-6 md:px-20 md:py-20 py-10">
        <div className="w-full md:w-3/5 md:pr-10 h-full">
          <div className=" h-full text-center md:text-left">
            <h1 className="text-6xl mb-6 font-extrabold cursor-pointer">
              {[..."aurelienj."].map((char, i) => (
                <span
                  key={i}
                  className="inline-block transition-transform duration-200 ease-in-out hover:rotate-45 hover:text-zzbase hover:text-shadow-zzbase"
                >
                  {char}
                </span>
              ))}
            </h1>
            <div className="my-2 py-2 md:ml-5 w-3/4 md:w-2/6 inline-flex justify-start gap-4">
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
              <div className="w-full h-1/2 md:w-1/2 text-left md:h-full grid text-zzcontrast grid-rows-5 gap-1">
                {itemsLeft.map((item, index) => (
                  <motion.div
                    key={index}
                    className={`bg-zzlink p-2 ${
                      loaded ? item.width : "w-1/10"
                    }`}
                    initial={{ width: "10%" }}
                    animate={{ width: loaded ? item.width : "10%" }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  >
                    {item.label}
                  </motion.div>
                ))}
              </div>
              <div className="w-full h-1/2 md:w-1/2 text-zzcontrast md:h-full mt-5 md:mt-0 grid grid-rows-5 gap-1 md:text-right text-left md:place-items-end">
                {itemsRight.map((item, index) => (
                  <motion.div
                    key={index}
                    className={`bg-zzlink p-2 ${
                      loaded ? item.width : "w-1/10"
                    }`}
                    initial={{ width: "10%" }}
                    animate={{ width: loaded ? item.width : "10%" }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  >
                    {item.label}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block w-2/5 h-full bg-zzlink"></div>
        <div className="absolute top-25 left-50 w-[250px] -z-1 h-70 block md:hidden bg-zzlink"></div>
      </div>
    </>
  );
}

export default About;
