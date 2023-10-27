import React, { useState } from "react";
import Image from "next/image";
import { TbPlayerPlay, TbPlayerPause } from "react-icons/tb";

//INTERNAL IMPORT
import Style from "./NftAudioPreview.module.css";
import images from "../../../img";
import LikeProfile from "../../LikeProfile/LikeProfile";

const NftAudioPreview = ({audio}) => {
  const [play, setPlay] = useState(false);

  const playMusic = () => {
    var x = document.getElementById("myAudio");
    if (!play) {
      setPlay(true);
      x.play();
    } else {
      setPlay(false);
      x.pause();
    }
  };
  return (
    <div className={Style.audioPlayer}>
      <div className={Style.audioPlayer_box}>
        <Image
          src={images.creatorbackground1}
          alt="music"
          width={100}
          height={100}
          className={Style.audioPlayer_box_img}
        />
        <audio id="myAudio" src={audio}></audio>

        <div className={Style.audioPlayer_box_info}>
          <h4>NFT music</h4>
        </div>

        <div
          className={Style.audioPlayer_box_playBtn}
          onClick={() => playMusic()}
        >
          {play ? <TbPlayerPause /> : <TbPlayerPlay />}
        </div>
      </div>
    </div>
  );
};

export default NftAudioPreview;
