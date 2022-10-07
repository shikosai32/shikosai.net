import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Select from "react-select";
import Layout from "~/components/Layout/Layout";
import TableItem from "~/components/timetable/TableItem";
import timetableData from "~/static/timetableData";

const TimeTable: NextPage = () => {
  const [stage, setStage] = useState<string>("out");
  const [day, setDay] = useState<string>("1");
  const [data, setData] = useState<typeof timetableData.out>(timetableData.out);
  const [mobileData, setMobileData] = useState<typeof timetableData.out.day1>(timetableData.out.day1);
  const [heightSize, setHeightSize] = useState<number>(2);

  useEffect(() => {
    if (stage !== "in") {
      setData(timetableData.out);
      setHeightSize(2.5);
    } else {
      setData(timetableData.in);
      setHeightSize(3.5);
    }
  }, [stage]);

  useEffect(() => {
    if (day !== "2") {
      if (stage !== "in") setMobileData(timetableData.out.day1.filter((v) => v.isBlank === false));
      else setMobileData(timetableData.in.day1.slice(1).filter((v) => v.isBlank === false));
    } else if (day === "2") {
      if (stage !== "in") setMobileData(timetableData.out.day2.filter((v) => v.isBlank === false));
      else setMobileData(timetableData.in.day2.filter((v) => v.isBlank === false));
    }
  }, [day, stage]);

  return (
    <Layout PageTitle="TimeTable - shikosai32">
      <div className="flex flex-col items-end justify-evenly py-10 text-center font-roboto-serif lg:flex-row">
        <div className="lg:w-1/3" />
        <img src="image/black/timetable.png" className="mx-auto mb-4 h-10 md:h-12 lg:h-20" alt="TimeTable" />
        <div className="mx-auto flex items-center justify-center gap-x-4 lg:mx-0 lg:w-1/3">
          <span className="md:text-2xl lg:text-4xl">for</span>
          <select
            className="rounded-2xl bg-black p-2 pl-3 text-white md:text-lg lg:text-3xl"
            onChange={(e) => setStage(e.target.value)}
            defaultValue="out"
          >
            <option value="out" label="Outdoor" />
            <option value="in" label="Indoor" />
          </select>
        </div>
      </div>
      <div className="mb-4 flex justify-evenly font-roboto-serif md:hidden">
        <select
          className="rounded-2xl bg-black p-2 pl-3 text-white md:text-lg lg:text-3xl"
          onChange={(e) => setDay(e.target.value)}
          defaultValue="1"
        >
          <option value="1" label="10/22(Sat.)" />
          <option value="2" label="10/23(Sun.)" />
        </select>
      </div>
      <div className="border-t-4 border-b-4 border-solid border-black pt-3 pb-4 font-roboto-serif">
        <div className="hidden items-start justify-evenly md:flex">
          <p className="w-5/12 text-center text-xl lg:text-2xl">10/22(Sat.)</p>
          <p className="text-center text-xl md:text-2xl lg:text-3xl">
            {stage !== "in" ? "Outdoor Stage" : "Indoor Stage"}
          </p>
          <div className="w-5/12">
            <p className="text-center text-xl lg:text-2xl">10/23(Sun.)</p>
            <p className="mt-2 text-center">学内開催につき、一般の方の入場はできません。</p>
          </div>
        </div>
        <div className="md:hidden">
          {day !== "2" ? (
            <p className="text-center text-2xl">10/22(Sat.)</p>
          ) : (
            <div className="md:hidden">
              <p className="text-center text-2xl">10/23(Sun.)</p>
              <p className="mt-2 text-center">学内開催につき、一般の方の入場はできません。</p>
            </div>
          )}
        </div>
      </div>
      <div className="my-6 font-roboto-serif md:flex md:justify-around">
        <div className="md:hidden">
          <p className="mb-4 text-center text-2xl">{stage !== "in" ? "Outdoor Stage" : "Indoor Stage"}</p>
          <div className="mx-auto w-4/5 md:mx-0 md:w-5/12">
            {mobileData.map((v, i) => (
              <TableItem
                // eslint-disable-next-line react/no-array-index-key
                key={i}
                eventTitle={v.eventTitle}
                description={v.description}
                start={v.start}
                end={v.end}
                time={v.time}
                isBlank={v.isBlank}
                heightSize={heightSize}
              />
            ))}
          </div>
        </div>

        <div className="hidden w-5/12 md:block">
          {data.day1.map((v, i) => (
            <TableItem
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              eventTitle={v.eventTitle}
              description={v.description}
              start={v.start}
              end={v.end}
              time={v.time}
              isBlank={v.isBlank}
              heightSize={heightSize}
            />
          ))}
        </div>
        <div className="hidden w-5/12 md:block">
          {data.day2.map((v, i) => (
            <TableItem
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              eventTitle={v.eventTitle}
              description={v.description}
              start={v.start}
              end={v.end}
              time={v.time}
              isBlank={v.isBlank}
              heightSize={heightSize}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default TimeTable;
