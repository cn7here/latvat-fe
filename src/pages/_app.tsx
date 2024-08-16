import { GlobalStyle } from "@/styles/global";
import { Theme } from "@/styles/theme";
import ThemeWrapper from "@/wrapper/theme-wrapper";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeWrapper component={<Component {...pageProps} />}>
      <GlobalStyle theme={Theme} />
    </ThemeWrapper>
  );
}
