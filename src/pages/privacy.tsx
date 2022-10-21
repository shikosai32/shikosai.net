import type { NextPage } from "next";
import Layout from "~/components/Layout/Layout";
import styles from "~/styles/privacy.module.scss";

const Privacy: NextPage = () => (
  <Layout PageTitle="Privacy Policy - shikosai.net">
    <div className="relative mx-10 mt-[15vh] md:mx-24 lg:mt-40">
      <h1 className="absolute left-1/2 -top-[2.25rem] -translate-x-1/2 transform bg-white px-4 text-center font-montserrat text-3xl">
        PRIVACY
        <br />
        POLICY
      </h1>
      <p className="z-10 border-4 border-black bg-white p-12 font-noto-serif-jp text-base leading-7">
        このサイトでは利用状況を分析するために Google アナリティクス を使用しています。
        <br />
        GoogleアナリティクスはCookieを使用してこのサイトへのアクセス情報を Google に送信しています。
        <br />
        Googleアナリティクスでデータが収集、処理される仕組みについては「Googleのサービスを使用するサイトやアプリから収集した情報の
        Google による使用」のページをご覧ください。
      </p>
      <span
        className={`absolute -left-24 -top-9 -z-10 hidden font-montserrat text-7xl font-extrabold italic text-white lg:inline-block ${styles.text_border}`}
      >
        SHIKOSAI
      </span>
      <span
        className={`absolute -right-24 -bottom-7 -z-10 hidden font-montserrat text-7xl font-extrabold italic text-white lg:inline-block ${styles.text_border}`}
      >
        THE 32nd.
      </span>
    </div>
  </Layout>
);

export default Privacy;
