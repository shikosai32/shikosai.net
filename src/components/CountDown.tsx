import moment from "moment";
import { FC, useState } from "react";

const Time: FC = () => {
  const shikosaiTime = moment("2022-10-22");
  const diff = shikosaiTime.diff(moment());
  const [time, setTime] = useState(diff);
  const dura = moment.duration(time + 1000);
  setInterval(() => {
    setTime(shikosaiTime.diff(moment()));
  }, 1000);
  return (
    <div className=" flex flex-col justify-center items-center">
      <span className="text-4xl underline underline-offset-8 decoration-2 hidden md:block">
        {dura.months()}months | {dura.days()}days | {dura.hours()}hours | {dura.minutes()}minutes | {dura.seconds()}
        seconds
      </span>
      <span className="text-xl md:hidden">
        {dura.months()}months | {dura.days()}days | {dura.hours()}hours
      </span>
      <span className="text-xl md:hidden">
        {dura.minutes()}minutes | {dura.seconds()}seconds
      </span>
    </div>
  );
};

export default Time;
