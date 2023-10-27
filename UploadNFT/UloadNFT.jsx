import React, { useState } from "react";
import { MdOutlineHttp, MdOutlineAttachFile } from "react-icons/md";
import { FaPercent } from "react-icons/fa";
import { AiTwotonePropertySafety } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";


//INTERNAL IMPORT
import Style from "./Upload.module.css";
import formStyle from "../AccountPage/Form/Form.module.css";
import images from "../img";
import { Button, Taginput } from "../components/componentsindex.js";
import { DropZone } from "../UploadNFT/uploadNFTIndex.js";

const apikey="ZM2JN9TFNPV9I2TNF6ED4CFNZVXTRCZY8E";



const UloadNFT = ({ uploadToIPFS, createNFT }) => {
  
  const [price, setPrice] = useState("");
  const [estimatedPrice, setEstimatedPrice] = useState("");
  const [usdPrice, setUsdPrice] = useState("");
  const [activeCat, setActiveCat] = useState(0);
  const [activeType, setActiveType] = useState(0);

  const [name, setName] = useState("");
  // const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");
  // const [fileSize, setFileSize] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  // const [properties, setProperties] = useState([]);
  const [image, setImage] = useState(null);

  const router = useRouter();

  const handleUsdPrice = event => {
    var tokenInfoUrl = 'https://api.coincap.io/v2/assets/binance-coin';

  axios.get(tokenInfoUrl)
  .then((response)=>{
    console.log(price*response.data.data.priceUsd);
    setUsdPrice(price*response.data.data.priceUsd);
    setEstimatedPrice(price*1.3);
      
  }).catch((error)=>{
      console.log(error);
  })
  }



  const typesArray=[
    {
      image: images.nft_image_1,
      type: "NFT",
      key:2
    },
    {
      image: images.nft_image_2,
      type: "Physical",
      key:1
    }
  ]
  const categoryArry = [
    {
      image: images.nft_image_1,
      category: "Sculture",
      key:1
    },
    {
      image: images.nft_image_2,
      category: "Arts",
    },
    {
      image: images.nft_image_3,
      category: "Music",
    },
    {
      image: images.nft_image_1,
      category: "Digital",
    },
    {
      image: images.nft_image_2,
      category: "Time",
    },
    {
      image: images.nft_image_3,
      category: "Photography",
    },
  ];



  return (

<form action="#" className="upload-form text-white ">
                        <div className="p-3 mb-60 ">
                            <div className="card-body">
                                <div className="dropzone-wrap">

                                    <h3>Image, Video, Audio or 3d Model.</h3>
                                    <p>File types supported: "JPG, PNG, WEBM , MAX 100MB"</p>

                                    {/* <!-- Dropzone Start --> */}
                                        <DropZone
                                          // title="JPG, PNG, WEBM , MAX 100MB"
                                          heading="Drag & drop file or Browse media on your device"
                                          // subHeading="e"
                                          name={name}
                                          // website={website}
                                          description={description}
                                          // fileSize={fileSize}
                                          category={category}
                                          // properties={properties}
                                          setImage={setImage}
                                          uploadToIPFS={uploadToIPFS}
                                          className="dropzone"/>
                                        

                                </div>
                            </div>
                        </div>

                        <div className="">
                            <div className="card-body">
                                <div className="upload-info">

                                    <h3>Upload Information</h3>
                                    <div className="form-group">
                                      {/* itemName */}
                                        <label htmlFor="nft">Item Name</label>
                                        <input
                                        type="text"
                                        placeholder="Item Name"
                                        className="form-control"
                                        onChange={(e) => setName(e.target.value)}
                                        />

                                    </div>
                                    <div className="form-group">
                                      {/* description */}
                                    <label htmlFor="description">Description</label>
                                    <textarea
                                      name=""
                                      id=""
                                      cols="30"
                                      rows="6"
                                      className="form-control"
                                      placeholder="something about yourself in few words"
                                      onChange={(e) => setDescription(e.target.value)}
                                    ></textarea>
                                             <p>
             The description will be included on the item's detail page
             underneath its image. Markdown syntax is supported.
           </p>

          

                                    </div>
         
         {/* type of art and collection */}
         <div className={formStyle.Form_box_input}>
          <label htmlFor="name">Choose Type of Art</label>
          <p className={Style.upload_box_input_para}>
            Choose an exiting collection or create a new one
          </p>
          <div className={Style.upload_box_slider_div}>
            {typesArray.map((el, i) => (
              <div
                className={`${Style.upload_box_slider} ${
                  activeType == i + 1 ? Style.active : ""
                }`}
                key={i + 1}
                onClick={() => (setActiveType(i + 1), setType(el.key))}
              >
                <div className={Style.upload_box_slider_box}>
                  <div className={Style.upload_box_slider_box_img}>
                    <Image
                      src={el.image}
                      alt="background image"
                      width={70}
                      height={70}
                      className={Style.upload_box_slider_box_img_img}
                    />
                  </div>
                  <div className={Style.upload_box_slider_box_img_icon}>
                    <TiTick />
                  </div>
                </div>
                <p>Type of {el.type} </p>
              </div>
            ))}
          </div>

          
          
        
        </div>


        { type &&
                <div className="form-group">
                <label htmlFor="name">Choose collection</label>
                <p className={Style.upload_box_input_para}>
                  Choose an exiting collection or create a new one
                </p>

                <div className={Style.upload_box_slider_div}>
                  {categoryArry.map((el, i) => (
                    <div
                      className={`${Style.upload_box_slider} ${
                        activeCat == i + 1 ? Style.active : ""
                      }`}
                      key={i + 1}
                      onClick={() => (setActiveCat(i + 1), setCategory(el.key))}
                    >
                      <div className={Style.upload_box_slider_box}>
                        <div className={Style.upload_box_slider_box_img}>
                          <Image
                            src={el.image}
                            alt="background image"
                            width={70}
                            height={70}
                            className={Style.upload_box_slider_box_img_img}
                          />
                        </div>
                        <div className={Style.upload_box_slider_box_img_icon}>
                          <TiTick />
                        </div>
                      </div>
                      <p>Crypto Legend - {el.category} </p>
                    </div>
                  ))}
                </div>
                </div>

        }
{/* price */}

                                    <div className="form-group">
                                        <label htmlFor="Price">Price</label>
                                        {/* <div className={formStyle.Form_box_input_box}>
                                          <div className={formStyle.Form_box_input_box_icon}>
                                            <AiTwotonePropertySafety />
                                          </div> */}
                                          <input
                                            type="text"
                                            placeholder="Price"
                                            className="form-control"
                                            onChange={(e) => setPrice(e.target.value)}
                                            onKeyUp={handleUsdPrice}
                                            
                                          />
                                          { price &&
                                                  <span className={formStyle.usdPrice}>${parseInt(usdPrice)}</span>
                                          }
                                   
                                    </div>

                                    

                                    <div className="form-group d-flex justify-content-end pt-2 mb-1">
                                    <div className="m-2">
                                        <Button
                                        btnName="UPLOAD"
                                        handleClick={async () =>
                                          createNFT(
                                            name,
                                            String(price*1.3),
                                            image,
                                            description,
                                            category,
                                            router
                                            // website,
                                            // royalties,
                                            // fileSize,
                                            // properties
                                          )
                                        }
                                        className="btn btn-md m-2"
                                        />
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>




























    // <div className={Style.upload}>
    //   <DropZone
    //     title="JPG, PNG, WEBM , MAX 100MB"
    //     heading="Drag & drop file"
    //     subHeading="or Browse media on your device"
    //     name={name}
    //     // website={website}
    //     description={description}
    //     // fileSize={fileSize}
    //     category={category}
    //     // properties={properties}
    //     setImage={setImage}
    //     uploadToIPFS={uploadToIPFS}
    //   />

    //   <div className={Style.upload_box}>
    //     <div className={formStyle.Form_box_input}>
    //       <label htmlFor="nft">Item Name</label>
    //       <input
    //         type="text"
    //         placeholder="Picasso Defi"
    //         className={formStyle.Form_box_input_userName}
    //         onChange={(e) => setName(e.target.value)}
    //       />
    //     </div>

    //     {/* <div className={formStyle.Form_box_input}>
    //       <label htmlFor="website">Website</label>
    //       <div className={formStyle.Form_box_input_box}>
    //         <div className={formStyle.Form_box_input_box_icon}>
    //           <MdOutlineHttp />
    //         </div>

    //         <input
    //           type="text"
    //           placeholder="website"
    //           onChange={(e) => setWebsite(e.target.value)}
    //         />
    //       </div>

    //       <p className={Style.upload_box_input_para}>
    //         Ciscrypt will include a link to this URL on this item's detail page,
    //         so that users can click to learn more about it. You are welcome to
    //         link to your own webpage with more details.
    //       </p>
    //     </div> */}

    //     <div className={formStyle.Form_box_input}>
    //       <label htmlFor="description">Description</label>
    //       <textarea
    //         name=""
    //         id=""
    //         cols="30"
    //         rows="6"
    //         placeholder="something about yourself in few words"
    //         onChange={(e) => setDescription(e.target.value)}
    //       ></textarea>
    //       <p>
    //         The description will be included on the item's detail page
    //         underneath its image. Markdown syntax is supported.
    //       </p>
    //     </div>


    //     <div className={formStyle.Form_box_input}>
    //       <label htmlFor="name">Choose Type of Art</label>
    //       <p className={Style.upload_box_input_para}>
    //         Choose an exiting collection or create a new one
    //       </p>
    //       <div className={Style.upload_box_slider_div}>
    //         {typesArray.map((el, i) => (
    //           <div
    //             className={`${Style.upload_box_slider} ${
    //               activeType == i + 1 ? Style.active : ""
    //             }`}
    //             key={i + 1}
    //             onClick={() => (setActiveType(i + 1), setType(el.key))}
    //           >
    //             <div className={Style.upload_box_slider_box}>
    //               <div className={Style.upload_box_slider_box_img}>
    //                 <Image
    //                   src={el.image}
    //                   alt="background image"
    //                   width={70}
    //                   height={70}
    //                   className={Style.upload_box_slider_box_img_img}
    //                 />
    //               </div>
    //               <div className={Style.upload_box_slider_box_img_icon}>
    //                 <TiTick />
    //               </div>
    //             </div>
    //             <p>Type of {el.type} </p>
    //           </div>
    //         ))}
    //       </div>

          
          
        
    //     </div>


    //     { type &&
    //             <div className={formStyle.Form_box_input}>
    //             <label htmlFor="name">Choose collection</label>
    //             <p className={Style.upload_box_input_para}>
    //               Choose an exiting collection or create a new one
    //             </p>

    //             <div className={Style.upload_box_slider_div}>
    //               {categoryArry.map((el, i) => (
    //                 <div
    //                   className={`${Style.upload_box_slider} ${
    //                     activeCat == i + 1 ? Style.active : ""
    //                   }`}
    //                   key={i + 1}
    //                   onClick={() => (setActiveCat(i + 1), setCategory(el.key))}
    //                 >
    //                   <div className={Style.upload_box_slider_box}>
    //                     <div className={Style.upload_box_slider_box_img}>
    //                       <Image
    //                         src={el.image}
    //                         alt="background image"
    //                         width={70}
    //                         height={70}
    //                         className={Style.upload_box_slider_box_img_img}
    //                       />
    //                     </div>
    //                     <div className={Style.upload_box_slider_box_img_icon}>
    //                       <TiTick />
    //                     </div>
    //                   </div>
    //                   <p>Crypto Legend - {el.category} </p>
    //                 </div>
    //               ))}
    //             </div>
    //             </div>

    //     }


    //     <div className={formStyle.Form_box_input_social}>
    //       {/* <div className={formStyle.Form_box_input}>
    //         <label htmlFor="size">Size</label>
    //         <div className={formStyle.Form_box_input_box}>
    //           <div className={formStyle.Form_box_input_box_icon}>
    //             <MdOutlineAttachFile />
    //           </div>
    //           <input
    //             type="text"
    //             placeholder="165MB"
    //             onChange={(e) => setFileSize(e.target.value)}
    //           />
    //         </div>
    //       </div> */}
    //       {/* <div className={formStyle.Form_box_input}>
    //         <label htmlFor="Properties">Properties</label>
    //         <div className={formStyle.Form_box_input_box}>
    //           <div className={formStyle.Form_box_input_box_icon}>
    //             <AiTwotonePropertySafety />
    //           </div>
    //           <Taginput />
    //         </div>
    //       </div> */}

    //       <div className={formStyle.Form_box_input}>
    //         <label htmlFor="Price">Price</label>
    //         <div className={formStyle.Form_box_input_box}>
    //           <div className={formStyle.Form_box_input_box_icon}>
    //             <AiTwotonePropertySafety />
    //           </div>
    //           <input
    //             type="text"
    //             placeholder="Price"
    //             onChange={(e) => setPrice(e.target.value)}
    //             onKeyUp={handleUsdPrice}
                
    //           />
    //           { price &&
    //                   <span className={formStyle.usdPrice}>${parseInt(usdPrice)}</span>
    //           }
    //         </div>
    //       </div>
    //     </div>

    //     { price &&
    //     <div className={Style.upload_box_btn}>
    //     Consider that the website is going to place your art price at {estimatedPrice} BNB (30% plus)
    //     </div>
    //     }

    //     <div className={Style.upload_box_btn}>
    //       <Button
    //         btnName="Upload"
    //         handleClick={async () =>
    //           createNFT(
    //             name,
    //             String(price*1.3),
    //             image,
    //             description,
    //             category,
    //             router
    //             // website,
    //             // royalties,
    //             // fileSize,
    //             // properties
    //           )
    //         }
    //         classStyle={Style.upload_box_btn_style}
    //       />
    //       <Button
    //         btnName="Preview"
    //         handleClick={() => {}}
    //         classStyle={Style.upload_box_btn_style}
    //       />
    //     </div>
    //   </div>
    // </div>
  );
};

export default UloadNFT;
