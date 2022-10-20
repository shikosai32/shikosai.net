import type { FC } from "react";
import Link from "next/link";

const Privacy: FC = () => (
  <div className="mt-5 flex w-full flex-col justify-center lg:flex-row">
    <Link href="/privacy">
      <a className="my-2 text-center lg:my-0">Privacy Policy</a>
    </Link>
    <span className="mx-2 hidden lg:block">|</span>
    <p className="text-center">&copy; 2022 National Institute of Technology (KOSEN), Ibaraki College</p>
  </div>
);

export default Privacy;
