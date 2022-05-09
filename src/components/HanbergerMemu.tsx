import { Dispatch, FC, SetStateAction, useState } from "react";
import { Spin as BergerButton } from "hamburger-react";
import { FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";

type BCProps = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const HunbergerContentSM: FC<BCProps> = ({ isOpen, setOpen }) => (
  <div className="md:hidden">
    <div
      className={`${
        isOpen ? "" : "translate-x-full"
      } pl-1/10 bg-black h-screen w-screen z-10 text-center transition-all duration-500 ease-burgerMenu fixed top-0 overflow-auto `}
    >
      <div className="bg-black sticky top-0 h-28 w-full z-20" />
      <ul className="lise-none">
        <li
          className={`${
            isOpen ? "" : "translate-y-96"
          } mt-10 mb-16 h-10 w-full transition-all duration-500 ease-in delay-0 flex items-center relative`}
        >
          <a href="circle" rel="noopener noreferrer" className="h-full">
            <img src="svg/white/circle.svg" alt="" className=" h-full" />
          </a>
          <span className="h-0.5 w-16 bg-white absolute left-0 -bottom-8" />
        </li>

        <li
          className={`${
            isOpen ? "" : "translate-y-96"
          } mb-16 h-10 w-full transition-all duration-500 ease-in delay-25 flex items-center relative`}
        >
          <a href="serch" rel="noopener noreferrer" className="h-full">
            <img src="svg/white/serch.svg" alt="" className=" h-full" />
          </a>
          <span className="h-0.5 w-32 bg-white absolute left-0 -bottom-8" />
        </li>

        <li
          className={`${
            isOpen ? "" : "translate-y-96"
          } mb-16 h-10 w-full transition-all duration-500 ease-in delay-50 flex items-center relative`}
        >
          <a href="access" rel="noopener noreferrer" className="h-full">
            <img src="svg/white/access.svg" alt="" className=" h-full" />
          </a>
          <span className="h-0.5 w-48 bg-white absolute left-0 -bottom-8" />
        </li>

        <li
          className={`${
            isOpen ? "" : "translate-y-96"
          } mb-16 h-10 w-full transition-all duration-500 ease-in delay-75 flex items-center relative`}
        >
          <a href="timetable" rel="noopener noreferrer" className="h-full">
            <img src="svg/white/timetable.svg" alt="" className=" h-full" />
          </a>
          <span className="h-0.5 w-64 bg-white absolute left-0 -bottom-8" />
        </li>

        <li
          className={`${
            isOpen ? "" : "translate-y-96"
          } mb-8 h-5 w-full transition-all duration-500 ease-in delay-100 flex items-center relative`}
        >
          <img src="svg/white/official_sns_account.svg" alt="" className=" h-full" />
        </li>

        <li
          className={`${
            isOpen ? "" : "translate-y-96"
          } mb-8 h-5 w-full transition-all duration-500 ease-in delay-125 flex items-center relative`}
        >
          <div className="h-10 flex items-center space-x-8">
            <a href="twitter" rel="noopener noreferrer">
              <FaTwitter size="2.5rem" color="white" />
            </a>
            <a href="instagram" rel="noopener noreferrer">
              <FaInstagram size="2.5rem" color="white" />
            </a>
            <a href="YouTube" rel="noopener noreferrer">
              <FaYoutube size="2.5rem" color="white" />
            </a>
          </div>
        </li>

        <li
          className={`${
            isOpen ? "" : "translate-y-96"
          } mb-8 h-5 w-full transition-all duration-500 ease-in delay-150 flex items-center relative`}
        >
          <img src="svg/white/nitic_website.svg" alt="" className="h-full" />
        </li>

        <li
          className={`${
            isOpen ? "" : "translate-y-96"
          } mb-8 h-10 w-full transition-all duration-500 ease-in delay-175 flex items-center relative text-white text-xs`}
        >
          <a href="htt" rel="noopener noreferrer" className="flex h-10 items-center">
            <BsGlobe size="2.5rem" color="white" className="mr-2" />
            National Institute of Technology, Ibaraki College
          </a>
        </li>
      </ul>
    </div>

    <div className="flex flex-row-reverse relative items-center h-32  px-2 pt-12 pb-2 bg-white">
      <div className="flex items-center justify-center flex-none h-14 w-14 m-2 z-30 place-items-center">
        <BergerButton toggled={isOpen} toggle={setOpen} color={isOpen ? "#ffffff" : "#000000"} />
      </div>
      <div className="h-full flex flex-1 item-center justify-center z-30">
        <div className="flex flex-row items-center space-x-1">
          <img src="image/ampanman.jpg" alt="" className="h-10 w-10 rounded-full " />
          <img
            src={`svg/${isOpen ? "white/shikosai_no32.svg" : "black/shikosai_no32.svg"}`}
            alt="shikosai_no.32"
            className="h-1/3"
          />
        </div>
      </div>
    </div>
  </div>
);

const HunbergerContentBG: FC = () => (
  <div className="hidden md:block">
    <div className="flex items-center h-full space-x-3">
      <img src="svg/black/shikosai_no32.svg" alt="" className="w-1/3" />
      <div className="grid grid-cols-2 gap-2 h-full">
        <div className="bg-gray-100 h-8 flex items-center">
          <img src="svg/black/timetable.svg" alt="" className="h-full" />
        </div>
        <div className="bg-gray-100 h-8">hoge</div>
        <div className="bg-gray-200 h-8">hoge</div>
        <div className="bg-gray-200 h-8">hoge</div>
      </div>
    </div>
  </div>
);

const BurgerMenu = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="h-full w-full">
      <HunbergerContentSM isOpen={isOpen} setOpen={setOpen} />
      <HunbergerContentBG />
    </div>
  );
};

export default BurgerMenu;
