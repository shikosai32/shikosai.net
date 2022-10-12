import type { FC } from "react";

const Info: FC = () => (
  <div className="relative">
    <h2 className="mb-6 text-center font-montserrat text-3xl font-semibold uppercase md:mb-12 md:text-6xl">
      Information
    </h2>
    <div className="absolute top-12 right-0 left-0 mx-auto h-[2px] w-4/5 bg-black before:absolute before:top-[-3px] before:-left-1 before:h-2 before:w-2 before:rounded-full before:bg-black before:content-[''] after:absolute after:top-[-3px] after:-right-1 after:h-2 after:w-2 after:rounded-full after:bg-black after:content-[''] md:top-20" />
    <p className="mx-auto w-5/6 text-center font-noto-serif-jp md:text-xl">
      事前予約は終了しました。多数のお申込ありがとうございました。
    </p>
  </div>
);

export default Info;
