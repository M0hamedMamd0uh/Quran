import Link from "next/link";
import React from "react";
import Search from "./Search/Search";
import "./Navbar.scss";
import logo from "../../../public/tafsir.svg";
import Image from "next/image";
import { Iradios } from "@/app/types/reciters";
export default async function Navbar() {
    const data = await fetch("https://mp3quran.net/api/v3/radios?language=eng");
    const allRadios: Iradios = await data.json();
    const random_Radio = Math.floor(Math.random() * allRadios.radios.length)

  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <Link className="navbar-brand " href="/">
            {/* <Image src={logo} alt="logo" width={40} priority={false} /> */}
            Quran
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ">
              <Search radioUrl={allRadios.radios[random_Radio].url}/>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
