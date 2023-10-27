import React from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";


//INTERNAL IMPORT
import Style from "../styles/blog.module.css";

import images from "../img";

const blog = () => {
  
  return (
  <div className="container-fluid code pt-120 pb-50">
        {/* <!-- Author --> */}
    {/* <div class="author-area"> */}
        {/* <Image src={images.creatorbackground1} className="author-cover"  height={350} /> */}
        {/* <div class="author-cover" data-bg-img="assets/img/bg/author-cover.png"></div> */}
    {/* </div> */}
    {/* <!-- End Author --> */}

    {/* <!-- Blog --> */}
    <section class="pt-120 pb-120">
        <div class="container">
            <div class="row">
                <div class="col-xl-4 col-md-6">
                    {/* <!-- Single Post Item --> */}
                    <div class="single-post-item">
                        <a href="/">
                            {/* <img src="assets/img/product/product2.png" alt=""> */}
                            <Image src={images.creatorbackground4} height={5400} />

                            </a>

                        {/* <!-- Post Content --> */}
                        <div class="post-content">
                            {/* <a href="blog-details.html" class="category">painting</a> */}
                            <h5 class="post-title">Art News</h5>
                        </div>
                        {/* <!-- End Post Content --> */}
                    </div>
                    {/* <!-- End Single Post Item --> */}
                </div>
                <div class="col-xl-4 col-md-6">
                    {/* <!-- Single Post Item --> */}
                    <div class="single-post-item">
                        <a href="/">
                            {/* <img src="assets/img/product/product2.png" alt=""> */}
                            <Image src={images.creatorbackground4} height={5400} />

                            </a>

                        {/* <!-- Post Content --> */}
                        <div class="post-content">
                            {/* <a href="blog-details.html" class="category">painting</a> */}
                            <h5 class="post-title">Robotica News</h5>
                        </div>
                        {/* <!-- End Post Content --> */}
                    </div>
                    {/* <!-- End Single Post Item --> */}
                </div>
                <div class="col-xl-4 col-md-6">
                    {/* <!-- Single Post Item --> */}
                    <div class="single-post-item">
                        <a href="/">
                            {/* <img src="assets/img/product/product2.png" alt=""> */}
                            <Image src={images.creatorbackground4} height={5400} />

                            </a>

                        {/* <!-- Post Content --> */}
                        <div class="post-content">
                            {/* <a href="blog-details.html" class="category">painting</a> */}
                            <h5 class="post-title">Real Estate News</h5>
                        </div>
                        {/* <!-- End Post Content --> */}
                    </div>
                    {/* <!-- End Single Post Item --> */}
                </div>




                <div class="col-lg-12 d-flex justify-content-center mt-30">
                    <a href="#" class="btn">
                        {/* <img src="assets/img/icons/btn-loadmore.svg" alt="" class="svg"> */}
                        Load More
                    </a>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- End Blog --> */}

    {/* <!-- Instafeed --> */}
    <div class="insta_feed mt-n2 mb-2 ovx-hidden">
        <a href="https://www.instagram.com/" class="btn text-white">
            {/* <img src="assets/img/icons/btn-instagram.svg" alt="" */}
                {/* class="svg"> */}
                <Image src={images.instagramRound} width={15} height={15}  />
                <span className="pl-4"> instagram</span>
                </a>
        <ul class="row g-2">
            <li class="col-lg col-sm-4 col-6">
                <a href="https://www.instagram.com/" class="d-block">
                <Image src={images.creatorbackground2}  />
                    {/* <img src="assets/img/media/insta1.png" alt=""> */}
                </a>
            </li>
            <li class="col-lg col-sm-4 col-6">
                <a href="https://www.instagram.com/" class="d-block">
                <Image src={images.creatorbackground4}  />
                    {/* <img src="assets/img/media/insta2.png" alt=""> */}
                </a>
            </li>
            <li class="col-lg col-sm-4 col-6">
                <a href="https://www.instagram.com/" class="d-block">
                <Image src={images.creatorbackground4}  />
                    {/* <img src="assets/img/media/insta3.png" alt=""> */}
                </a>
            </li>
            <li class="col-lg col-sm-4 col-6">
                <a href="https://www.instagram.com/" class="d-block">
                <Image src={images.creatorbackground4}  />
                    {/* <img src="assets/img/media/insta4.png" alt=""> */}
                </a>
            </li>
            <li class="col-lg col-sm-4 col-6">
                <a href="https://www.instagram.com/" class="d-block">
                <Image src={images.creatorbackground6}  />
                    {/* <img src="assets/img/media/insta5.png" alt=""> */}
                </a>
            </li>
            <li class="col-lg col-sm-4 col-6">
                <a href="https://www.instagram.com/" class="d-block">
                <Image src={images.creatorbackground4}  />
                    {/* <img src="assets/img/media/insta6.png" alt=""> */}
                </a>
            </li>
        </ul>
    </div>
    {/* <!-- End Instafeed --> */}


  </div>
  );
};

export default blog;
