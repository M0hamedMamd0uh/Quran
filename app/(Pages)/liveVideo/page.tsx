import React from "react";
import "./live-videos.scss";
import { Ilive } from "@/app/types/reciters";
import Link from "next/link";

export default async function LiveVideo() {
  const api = await fetch(" https://mp3quran.net/api/v3/live-tv?language=eng");
  const { livetv }: { livetv: Ilive[] } = await api.json();

  return (
    <>
      <div className="live-video py-4 ">
        <span className="mb-3">Live video broadcast</span>
        <div className="row g-3 ">
          {livetv.map((ele: Ilive) => {
            return (
              <>
                <div className="col-md-6">
                  <Link
                    href={{
                      pathname: `/liveVideo/${ele.name.split(" ").join("_")}`,
                      query: { channel: ele.name, url: ele.url },
                    }}
                    className="text-decoration-none"
                  >
                    <p className="cursor-pointer m-0">{ele.name}</p>
                  </Link>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
