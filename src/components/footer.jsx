import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <footer id="quote" className="w-screen mt-20">
      <div className="py-8 px-6 w-full flex justify-between mx-auto text-zzcontrast font-extralight text-xs bg-zzbase">
        <p>Copyright © 2025</p>
        <a>aurelienj.ch</a>
      </div>
    </footer>
  );
}

export default Footer;
