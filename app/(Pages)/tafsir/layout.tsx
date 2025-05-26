import TafsirSelectBox from "@/app/(Components)/TafsirSelectBox/TafsirSelectBox";
import { Ilive, ItafasirsCategories } from "@/app/types/reciters";
import "./tafsir.scss";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await fetch("https://mp3quran.net/api/v3/tafasir");
  const allTafasirs: ItafasirsCategories = await data.json();
  return (
    <>
      <div className="tafsir py-4 ">
        <div className="head d-flex justify-content-between flex-wrap gap-2 mb-3">
          <span>Tafsir</span>
          <TafsirSelectBox tafsirCategories={allTafasirs.tafasir} />
        </div>

        <div className="row g-3 ">{children}</div>
      </div>
    </>
  );
}
