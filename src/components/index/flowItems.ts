type FlowItem = {
  title: "timetable" | "circle" | "access" | "staff";
  subtitle: string;
  description: string;
};

const flowItems: FlowItem[] = [
  {
    title: "timetable",
    subtitle: "-タイムテーブル-",
    description: "茨香祭を最高に楽しむ為に、\nまずはここをチェック。",
  },
  {
    title: "circle",
    subtitle: "-サークル-",
    description: "茨香祭を彩る、最高のメンバーをご紹介。",
  },
  {
    title: "access",
    subtitle: "-アクセス-",
    description: "こんなに楽しそうなフェスティバル、\n一体どこで開いているのだろう？",
  },
  {
    title: "staff",
    subtitle: "-スタッフ-",
    description: "茨香祭を支える、最高のメンバーをご紹介。",
  },
];

export default flowItems;
