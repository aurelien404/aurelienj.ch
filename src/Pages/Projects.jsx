import { useTranslation } from "react-i18next";
import Todolist from "../components/projects/toDoList";
import AuthApp from "../components/projects/auth";
import InputApp from "../components/projects/input";

function UiUxLab() {
  const { t } = useTranslation();
  return (
    <>
      <div className="absolute top-25 left-50 w-[250px] -z-1 h-70 block md:hidden bg-zzlink"></div>
      <div className="w-full px-[3vw] pt-10 md:pt-30 md:px-[15vw] ">
        <h1 className="text-3xl md:text-6xl font-extrabold text-zzbase pb-5">
          {t("UiUxLab.title")}
        </h1>
        <h3 className="text-xl md:text-3xl font-extrabold text-zzbase">
          {t("UiUxLab.subTitle")}
        </h3>
        <p className="w5-6 md:w-5/6 text-base pb-15 md:pb-30 md:text-xl text-zzbase">
          {t("UiUxLab.content")}
        </p>

        <div className="w-full">
          <div className="w-full max-w-[600px] mx-auto border-b-2 mt-5">
            <Todolist />
            <div className="w-full text-center py-5">
              <h2 className="text-xl md:text-3xl font-extrabold text-zzbase">
                {t("UiUxLab.p14")}
              </h2>
              <p className="text-sm md:text-base font-light text-zzbase">
                {t("UiUxLab.p15")}
              </p>
              <span className="w-4/6 md:w-2/6 inline-flex justify-around py-3 text-xs md:text-sm font-medium text-zzlink">
                <p>React</p>
                <p>Tailwind</p>
                <p>i18Next</p>
              </span>
            </div>
          </div>

          <div className="w-full max-w-[600px] mx-auto border-b-2 mt-5">
            <AuthApp />
            <div className="w-full text-center py-5">
              <h2 className="text-xl md:text-3xl font-extrabold text-zzbase">
                {t("UiUxLab.p21")}
              </h2>
              <p className="text-sm md:text-base font-light text-zzbase">
                {t("UiUxLab.p22")}
              </p>
              <span className="w-4/6 md:w-2/6 inline-flex justify-around py-3 text-xs md:text-sm font-medium text-zzlink">
                <p>React</p>
                <p>Tailwind</p>
                <p>i18Next</p>
              </span>
            </div>
          </div>

          <div className="w-full max-w-[600px] mx-auto border-b-2 mt-5">
            <InputApp />
            <div className="w-full text-center py-5">
              <h2 className="text-xl md:text-3xl font-extrabold text-zzbase">
                {t("UiUxLab.p31")}
              </h2>
              <p className="text-sm md:text-base font-light text-zzbase">
                {t("UiUxLab.p32")}
              </p>
              <span className="w-4/6 md:w-2/6 inline-flex justify-around py-3 text-xs md:text-sm font-medium text-zzlink">
                <p>React</p>
                <p>Tailwind</p>
                <p>i18Next</p>
              </span>
            </div>
          </div>

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
        </div>
      </div>
    </>
  );
}

export default UiUxLab;
