import { useState } from 'react';
import Style from "./CollapsibleParagraph.module.css";
import Image from "next/image";
import images from "../../img";
import { useTranslation } from 'react-i18next';

const CollapsibleParagraph = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { t } = useTranslation();

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className='mx-auto container my-4'>
    
      {!isCollapsed && (
        
        <div>
              <div class="banner-wrapper mb-3">
  <div class="banner-container">
    <div class="banner-img-wrapper">
      <div class="banner-padding">
        <div class="banner-abs">
          <div class="banner-abs-main">
            <div class="banner-inner-wrapper">
              <images alt="" class="CoverPhoto" src={images.materaIran}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
            <h3 className='text-white text-center'>{t('ev1')}</h3>
            <h4 className='text-white text-center'>{t('ev2')}</h4>
            <h5 className='mt-4 mb-1 text-white text-center'>{t('ev3')}</h5>
            <h5 className='text-white text-center  mb-2'>{t('ev4')}</h5>
        <p>
        {t('ev5')}
        </p>
        <h3 className='text-center text-white mb-4'>{t('ev6')}</h3>
        <h5 className='text-center text-white'>{t('ev7')}</h5>
        <h5 className='text-center text-white'>{t('ev8')}</h5>
        <p>{t('ev9')}</p>

       
        
        
       
       <h3 className='mt-10 text-center text-white'>{t('ev10')}</h3>
       <p className='mb-2'>{t('ev11')}</p>
<h5 className='text-white'>{t('ev12')}</h5>
<h5 className='text-center text-white mt-4 '>{t('ev13')}</h5>
        <h5 className='text-center text-white'>{t('ev14')}</h5>
        <p className='mb-2'>{t('ev15')}</p>
        <p>{t('ev16')}</p>
        <h5 className='text-center text-white mt-4'>{t('ev17')}</h5>
        <h5 className='text-center text-white'>{t('ev18')}</h5>
        <p className='mb-2'>{t('ev19')}</p>
        <p className='mb-2'>{t('ev20')}</p>
        <p className='my-2'>{t('ev21')}</p>
        <h5 className=' mb-3 text-white'>{t('ev22')}</h5>
        <button className='text-center mx-auto btn mb-3 mb-sm-0 bg-white  mb-2 text-white'>
          <a href="/contactus" className='text-white text-decoration-none'>Contattaci</a>  
        </button> &nbsp;
        <button className='text-center mx-auto btn mb-3 mb-sm-0 bg-white  mb-2 text-white'>
        <a href="/" className='text-white text-decoration-none'>Acquista il ticket</a> 
        </button>
        </div>
      )}
        <button className=' text-center mx-auto btn mb-3 mb-sm-0  mt-4 mb-2 text-white' onClick={toggleCollapse}>
        {isCollapsed ? "Scopri il programma": 'Show Less'}
      </button>

    </div>
  );
};

export default CollapsibleParagraph;
