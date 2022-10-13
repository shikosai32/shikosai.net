import type { NextPage } from "next";
import Layout from "~/components/Layout/Layout";

const NotFound: NextPage = () => (
  <Layout PageTitle="404 Not Found - shikosai32">
    <img src="image/404/mac.png" alt="404 Not Found" className="mx-auto mt-20 mb-8 w-3/5 md:w-2/5" />
    <div className="font-montserrat text-6xl italic md:flex md:justify-center md:space-x-6">
      <h1 className="relative text-center font-semibold md:flex-initial md:after:absolute md:after:ml-3 md:after:mr-3 md:after:mt-[7.25%] md:after:h-3/4 md:after:w-[2px] md:after:bg-black md:after:content-['']">
        404
      </h1>
      <p className="text-center md:flex-initial">Not Found</p>
    </div>
  </Layout>
);

export default NotFound;
