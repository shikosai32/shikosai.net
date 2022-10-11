import type { FC } from "react";

export type TableItemProps = {
  eventTitle: string;
  description: string;
  // 開始時刻と終了時刻
  // そのまま描画するのでhh:mmで統一
  start: string;
  end: string;
};

type Props = TableItemProps & {
  color: "primary" | "secondary";
};

const TableItem: FC<Props> = (props) => {
  const { eventTitle, description, start, end, color } = props;

  return (
    <div
      className={`relative my-10 rounded-3xl border-4 bg-white lg:my-6 lg:border-2 ${
        color === "primary" ? "border-primary" : "border-secondary"
      }`}
    >
      <p className="px-4 pt-6 pb-4 text-center font-noto-serif-jp lg:pt-4">{description}</p>
      <div
        className={`absolute -top-8 right-0 left-0 mx-auto flex w-[85%] flex-col rounded-md text-center text-white lg:-top-4 lg:flex-row lg:justify-around lg:rounded-none ${
          color === "primary" ? "bg-primary" : "bg-secondary"
        }`}
      >
        <p className="font-montserrat">
          {start} ~ {end}
        </p>
        <h3 className="font-noto-serif-jp">{eventTitle}</h3>
      </div>
    </div>
  );
};

export default TableItem;
