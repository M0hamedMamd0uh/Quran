import { IoHome } from "react-icons/io5";
import { MdRadio, MdOutlineMenuBook } from "react-icons/md";
import "./sideNav.scss";
import Link from "next/link";
import MoreLinks from "./MoreLinks/MoreLinks";
export default function SideNav() {

  return (
    <>
      <div className="sideNav ">
        <ul className="list-unstyled">
          <div className="main-links">
            <Link href="/">
              <li>
                <IoHome />
              </li>
              <span className="lead fs-6">Home</span>
            </Link>
            <Link href="/radio">
              <li>
                <MdRadio />
              </li>
              <span className="lead fs-6">Radio</span>
            </Link>
            <Link href="/browseQuran">
              <li>
                <MdOutlineMenuBook />
              </li>
              <span className="lead fs-6">Browse the Quran</span>
              {/* <span className="lead fs-6">Quran</span> */}
            </Link>
             <MoreLinks />
          </div>
        </ul>
      </div>
    </>
  );
}
