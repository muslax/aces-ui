import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          primaryColor: "gray",
          // Original sizes: 12 14 16 18 20
          // Custom sizes:   12 13 14 16 18
          fontSizes: {
            xs: 12,
            sm: 13,
            md: 14.5,
            lg: 16,
            xl: 18,
          },
        }}
      >
        <NotificationsProvider>
          <Component {...pageProps} />
        </NotificationsProvider>
      </MantineProvider>
    </>
  );
}

export default MyApp;
