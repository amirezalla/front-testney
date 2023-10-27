import { useTranslation } from '../../hooks/useTranslation';
import { useEffect, useState } from 'react';

const TranslationExample = () => {
  const i18n = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  useEffect(() => {
    setCurrentLanguage(i18n.language);
  }, [i18n.language]);

  return (
    <div>
      <button onClick={toggleLanguage}>Toggle Language</button>
      <h1>{i18n.t('hello')}</h1>
      <p>{i18n.t('welcome')}</p>
    </div>
  );
};

export default TranslationExample;
