import { FC, useState } from "react";
import Link from "next/link";
import Modal from "react-modal";
import { MdOutlineLocationOn } from "react-icons/md";

export type CircleItemProps = {
  orgName: string;
  circleName: string;
  place: string;
  description: string;
  aboutCircle: string;
  circleImgPath: string;
  mapImgPath: string;
};

const modalStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.3)",
  },

  content: {
    top: "55%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "90%",
    height: "80%",
    transform: "translate(-50%, -50%)",
  },
};

const CardModal: FC<CircleItemProps> = (props) => {
  const { orgName, circleName, place, description, aboutCircle, circleImgPath, mapImgPath } = props;
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);

  const urlPattern = /https?:\/\/[\w!?/+\-_~;.,*&@#$%=']+/gim;

  // リンクは一つと仮定する
  const links = description.match(urlPattern);
  const descriptionContent = description.split(urlPattern);

  return (
    <div className="mx-auto my-4 w-[95%] border-2 border-black font-noto-serif-jp md:mx-[2.5%] md:w-[45%] lg:mx-[1.5%] lg:w-[30%]">
      <div className="flex h-44 items-start justify-center bg-gray-300">
        {circleImgPath ? (
          <img className="pt-auto max-h-44" src={circleImgPath} alt={circleName} />
        ) : (
          <span className="my-auto">{circleName}</span>
        )}
      </div>
      <div className="mx-4">
        <h3 className="mt-4 text-center text-xl">{circleName}</h3>
        <p className="mb-3 mr-8 text-right">by {orgName}</p>
        <p className="mb-6">
          {links ? (
            <>
              {descriptionContent[0]}
              <Link href={links[0]}>
                <a target="_blank" rel="noopener noreferrer">
                  {links[0]}
                </a>
              </Link>
              {descriptionContent[1]}
            </>
          ) : (
            description
          )}
        </p>
        <p className="mb-4 text-center">@{place}</p>
        <div className="flex justify-center">
          <button
            type="button"
            className="mb-4 inline-block flex items-center rounded-lg border-2 border-solid border-black px-4 py-2"
            onClick={openModal}
          >
            詳細 & Map
            <MdOutlineLocationOn className="ml-1 text-2xl" />
          </button>
        </div>
      </div>
      <Modal isOpen={isOpenModal} onRequestClose={closeModal} style={modalStyles}>
        <button type="button" onClick={closeModal}>
          <span className="text-3xl">×</span>
        </button>
        <div className="text-center">
          <div className="mb-2 flex flex-col justify-evenly md:mx-10 md:flex-row">
            <div className="my-4">
              {circleImgPath && <img className="pt-auto mx-auto max-h-52" src={circleImgPath} alt={circleName} />}
            </div>
            <div className="mt-2 text-center md:mx-10">
              <h2 className="text-3xl">{circleName}</h2>
              <h4 className="text-lg">
                {orgName} @{place}
              </h4>
              <p className="my-4">
                {links ? (
                  <>
                    {descriptionContent[0]}
                    <Link href={links[0]}>
                      <a target="_blank" rel="noopener noreferrer">
                        {links[0]}
                      </a>
                    </Link>
                    {descriptionContent[1]}
                  </>
                ) : (
                  description
                )}
              </p>
              {aboutCircle && (
                <div className="mt-6">
                  <h3 className="mb-2 text-lg font-semibold">サークルについて</h3>
                  <p>{aboutCircle}</p>
                </div>
              )}
            </div>
          </div>
          <h3 className="mt-6 mb-2 text-2xl font-semibold">マップ</h3>
          <p>{place}</p>
          <img className="mx-auto" src={mapImgPath} alt={circleName} />
        </div>
      </Modal>
    </div>
  );
};

export default CardModal;
