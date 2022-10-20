import type { FC } from "react";
import Link from "next/link";

const Contents: FC = () => (
  <div className="flex flex-col">
    <p className="text-center text-2xl underline underline-offset-1">Contents</p>
    <Link href="/">
      <a className="my-1 text-center text-lg">Home</a>
    </Link>
    <Link href="/timetable">
      <a className="my-1 text-center text-lg">Timetable</a>
    </Link>
    <Link href="/circle">
      <a className="my-1 text-center text-lg">Circle</a>
    </Link>
    <Link href="/access">
      <a className="my-1 text-center text-lg">Access</a>
    </Link>
    <Link href="/staff">
      <a className="my-1 text-center text-lg">Staff</a>
    </Link>
  </div>
);

export default Contents;
