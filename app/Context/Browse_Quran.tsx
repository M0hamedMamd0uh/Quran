"use client";
import React, { createContext, useState } from "react";
import { IreciterDetails ,Ireciters } from "../types/reciters";

interface IbrowseQuranContext {
  prevPageNum: number;
  setPrevPageNum: React.Dispatch<React.SetStateAction<number>>;
  nextPageNum: number;
  setNextPageNum: React.Dispatch<React.SetStateAction<number>>;
  customPageNum: number;
  setCustomPageNum: React.Dispatch<React.SetStateAction<number>>;
  surahName: string;
  setSurahName: React.Dispatch<React.SetStateAction<string>>;
  reciterName: string;
  setReciterName: React.Dispatch<React.SetStateAction<string>>;
  sectionName: string;
  setSectionName: React.Dispatch<React.SetStateAction<string>>;
  rightSide: string;
  setRightSide: React.Dispatch<React.SetStateAction<string>>;
  leftSide: string;
  setLeftSide: React.Dispatch<React.SetStateAction<string>>;
  activePageSM: string;
  setActivePageSM: React.Dispatch<React.SetStateAction<string>>;

  currentPageNum: number;
  setCurrentPageNum: React.Dispatch<React.SetStateAction<number>>;
  next_S_M_PageNum: number;
  setNext_S_M_PageNum: React.Dispatch<React.SetStateAction<number>>;

  prev_S_M_PageNum: number;
  setPrev_S_M_PageNum: React.Dispatch<React.SetStateAction<number>>;

  getAllRecitersSurah: (surah_id: number) => Promise<Ireciters[]>;
  allReciters: Ireciters[];
  setAllReciters: React.Dispatch<React.SetStateAction<Ireciters[]>>;
}

const defaultState = {
  prevPageNum: 0,
  setPrevPageNum: (val: number) => {},
  nextPageNum: 0,
  setNextPageNum: (val: number) => {},
  customPageNum: 0,
  setCustomPageNum: (val: number) => {},
  surahName: "",
  setSurahName: (val: string) => {},
  reciterName: "",
  setReciterName: (val: string) => {},
  sectionName: "",
  setSectionName: (val: string) => {},
  rightSide: "",
  setRightSide: (val: string) => {},
  leftSide: "",
  setLeftSide: (val: string) => {},
  activePageSM: "",
  setActivePageSM: (val: string) => {},

  currentPageNum:0,
  setCurrentPageNum:(val: number) => {},
  next_S_M_PageNum:0,
  setNext_S_M_PageNum:(val: number) => {},


  prev_S_M_PageNum:0,
  setPrev_S_M_PageNum:(val: number) => {},




  getAllRecitersSurah: (surah_id: number) => { },
  allReciters: [{
  id: 0,
  name: "",
  letter: "",
  moshaf: [
    {
      id: 0,
      name: "",
      server: "",
      surah_total: 0,
      moshaf_type: 0,
      surah_list: "",
    }
  ]
}], 
  setAllReciters : (val:Ireciters[]) => { },

} as IbrowseQuranContext;

export const browseQuranContext = createContext(defaultState);

export default function Browse_Quran({
  children,
}: {
  children: React.ReactNode;
}) {
  const [prevPageNum, setPrevPageNum] = useState<number>(1);
  const [nextPageNum, setNextPageNum] = useState<number>(3);
  const [customPageNum, setCustomPageNum] = useState<number>(5);
  
  const [currentPageNum, setCurrentPageNum] = useState<number>(1);
  const [next_S_M_PageNum, setNext_S_M_PageNum] = useState<number>(2);
  const [prev_S_M_PageNum, setPrev_S_M_PageNum] = useState<number>(3);
  

  const [surahName, setSurahName] = useState<string>("");
  const [reciterName, setReciterName] = useState<string>("");
  const [sectionName, setSectionName] = useState<string>("");

  const [rightSide, setRightSide] = useState<string>("prev");
  const [leftSide, setLeftSide] = useState<string>("next");

  const [activePageSM, setActivePageSM] = useState<string>("current");
  
  const [allReciters, setAllReciters] = useState<Ireciters[]>([{
  id: 0,
  name: "",
  letter: "",
  moshaf: [
    {
      id: 0,
      name: "",
      server: "",
      surah_total: 0,
      moshaf_type: 0,
      surah_list: "",
    }
  ]
}]);


  async function getAllRecitersSurah(surah_id: number): Promise<Ireciters[]> {
    // const data = await fetch(
    //   `https://www.mp3quran.net/api/v3/reciters?language=eng&sura=${surah_id}`
    // );
    // const allReiters = await data.json();
    // return  allReiters

   const data = await fetch(
     "https://mp3quran.net/api/v3/reciters?language=eng"
   );
   const allReciters : IreciterDetails = await data.json();

    // filter reciters that has this surah 

    let filterReciters : Ireciters[]= allReciters.reciters.filter((reciter) =>
      reciter.moshaf[0].surah_list.includes(surah_id.toString())
    );

    return filterReciters;
  }




  return (
    <browseQuranContext.Provider
      value={{
        prevPageNum,
        setPrevPageNum,
        nextPageNum,
        setNextPageNum,
        customPageNum,
        setCustomPageNum,
        surahName,
        setSurahName,
        reciterName,
        setReciterName,
        sectionName,
        setSectionName,
        rightSide,
        setRightSide,
        leftSide,
        setLeftSide,
        activePageSM,
        setActivePageSM,
        currentPageNum,
        setCurrentPageNum,
        next_S_M_PageNum,
        setNext_S_M_PageNum,
        prev_S_M_PageNum,
        setPrev_S_M_PageNum,
        getAllRecitersSurah,
        allReciters,
        setAllReciters,
      }}
    >
      {children}
    </browseQuranContext.Provider>
  );
}
