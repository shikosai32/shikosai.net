import type { FC } from "react";
import Head from "next/head";
import Header from "~/components/Layout/Header";
import Footer from "~/components/Layout/Footer";
import Side from "~/components/Layout/Side";
import type { LayoutInformation, LayoutProps } from "./type/model";

const DefaultDescription =
  "第32回茨香祭の公式ホームページです。サークルなどの各種情報を掲載しています。どうぞご利用ください！";
const DefaultImage = "https://32.shikosai.net/image/ogp/ogp_image.png";

const Metas: FC = () => (
  <>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="theme-color" content="#ffffff" />
  </>
);

const SeoMetas: FC<LayoutInformation> = ({ PageTitle, PageDescription, PageImage }) => (
  <>
    <meta name="name" content={PageTitle} />
    <meta name="image" content={PageImage} />
    <meta name="description" content={PageDescription} />
  </>
);

const OgpMetas: FC<LayoutInformation> = ({ PageTitle, PageDescription, PageImage }) => (
  <>
    <meta property="og:title" content={PageTitle} />
    <meta property="og:description" content={PageDescription} />
    <meta property="og:type" content="website" />
    <meta property="og:image" content={PageImage} />
    <meta property="og:image:alt" content="" />
    <meta property="og:site_name" content="" />
  </>
);

const TwitterMetas: FC<LayoutInformation> = ({ PageTitle, PageDescription, PageImage }) => (
  <>
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="" />
    <meta name="twitter:title" content={PageTitle} />
    <meta name="twitter:description" content={PageDescription} />
    <meta name="twitter:image" content={PageImage} />
  </>
);

const Layout: FC<LayoutProps> = ({
  PageTitle,
  children,
  PageDescription = DefaultDescription,
  PageImage = DefaultImage,
}) => (
  <>
    <Head>
      <title>{PageTitle}</title>
      <Metas />
      <SeoMetas PageTitle={PageTitle} PageDescription={PageDescription} PageImage={PageImage} />
      <OgpMetas PageTitle={PageTitle} PageDescription={PageDescription} PageImage={PageImage} />
      <TwitterMetas PageTitle={PageTitle} PageDescription={PageDescription} PageImage={PageImage} />
    </Head>
    <main>
      <Header />
      <div className="min-h-full pt-20">
        <Side>{children}</Side>
      </div>
      <Footer />
    </main>
  </>
);

export default Layout;
