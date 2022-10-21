import moment from "moment";
import type { FC } from "react";
import CreateText from "./CreateText";
import useDiffTime from "./hooks/useDiffTime";

const Time: FC = () => {
  const { status, time } = useDiffTime();
  const dura = moment.duration(time);

  return (
    <div className="mt-2 flex flex-col items-center justify-center font-roboto-serif text-xl font-light md:text-3xl">
      <CreateText status={status} />
      {status !== "finish" && (
        <>
          <span className="mt-2 hidden md:block md:text-4xl">
            {dura.hours()}Hours | {dura.minutes()}Minutes | {dura.seconds()}Seconds
          </span>
          <span className="mt-2 md:hidden md:text-4xl">{dura.hours()}Hours</span>
          <span className="md:hidden md:text-4xl">
            {dura.minutes()}Minutes | {dura.seconds()}Seconds
          </span>
        </>
      )}
    </div>
  );
};

export default Time;
