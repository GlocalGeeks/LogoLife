import React, { useRef, useEffect } from "react";
import "./VideoPlayer.css";

const VideoPlayer = (props) => {
  const player = useRef(null);
  const videoRef = useRef(null);

  // Pause and reset the video when it is hidden
  useEffect(() => {
    if (props.className === "hide" && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 1;
    }
    if (props.className === "show" && videoRef.current) {
      videoRef.current.play();
    }
  }, [props.className]); // Runs whenever the visibility class changes

  const closePlayer = (e) => {
    if (e.target === player.current) {
      player.current.classList.add("hide");
      if (videoRef.current) {
        videoRef.current.pause(); // Pause the video
        videoRef.current.currentTime = 1; // Reset the video to the beginning
      }
    }
  };

  return (
    <div
      ref={player}
      className={`video-player ${props.className}`}
      onClick={closePlayer}
    >
      <video ref={videoRef} src={props.src} muted controls autoPlay></video>
    </div>
  );
};

export default VideoPlayer;
