"use client";
import React from "react";
import { IoPlaySharp } from "react-icons/io5";

export default function PlayAudio({ audioSrc }: { audioSrc: string }) {
  function getAudioSrc(src: string) {
    const audio_box = document.getElementById("audio-box") as HTMLDivElement;
    const audio_src = document.getElementById("audio") as HTMLAudioElement;
    audio_box.style.display = "flex";
    audio_src.volume = 0.5;
    audio_src.src = src;
  }
  return (
    <>
      <span
        className="surah_player center-element rounded-circle cursor-pointer"
        onClick={() => getAudioSrc(audioSrc)}
      >
        <IoPlaySharp />
      </span>
    </>
  );
}
