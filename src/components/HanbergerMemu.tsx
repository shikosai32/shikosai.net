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
        } fixed top-0 left-0 z-20 h-screen w-screen bg-black pt-20 transition-all duration-700 ease-in-out
        `}
      >
        <div className="fixed top-0 left-0 h-20 w-full bg-black">
          <div className="relative flex h-full w-full items-center justify-between p-2">
            <div className="flex items-center space-x-1">
              <div className="font-extrabold text-white">The</div>
              <img src="image/white/logo.png" alt="logo" className="h-10 w-10 border-[2px] border-white" />
              <div className="font-extrabold text-white">32nd.</div>
            </div>
            <div className="m-2 flex h-14 w-14 flex-none items-center justify-center">
              <Button toggled={isOpen} toggle={setOpen} color="#ffffff" />
            </div>
          </div>
        </div>

        <div className="h-[calc(100vh_-_5rem)] w-full overflow-y-auto py-10">
          <div className="flex flex-col items-center justify-center space-y-10">
            <a
              href="./timetable"
              rel="noopener noreferrer"
              className={`${isOpen ? "" : "translate-y-96"} transition-all delay-[0ms] duration-500 ease-in`}
            >
              <img src="image/white/timetable.png" alt="timetable" className="h-12" />
            </a>
            <a
              href="./circle"
              rel="noopener noreferrer"
              className={`${isOpen ? "" : "translate-y-96"} transition-all delay-[25ms] duration-500 ease-in`}
            >
              <img src="image/white/circle.png" alt="circle" className="h-12" />
            </a>
            <a
              href="./access"
              rel="noopener noreferrer"
              className={`${isOpen ? "" : "translate-y-96"} transition-all delay-[50ms] duration-500 ease-in`}
            >
              <img src="image/white/access.png" alt="access" className="h-12" />
            </a>
            <a
              href="./staff"
              rel="noopener noreferrer"
              className={`${isOpen ? "" : "translate-y-96"} transition-all delay-[75ms] duration-500 ease-in`}
            >
              <img src="image/white/staff.png" alt="staff" className="h-12" />
            </a>
            <div className="flex flex-col items-center justify-center space-y-4">
              <div
                className={`${
                  isOpen ? "" : "translate-y-96"
                } text-[22px] font-light text-white  transition-all delay-[100ms] duration-500 ease-in`}
              >
                SHARE
              </div>
              <a
                href="https://twitter.com/"
                rel="noopener noreferrer"
                className={`${isOpen ? "" : "translate-y-96"} transition-all delay-[125ms] duration-500 ease-in`}
              >
                <FiTwitter size="48px" color="white" className="stroke-1" />
              </a>
              <a
                href="https://instagram.com/"
                rel="noopener noreferrer"
                className={`${isOpen ? "" : "translate-y-96"} transition-all delay-[150ms] duration-500 ease-in`}
              >
                <FiInstagram size="48px" color="white" className="stroke-1" />
              </a>
              <a
                href="share"
                rel="noopener noreferrer"
                className={`${isOpen ? "" : "translate-y-96"} transition-all delay-[175ms] duration-500 ease-in`}
              >
                <FiShare2 size="48px" color="white" className="stroke-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="m-2 flex h-14 w-14 flex-none items-center justify-center">
        <Button toggled={isOpen} toggle={setOpen} color="#000000" />
      </div>
    </div>
  );
};

export default Menu;
