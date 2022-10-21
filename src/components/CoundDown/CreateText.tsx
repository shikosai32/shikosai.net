import type { FC } from "react";
import { CreateTextProps } from "./type/model";

const CreateText: FC<CreateTextProps> = ({ status }) => {
  switch (status) {
    case "before":
      return <span>Until shikosai is held...</span>;

    case "first":
      return (
        <>
          <span>1st Day In Progress!!</span>
          <span>Until the end of the 1st day...</span>
        </>
      );

    case "middle":
      return (
        <>
          <span>Day 1 Has Ended.</span>
          <span>Until the 2nd day is held...</span>
        </>
      );

    case "second":
      return (
        <>
          <span>2nd Day In Session!!</span>
          <span>Until the end of the 2nd day...</span>
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
