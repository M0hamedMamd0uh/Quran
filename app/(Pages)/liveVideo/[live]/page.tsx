"use client";
import { IsearchParams } from "@/app/types/reciters";
import "./live.scss";
import { useEffect, useState } from "react";
import Video from "next-video";
export default function LivePage({
  searchParams,
}: {
  searchParams: IsearchParams;
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      <div className="container">
        <div className="live py-4">
          <div className="row g-3">
            <div className="col-12">
              <h2 className="text-center my-3 lead fs-4 ">
                {searchParams.channel}
              </h2>
            </div>
            <div className="col-12">
              <div className="video center-element ">
                {isClient ? <Video src={`${searchParams.url}`} /> : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
