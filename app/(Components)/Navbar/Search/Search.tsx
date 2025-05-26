"use client"
import { browseQuranContext } from "@/app/Context/Browse_Quran";
import  { useContext } from "react";
import { FiSearch } from "react-icons/fi";
import { HiOutlineRadio } from "react-icons/hi2";


export default function Search({radioUrl } :{radioUrl : string}) {

function handleRadioChannels( ) {
    const audio_box = document.getElementById("audio-box") as HTMLDivElement;
    const audio_src = document.getElementById("audio") as HTMLAudioElement;
    audio_box.style.display = "flex";
    audio_src.volume = 0.5;
    audio_src.src = radioUrl;
  }

  return (
    <>
      {/* <li className="nav-item">
        <input
          className="form-control"
          type="text"
          placeholder="Search..."
          aria-label="Search"
          id="searchInput"
        />
        <FiSearch className="search-logo" />
      </li> */}
      <li className="radio-live w-auto" onClick={() => handleRadioChannels()}>
        <HiOutlineRadio />
      </li>
 
    </>
  );
}
