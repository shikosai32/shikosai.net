import dynamic from "next/dynamic";
import { FC } from "react";

type Props = { Contents: boolean };

const BackContent: FC<Props> = ({ Contents }) => {
  const CountDown = dynamic(() => import("components/CountDown"), { ssr: false });
  return (
    <div className={`${Contents ? "block" : "hidden"} font-roboto_serif h-full w-full -z-10 fixed top-0`}>
      <div className="h-full w-full hidden md:block">
        <div className="h-full w-[90%] flex-col flex justify-center items-center">
          <div className="h-32 flex items-center w-full">
            <div className="basis-1/2 h-full border-r-2 border-black flex justify-center items-center">
              <img src="image/black/shikosai.png" alt="shikosai" className="h-[90%]" />
            </div>
            <div className="basis-1/2 h-full border-l-2 px-16 border-black">
              <div className="flex flex-col items-start justify-center h-full">
                <div className="underline underline-offset-4 decoration-1">
                  <span className="text-3xl font-medium">2022/10/22</span>
                  <span className="text-base">(Sat.)</span>
                  <span className="text-3xl font-medium"> - 2022/10/23</span>
                  <span className="text-base">(Sun.)</span>
                </div>
                <div className="text-lg">National Institute of Technology (KOSEN),</div>
                <div className="text-lg">Ibaraki Colloge</div>
              </div>
            </div>
          </div>
          <div className="h-40 flex items-end">
            <CountDown />
          </div>
        </div>
      </div>

      <div className="h-full w-full pt-20 md:hidden ">
        <div className="h-full w-full flex flex-col justify-center items-center">
          <img src="image/black/shikosai.png" alt="shikosai" className="w-[70vw] mb-16" />
          <div className="flex flex-col items-center justify-center">
            <span className="text-3xl">
              2022/10/22 <span className="text-base">(Sat.)</span>
            </span>
            <svg
              viewBox="0 0 10 10"
              height="0.7rem"
              fill="none"
              strokeWidth="0"
              color="black"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeWidth="1" d="M4,0 l0,10 1,0 0,-10" />
            </svg>
            <span className="text-3xl">
              2022/10/23<span className="text-base">(Sun.)</span>
            </span>
          </div>
          <div className="w-[80vw] flex flex-col items-center justify-center px-[3vw] py-[5vw] border-b-[1.5px] border-black">
            <span className="text-xs">National Institute of Technology (KOSEN),</span>
            <span className="text-xs">Ibaraki Colloge</span>
          </div>
          <div className="py-14 ">
            <CountDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackContent;
