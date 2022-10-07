import { useEffect, useState } from "react";
import type { FC } from "react";
import { FiTwitter, FiShare2 } from "react-icons/fi";
import { FaLine } from "react-icons/fa";
import type { SideProps } from "./type/model";

const ScrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Right: FC = () => {
  const [top, setTop] = useState(false);

  useEffect(() => {
    const screen = window.screen.height / 2;
    window.addEventListener(
      "scroll",
      () => {
        setTop(window.scrollY > screen);
      },
      false,
    );
  });

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-around">
      <div>
        <p className="w-[5vw] rotate-90 text-xl ">SHARE:</p>
        <ul className="mt-12 flex list-none flex-col items-center space-y-3">
          <li>
            <a
              href="https://twitter.com/share?text=茨香祭について確認しよう!%0D%0A&url=https://32.shikosai.net&hashtags=shikosai32"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FiTwitter size="min(3vw,55px)" color="black" className="stroke-1" />
            </a>
          </li>

          <li>
            <a
              href="http://line.me/R/msg/text/?茨香祭について確認しよう!%0D%0A&url=https://32.shikosai.net"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLine size="min(3vw,50px)" color="black" className="stroke-1" />
            </a>
          </li>

          <li>
            <a href="share" rel="noopener noreferrer">
              <FiShare2 size="min(3vw,50px)" color="black" className="stroke-1" />
            </a>
          </li>
        </ul>
      </div>
      <div
        className={`${
          top ? "block animate-[display_0.5s_forwards]" : "animate-[hide_0.5s_forwards]"
        } absolute bottom-0 flex h-36 flex-col items-center justify-start`}
        onClick={top ? ScrollTop : () => {}}
        onKeyDown={ScrollTop}
        role="presentation"
      >
        <div className="w-[5vw] rotate-90 text-2xl">
          <svg
            viewBox="0 0 130 24"
            fill="none"
            strokeWidth="0"
            color="black"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            height="1.75rem"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8,3 l 0,16" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20,4 l -7,7 7,7" />
            <text x="28" y="17.5" className="" fill="black" fontSize="18">
              PAGE TOP
            </text>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M0,22 l 129,0" />
            <circle cx="128" cy="22" r="2" fill="black" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const Left: FC = () => <div />;

const Side: FC<SideProps> = ({ children }) => (
  <div className="h-full w-full">
    <div className="hidden h-full w-full md:block ">
      <div className="flex h-full w-full">
        <div className="sticky top-20 h-[calc(100vh_-_5rem)] basis-[5.0%] ">
          <Left />
        </div>
        <div className="basis-[90.0%]">{children}</div>
        <div className="sticky top-20 h-[calc(100vh_-_5rem)] basis-[5%] ">
          <Right />
        </div>
      </div>
    </div>
    <div className=" h-full w-full md:hidden">{children}</div>
  </div>
);

export default Side;
