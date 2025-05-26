import Book from "@/app/(Components)/Book/Book";
import "./browseQuran.scss";
import FilterSelectBox from "@/app/(Components)/FilterSelectBox/FilterSelectBox";
import { IallSuwar } from "@/app/types/reciters";
import { GrFormNextLink ,GrFormPreviousLink} from "react-icons/gr";

export default async function BrowseQuran() {

  const data = await fetch(
    `https://www.mp3quran.net/api/v3/suwar?language=eng`
  );

  let suwar: IallSuwar = await data.json();

  return (
    <>
      <div className="browseQuran py-4 ">
        <span className="mb-3">Browse Quran</span>
        <div className="filter-box">
          <FilterSelectBox surahTitle="Surah" suwarSelectBox={suwar} />
        </div>
        <Book />
      </div>
    </>
  );
}
