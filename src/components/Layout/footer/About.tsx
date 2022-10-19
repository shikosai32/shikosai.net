import type { FC } from "react";

const About: FC = () => (
  <div className="my-3 flex flex-col items-start justify-evenly md:flex-row lg:flex-col lg:justify-start">
    <div className="flex items-center justify-center">
      <img className="h-16 w-16 lg:h-20 lg:w-20" src="image/white/logo.png" alt="logo" />
      <div className="p-3">
        <p className="text-2xl font-black lg:text-3xl">SHIKOSAI</p>
        <p className="text-xl lg:text-2xl">The 32nd</p>
      </div>
    </div>
    <div>
      <p className="my-3">
        National Institute of Technology (KOSEN),
        <br />
        Ibaraki College
      </p>
      <p className="my-3">
        〒312-8508
        <br />
        866 Nakane Hitachinaka Ibaraki, Japan
        <br />
        TEL.029-272-5201
      </p>
      <p className="my-3">
        Organized by SHIKOSAI Festival Executive Committee
        <br />
        Site designed by Executive Committee Information Department
      </p>
    </div>
  </div>
);

export default About;
