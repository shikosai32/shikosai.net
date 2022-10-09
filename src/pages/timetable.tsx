import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Layout from "~/components/Layout/Layout";
import TableItem from "~/components/timetable/TableItem";
import timetableData from "~/static/timetableData";

const TimeTable: NextPage = () => {
  const [stage, setStage] = useState<string>("out");
  const [day, setDay] = useState<string>("1");
  const [data, setData] = useState<typeof timetableData.day1>(timetableData.day1);
  const [mobileData, setMobileData] = useState<typeof timetableData.day1.out>(timetableData.day1.out);

  useEffect(() => {
    if (day !== "2") {
      setData(timetableData.day1);
    } else {
      setData(timetableData.day2);
    }
  }, [day]);

  useEffect(() => {
    if (day !== "2") {
      if (stage !== "in") setMobileData(timetableData.day1.out);
      else setMobileData(timetableData.day1.in);
    } else if (day === "2") {
      if (stage !== "in") setMobileData(timetableData.day2.out);
      else setMobileData(timetableData.day2.in);
    }
  }, [day, stage]);

  return (
    <Layout PageTitle="TimeTable - shikosai32">
      <div className="flex flex-col items-end justify-evenly pt-10 pb-5 text-center font-roboto-serif md:pb-10 lg:flex-row">
        <div className="lg:w-1/3" />
        <img src="/image/black/timetable.png" className="mx-auto mb-4 h-10 md:h-12 lg:h-20" alt="TimeTable" />
        <div className="mx-auto flex items-center justify-center gap-x-4 lg:mx-0 lg:w-1/3">
          <span className="md:text-2xl lg:text-4xl">for</span>
          <select
            className="rounded-2xl bg-black p-2 pl-3 text-white md:text-lg lg:text-3xl"
            onChange={(e) => setDay(e.target.value)}
            defaultValue="1"
          >
            <option value="1" label="10/22(Sat.)">
              10/22(Sat.)
            </option>
            <option value="2" label="10/23(Sun.)">
              10/23(Sun.)
            </option>
          </select>
        </div>
      </div>
      <div className="mb-4 flex justify-evenly font-roboto-serif md:hidden">
        <select
          className="rounded-2xl bg-black p-2 pl-3 text-white md:text-lg lg:text-3xl"
          onChange={(e) => setStage(e.target.value)}
          defaultValue="out"
        >
          <option value="out" label="Outdoor">
            Outdoor
          </option>
          <option value="in" label="Indoor">
            Indoor
          </option>
        </select>
      </div>
      <div className="text-center font-montserrat">
        <p className="text-2xl font-semibold md:text-3xl">{day !== "2" ? "10/22(Sat.)" : "10/23(Sun.)"}</p>
        <p>{day !== "2" ? "※一般公開" : "※学内開催"}</p>
        <div className="relative mx-auto mt-1 mb-4 h-0.5 w-3/4 bg-black before:absolute before:top-[-3px] before:-left-1 before:h-2 before:w-2 before:rounded-full before:bg-black before:content-[''] after:absolute after:top-[-3px] after:-right-1 after:h-2 after:w-2 after:rounded-full after:bg-black after:content-[''] md:w-11/12" />
      </div>
      <div className="pt-3 pb-4 font-montserrat">
        <div className="hidden items-start justify-evenly md:flex">
          <div className="relative w-2/5">
            <img className="w-full" src="/image/frame.svg" alt="flame" />
            <p className="absolute right-0 left-0 top-3 text-center text-xl lg:top-5 lg:text-3xl xl:text-4xl">
              Outdoor Stage
            </p>
          </div>
          <div className="relative w-2/5">
            <img className="w-full" src="/image/frame.svg" alt="flame" />
            <p className="absolute right-0 left-0 top-3 text-center text-xl lg:top-5 lg:text-3xl xl:text-4xl">
              Indoor Stage
            </p>
          </div>
        </div>
        <div className="mx-auto w-4/5 md:hidden">
          <div className="relative">
            <img src="/image/frame.svg" alt="flame" />
            <p className="absolute right-0 left-0 top-3 text-center text-2xl">
              {stage !== "in" ? "Outdoor Stage" : "Indoor Stage"}
            </p>
          </div>
        </div>
      </div>
      <div className="my-6 font-roboto-serif">
        <div className="md:hidden">
          <div className="mx-auto w-4/5 md:mx-0 md:w-5/12">
            {data.timeInfo.map((value, i) => (
              <div key={value}>
                {mobileData[i] && mobileData[i].length !== 0 && (
                  <div className="relative w-full	border-t-2 border-black py-2">
                    <p className="absolute -top-4 w-1/4 translate-x-[150%] bg-white text-center font-montserrat text-2xl font-semibold md:w-[10%] md:translate-x-[450%]">
                      {value}
                    </p>
                  </div>
                )}
                <div>
                  {mobileData[i] &&
                    mobileData[i].map((v) => (
                      <TableItem
                        key={v.eventTitle}
                        eventTitle={v.eventTitle}
                        description={v.description}
                        start={v.start}
                        end={v.end}
                        color={stage !== "in" ? "primary" : "secondary"}
                      />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          {data.timeInfo.map((value, i) => (
            <div key={value}>
              <div className="relative my-4	w-full border-b-2 border-black">
                <p className="absolute -top-3 w-[10%] translate-x-[450%] bg-white text-center font-montserrat text-2xl font-semibold">
                  {value}
                </p>
              </div>
              <div className="flex justify-evenly">
                <div className="w-2/5">
                  {data.out[i] &&
                    data.out[i].map((v) => (
                      <TableItem
                        key={v.eventTitle}
                        eventTitle={v.eventTitle}
                        description={v.description}
                        start={v.start}
                        end={v.end}
                        color="primary"
                      />
                    ))}
                </div>
                <div className="w-2/5">
                  {data.in[i] &&
                    data.in[i].map((v) => (
                      <TableItem
                        key={v.eventTitle}
                        eventTitle={v.eventTitle}
                        description={v.description}
                        start={v.start}
                        end={v.end}
                        color="secondary"
                      />
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default TimeTable;
