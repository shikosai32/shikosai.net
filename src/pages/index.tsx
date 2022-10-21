import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Layout from "~/components/Layout/Layout";
import Info from "~/components/index/Info";
import Flow from "~/components/index/Flow";
import Caution from "~/components/index/Caution";

const Home: NextPage = () => {
  const CountDown = dynamic(() => import("~/components/CountDown"), { ssr: false });

  return (
    <Layout PageTitle="shikosai32">
      <div className="hidden w-full md:block">
        <div className="py-5">
          <div className="flex w-full items-end">
            <div className="basis-[55%]">
              <img src="image/logo/logo.jpeg" alt="shikosai" className="w-full" />
            </div>
            <div className="basis-[45%]">
              <img src="image/black/background.png" alt="shikosai" className="basis-1/2" />
            </div>
          </div>
          <div className="w-full">
            <CountDown />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center px-10 pb-10 md:hidden">
        <img src="image/logo/logo.jpeg" alt="shikosai" className="w-full" />
        <div className="flex w-[80%] flex-col items-center justify-center border-b-2 border-black pt-5 pb-3 text-3xl">
          <p className="font-bold">
            2022.10.22<span className="text-sm font-normal">(Sat.)</span>
          </p>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="0"
            color="black"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            height="1rem"
          >
            <path strokeWidth="5" d="M12,0 l 0,24" />
          </svg>
          <p className="font-bold">
            2022.10.23<span className="text-sm font-normal">(Sun.)</span>
          </p>
        </div>
        <div className="w-full pt-2">
          <CountDown />
        </div>
      </div>
      <div className="md:mt-20">
        <Info />
      </div>
      <div className="mt-24 hidden w-full md:block">
        <Flow />
      </div>
      <div className="mt-10 mb-6 w-full md:mt-24">
        <Caution />
      </div>
    </Layout>
  );
};

export default Home;
