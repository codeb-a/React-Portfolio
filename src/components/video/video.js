import React from "react";
import skyvid from "../images/skyvid.mp4";

const Video = () => {
  return (
    <video id="videobg" autoPlay loop muted>
      <source src={skyvid} type="video/mp4" />
    </video>
  );
};
export default Video;
