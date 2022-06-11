import { FC, ReactNode, useEffect, useState } from "react";
import { FiTwitter, FiInstagram, FiShare2 } from "react-icons/fi";

type Props = { children: ReactNode };

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
    <div className="flex flex-col justify-around items-center h-full w-full font-roboto_serif relative">
      <div>
        <div className="rotate-90 text-xl w-[5vw] ">SHARE:</div>
        <div className="mt-12 flex flex-col items-center space-y-3">
          <a href="https://twitter.com/" rel="noopener noreferrer">
            <FiTwitter size="min(3vw,55px)" color="black" className="stroke-1" />
          </a>

          <a href="https://instagram.com/" rel="noopener noreferrer">
            <FiInstagram size="min(3vw,50px)" color="black" className="stroke-1" />
          </a>
          <a href="share" rel="noopener noreferrer">
            <FiShare2 size="min(3vw,50px)" color="black" className="stroke-1" />
          </a>
        </div>
      </div>
      <div
        className={`${
          top ? "block animate-[display_0.5s_forwards]" : "animate-[hide_0.5s_forwards]"
        } flex flex-col justify-start items-center h-36 absolute bottom-0`}
        onClick={top ? ScrollTop : () => {}}
        onKeyDown={ScrollTop}
        role="presentation"
      >
        <div className="rotate-90 text-2xl w-[5vw]">
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

const Side: FC<Props> = ({ children }) => (
  <div className="w-full h-full">
    <div className="w-full h-full hidden md:block ">
      <div className="flex w-full h-full">
        <div className="basis-[5.0%] h-[calc(100vh_-_5rem)] sticky top-20 ">
          <Left />
        </div>
        <div className="basis-[90.0%]">{children}</div>
        <div className="basis-[5%] h-[calc(100vh_-_5rem)] sticky top-20 ">
          <Right />
        </div>
      </div>
    </div>
    <div className=" w-full h-full md:hidden">{children}</div>
  </div>
);

export default Side;
