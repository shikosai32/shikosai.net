import type { FC } from "react";
import HanbergerMenu from "~/components/Layout/HanbergerMemu";
import Link from "next/link";

const Header: FC = () => (
  <div className="fixed top-0 z-10 h-20 w-full bg-white drop-shadow-md">
    <div className="hidden  h-full w-full items-center justify-center space-x-10 md:flex">
      <Link href="/access">
        <a rel="noopener noreferrer" className="font-semibold">
          ACCESS
        </a>
      </Link>
      <Link href="/circle">
        <a rel="noopener noreferrer" className="font-semibold">
          CIRCLE
        </a>
      </Link>
      <Link href="/">
        <a rel="noopener noreferrer" className="flex items-center space-x-2">
          <div className="w-11 text-right font-extrabold">The</div>
          <img src="image/black/logo.png" alt="logo" className="h-12 w-12 border-[3px] border-black" />
          <div className="w-11 font-extrabold">32nd.</div>
        </a>
      </Link>
      <Link href="/timetable">
        <a rel="noopener noreferrer" className="font-semibold">
          TIMETABLE
        </a>
      </Link>
      <Link href="/staff">
        <a rel="noopener noreferrer" className="font-semibold">
          STAFF
        </a>
      </Link>
    </div>
    <div className="relative flex h-full w-full items-center justify-between py-2 pl-6 pr-2 md:hidden">
      <Link href="/">
        <a rel="noopener noreferrer" className="flex items-center space-x-1">
          <div className="font-extrabold">The</div>
          <img src="image/black/logo.png" alt="logo" className="h-10 w-10 border-[2px] border-black" />
          <div className="font-extrabold">32nd.</div>
        </a>
      </Link>
      <HanbergerMenu />
    </div>
  </div>
);

export default Header;
