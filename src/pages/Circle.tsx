import type { NextPage } from "next";

type CircleList = {
  name: string;
  imgPath: string;
  description: string;
  about: string;
};
type Props = { circles: CircleList[] };

const CirclePage: NextPage<Props> = (Props) => {
  const { circles } = Props;
  return <div>{circles}</div>;
};
export default CirclePage;
