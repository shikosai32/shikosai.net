import type { FC } from "react";
import Link from "next/link";
import sponsorData from "~/static/sponsorData";

const Sponsor: FC = () => (
  <div>
    <p className="text-center text-2xl underline underline-offset-1">Sponsors</p>
    <div className="flex flex-col items-center justify-center">
      {sponsorData.map((v) =>
        v.link ? (
          <Link href={v.link ?? ""} key={v.name}>
            <a className="py-1" target="_blank" rel="noopener noreferrer">
              {v.name}
            </a>
          </Link>
        ) : (
          <p key={v.name}>{v.name}</p>
        ),
      )}
    </div>
  </div>
);

export default Sponsor;
