import React from "react";
// import bootstrap from "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";

//INTERNAL IMPORT
import Style from "../styles/login.module.css";
import LoginAndSignUp from "../loginAndSignUp/loginAndSignUp";
// image componenrt
import Image from "next/image";
import images from "../img";

const login = () => {
  return (
    // <!-- Login -->
    <div className="py-5 d-flex align-items-center code" 
        data-bg-img="assets/img/bg/page-bg2.png">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-5 col-lg-7 col-md-10 mt-5">
                    {/* <!-- Card --> */}
                    <div className="section-bg   login-register-card">
                        <div className="card-body px-5 py-4">
                            <div className="text-center mb-5">
                                <h2>Login</h2>
                                <p>Don't have an account yet? <a href="/signUp" className="c1">Register Now!</a>
                                </p>
                            </div>

                            <form action="#">
                                <div className="form-group">
                                    <label for="email" className="mb-2">Email Address</label>
           
                                    <input type="email" id="email" className="form-control" placeholder="example@gmail.com" />
                                </div>
                                <div className="form-group">
                                    <label for="password" className="mb-2">Password</label>
                                    <input type="password" id="password" className="form-control"
                                        placeholder="*** **** *** ****" /> 
                                </div>
                                <div className="d-flex pt-2">
                                    <button type="submit" class="btn text-white">
                                      <Image src={images.btnLogin} alt=""
                                            className="svg" /> login now
                                            </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* <!-- End Card --> */}
                </div>
            </div>
        </div>
    </div>





    // <div className={Style.login}>
    //   <div className={Style.login_box}>
    //     <h1>Login</h1>
    //     <LoginAndSignUp />
    //     <p className={Style.login_box_para}>
    //       New user? <a href="#">Create an account</a>
    //     </p>
    //   </div>
    // </div>
  );
};

export default login;
