import { ReactNode } from "react";

type DepartmentItem = {
  id: string;
  department:
    | "本部・渉外部"
    | "器材部"
    | "デザイン部・装飾部"
    | "サークル運営部"
    | "情報部"
    | "会計部"
    | "イベント企画部";
  description: ReactNode;
};

const departmentItems: DepartmentItem[] = [
  {
    id: "本部・渉外部",
    department: "本部・渉外部",
    description: "本部・渉外部では...",
  },
  {
    id: "器材部",
    department: "器材部",
    description: "器材部では...",
  },
  {
    id: "デザイン部・装飾部",
    department: "デザイン部・装飾部",
    description: "デザイン部・装飾部では...",
  },
  {
    id: "サークル運営部",
    department: "サークル運営部",
    description: "サークル運営部では...",
  },
  {
    id: "情報部",
    department: "情報部",
    description: "情報部では...",
  },
  {
    id: "会計部",
    department: "会計部",
    description: "会計部では...",
  },
  {
    id: "イベント企画部",
    department: "イベント企画部",
    description: "イベント企画部では...",
  },
];

export default departmentItems;
