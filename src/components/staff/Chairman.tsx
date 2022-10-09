import { FC } from "react";
import Card from "../Card";

const Chairman: FC = () => (
  <Card className="rounded-xl py-10">
    <p className="relative font-noto-serif-jp text-xl before:absolute before:top-16 before:h-[2px] before:w-full before:bg-gray-400 before:content-['']">
      実行委員長
      <br />
      佐藤鉄平
    </p>
    <p className="mt-12 font-noto-serif-jp">
      こんにちは、第32回茨香祭実行委員長のほげほげです。 今年の茨香祭のテーマは「Pop Up」です。
    </p>
  </Card>
);

export default Chairman;
