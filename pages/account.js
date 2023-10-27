import React, { useState, useMemo, useCallback, useContext } from "react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import "bootstrap/dist/css/bootstrap.min.css";

//INTERNAL IMPORT
import Style from "../styles/account.module.css";
import images from "../img";
import From from "../AccountPage/Form/Form";

const account = () => {
  const [fileUrl, setFileUrl] = useState(null);

  const onDrop = useCallback(async (acceptedFile) => {
    setFileUrl(acceptedFile[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 5000000,
  });

  return (
    // <!-- Account Information -->
    <section class="pt-120 pb-120 mt-n1 code">
        <div class="container pt-120 ">
            <div class="row">
                <div class="col-md-8">
                    {/* <!-- Section Title --> */}
                    <div class="section-title">
                        <h2 class="text-white">Profile Setting</h2>
                    </div>
                    {/* <!-- End Section Title --> */}
                </div>
                <div class="col-md-4">
                    <div class="d-flex justify-content-md-end mb-5 mb-md-0">
                        <a href="profile.html" class="btn btn-border style-c1">see Previws</a>
                    </div>
                </div>
            </div>

            <div class="row code">
                <div class="col-12">
                    <form action="#" class="edit-profile-form text-white">
                        <div class=" card section-bg mb-60">
                            <div class="">
                                <div class="profile-images">
                                    <div class="row">
                                        <div class="col-lg-6 code">
                                            {/* <!-- Profile img Edit --> */}
                                            <div className="profile-edit mb-5 mb-lg-0">
                                                <h3>Profile Image</h3>
                                                <div className="author-cover author-cover-edit">
                                                
                                                    <Image src={images.user1} alt="" />
                                                    <span className="upload-btn">
                                                        <Image src={images.plus1}  className="svg" alt="" />
                                                        <input type="file" accept="image/*"  />
                                                    </span>
                                                </div>
                                            </div>
                                            {/* <!-- End Profile img Edit --> */}
                                        </div>
                                        <div className="col-lg-6 code">
                                            {/* <!-- Profile Cover Edit --> */}
                                            <div className="profile-cover-edit">
                                                <h3>Profile Banner</h3>
                                                <div className="author-cover author-cover-edit">
                                                    <Image src={images.creatorbackground1} alt="" />
                                                    <span className="upload-btn">
                                                        <Image src={images.plus1} className="svg" alt="" />
                                                        <input type="file" accept="image/*" />
                                                    </span>
                                                </div>
                                            </div>
                                            {/* <!-- End Profile Cover Edit --> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-60">
                            <div class="card-body code">
                                <div class="account-info">

                                    <h3>Account Information</h3>
                                    <div class="form-group">
                                        <label for="name">Display Name</label>
                                        <input type="text" class="form-control" id="name"
                                            placeholder="Example @alex_anderson " />
                                    </div>
                                    <div class="form-group">
                                        <label for="custom-url">Custom URL</label>
                                        <input type="url" class="form-control" id="custom-url"
                                            placeholder="Example @www.anefty.com/" />
                                    </div>
                                    <div class="form-group">
                                        <div class="row justify-content-between">
                                            <label for="email" class="col-md-5">eMail Address</label>
                                            <span class="info col-md-7 d-flex justify-content-md-end mb-3 mb-lg-0">*
                                                Your email
                                                for
                                                marketplace
                                                notifications</span>
                                        </div>
                                        <input type="email" class="form-control" id="email"
                                            placeholder="Example @support.anefty@gmail.com" />
                                        <button class="btn btn-sm" type="button">
                                            <img src="assets/img/icons/btn-check.svg" alt="" class="svg" /> Confirm
                                        </button>
                                    </div>
                                    <div class="form-group mb-0">
                                        <label for="bio">Bio</label>
                                        <textarea id="bio" class="form-control mb-0"
                                            placeholder="Write your bio"></textarea>
                                    </div>
                                    <div class="d-flex justify-content-end mt-4">
                                        <button type="submit" class="btn">
                                            <img src="assets/img/icons/btn-save.svg" class="svg" alt="" />
                                            Save Now
                                        </button>
                                    </div>
                                </div>
                                
                            </div>
                      
                        </div>

                        {/* <div class="card">
                            <div class="card-body code">
                                <div class="social-media">

                                    <h3>Social Media</h3>
                                    <div class="form-group">
                                        <label for="facebook">Fa A</label>
                                        <input type="text" class="form-control" id="facebook"
                                            placeholder="Example @anefty_alexder" />

                                        <button class="btn btn-sm" type="button">
                                            <img src="assets/img/icons/btn-fb.svg" alt="" class="svg" /> Connect
                                            Facebook
                                        </button>
                                    </div>
                                    
                                   
                                </div>
                            </div>
                        </div> */}
                    </form>
                </div>
            </div>
        </div>
    </section>
    
    // <div className={Style.account}>
    //   <div className={Style.account_info}>
    //     <h1>Profile settings</h1>
    //     <p>
    //       You can set preferred display name, create your profile URL and manage
    //       other personal settings.
    //     </p>
    //   </div>

    //   <div className={Style.account_box}>
    //     <div className={Style.account_box_img} {...getRootProps()}>
    //       <input {...getInputProps()} />
    //       <Image
    //         src={images.user1}
    //         alt="account upload"
    //         width={150}
    //         height={150}
    //         className={Style.account_box_img_img}
    //       />
    //       <p className={Style.account_box_img_para}>Change Image</p>
    //     </div>
    //     <div className={Style.account_box_from}>
    //       <From />
    //     </div>
    //   </div>
    // </div>
  );
};

export default account;
