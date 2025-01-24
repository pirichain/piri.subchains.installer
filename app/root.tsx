import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/code-highlight/styles.css';
import '~/assets/styles/root.css';

import type {MetaFunction} from "@remix-run/node";
import {Links, Meta, Outlet, Scripts, ScrollRestoration,} from "@remix-run/react";
import {ColorSchemeScript, Container, createTheme, Loader, MantineProvider, rem} from '@mantine/core';
import Layout from "~/components/layout";
import {Notifications} from "@mantine/notifications";
import {PulseRadar} from "~/components/PulseRadar";

const CONTAINER_SIZES: Record<string, string> = {
  xxxs: rem(360),
  xxs: rem(480),
  xs: rem(600),
  sm: rem(768),
  md: rem(1024),
  lg: rem(1280),
  xl: rem(1440),
  xxl: rem(1600),
  xxxl: rem(1920),
  maxl: rem(2560)
};

const theme = createTheme({
  components: {
    Container: Container.extend({
      vars: (_, {size, fluid}) => ({
        root: {
          '--container-size': fluid
              ? '100%'
              : size !== undefined && size in CONTAINER_SIZES
                  ? CONTAINER_SIZES[size]
                  : rem(size),
        },
      }),
    }),
  },
});

export const meta: MetaFunction = () => {
  return [
    {title: "Pirichain - Build Your Sub-Chain Infrastructure"},
    {
      name: "description",
      content: "Create your own blockchain ecosystem with Pirichain! Step into a blockchain experience beyond boundaries, where you can effortlessly integrate your business and data!"
    },
  ];
};

export default function App() {
  return (
      <html style={{height: '100%'}} lang="en">
      <head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@1&display=swap" rel="stylesheet"/>

        <Meta/>
        <Links/>
        <ColorSchemeScript/>
      </head>
      <body style={{height: '100%'}}>
      <MantineProvider theme={theme}>
        <Notifications position={"top-center"}/>
        <Layout>
          <Outlet/>
        </Layout>
        <ScrollRestoration/>
        <Scripts/>
      </MantineProvider>
      </body>
      </html>
  );
}
