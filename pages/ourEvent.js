import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Style from "../styles/ourEvent.module.css";
import Image from "next/image";
import images from "../img";
import CollapsibleParagraph from "../components/CollapsibleParagraph/CollapsibleParagraph";

import { useTranslation } from 'react-i18next';




const ourEvent= () => {
    const { t } = useTranslation();
  return (
    <div>
    

        
  <div className="container-fluid code pt-2 text-white">


    <div className=" pt-2 ">
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


 
        {/* <!-- Banner --> */}
    {/* <div class="banner layer style--three overlay ov-hidden" data-bg-img="assets/img/bg/banner-bg4.png"> */}
    <div class="banner container-fluid pt-2" data-bg-img="assets/img/bg/banner-bg4.png">


        <div class="container-fluid">
            <div class="row align-items-center">
            <div class="col-lg-12">

                    {/* <!-- Banner IMG --> */}
                    <div class="banner-img move-img">

                        {/* <!-- Vdo btn --> */}
                        {/* <a href="" class="vdo_btn popup-video ms-xl-4">
                            <Image src={images.user1} alt="" class="svg" />
                        </a> */}
                        {/* <!-- End Vdo btn --> */}

                        {/* <Image src={images.materaDani} class="ms-xl-4 border-rounded" alt="" /> */}
                        {/* <div class="banner-small-img d-none d-md-block">
                            <Image src={images.user2} width={50} height={50} alt="" />
                        </div> */}
                    </div>

                    {/* <!-- End Banner IMG --> */}
                </div>
                <div class="col-lg-12">
                    {/* <!-- Banner Content --> */}
                    <div class="banner-content text-white mb-5 mb-lg-0">
                    <h3 class=" text-white text-left mb-2">{t('mt1')}</h3>
                    <h5 class=" text-white text-left mb-4">{t('mt2')}</h5>
                        <h6 className='text-white'>{t('mt3')} </h6>
                        <p>
                        {t('mt4')}
                        </p>
                        <p>
                        {t('mt5')} 
                        </p>
                        <p><b><i>{t('mt6')}</i></b></p>
                        <p>{t('mt7')}</p>
                        <p><i><b>{t('mt8')}</b> {t('mt9')} </i>
                        <br/><u>{t('mt10')}</u>
                        </p>
                        
                        <p><i><b>{t('mt11')}</b> {t('mt12')}</i>
                        <br/><u>{t('mt13')}</u>
                        </p>
                        <p><i>
                        <b>{t('mt14')}</b> {t('mt15')}    
                        </i>
                        <br/><u>{t('mt16')}</u>
                        </p>
                        <p>{t('mt17')}<br/>
                        {t('mt18')} <br/>
                        <u>
</u>   
                        </p>
                        <p className='mt-4 '>
                        <b className='text-danger'>{t('mt19')} </b>
                        <span className='d-block'>
                        {t('mt20')}
                        </span>
                        <u>{t('mt21')}</u>
                        </p>
                        <p>
                        {t('mt22')}<b> {t('mt225')}</b> 
                        </p>
                        <p>{t('mt23')}</p>
                        <p><b>{t('mt24')}</b>
                        <br/>
                        <span>{t('mt25')}</span>
                        </p>
                        <p>
                            <b className='text-danger'>{t('mt26')}</b><br/>
                            <b>{t('mt27')}</b>
                        </p>
                    </div>
                    
                </div>

                <div class="col-lg-12 text-center mx-auto">
                <CollapsibleParagraph /> 
                </div>
            </div>
        </div>
    </div>
    


  </div>
  </div>
  </div>
  );
};

export default ourEvent;