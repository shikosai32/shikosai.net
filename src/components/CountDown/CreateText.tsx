import type { FC } from "react";
import { CreateTextProps } from "./type/model";

const CreateText: FC<CreateTextProps> = ({ status }) => {
  switch (status) {
    case "before":
      return <span>Until Shikosai Is Held...</span>;

    case "first":
      return (
        <>
          <span>Day 1 In Progress!!</span>
          <span>Until The End Of Day 1 ...</span>
        </>
      );

    case "middle":
      return (
        <>
          <span>Day 1 Has Ended.</span>
          <span>Until Day 2 Is Held...</span>
        </>
      );

    case "second":
      return (
        <>
          <span>Day 2 In Session!!</span>
          <span>Until The End Of Day 2 ...</span>
        </>
      );

    default:
      return (
        <>
          <span>The Event Has Ended.</span>
          <span>Thank You For Your Participation!</span>
        </>
      );
  }
};

export default CreateText;
