import type { FC } from "react";
import Link from "next/link";
import { MdOutlineLanguage } from "react-icons/md";

const Site: FC = () => (
  <>
    <p className="pt-4 text-center text-2xl underline underline-offset-1">External Site</p>
    <Link href="https://www.ibaraki-ct.ac.jp/">
      <a className="flex items-center	justify-center py-2 text-lg" target="_blank" rel="noopener noreferrer">
        <MdOutlineLanguage className="mr-2" />
        NITIC HP
      </a>
    </Link>
  </>
);

export default Site;
