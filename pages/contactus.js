import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import images from "../img";

import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { HiOutlineMail } from "react-icons/hi";

//INTERNAL IMPORT
import Style from "../styles/contactus.module.css";
import formStyle from "../AccountPage/Form/Form.module.css";
import { Button } from "../components/componentsindex";
import { useTranslation } from 'react-i18next';
import { BsFullscreen } from "react-icons/bs";

const contactus = () => {
    const { t } = useTranslation();
  return (

    // <!-- Contact -->
    <div className="container-fluid pt-120 code">
                  {/* <!-- Author --> */}
          
            
            {/* <Image src={images.creatorbackground1} className="coverimg"  /> */}
            
       
{/* <!-- End Author --> */}
        <div className=" mt-40 pt-4 pb-120 d-flex align-items-center ">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-7">
                    {/* <!-- Section Title --> */}
                    <div className="section-title text-white text-center">
                        <h2>{t('Get in touch')}</h2>
                        <p>{t('descriptionContatti')}</p>
                    </div>
                    {/* <!-- End Section Title --> */}
                </div>
            </div>
            <div className="row justify-content-center ">
                <div className="col-xl-10 section-bg">
                    {/* <!-- Card --> */}
                    <div className="p-3 ">
                        <div className="card-body section-bg contact-form-wrap">
                            {/* <!-- Contact Form --> */}
                            <form action="sendmail.php" className="contact-form ">

                                <h3 className="pb-1">{t('Quick Contact Us')}</h3>
                                <div className="form-group">
                                    <label for="name">{t('Full Name')}</label>
                                    <input type="text" name="name" className="form-control" id="name"
                                        placeholder="Example @alex_anderson" />
                                </div>
                                <div className="form-group">
                                    <label for="email">{t('Email address')}</label>
                                    <input type="email" name="email" className="form-control" id="email"
                                        placeholder="support@gmail.com" />
                                </div>
                               <div className="form-group">
                               <label for="country">{t('Country')}</label>
                                    <input type="text" name="country" className="form-control" id="country"
                                        placeholder="italy" />
                                    {/* <div className="row justify-content-between">
                                        <label for="collection" className="col-md-5">Select Country</label>
                                        <span className="info col-md-7 d-flex opacity-50 justify-content-md-end mb-3 mb-lg-0">*Please Select Your Country</span>
                                    </div>
                                    <select id="collection" name="country" className="form-control">
                                        <option value="select_collection " className="text-dark">Select Country</option>
                                        <option value="bangladesh text-danger">Bangladesh</option>
                                        <option value="pakistan text-dark">Pakistan</option>
                                        <option value="honolulu text-dark">Honolulu</option>
                                    </select> */}
                                </div>
                                <div className="form-group">
                                    <label for="subject">{t('Subject')}</label>
                                    <input type="text" name="subject" className="form-control" id="subject"
                                        placeholder="Services Request" />
                                </div>
                                <div className="form-group">
                                    <label for="message">{t('Message')}</label>
                                    <textarea id="message" name="message" className="form-control"
                                        placeholder="Write your Message"></textarea>
                                </div>
                                <div className="pt-2">
                                    <button type="submit" className="btn btn-md text-white">
                                        {/* <img src="assets/img/icons/btn_submit.svg" alt="" class="svg"> */}
                                           {t('Send Message')}
                                    </button>
                                </div>
                                <div className="form-response mt-3"></div>
                            </form>
                            {/* <!-- End Contact Form --> */}
                        </div>
                    </div>
                    {/* <!-- End Card --> */}
                </div>
            </div>
        </div>
    </div>
    
    
    </div>
   








































    // <div className={Style.contactus}>
    //   <div className={Style.contactus_box}>
    //     <h1>Contact</h1>
    //     <div className={Style.contactus_box_box}>
    //       <div className={Style.contactus_box_box_left}>
    //         <div className={Style.contactus_box_box_left_item}>
    //           <h3>🗺 ADDRESS</h3>
    //           <p>
    //             Photo booth tattooed prism, portland taiyaki hoodie neutra
    //             typewriter
    //           </p>
    //         </div>
    //         <div className={Style.contactus_box_box_left_item}>
    //           <h3>💌 EMAIL</h3>
    //           <p>nc.example@example.com</p>
    //         </div>
    //         <div className={Style.contactus_box_box_left_item}>
    //           <h3>☎ PHONE</h3>
    //           <p>000-123-456-7890</p>
    //         </div>
    //         <div className={Style.contactus_box_box_left_item}>
    //           <h3>🌏 SOCIALS</h3>
    //           <a href="#">
    //             <TiSocialFacebook />
    //           </a>
    //           <a href="#">
    //             <TiSocialLinkedin />
    //           </a>
    //           <a href="#">
    //             <TiSocialInstagram />
    //           </a>
    //           <a href="#">
    //             <TiSocialYoutube />
    //           </a>
    //           <a href="#">
    //             <TiSocialTwitter />
    //           </a>
    //         </div>
    //       </div>
    //       <div className={Style.contactus_box_box_right}>
    //         <form>
    //           <div className={formStyle.Form_box_input}>
    //             <label htmlFor="name">Full Name</label>
    //             <input
    //               type="text"
    //               placeholder="Picasso Defi"
    //               className={formStyle.Form_box_input_userName}
    //             />
    //           </div>
    //           <div className={formStyle.Form_box_input}>
    //             <label htmlFor="email">Email</label>
    //             <div className={formStyle.Form_box_input_box}>
    //               <div className={formStyle.Form_box_input_box_icon}>
    //                 <HiOutlineMail />
    //               </div>
    //               <input type="text" placeholder="Email*" />
    //             </div>
    //           </div>
    //           <div className={formStyle.Form_box_input}>
    //             <label htmlFor="description">Message</label>
    //             <textarea
    //               name=""
    //               id=""
    //               cols="30"
    //               rows="6"
    //               placeholder="something about yourself in few words"
    //             ></textarea>
    //           </div>
    //           <Button
    //             btnName="Send Message"
    //             handleClick={() => {}}
    //             classStyle={Style.button}
    //           />
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default contactus;
