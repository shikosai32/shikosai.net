import moment from "moment";
import { FC, useState } from "react";

const Time: FC = () => {
  const shikosaiTime = moment("2022-10-22T10:00");
  const diff = shikosaiTime.diff(moment());
  const [time, setTime] = useState(diff);
  const dura = moment.duration(time + 1000);
  setInterval(() => {
    setTime(shikosaiTime.diff(moment()));
  }, 1000);
  return (
    <div className="flex flex-col items-center justify-center font-light">
      <span className="hidden text-4xl underline decoration-2 underline-offset-8 md:block">
        {dura.days()}Days | {dura.hours()}Hours | {dura.minutes()}Minutes | {dura.seconds()}Seconds
      </span>
      <span className="text-xl md:hidden">{dura.days()}Days</span>
      <span className="text-xl md:hidden">
        {dura.hours()}Hours | {dura.minutes()}Minutes | {dura.seconds()}Seconds
      </span>
    </div>
  );
};

export default Time;
