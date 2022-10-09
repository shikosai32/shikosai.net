import { ReactNode } from "react";

type DepartmentItem = {
  id: string;
  department:
    | "本部"
    | "渉外部"
    | "器材部"
    | "デザイン部"
    | "装飾部"
    | "サークル運営部"
    | "情報部"
    | "会計部"
    | "イベント企画部";
  description: ReactNode;
};

const departmentItems: DepartmentItem[] = [
  {
    id: "本部",
    department: "本部",
    description:
      "茨香祭の何でも屋！運営を務めております本部です！皆さんに楽しんでもらうため部署員一同、精魂込めて活動してまいりました茨香祭を是非お楽しみください！",
  },
  {
    id: "渉外部",
    department: "渉外部",
    description:
      "ひたちなか市内の企業を訪問して、茨香祭に協力してくれるスポンサーを集める部署です。身近な企業に感謝し、茨香祭を思いっきり楽しみましょう！",
  },
  {
    id: "器材部",
    department: "器材部",
    description: "器材部では...",
  },
  {
    id: "デザイン部",
    department: "デザイン部",
    description: "デザイン部では...",
  },
  {
    id: "装飾部",
    department: "装飾部",
    description: "その名の通り校内の装飾や看板の作成を行う部署です。ぜひ当日の装飾をご覧になってください！",
  },
  {
    id: "サークル運営部",
    department: "サークル運営部",
    description: "サークル運営部では...",
  },
  {
    id: "情報部",
    department: "情報部",
    description:
      "主にこのHPの作成を担当しています！メンバーが多忙な中なんとかサイトを公開できました。茨香祭当日はTwitterでステージの様子などをアップしていく予定なのでお楽しみに！",
  },
  {
    id: "会計部",
    department: "会計部",
    description:
      "各部署と協力して予算の管理をしたり、サークルに補助金を配ったりする部署です。表立って関わっていませんが、皆さんが茨香祭を充分に楽しめることを願っています！",
  },
  {
    id: "イベント企画部",
    department: "イベント企画部",
    description:
      "三年ぶりに開催される茨香祭！感染症が流行っている中でやれることは限られていますが、学生や一般の参加者楽しめるような企画を考えました。ぜひ立ち寄ってみてください！",
  },
];

export default departmentItems;
