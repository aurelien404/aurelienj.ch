import { IoPerson } from "react-icons/io5";
import { useState, useRef } from "react";

function AuthApp() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [touched, setTouched] = useState(true);
  const [inputClicked, setInputClicked] = useState(false);
  const [inputUsername, setInputUsername] = useState("");
  const [inputPsswrd, setInputPsswrd] = useState("");

  const refName = useRef(null);
  const refPsswrd = useRef(null);

  const handleTouchStart = () => {
    if (isClicked) {
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
      setIsClicked(true);
      setIsExpanded(false);
      setTouched(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setInputClicked(true);
      refPsswrd.current?.focus();
    }
  };

  return (
    <>
      <div className="flex w-full h-[400px] p-3 md:p-10 text-zzlink border-2 border-zzlink mx-auto overflow-hidden">
        <button
          onMouseEnter={() => {
            isClicked ? setIsExpanded(false) : setIsExpanded(true);
          }}
          onMouseLeave={() => setIsExpanded(false)}
          onTouchStart={handleTouchStart}
          onClick={handleClick}
          className={`${isExpanded ? "w-40" : "w-15"}
          flex items-center justify-center self-center h-15 border-2 border-zzlink overflow-hidden bg-zzcontrast active:scale-90 transition-all ease-in-out cursor-pointer duration-300 `}
        >
          <IoPerson
            className={`${
              isExpanded ? "-translate-x-50" : "translate-x-5"
            } transition-transform ease-in-out duration-300`}
          />
          <span
            className={`
              ${
                isExpanded ? "-translate-x-4" : "translate-x-52"
              } transition-transform ease-in-out duration-300`}
          >
            Login
          </span>
        </button>

        <div className={`translate-x-5 w-full h-15 bg-red-300 self-center`}>
          <input
            value={inputUsername}
            onChange={(e) => setInputUsername(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Username"
            ref={refName}
            className={`
              ${isClicked ? "right-0" : "-right-150"}
              ${inputClicked ? "-top-20" : ""}
              absolute w-full h-15 pl-4 border-2 border-zzlink transition-all ease-in-out duration-300 active:scale-105 md:active:scale-100 hover:scale-105`}
          />

          <input
            value={inputPsswrd}
            onChange={(e) => setInputPsswrd(e.target.value)}
            placeholder="Password"
            ref={refPsswrd}
            className={`
              ${inputClicked ? "right-0" : ""}
              absolute -right-150 w-full h-15 pl-4 border-2 border-zzlink transition-all ease-in-out duration-300 active:scale-105 md:active:scale-100 hover:scale-105`}
          />
        </div>
      </div>
    </>
  );
}

export default AuthApp;
