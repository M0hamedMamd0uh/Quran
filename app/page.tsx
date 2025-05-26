import Link from "next/link";
import {Ireciters} from "./types/reciters"
export default async function Home() {
  const data = await fetch("https://mp3quran.net/api/v3/reciters?language=eng");
  const allReciters = await data.json();
  
  const categoriesReciters: Ireciters[][] = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ];

  allReciters.reciters.map((el: Ireciters) => {
    let char = el.letter.toLowerCase().charCodeAt(0) - 97;
    categoriesReciters[char].push(el);
  });
  
  return (
    <>
      <div className="home py-4 ">
        <div className="row g-4 ">
          <div className="col-10 col-md-11 ">
            {categoriesReciters?.map((el: Ireciters[]) => {
              return (
                <>
                  <div
                    className="category mb-4"
                    key={el[0]?.letter.charCodeAt(0)}
                  >
                    {el.length !== 0 ? (
                      <span id={el[0]?.letter}>{el[0]?.letter}</span>
                    ) : (
                      ""
                    )}

                    <div className="reciters" key={el[0]?.id}>
                      <div className="row g-3">
                        {el.map((reciter: Ireciters) => {
                          return (
                            <>
                              <div className="col-md-6 col-lg-4" key={reciter.id}>
                                <Link
                                  href={`${reciter.id}/${reciter.name
                                    .split(" ")
                                    .join("_")}`}
                                >
                                  <span className="reciter p-2 cursor-pointer d-inline-block text-center">
                                    {reciter.name}
                                  </span>
                                </Link>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="col-2  col-md-1 ">
            <div className="letters d-flex flex-column align-items-end">
              {categoriesReciters.map((el: any) => {
                return (
                  <>
                    {el.length !== 0 ? (
                      <span className="my-1">
                        <a
                          href={`#${el[0]?.letter}`}
                          key={el[0]?.letter.charCodeAt(0)}
                        >
                          {el[0]?.letter}
                        </a>
                      </span>
                    ) : (
                      ""
                    )}
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
