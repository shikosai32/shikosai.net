import { ReactNode } from "react";

export interface LayoutInformation {
  PageTitle: string;
  PageDescription: string;
  PageImage: string;
}

export type LayoutProps = {
  PageTitle: string;
  PageDescription?: string;
  PageImage?: string;
  children: ReactNode;
};

export type SideProps = { children: ReactNode };
