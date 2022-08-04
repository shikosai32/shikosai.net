import { FC } from "react";
import HanbergerMenu from "components/HanbergerMemu";

const Header: FC = () => (
  <div className="fixed top-0 z-10 h-20 w-full bg-white drop-shadow-md">
    <div className="hidden h-full w-full md:block">
      <div className="flex h-full w-full items-center justify-center space-x-10">
        <a href="./access" rel="noopener noreferrer" className="font-semibold">
          ACCESS
        </a>
        <a href="./circle" rel="noopener noreferrer" className="font-semibold">
          CIRCLE
        </a>
        <a href="./" rel="noopener noreferrer" className="flex items-center space-x-2">
          <div className="w-11 text-right font-extrabold">The</div>
          <img src="image/black/logo.png" alt="logo" className="h-12 w-12 border-[3px] border-black" />
          <div className="w-11 font-extrabold">32nd.</div>
        </a>
        <a href="./timetable" rel="noopener noreferrer" className="font-semibold">
          TIMETABLE
        </a>
        <a href="./staff" rel="noopener noreferrer" className="font-semibold">
          STAFF
        </a>
      </div>
    </div>
    <div className="h-full w-full md:hidden">
      <div className="relative flex h-full w-full items-center justify-between py-2 pl-6 pr-2">
        <a href="./" rel="noopener noreferrer" className="flex items-center space-x-1">
          <div className="font-extrabold">The</div>
          <img src="image/black/logo.png" alt="logo" className="h-10 w-10 border-[2px] border-black" />
          <div className="font-extrabold">32nd.</div>
        </a>
        <HanbergerMenu />
      </div>
    </div>
  </div>
);

export default Header;
