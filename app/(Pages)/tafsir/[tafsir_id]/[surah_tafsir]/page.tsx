import PlayAudio from "@/app/(Components)/Suwar/PlayAudio/PlayAudio";
import {
  IsurahTafsirAllDetails,
  IsurahTafsirDetails,
  IsurahTafsirParams,
} from "@/app/types/reciters";

export default async function SurahTafsir({ params }: IsurahTafsirParams) {
  const surah_tafsir = await fetch(
    `https://mp3quran.net/api/v3/tafsir?tafsir=${params.tafsir_id}&sura=${params.surah_tafsir}&language=ar`
  );
  const surah_sections: IsurahTafsirAllDetails = await surah_tafsir.json();

  return (
    <>
      {surah_sections.tafasir.soar[params.surah_tafsir].map(
        (tafsir_section: IsurahTafsirDetails, index: number) => {
          return (
            <>
              <div className="col-lg-6" key={tafsir_section.id}>
                <div className="surah ">
                  <div className="surah_tafsir_head d-flex gap-2">
                    <span className="surah_num center-element rounded-circle">
                      {index + 1}
                    </span>
                    <PlayAudio audioSrc={tafsir_section.url} />
                  </div>
                  <h5 className="surah_tafsir_name lead m-0">
                    {tafsir_section.name}
                  </h5>
                </div>
              </div>
            </>
          );
        }
      )}
    </>
  );
}
