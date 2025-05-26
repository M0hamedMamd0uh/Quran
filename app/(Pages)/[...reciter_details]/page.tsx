import "./reciter_details.scss";
import { IreciterDetails, IreciterParams } from "../../types/reciters";
import Suwar from "@/app/(Components)/Suwar/Suwar";

export default async function ReciterDetails({ params }: IreciterParams) {
  // if (Number.isInteger(+params.reciter_details[0])) {
  const data = await fetch(
    `https://www.mp3quran.net/api/v3/reciters?language=eng&reciter=${params.reciter_details[0]}`
  );
  let reciterDetails: IreciterDetails = await data.json();
  // }
    

  return (
    <>
      <div className="reciter_details">
        <h4 className="py-4 text-center lead fs-4">{`${
          reciterDetails!.reciters[0].name
        } - ${reciterDetails!.reciters[0].moshaf[0].name}`}</h4>
        <div className="row g-3">
          <Suwar
            moshaf={reciterDetails.reciters[0].moshaf[0].surah_list}
            src={reciterDetails.reciters[0].moshaf[0].server}
          />
        </div>
      </div>
    </>
  );
}
