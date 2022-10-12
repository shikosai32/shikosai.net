import type { FC } from "react";
import { useState } from "react";
import Image from "next/image";
import Modal from "react-modal";

type Props = {
  org: string;
  title: string;
  placement: string;
  imgPath: string;
  description: string;
  about: string;
  map: string;
};
const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.3)",
  },

  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "80%",
    height: "75%",
    transform: "translate(-50%, -50%)",
  },
};
const CardModal: FC<Props> = (props) => {
  const { title, imgPath, org, placement, description, about, map } = props;
  const [isOpenModal, setIsOpenModal] = useState(false);
  // モーダルを開ける処理
  const openModal = () => {
    setIsOpenModal(true);
  };

  // モーダルを閉じる処理
  const closeModal = () => {
    setIsOpenModal(false);
  };
  return (
    // TODO:responsive
    <div className="w-full p-1 md:w-1/5">
      <div className="min-h-full rounded border-2 border-black">
        {/* 組織 */}
        <p className="border-b-2 text-center text-sm">{org}</p>
        {/* 画像 */}
        <figure className="mb-0 inline-block  w-1/3 text-left md:block md:w-full">
          <Image src={imgPath} objectFit="contain" width="100%" height="100%" layout="responsive" className="" alt="" />
        </figure>
        <div className="mb-0 inline-block h-auto w-2/3 text-left align-top md:block md:w-full">
          {/* サークル名 */}
          <p className="whitespace-wrap pl-[4%] pt-[4%] text-sm font-semibold md:pt-0">{title}</p>
          {/* 場所 */}
          <p className="pl-[4%] text-xs">
            <span className="text-[10px]">@</span>
            {placement}
          </p>
          {/* モーダルボタン */}
          <div className="pt-[10%] pb-[5%] text-center md:py-[2%] ">
            <button type="button" className="rounded bg-black px-2 text-white " onClick={openModal}>
              詳細
            </button>
            <Modal isOpen={isOpenModal} onRequestClose={closeModal} style={customStyles}>
              <button type="button" onClick={closeModal}>
                <span className="text-3xl">×</span>
              </button>
              <div className="text-sm md:px-[calc(5%_+_10px)]">
                <span className="my-5 text-[12px]">
                  サークルについて
                  <p className="text-sm">{description}</p>
                </span>
                <p className="py-[2%]"> </p>
                <p className="text-sm">{about}</p>
                <p className="py-[2%]"> </p>
                <p className="pl-[2%] text-sm">{placement}</p>
                <Image
                  src={map}
                  objectFit="contain"
                  width="100%"
                  height="100%"
                  layout="responsive"
                  className=""
                  alt=""
                />
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
