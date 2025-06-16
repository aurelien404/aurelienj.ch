import { useTranslation } from "react-i18next";

function UiUxLab() {
  const { t } = useTranslation();
  return (
    <>
      <div className="w-full h-[200vh] mx-[3vw] md:mx-[15vw] ">
        <h1 className="text-3xl md:text-6xl font-extrabold text-zzbase">
          {t("UiUxLab.title")}
        </h1>
        <h3 className="text-xl md:text-3xl font-extrabold text-zzbase">
          {t("UiUxLab.subTitle")}
        </h3>
        <p className=" w-3/6 text-base md:text-xl font-bold text-zzbase">
          {t("UiUxLab.content")}
        </p>
      </div>
    </>
  );
}

export default UiUxLab;
