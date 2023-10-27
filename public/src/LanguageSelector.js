import { useTranslation } from "react-i18next";
import Style from "../src/languageStyle.module.css"
import i18n from "../src/i18n";
import Image from "next/image";
import images from "../../img";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div  className={Style.langMod}>
      <button className={Style.langBtn} onClick={() => changeLanguage('en')}>EN</button>
      <button className={Style.langBtn} onClick={() => changeLanguage('it')}>IT</button>
      {/* <button className={Style.langBtn} onClick={() => changeLanguage('fa')}>FA</button> */}
    </div>
  );
};

export default LanguageSelector;
