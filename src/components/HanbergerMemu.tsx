import { useState } from "react";
import { NextPage } from "next";
import { FiTwitter, FiInstagram, FiShare2 } from "react-icons/fi";
import { Spin as Button } from "hamburger-react";

const Menu: NextPage = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="z-10">
      <div
        className={`${
          isOpen ? "" : "translate-x-full"
        } h-screen w-screen pt-20 z-20 transition-all duration-500 ease-[cubic-bezier(.53,0,1,.67)] fixed top-0 left-0 bg-black
        `}
      >
        <div className="w-full h-20 bg-black fixed top-0 left-0">
          <div className="w-full h-full p-2 flex justify-between items-center relative">
            <div className="flex items-center space-x-1">
              <div className="font-extrabold text-white">The</div>
              <img src="image/white/logo.png" alt="logo" className="h-10 w-10 border-[2px] border-white" />
              <div className="font-extrabold text-white">32nd.</div>
            </div>
            <div className="h-14 w-14 m-2 flex flex-none items-center justify-center">
              <Button toggled={isOpen} toggle={setOpen} color="#ffffff" />
            </div>
          </div>
        </div>

        <div className="h-[calc(100vh_-_5rem)] w-full overflow-y-auto py-10">
          <div className="flex flex-col justify-center items-center space-y-10">
            <a
              href="./timetable"
              rel="noopener noreferrer"
              className={`${isOpen ? "" : "translate-y-96"} transition-all duration-500 ease-in delay-[0ms]`}
            >
              <img src="image/white/timetable.png" alt="timetable" className="h-12" />
            </a>
            <a
              href="./circle"
              rel="noopener noreferrer"
              className={`${isOpen ? "" : "translate-y-96"} transition-all duration-500 ease-in delay-[25ms]`}
            >
              <img src="image/white/circle.png" alt="circle" className="h-12" />
            </a>
            <a
              href="./access"
              rel="noopener noreferrer"
              className={`${isOpen ? "" : "translate-y-96"} transition-all duration-500 ease-in delay-[50ms]`}
            >
              <img src="image/white/access.png" alt="access" className="h-12" />
            </a>
            <a
              href="./staff"
              rel="noopener noreferrer"
              className={`${isOpen ? "" : "translate-y-96"} transition-all duration-500 ease-in delay-[75ms]`}
            >
              <img src="image/white/staff.png" alt="staff" className="h-12" />
            </a>
            <div className="flex flex-col justify-center items-center space-y-4">
              <div
                className={`${
                  isOpen ? "" : "translate-y-96"
                } text-white text-[22px] font-light  transition-all duration-500 ease-in delay-[100ms]`}
              >
                SHARE
              </div>
              <a
                href="https://twitter.com/"
                rel="noopener noreferrer"
                className={`${isOpen ? "" : "translate-y-96"} transition-all duration-500 ease-in delay-[125ms]`}
              >
                <FiTwitter size="48px" color="white" className="stroke-1" />
              </a>
              <a
                href="https://instagram.com/"
                rel="noopener noreferrer"
                className={`${isOpen ? "" : "translate-y-96"} transition-all duration-500 ease-in delay-[150ms]`}
              >
                <FiInstagram size="48px" color="white" className="stroke-1" />
              </a>
              <a
                href="share"
                rel="noopener noreferrer"
                className={`${isOpen ? "" : "translate-y-96"} transition-all duration-500 ease-in delay-[175ms]`}
              >
                <FiShare2 size="48px" color="white" className="stroke-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="h-14 w-14 m-2 flex flex-none items-center justify-center">
        <Button toggled={isOpen} toggle={setOpen} color="#000000" />
      </div>
    </div>
  );
};

export default Menu;
