"use client";
import Link from "next/link";
import { GiBookmark } from "react-icons/gi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { MdLiveTv } from "react-icons/md";
import { RiFolderVideoLine } from "react-icons/ri";

export default function MoreLinks() {
  function handleOpenMoreLinks() {
    const moreLinks = document.getElementById("more-links") as HTMLDivElement;

    if (moreLinks.style.bottom === "-400%") {
      moreLinks.style.bottom = "100%";
    } else {
      moreLinks.style.bottom = "-400%";
    }
  }

  return (
    <>
      <div className="speical" onClick={() => handleOpenMoreLinks()}>
        <li>
          <HiOutlineDotsHorizontal />
        </li>
        <span>More</span>
      </div>
      <div className="more-links" id="more-links" style={{ bottom: "-400%" }}>
        <Link href="/tafsir">
          <li>
            <GiBookmark />
          </li>
          <span className="lead fs-6">Tafsirs</span>
        </Link>
        <Link href="/liveVideo">
          <li>
            <MdLiveTv />
          </li>
          <span className="lead fs-6">Live video broadcast</span>
        </Link>
        {/* <Link href="/quranicVideos">
          <li>
            <RiFolderVideoLine />
          </li>
          <span className="lead fs-6">Quranic videos</span>
        </Link> */}
      </div>
    </>
  );
}
