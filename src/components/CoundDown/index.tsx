import moment from "moment";
import type { FC } from "react";
import CreateText from "./CreateText";
import useDiffTime from "./hooks/useDiffTime";

const Time: FC = () => {
  const { status, time } = useDiffTime();
  const dura = moment.duration(time);

  return (
    <div className="flex flex-col items-center justify-center text-xl font-light md:text-3xl">
      <CreateText status={status} />
      {status !== "finish" && (
        <span className="mt-5 md:text-4xl">
          {dura.hours()}Hours | {dura.minutes()}Minutes | {dura.seconds()}Seconds
        </span>
      )}
    </div>
  );
};

export default Time;
