"use client";
import { Ilive } from "@/app/types/reciters";
import "./TafsirSelectBox.scss";
import Link from "next/link";
export default function TafsirSelectBox({
  tafsirCategories,
}: {
  tafsirCategories: Ilive[];
}) {
  return (
    <>
      <div className="tafsirSelectBox dropdown ">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {tafsirCategories[0].name}
        </button>
        <ul className="dropdown-menu dropdown-menu-dark">
          {tafsirCategories.map((tafsir) => {
            return (
              <li key={tafsir.id}>
                <Link
                  className="dropdown-item text-decoration-none"
                  href={`/tafsir/${tafsir.id}`}
                >
                  {tafsir.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
