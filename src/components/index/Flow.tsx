import { FC, ReactNode } from "react";
import lbToBr from "~/utils/lbToBr";
import flowItems from "./flowItems";

const Box: FC<{ className: string; children: ReactNode }> = ({ className, children }) => (
  <div className="relative">
    <div className={`h-[146px] rounded-lg ${className}`}>{children}</div>
    <div className="absolute top-3 left-3 -z-10 h-[146px] w-full rounded-lg bg-black" />
  </div>
);

const Flow: FC = () => (
  <>
    {flowItems.map((flowItem, index) => (
      <div key={flowItem.title} className="relative">
        <Box className={`grid grid-cols-2 ${index % 2 === 0 ? "bg-primary" : "bg-secondary"}`}>
          <div className="flex items-center justify-center before:absolute before:left-1/2 before:h-3/4 before:w-[2px] before:bg-black before:content-['']">
            <img src={`/image/white/${flowItem.title}.png`} alt={flowItem.title} width="50%" height="50%" />
          </div>
          <div className="flex flex-col items-center justify-center text-center font-dela-gothic-one text-white">
            <span className="text-3xl">{flowItem.subtitle}</span>
            <span className="text-2xl">{lbToBr(flowItem.description)}</span>
          </div>
        </Box>
        <div>
          <img
            src="image/arrow-to-bottom.svg"
            alt="arrow"
            className={`m-5 mx-auto mt-[2rem] ${index === flowItems.length - 1 ? "hidden" : ""}`}
          />
        </div>
      </div>
    ))}
  </>
);

export default Flow;
