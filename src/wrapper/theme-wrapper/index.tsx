import Header from "@/components/header";
import { Theme } from "@/styles/theme";
import { NextScript } from "next/document";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import { Fragment, useMemo } from "react";
import { ThemeProvider } from "styled-components";

interface ThemeWrapperProps {
  children: React.ReactNode;
  component: React.ReactNode;
}

const initialFBSDK = () => {
  if (typeof window !== "object") return;

  if (window["FB"]) {
    return window["FB"].XFBML.parse();
  }

  window["fbAsyncInit"] = function () {
    window["FB"].init({
      appId: "372030549066617",
      cookie: true,
      xfbml: true,
      version: "v20.0",
    });

    window["FB"].AppEvents.logPageView();
  };

  (function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/vn_VN/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  })(document, "script", "facebook-jssdk");

  console.log("FBSDK ready!");
};

const ThemeWrapper = ({ component, children }: ThemeWrapperProps) => {
  const router = useRouter();
  const Layout = useMemo(() => Fragment, [router.pathname]);

  return (
    <ThemeProvider theme={Theme}>
      <Head>
        <link rel="icon" href={`${process.env.basePath}/favicon.icon`} />
        <NextScript>{initialFBSDK()}</NextScript>
      </Head>

      {children}
      <Header />
      <Layout>{component}</Layout>
    </ThemeProvider>
  );
};

export default ThemeWrapper;
