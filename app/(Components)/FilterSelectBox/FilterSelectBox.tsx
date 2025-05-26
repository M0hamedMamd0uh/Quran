"use client";
import { useContext, useState } from "react";
import "./FilterSelectBox.scss";
import { browseQuranContext } from "@/app/Context/Browse_Quran";
import {
  IallSuwar,
  Imoshaf,
  Ireciters,
  IsectionDetails,
  Isurah,
} from "@/app/types/reciters";
export default function FilterSelectBox({
  surahTitle,
  suwarSelectBox,
}: {
  surahTitle: string;
  suwarSelectBox: IallSuwar;
}) {
  // const [allReciters, setAllReciters] = useState<Ireciters[]>();

  const [surahNumber, setSurahNumber] = useState<number>(0);

  const {
    setPrevPageNum,
    setNextPageNum,
    setCustomPageNum,
    surahName,
    setSurahName,
    reciterName,
    setReciterName,
    sectionName,
    setSectionName,
    rightSide,
    leftSide,
    getAllRecitersSurah,
    allReciters,
    setAllReciters,
    activePageSM,
    setActivePageSM,
    setCurrentPageNum,
    setNext_S_M_PageNum,
    setPrev_S_M_PageNum,
  } = useContext(browseQuranContext);

  const Sections: IsectionDetails[] = [
    { start: 1, title: "Section 1" },
    { start: 22, title: "Section 2" },
    { start: 42, title: "Section 3" },
    { start: 62, title: "Section 4" },
    { start: 82, title: "Section 5" },
    { start: 102, title: "Section 6" },
    { start: 121, title: "Section 7" },
    { start: 142, title: "Section 8" },
    { start: 162, title: "Section 9" },
    { start: 182, title: "Section 10" },
    { start: 201, title: "Section 11" },
    { start: 222, title: "Section 12" },
    { start: 242, title: "Section 13" },
    { start: 262, title: "Section 14" },
    { start: 282, title: "Section 15" },
    { start: 302, title: "Section 16" },
    { start: 322, title: "Section 17" },
    { start: 342, title: "Section 18" },
    { start: 362, title: "Section 19" },
    { start: 382, title: "Section 20" },
    { start: 402, title: "Section 21" },
    { start: 422, title: "Section 22" },
    { start: 442, title: "Section 23" },
    { start: 462, title: "Section 24" },
    { start: 482, title: "Section 25" },
    { start: 502, title: "Section 26" },
    { start: 522, title: "Section 27" },
    { start: 542, title: "Section 28" },
    { start: 562, title: "Section 29" },
    { start: 582, title: "Section 30" },
  ];

  async function handleChangeSurah(surahDetails: Isurah) {
    setSurahName(surahDetails.name);
    setSurahNumber(surahDetails.id);
    setReciterName("Reciters");
    if (rightSide === "next" && leftSide === "custom") {
      if (surahDetails.start_page % 2 === 0) {
        setNextPageNum(surahDetails.start_page + 1 - 2);
        setCustomPageNum(surahDetails.start_page + 1);
      } else {
        setNextPageNum(surahDetails.start_page);
        setCustomPageNum(surahDetails.start_page + 2);
      }
    } else if (rightSide === "prev" && leftSide === "next") {
      if (surahDetails.start_page % 2 === 0) {
        setPrevPageNum(surahDetails.start_page + 1 - 2);
        setNextPageNum(surahDetails.start_page + 1);
      } else {
        setPrevPageNum(surahDetails.start_page);
        setNextPageNum(surahDetails.start_page + 2);
      }
    } else {
      if (surahDetails.start_page % 2 === 0) {
        setCustomPageNum(surahDetails.start_page + 1 - 2);
        setPrevPageNum(surahDetails.start_page + 1);
      } else {
        setCustomPageNum(surahDetails.start_page);
        setPrevPageNum(surahDetails.start_page + 2);
      }
    }


     if (activePageSM === "current") {
       setCurrentPageNum(surahDetails.start_page + 1);
     } else if (activePageSM === "next") {
       setNext_S_M_PageNum(surahDetails.start_page + 1);
     } else {
       setPrev_S_M_PageNum(surahDetails.start_page + 1);
     }

    const resultFormApi: Ireciters[] = await getAllRecitersSurah(
      surahDetails.id
    );
    setAllReciters(resultFormApi);
  }

  function handlePlaySurah(reciterName: string, src: string) {
    setReciterName(reciterName);
    //  call play audio player
    const audio_box = document.getElementById("audio-box") as HTMLDivElement;
    const audio_src = document.getElementById("audio") as HTMLAudioElement;
    audio_box.style.display = "flex";
    audio_src.volume = 0.5;
    audio_src.src = src;
  }

  function handleChangeSection(section_Details: IsectionDetails) {
    setSectionName(section_Details.title);
    if (rightSide === "next" && leftSide === "custom") {
      if (section_Details.start % 2 === 0) {
        setNextPageNum(section_Details.start + 1 - 2);
        setCustomPageNum(section_Details.start + 1);
      } else {
        setNextPageNum(section_Details.start);
        setCustomPageNum(section_Details.start + 2);
      }
    } else if (rightSide === "prev" && leftSide === "next") {
      if (section_Details.start % 2 === 0) {
        setPrevPageNum(section_Details.start + 1 - 2);
        setNextPageNum(section_Details.start + 1);
      } else {
        setPrevPageNum(section_Details.start);
        setNextPageNum(section_Details.start + 2);
      }
    } else {
      if (section_Details.start % 2 === 0) {
        setCustomPageNum(section_Details.start + 1 - 2);
        setPrevPageNum(section_Details.start + 1);
      } else {
        setCustomPageNum(section_Details.start);
        setPrevPageNum(section_Details.start + 2);
      }
    }
    // for small Screen

    if (activePageSM === "current") {
      setCurrentPageNum(section_Details.start + 1);
    } else if (activePageSM === "next") {
      setNext_S_M_PageNum(section_Details.start + 1);
    } else {
      setPrev_S_M_PageNum(section_Details.start + 1);
    }
  }
  return (
    <>
      <div className="filterSelectBox dropdown mb-3 ">
        <button
          className="btn btn-secondary dropdown-toggle "
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {surahName === "" ? surahTitle : surahName}
        </button>
        <ul className="dropdown-menu dropdown-menu-dark">
          {suwarSelectBox.suwar.map((surah: Isurah) => {
            return (
              <li onClick={() => handleChangeSurah(surah)} key={surah.id}>
                <span className="dropdown-item d-flex justify-content-between">
                  {surah.name} {surah.start_page}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="filterSelectBox dropdown mb-3">
        <button
          className="btn btn-secondary dropdown-toggle "
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {reciterName !== "" ? reciterName : "Reciters"}
        </button>
        <ul className="dropdown-menu dropdown-menu-dark">
          {allReciters?.map((reciter: Ireciters) => {
            return (
              <>
                {reciter.moshaf.length > 0 ? (
                  <>
                    {reciter.moshaf.map((rewaya: Imoshaf) => {
                      return (
                        <>
                          <li
                            key={`${reciter.id}${rewaya.id}`}
                            title={`${reciter.name} - ${rewaya.name}`}
                          >
                            <span
                              className="dropdown-item"
                              onClick={() =>
                                handlePlaySurah(
                                  `${reciter.name} - ${rewaya.name}`,
                                  `${rewaya.server}${surahNumber
                                    .toString()
                                    .padStart(3, "0")}.mp3`
                                )
                              }
                            >
                              {reciter.name} - {rewaya.name}
                            </span>
                          </li>
                        </>
                      );
                    })}
                  </>
                ) : (
                  <>
                    <li
                      key={`${reciter.id}${reciter.moshaf[0].id}`}
                      title={`${reciter.name} - ${reciter.moshaf[0].name}`}
                    >
                      <span
                        className="dropdown-item"
                        onClick={() =>
                          handlePlaySurah(
                            `${reciter.name} - ${reciter.moshaf[0].name}`,
                            `${reciter.moshaf[0].server}${surahNumber
                              .toString()
                              .padStart(3, "0")}.mp3`
                          )
                        }
                      >
                        {reciter.name} - {reciter.moshaf[0].name}
                      </span>
                    </li>
                  </>
                )}
              </>
            );
          })}
        </ul>
      </div>

      <div className="filterSelectBox  dropdown mb-3 ">
        <button
          className="btn btn-secondary dropdown-toggle "
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {sectionName !== "" ? sectionName : "Sections"}
        </button>
        <ul className="dropdown-menu dropdown-menu-dark">
          {Sections.map((section_Details: IsectionDetails) => {
            return (
              <li
                onClick={() => handleChangeSection(section_Details)}
                key={section_Details.start}
              >
                <span className="dropdown-item">{section_Details.title}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
