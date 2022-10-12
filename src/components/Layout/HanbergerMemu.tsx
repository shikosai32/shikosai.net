import { useState } from "react";
import type { NextPage } from "next";
import { FiTwitter, FiShare2 } from "react-icons/fi";
import { Spin as Button } from "hamburger-react";
import Link from "next/link";
import { FaLine } from "react-icons/fa";

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
          <div className="relative flex h-full w-full items-center justify-between py-2 pl-6 pr-2">
            <div className="flex items-center space-x-1">
              <span className="font-extrabold text-white">The</span>
              <img src="image/white/logo.png" alt="logo" className="h-10 w-10 border-[2px] border-white" />
              <span className="font-extrabold text-white">32nd.</span>
            </div>
            <div className="m-2 flex h-14 w-14 flex-none items-center justify-center">
              <Button toggled={isOpen} toggle={setOpen} color="#ffffff" />
            </div>
          </div>
        </div>

        <div className="h-[calc(100vh_-_5rem)] w-full overflow-y-auto py-10">
          <div className="flex flex-col items-center justify-center space-y-10">
            <Link href="/timetable">
              <a
                rel="noopener noreferrer"
                className={`${isOpen ? "" : "translate-y-96"} transition-all delay-[0ms] duration-500 ease-in`}
              >
                <img src="image/white/timetable.png" alt="timetable" className="h-12" />
              </a>
            </Link>
            <Link href="/circle">
              <a
                rel="noopener noreferrer"
                className={`${isOpen ? "" : "translate-y-96"} transition-all delay-[25ms] duration-500 ease-in`}
              >
                <img src="image/white/circle.png" alt="circle" className="h-12" />
              </a>
            </Link>
            <Link href="/access">
              <a
                rel="noopener noreferrer"
                className={`${isOpen ? "" : "translate-y-96"} transition-all delay-[50ms] duration-500 ease-in`}
              >
                <img src="image/white/access.png" alt="access" className="h-12" />
              </a>
            </Link>
            <Link href="/staff">
              <a
                rel="noopener noreferrer"
                className={`${isOpen ? "" : "translate-y-96"} transition-all delay-[75ms] duration-500 ease-in`}
              >
                <img src="image/white/staff.png" alt="staff" className="h-12" />
              </a>
            </Link>
            <div className="flex flex-col items-center justify-center space-y-4">
              <p
                className={`${
                  isOpen ? "" : "translate-y-96"
                } text-[22px] font-light text-white  transition-all delay-[100ms] duration-500 ease-in`}
              >
                SHARE
              </p>
              <a
                href="https://twitter.com/share?text=茨香祭について確認しよう!%0D%0A&url=https://32.shikosai.net&hashtags=shikosai32"
                rel="noopener noreferrer"
                target="_blank"
                className={`${isOpen ? "" : "translate-y-96"} transition-all delay-[125ms] duration-500 ease-in`}
              >
                <FiTwitter size="48px" color="white" className="stroke-1" />
              </a>
              <a
                href="http://line.me/R/msg/text/?茨香祭について確認しよう!%0D%0Ahttps://32.shikosai.net"
                rel="noopener noreferrer"
                target="_blank"
                className={`${isOpen ? "" : "translate-y-96"} transition-all delay-[150ms] duration-500 ease-in`}
              >
                <FaLine size="48px" color="white" className="stroke-1" />
              </a>
              <div className={`${isOpen ? "" : "translate-y-96"} transition-all delay-[175ms] duration-500 ease-in`}>
                <FiShare2
                  size="48px"
                  color="white"
                  className="stroke-1"
                  onClick={(event) => {
                    event.preventDefault();
                    if (navigator.share) {
                      navigator.share({
                        title: "第32回茨香祭公式ホームページ - 茨城工業高等専門学校",
                        text: "茨香祭について確認しよう",
                        url: "https://32.shikosai.net",
                      });
                    }
                  }}
                />
              </div>
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
