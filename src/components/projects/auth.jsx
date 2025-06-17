import { IoPerson } from "react-icons/io5";
import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";

function AuthApp() {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [touched, setTouched] = useState(true);
  const [inputUsername, setInputUsername] = useState("");
  const [inputPsswrd, setInputPsswrd] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const refName = useRef(null);
  const refPsswrd = useRef(null);

  const handleTouchStart = () => {
    if (isClicked) {
      refName.current.focus();
      setIsClicked(true);
      setTouched(false);
    } else {
      setTouched(true);
    }
  };

  const handleClick = () => {
    if (!isExpanded && touched) {
      setIsClicked(false);
      setIsExpanded(true);
      setTouched(false);
    } else {
      refName.current.focus();
      setIsClicked(true);
      setIsExpanded(false);
      setTouched(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setShowPassword(true);
      refPsswrd.current?.focus();
    }
  };

  const handleKeyDownReset = (e) => {
    if (e.key === "Enter") {
      setIsExpanded(false);
      setIsClicked(false);
      setTouched(false);
      setShowPassword(false);
      setInputUsername("");
      setInputPsswrd("");
    }
  };
  return (
    <>
      <div className="flex w-full h-[250px] p-3 md:p-10 text-zzlink border-2 border-zzlink mx-auto overflow-hidden">
        <button
          onMouseEnter={() => {
            isClicked ? setIsExpanded(false) : setIsExpanded(true);
          }}
          onMouseLeave={() => setIsExpanded(false)}
          onTouchStart={handleTouchStart}
          onClick={handleClick}
          className={`${isExpanded ? "w-40" : "w-15"}
          flex items-center justify-center self-center h-15 border-2 border-zzlink overflow-hidden bg-zzcontrast active:scale-90 transition-all ease-in-out cursor-pointer duration-300`}
        >
          <p
            className={`${
              isExpanded ? "-translate-x-50" : "translate-x-5"
            } transition-transform ease-in-out duration-300`}
          >
            <IoPerson />
          </p>
          <span
            className={`${
              isExpanded ? "-translate-x-4" : "translate-x-52"
            } transition-transform ease-in-out duration-300`}
          >
            {t("UiUxLab.p24")}
          </span>
        </button>

        <div
          className={`${
            isClicked ? "translate-x-5" : "translate-x-150"
          } w-3/4 md:w-full h-15 transition-transform ease-in-out duration-300 self-center`}
        >
          {!showPassword ? (
            <input
              value={inputUsername}
              onChange={(e) => setInputUsername(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={t("UiUxLab.p25")}
              ref={refName}
              className="w-full h-15 pl-4 border-2 transition-transform ease-in-out duration-300 border-zzlink active:scale-105 md:active:scale-100 hover:scale-105"
            />
          ) : (
            <input
              type="password"
              value={inputPsswrd}
              onChange={(e) => setInputPsswrd(e.target.value)}
              placeholder={t("UiUxLab.p26")}
              onKeyDown={handleKeyDownReset}
              ref={refPsswrd}
              className="w-full h-15 pl-4 border-2 transition-transform ease-in-out duration-300 border-zzlink active:scale-105 md:active:scale-100 hover:scale-105"
            />
          )}
        </div>
      </div>
    </>
  );
}

export default AuthApp;
