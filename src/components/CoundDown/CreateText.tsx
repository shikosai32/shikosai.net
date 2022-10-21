import type { FC } from "react";
import { CreateTextProps } from "./type/model";

const CreateText: FC<CreateTextProps> = ({ status }) => {
  switch (status) {
    case "before":
      return <span>Until Shikosai Is Held...</span>;

    case "first":
      return (
        <>
          <span>1st Day In Progress!!</span>
          <span>Until The End Of The 1st Day...</span>
        </>
      );

    case "middle":
      return (
        <>
          <span>Day 1 Has Ended.</span>
          <span>Until The 2nd Day Is Held...</span>
        </>
      );

    case "second":
      return (
        <>
          <span>2nd Day In Session!!</span>
          <span>Until The End Of The 2nd Day...</span>
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
