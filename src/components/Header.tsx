import { FC } from "react";
import HanbergerMenu from "components/HanbergerMemu";

const Header: FC = () => (
  <div className="w-full h-20 fixed top-0 z-10 bg-white drop-shadow-md font-roboto_serif">
    <div className="hidden md:block w-full h-full">
      <div className="h-full w-full flex items-center justify-center space-x-8">
        <a href="./access" rel="noopener noreferrer" className="font-semibold w-24">
          ACCESS
        </a>
        <a href="./circle" rel="noopener noreferrer" className="font-semibold w-24">
          CIRCLE
        </a>
        <a href="./" rel="noopener noreferrer" className="flex items-center space-x-2">
          <div className="font-extrabold w-11 text-right">The</div>
          <img src="image/black/logo.png" alt="logo" className="h-12 w-12 border-[3px] border-black" />
          <div className="font-extrabold w-11">32nd.</div>
        </a>
        <a href="./timetable" rel="noopener noreferrer" className="font-semibold w-24">
          TIMETABLE
        </a>
        <a href="./staff" rel="noopener noreferrer" className="font-semibold w-24">
          STAFF
        </a>
      </div>
    </div>
    <div className="md:hidden w-full h-full">
      <div className="w-full h-full p-2 flex justify-between items-center relative">
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
