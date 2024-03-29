import Router from "next/router";
import { FC, ReactNode } from "react";
import flowItems from "./flowItems";

const onClick = (title: "timetable" | "circle" | "access" | "staff") => {
  switch (title) {
    case "timetable":
      Router.push("/timetable");
      break;
    case "circle":
      Router.push("/circle");
      break;
    case "access":
      Router.push("/access");
      break;
    case "staff":
      Router.push("/staff");
      break;
    default:
      break;
  }
};

const FlowBox: FC<{ className: string; children: ReactNode; type: "timetable" | "circle" | "access" | "staff" }> = ({
  className,
  children,
  type,
}) => (
  <div className="relative w-full">
    <button
      type="button"
      onClick={() => {
        onClick(type);
      }}
    >
      <div
        className={`h-[146px] w-full rounded-lg ${className} transition hover:-translate-y-1 hover:-translate-x-1 active:translate-y-3 active:translate-x-3`}
      >
        {children}
      </div>
    </button>
    <div className="absolute top-3 left-3 -z-10 h-[146px] w-full rounded-lg bg-black" />
  </div>
);

const Flow: FC = () => (
  <div className="relative">
    <h2 className="my-20 text-center font-montserrat text-3xl font-semibold uppercase md:text-6xl">Flows</h2>
    <div className="absolute top-20 right-0 left-0 mx-auto hidden h-[2px] w-4/5 bg-black before:absolute before:top-[-3px] before:-left-1 before:h-2 before:w-2 before:rounded-full before:bg-black before:content-[''] after:absolute after:top-[-3px] after:-right-1 after:h-2 after:w-2 after:rounded-full after:bg-black after:content-[''] md:block" />
    {flowItems.map((flowItem, index) => (
      <div key={flowItem.id} className="relative">
        <FlowBox
          type={flowItem.title}
          className={`grid grid-cols-2 ${index % 2 === 0 ? "bg-primary" : "bg-secondary"}`}
        >
          <div className="flex items-center justify-center before:absolute before:left-1/2 before:h-3/4 before:w-[2px] before:bg-black before:content-['']">
            <img src={`/image/white/${flowItem.title}.png`} alt={flowItem.title} width="50%" height="50%" />
          </div>
          <div className="flex flex-col items-center justify-center text-center font-dela-gothic-one text-white">
            <span className="text-xl lg:text-3xl">{flowItem.subtitle}</span>
            <span className="text-lg lg:text-2xl">{flowItem.description}</span>
          </div>
        </FlowBox>
        <div>
          <img
            src="image/arrow-to-bottom.svg"
            alt="arrow"
            className={`m-5 mx-auto mt-[2rem] ${index === flowItems.length - 1 ? "hidden" : ""}`}
          />
        </div>
      </div>
    ))}
  </div>
);

export default Flow;
