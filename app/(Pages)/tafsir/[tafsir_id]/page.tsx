import { IallSuwar, ItafasirDetails, ItafsirParams } from "@/app/types/reciters";
import "../tafsir.scss";
import Link from "next/link";

export default async function TafsirDetails({ params }: ItafsirParams) {
  // for get tafsir of all suwar
  const tasfir_data = await fetch(`https://www.mp3quran.net/api/v3/tafsir?tafsir=${params.tafsir_id}&language=ar`);
  const tasfirDetails: ItafasirDetails = await tasfir_data.json();

  // for known all suwar that tafsir contain
  let allTafsirSuwar: string = "";
  tasfirDetails.tafasir.soar.map((tafsir) => {
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
      <h2 className="tafsir_title text-center py-2">{tasfirDetails.tafasir.name}</h2>

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
                        href={`/tafsir/${params.tafsir_id}/${surah.id}`}
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
