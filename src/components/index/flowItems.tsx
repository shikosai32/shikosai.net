import { ReactNode } from "react";

type FlowItem = {
  id: string;
  title: "timetable" | "circle" | "access" | "staff";
  subtitle: string;
  description: ReactNode;
};

const flowItems: FlowItem[] = [
  {
    id: "timetable",
    title: "timetable",
    subtitle: "-タイムテーブル-",
    description: (
      <>
        茨香祭を最高に楽しむ為に、
        <br />
        まずはここをチェック。
      </>
    ),
  },
  {
    id: "circle",
    title: "circle",
    subtitle: "-サークル-",
    description: "茨香祭を彩る、最高のメンバーをご紹介。",
  },
  {
    id: "access",
    title: "access",
    subtitle: "-アクセス-",
    description: (
      <>
        こんなに楽しそうなフェスティバル、
        <br />
        一体どこで開いているのだろう？
      </>
    ),
  },
  {
    id: "staff",
    title: "staff",
    subtitle: "-スタッフ-",
    description: "茨香祭を支える、最高のメンバーをご紹介。",
  },
];

export default flowItems;
