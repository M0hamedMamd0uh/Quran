import { IallSuwar, Isurah } from "./../../types/reciters";
import PlayAudio from "./PlayAudio/PlayAudio";

export default async function Suwar({
  moshaf,
  src,
}: {
  moshaf: string;
  src: string;
}) {
  let reciter_suwar = moshaf.split(",");
  const data = await fetch(
    `https://www.mp3quran.net/api/v3/suwar?language=eng`
  );

  let suwar: IallSuwar = await data.json();

  return (
    <>
      {reciter_suwar.map((rec_surah) => {
        return (
          <>
            {suwar.suwar.map((surah: Isurah) => {
              if (+rec_surah === surah.id) {
                return (
                  <>
                    <div
                      className="col-sm-6 col-md-4 col-lg-3"
                      key={+rec_surah}
                    >
                      <div
                        className="surah "
                        // data-Src={`${src}${rec_surah.padStart(3, "0")}.mp3`}
                      >
                        <div className="sura_head d-flex gap-2">
                          <span className="surah_num center-element rounded-circle">
                            {surah.id}
                          </span>
                          <PlayAudio
                            audioSrc={`${src}${rec_surah.padStart(3, "0")}.mp3`}
                          />
                        </div>
                        <h5 className="surah_name lead m-0">{surah.name}</h5>
                      </div>
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
