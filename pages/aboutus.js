import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Style from  "../styles/aboutus.module.css";
import Image from "next/image";
import images from "../img";
import CollapsibleParagraph from "../components/colapseAbout/colapseAbout";
// translation
import { useTranslation } from 'react-i18next';
// import LanguageSelector from "../../public/src/LanguageSelector";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
   <div className='container-fluid code'>
      {/* <div className='container text-white pt-120 pb-50'>
        <div className='row'> */}
        <div className={Style.aboutusSection}>
        <div className="container pt-120 pb-50">
            <div className="row">
                <div class="col-md-6 col-sm-6 col-xs-12">
                    <div className={Style.aboutus}>
                        <h2 className={Style.aboutusTitle}>{t('about us')}</h2>
                        <p className={Style.aboutusText}> "{t('about1')}</p>
                        <p className={Style.aboutusText}> {t('about2')}</p>
                        <p className={Style.aboutusText}>{t('about3')}</p>
                        {/* <a className={Style.aboutusMore} href="#">read more</a> */}
                        <CollapsibleParagraph/> 
                    </div>
                </div>
                <div class="col-md-6 col-sm-6 col-xs-12 ml-4">
                    <div class={Style.aboutusBanner}>
                        <Image src={images.about} layout='responsive' alt="" />
                    </div>
                </div>
                {/* <div class="col-md-12 col-sm-12 col-xs-12">
                    <div class={Style.feature}>
                        <div class={Style.featureBox}>
                            <div class={Style.clearfix}>
                                <div class={Style.iconset}>
                                    <span class="glyphicon glyphiconCog icon"></span>
                                </div>
                                <div class={Style.featureContent}>
                                    <h4>Work with heart</h4>
                                    <p>Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.</p>
                                </div>
                            </div>
                        </div>
                        <div class={Style.featureBox}>
                            <div class={Style.clearfix}>
                                <div class={Style.iconset}>
                                    <span class="glyphicon glyphicon-cog icon"></span>
                                </div>
                                <div class={Style.featureContent}>
                                    <h4>Reliable services</h4>
                                    <p>Donec vitae sapien ut libero venenatis faucibu. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt</p>
                                </div>
                            </div>
                        </div>
                        <div class={Style.featureBox}>
                            <div class={Style.clearfix}>
                                <div class={Style.iconset}>
                                    <span class="glyphicon glyphicon-cog icon"></span>
                                </div>
                                <div class={Style.featureContent}>
                                    <h4>Great support</h4>
                                    <p>Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
        {/* </div>
      </div> */}
   </div>
  );
};

export default AboutPage;
