import { FC } from "react";
import HanbergerMenu from "components/HanbergerMemu";

const Header: FC = () => (
  <div className="w-screen sticky top-0 flex justify-center">
    <HanbergerMenu />
  </div>
);

export default Header;
