import { useEffect } from "react";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import type { NextPage } from "next";

import * as gtag from "lib/gtag";

import "styles/global.scss";

const ConfirmIfIE: NextPage = () => {
  const router = useRouter();
  if (process.browser) {
    const ua = window.navigator.userAgent.toLowerCase();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (ua.indexOf("msie") !== -1 || ua.indexOf("trident") !== -1) {
        router.replace("/ie");
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  }

  return null;
};

const MyApp = ({ Component, pageProps, router: routerProp }: AppProps): JSX.Element => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string): void => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} key={routerProp.asPath} />
      <ConfirmIfIE />
    </>
  );
};

export default MyApp;
