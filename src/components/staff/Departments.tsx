import { FC } from "react";
import departmentItems from "./departmentItems";

const Departments: FC = () => (
  <div>
    {departmentItems.map(({ id, department, description }) => (
      <div key={id} className="border-t-2 py-3 font-noto-serif-jp last:border-b-2">
        <h2 className="text-3xl">{department}</h2>
        <p className="mt-4">{description}</p>
      </div>
    ))}
  </div>
);

export default Departments;
