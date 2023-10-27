import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Style from "../styles/ourEvent.module.css";
import Image from "next/image";
import images from "../img";
import CollapsibleParagraph from "../components/CollapsibleParagraph/CollapsibleParagraph";

import { useTranslation } from 'react-i18next';




const Roma= () => {
    const { t } = useTranslation();
  return (
    <div>
    

        
  <div className="container-fluid code pt-2 p-0 text-white">


    <div className=" pt-2 ">
    <div class="banner-wrapper">
  <div class="banner-container">
    <div class="banner-img-wrapper2">
      <div class="banner-padding">
        <div class="banner-abs">
          <div class="banner-abs-main">
            <div class="banner-inner-wrapper">
              {/* <images alt="" class="CoverPhoto" src={images.materaIran}/> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


 

    


  </div>
  </div>
  </div>
  );
};

export default Roma;