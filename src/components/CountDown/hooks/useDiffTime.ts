import moment from "moment";
import { useState } from "react";
import { OutputType, StatusType, TargetType } from "../type/model";

const nextData = (nowTarget: TargetType): [TargetType, StatusType] => {
  switch (nowTarget) {
    case "2022-10-22T10:00":
      return ["2022-10-22T18:00", "first"];
    case "2022-10-22T18:00":
      return ["2022-10-23T9:00", "middle"];
    case "2022-10-23T9:00":
      return ["2022-10-23T14:00", "second"];
    default:
      return ["finish", "finish"];
  }
};

const useDiffTime = (): OutputType => {
  const [targetTime, setTargetTime] = useState<TargetType>("2022-10-22T10:00");
  const [status, setStatus] = useState<StatusType>("before");
  const [time, setTime] = useState<number | undefined>(moment("2022-10-22T10:00").diff(moment()));

  const targetMoment = moment(targetTime);

  const Id = setInterval(() => {
    const diff = targetMoment.diff(moment());
    if (diff < 0) {
      const [nextTarget, nextStatus] = nextData(targetTime);
      setStatus(nextStatus);
      if (nextStatus === "finish") {
        setTime(undefined);
        clearInterval(Id);
      } else {
        setTargetTime(nextTarget);
      }
    } else {
      setTime(diff + 1000);
    }
  }, 1000);

  return {
    status,
    time,
  };
};

export default useDiffTime;
