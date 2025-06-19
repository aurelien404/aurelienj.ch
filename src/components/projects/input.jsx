import { useState } from "react";
import { useTranslation } from "react-i18next";

function Input() {
  const { t } = useTranslation();
  const [text, setText] = useState("");
  const [btnTxt, setBtnTxt] = useState(t("UiUxLab.p34"));
  const [stylist, setStylist] = useState("border-zzlink text-zzlink");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = () => {
    setIsLoading(true);
    setBtnTxt(t("UiUxLab.p35"));

    setTimeout(() => {
      setIsLoading(false);
      setBtnTxt(t("UiUxLab.p36"));
      setStylist("border-green-500 text-green-500 scale-120");

      setTimeout(() => {
        setBtnTxt(t("UiUxLab.p34"));
        setText("");
        setStylist("border-zzlink text-zzlink");
      }, 2000);
    }, 2000);
  };

  return (
    <>
      <div className="flex flex-col justify-center align-middle w-full h-[250px] p-10 text-zzlink  border-2 border-zzlink mx-auto overflow-hidden gap-4">
        <input
          className="flex justify-between h-15 w-full border-2 py-4 px-3 md:py-2 focus:border-zzlink focus:text-zzlink hover:scale-105 transition-all ease-in-out duration-200 active:scale-95 "
          placeholder={t("UiUxLab.p33")}
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />

        <button
          className={`w-full mx-auto md:w-2/5 h-15 border-2 ${stylist} py-4 px-3 md:py-2 transition-all ease-in-out duration-200 hover:scale-105 active:scale-95
                     active:border-zzlink active:text-zzlink
                    ${
                      isLoading ? "animate-shake text-zzlink border-zzlink" : ""
                    }`}
          onClick={handleSend}
          disabled={isLoading}
        >
          {btnTxt}
        </button>
      </div>
    </>
  );
}

export default Input;
