import React from "react";
import Image from "next/image";
import { useTranslation } from 'react-i18next';
import LanguageSelector from "../../public/src/LanguageSelector"
import { BsCircleFill } from "react-icons/bs";

//INTERNAL IMPORT
import Style from "./Category.module.css";
import images from "../../img";

const Category = () => {
    const { t } = useTranslation();
  const CategoryArray = [
    {
      images: images.sculture,
      name: "Sculture",
    },
    {
      images: images.painting,
      name: "Painting",
    },
    {
      images: images.libri,
      name: "Books",
    },
    {
      images: images.music,
      name: "Music",
    },
    {
      images: images.video,
      name: "Cinema",
    },
    {
      images: images.photography,
      name: "Photography",
    }

  ];
  return (
  
        <div class="container pt-50 pb-90">
            <div class="row">
                <div class="col-12">
                    
                    <div class="section-title style--two">
                        <div class="d-flex flex-wrap align-items-center">
                            <h2 class="text-white">{t('category')}</h2>
                        </div>
                    </div>
                  
                </div>
            </div>
            <div class="row justify-content-center">
            <div class="col-6 col-md-3">
                <a href="/explore" className={Style.link}>
                    <div class="selling-process  text-center text-white">
                    <Image src={images.painting} alt=""  width={300} height={300} />
                  
                        <div class="content">
                            <h5>{t('picture')}</h5>
                           
                        </div>
                    </div>
                    </a>
                </div>
                <div class="col-6 col-md-3">
                    
                    <a href="/explore" className={Style.link}>
                    <div class="selling-process text-center text-white">
                                <Image src={images.sculture} alt="" width={300} height={300} />
                                    
                                    <div class="content">
                                        <h5>{t('sculpture')}</h5>
                                    
                                    </div>
                                </div>
                    </a>
                  
                </div>

                <div class="col-6 col-md-3">
                <a href="/explore" className={Style.link}>
                    <div class="selling-process text-center text-white">
                    <Image src={images.libri} alt="" width={300} height={300} />
                      
                        <div class="content">
                            <h5>{t('books')}</h5>
                           
                        </div>
                    </div>
                    </a>
                </div>
                {/* <div class="col-xl-2 col-lg-4 col-md-6">
                <a href="/explore" className={Style.link}>
                    <div class="selling-process text-center text-white">
                       
                        <Image src={images.music} alt="" width={300} height={300} />
                        
                        <div class="content">
                            <h5>{t('music')}</h5>
                         
                        </div>
                    </div>
                    </a>
                </div> */}
                <div class="col-6 col-md-3">
                <a href="/explore" className={Style.link}>
                    <div class="selling-process text-center text-white">
                       
                        <Image src={images.photography} alt="" width={300} height={300} />
                       
                        <div class="content">
                            <h6>{t('photo')}</h6>
                           
                        </div>
                    </div>
                   </a>
                </div>
                {/* <div class="col-xl-2 col-lg-4 col-md-6">
                    <a  href="/explore" className={Style.link}>
                    <div class="selling-process text-center text-white">
                        
                        <Image src={images.realstate} alt="" width={300} height={300} />
                     
                        <div class="content">
                            <h5>{t('real estate')}</h5>
                            
                           
                        </div>
                    </div>
                    </a>
                </div> */}
                
            </div>
        </div>
   
  
 





    // <div className={Style.box_category}>
    //   <div className={Style.category}>
    //     {CategoryArray.map((el, i) => (
    //       <div className={Style.category_box} key={i + 1}>
    //         <Image
    //           src={el.images}
    //           className={Style.category_box_img}
    //           alt="Background image"
    //           width={350}
    //           height={150}
    //           objectFit="cover"
    //         />

    //         <div className={Style.category_box_title}>
    //           <span>
    //             <BsCircleFill />
    //           </span>
    //           <div className={Style.category_box_title_info}>
    //             <h4>{el.name}</h4>
    //             <small>{i + 1}995 NFTS</small>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default Category;
