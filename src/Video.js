import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter.js";
import VideoSidebar from "./VideoSidebar.js";

function Video({ url, channel, description, song, likes, messages, shares }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    //if video is playing...
    if (playing) {
      //stop it...
      videoRef.current.pause();
      setPlaying(false);
      //otherwise it its not playing
    } else {
      //playing
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        loop
        ref={videoRef}
        className="video__player"
        src={url}
      ></video>

      <VideoFooter
        channel={channel}
        description={description}
        song={song}
      ></VideoFooter>

      <VideoSidebar
        likes={likes}
        shares={shares}
        messages={messages}
      ></VideoSidebar>
    </div>
  );
}

export default Video;
