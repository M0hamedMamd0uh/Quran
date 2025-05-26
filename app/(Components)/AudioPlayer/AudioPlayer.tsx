"use client";

import { IoMdClose } from "react-icons/io";

export default function AudioPlayer() {
  function closePlayer() {
    const audio_box = document.getElementById("audio-box") as HTMLDivElement;
    const audio_src = document.getElementById("audio") as HTMLAudioElement;
    audio_box.style.display = "none";
    // audio_src.volume = 0.5;
    audio_src.src = "";
  }
  return (
    <div className="audio-box position-fixed bottom-0" id="audio-box">
      <audio controls id="audio" src="" autoPlay></audio>
      <span onClick={() => closePlayer()}>
        <IoMdClose />
      </span>
    </div>
  );
}
