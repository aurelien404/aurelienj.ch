import { useTranslation } from "react-i18next";
import Todolist from "../components/projects/toDoList";

function UiUxLab() {
  const { t } = useTranslation();
  return (
    <>
      <div className="w-full h-[200vh] px-[3vw] pt-10 md:pt-30 md:px-[15vw] ">
        <h1 className="text-3xl md:text-6xl font-extrabold text-zzbase pb-5">
          {t("UiUxLab.title")}
        </h1>
        <h3 className="text-xl md:text-3xl font-extrabold text-zzbase">
          {t("UiUxLab.subTitle")}
        </h3>
        <p className="w5-6 md:w-5/6 text-base pb-15 md:pb-30 md:text-xl text-zzbase">
          {t("UiUxLab.content")}
        </p>

        <div className="w-full  h-10/12">
          <div className="w-full border-b-2 mt-5">
            <Todolist />
            <div className="w-full text-center py-5">
              <h2 className="text-xl md:text-3xl font-extrabold text-zzbase">
                TO-DO List
              </h2>
              <p className="text-base md:text-xl font-light text-zzbase">
                Ceci est la description du projets.
              </p>
            </div>
          </div>

          <div className="w-full border-b-2 mt-5">
            <div className="w-full h-[400px] bg-green-300"></div>
            <div className="w-full text-center py-5">
              <h2 className="text-xl md:text-3xl font-extrabold text-zzbase">
                Auth design projects
              </h2>
              <p className="text-base md:text-xl font-light text-zzbase">
                Ceci est la description du projets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UiUxLab;
