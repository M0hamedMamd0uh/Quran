import React from "react";
import "./radio.scss";
import PlayAudio from "@/app/(Components)/Suwar/PlayAudio/PlayAudio";
import { Iradios , Ilive } from "@/app/types/reciters";

export default async function Radio() {
    const data = await fetch("https://mp3quran.net/api/v3/radios?language=eng");
    const allRadios: Iradios = await data.json();
  return (
    <>
      <div className="radio py-4 ">
        <span className="mb-3">Radios</span>
        <div className="row g-3 ">
          {allRadios.radios.map((radio : Ilive) => {
            return <>
            <div className="col-md-6" key={radio.id}>
            <div className="reciter-radio  p-2 px-3">
              <span className="radio-name d-inline-block">
                {radio.name}
              </span>
              <PlayAudio audioSrc={radio.url} />
            </div>
          </div>
            </>
          })}
          
        </div>
      </div>
    </>
  );
}
