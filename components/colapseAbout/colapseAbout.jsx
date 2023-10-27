import { useState } from 'react';
import Style from "./colapseAbout.module.css";

// translation
import { useTranslation } from 'react-i18next';
// import LanguageSelector from "../../public/src/LanguageSelector";

const CollapsibleParagraph = () => {
    const { t } = useTranslation();
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
    
      {!isCollapsed && (
        <div>
          <p className={Style.aboutusText}>{t('about4')}</p>
          <p className={Style.aboutusText}>{t('about5')}</p>
          <p className={Style.aboutusText}>{t('about6')}</p>
          <p className={Style.aboutusText}>{t('about7')}</p>
          <p className={Style.aboutusText}>{t('about8')}</p>
          <p className={Style.aboutusText}>{t('about9')}</p>
          <p className={Style.aboutusText}>{t('about10')}</p>
            <p className={Style.aboutusText}>{t('about11')}</p>
       
    
         
        </div>
      )}
        <button className={Style.aboutusMore} onClick={toggleCollapse}>
        {isCollapsed ? t('about12') : t('about13') }
      </button>
    </div>
  );
};

export default CollapsibleParagraph;
