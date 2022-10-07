import type { FC } from "react";

export type TableItemProps = {
  eventTitle: string;
  description: string;
  // 開始時刻と終了時刻
  // そのまま描画するのでhh:mmで統一
  start: string;
  end: string;
  // 10分単位でのイベント時間
  // 1時間 → 6 を指定
  time: number;
  isBlank: boolean;
};

type Props = TableItemProps & {
  // 10分あたりの高さ(rem)
  heightSize: number;
};

const TableItem: FC<Props> = (props) => {
  const { eventTitle, description, start, end, time, isBlank, heightSize } = props;

  if (isBlank)
    return (
      <div
        style={{
          height: `${heightSize * time + 0.5 * (time - 1)}rem`,
        }}
        className="mb-2"
      />
    );

  return (
    <div
      style={{
        minHeight: `${heightSize * time + 0.5 * (time - 1)}rem`,
        height: "auto",
      }}
      className="mb-2 rounded-lg bg-stone-600 p-4"
    >
      <h3 className="text-2xl	text-white">{eventTitle}</h3>
      <p className="text-white">{description}</p>
      <p className="text-right text-sm text-white">
        {start} ~ {end}
      </p>
    </div>
  );
};

export default TableItem;
