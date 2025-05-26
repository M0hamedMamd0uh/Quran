import Link from "next/link";
import "./tafsir.scss";
import {
  ItafasirsCategories,
  ItafasirDetails,
  Ilive,
  IallSuwar,
} from "@/app/types/reciters";

export default async function Tafsir() {
  //  for get first tafsir url to run by default as first page showing
  const data = await fetch("https://mp3quran.net/api/v3/tafasir");
  const allTafasirs: ItafasirsCategories = await data.json();

  // for get tafsir of all suwar
  const firstTasfir = await fetch(allTafasirs.tafasir[0].url);
  const firstTasfirDetails: ItafasirDetails = await firstTasfir.json();

  // for known all suwar that tafsir contain
  let allTafsirSuwar: string = "";
  firstTasfirDetails.tafasir.soar.map((tafsir) => {
    allTafsirSuwar += `${tafsir.sura_id},`;
  });

  // for remove all repeated id of surah
  let allUniqueSuwar = new Set(allTafsirSuwar.split(","));
  let uniqueSuwar = [...allUniqueSuwar];

  // get all suwar of quran
  const data3 = await fetch(
    `https://www.mp3quran.net/api/v3/suwar?language=ar`
  );

  let suwar: IallSuwar = await data3.json();

  return (
    <>
      <h2 className="tafsir_title text-center py-2">{allTafasirs.tafasir[0].name}</h2>
      {suwar.suwar.map((surah) => {
        return (
          <>
            {uniqueSuwar.map((tafsir_surah) => {
              if (surah.id === +tafsir_surah) {
                return (
                  <>
                    <div
                      className="col-sm-6 col-md-4 col-lg-3"
                      key={+tafsir_surah}
                    >
                      <Link
                        href={`/tafsir/${allTafasirs.tafasir[0].id}/${surah.id}`}
                        className="text-decoration-none"
                      >
                        <div className="surah cursor-pointer">
                          <div className="sura_head d-flex gap-2">
                            <span className="surah_num center-element rounded-circle ">
                              {surah.id}
                            </span>
                          </div>
                          <h5 className="surah_name lead m-0">{surah.name}</h5>
                        </div>
                      </Link>
                    </div>
                  </>
                );
              }
            })}
          </>
        );
      })}
    </>
  );
}
