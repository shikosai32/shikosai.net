import { FC } from "react";
import Card from "../Card";

const Chairman: FC = () => (
  <Card className="rounded-xl py-10">
    <p className="relative font-noto-serif-jp text-xl before:absolute before:top-16 before:h-[2px] before:w-full before:bg-gray-400 before:content-['']">
      実行委員長
      <br />
      小平智也
    </p>
    <p className="mt-12 font-noto-serif-jp">
      今年度の茨香祭実行委員長を務めさせて頂いております、小平智也です。
      <br />
      さて！今年度で第32回を迎える本校の文化祭「茨香祭」も無事開催を迎えることが出来ました！
      <br />
      前回がオンライン開催だったこともあり、学生のほとんどが対面の茨香祭を知らない中、実行委員だけでなくクラスや同好会、部活のサークルも手探りで準備を進めてまいりました。
      <br />
      感染症対策や今までの茨香祭はどのようなものだったのか、どうすれば素晴らしい茨香祭に出来るのか。数々の壁を乗り越え必死の思いで開催に至った茨香祭を是非お楽しみください！
    </p>
  </Card>
);

export default Chairman;
