import type { FC } from "react";
import About from "~/components/Layout/footer/About";
import Contents from "~/components/Layout/footer/Contents";
import SNS from "~/components/Layout/footer/SNS";
import Site from "~/components/Layout/footer/Site";
import Sponsor from "~/components/Layout/footer/Sponsor";
import Privacy from "~/components/Layout/footer/Privacy";

const Footer: FC = () => (
  <footer className="w-full bg-black p-5 font-montserrat text-white">
    <div className="flex flex-col-reverse justify-around lg:flex-row">
      <About />
      <div className="items-start justify-evenly md:flex md:flex-row">
        <Contents />
        <div className="md:px-5">
          <SNS />
          <Site />
        </div>
        <Sponsor />
      </div>
    </div>
    <Privacy />
  </footer>
);

export default Footer;
