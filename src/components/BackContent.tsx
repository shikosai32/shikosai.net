import dynamic from "next/dynamic";
import { FC } from "react";

type Props = { Contents: boolean };

const BackContent: FC<Props> = ({ Contents }) => {
  const CountDown = dynamic(() => import("~/components/CountDown"), { ssr: false });
  return (
    <div className={`${Contents ? "block" : "hidden"} fixed top-0 -z-10 h-full w-full font-roboto_serif`}>
      <div className="hidden h-full w-full md:block">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <div className="flex h-32 w-full items-center">
            <div className="flex h-full basis-1/2 items-center justify-center border-r-2 border-black">
              <img src="image/black/shikosai.png" alt="shikosai" className="h-[90%]" />
            </div>
            <div className="h-full basis-1/2 border-l-2 border-black px-16">
              <div className="flex h-full flex-col items-start justify-center">
                <div className="underline decoration-1 underline-offset-4">
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
          <div className="flex h-40 items-end">
            <CountDown />
          </div>
        </div>
      </div>

      <div className="h-full w-full pt-20 md:hidden ">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <img src="image/black/shikosai.png" alt="shikosai" className="mb-16 w-[70vw]" />
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
          <div className="flex w-[80vw] flex-col items-center justify-center border-b-[1.5px] border-black px-[3vw] py-[5vw]">
            <span className="text-xs">National Institute of Technology (KOSEN),</span>
            <span className="text-xs">Ibaraki Colloge</span>
          </div>
          <div className="py-14">
            <CountDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackContent;
