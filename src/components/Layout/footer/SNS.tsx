import type { FC } from "react";
import Link from "next/link";
import { FaTwitter, FaInstagram } from "react-icons/fa";

const SNS: FC = () => (
  <>
    <p className="flex items-center	justify-center text-2xl underline underline-offset-1">SNS</p>
    <Link href="https://www.twitter.com/shikosai32">
      <a className="my-1 flex	items-center justify-center text-lg" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="mr-2" />
        Twitter
      </a>
    </Link>
    <Link href="https://www.instagram.com/nitic_shikosai_4531/">
      <a className="my-1 flex	items-center justify-center text-lg" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="mr-2" />
        Instagram
      </a>
    </Link>
  </>
);

export default SNS;
