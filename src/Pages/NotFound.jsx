import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function NotFound() {
  const { t } = useTranslation();

  return (
    <>
      <div className="w-full h-screen flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between px-6 md:px-20 py-20 border-b-2">
        <div className="w-full md:w-3/5 h-full flex flex-col justify-center gap-6">
          <h1 className="text-6xl md:text-9xl font-extrabold text-zzbase">
            {t("404.title")}
          </h1>
          <h3 className="text-xl md:text-3xl font-extrabold text-zzbase">
            {t("404.heading")}
          </h3>
          <p
            className="text-lg text-zzbase max-w-xl"
            dangerouslySetInnerHTML={{ __html: t("404.message") }}
          ></p>
          <Link
            to="/"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="w-fit mx-auto md:mx-0 mt-4 border-2 py-4 px-3 md:py-2 border-zzbase text-zzbase transform transition duration-200 hover:scale-105 active:scale-95
                        hover:border-zzlink focus:border-zzlink active:border-zzlink
                        hover:text-zzlink focus:text-zzlink active:text-zzlink"
          >
            {t("404.button")}
          </Link>
        </div>

        <div className="hidden md:block w-2/5 h-full bg-zzlink"></div>
        <div className="rela top-50 left-40 w-[300px] -z-1 h-2/3 block md:hidden bg-zzlink"></div>
      </div>
    </>
  );
}

export default NotFound;
