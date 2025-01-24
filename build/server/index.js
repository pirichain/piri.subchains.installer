import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable, redirect } from "@remix-run/node";
import { RemixServer, Meta, Links, Outlet, ScrollRestoration, Scripts, useLoaderData, useActionData, NavLink, useNavigation, Form, useNavigate } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { useMantineTheme, getGradient, Container, Stack, Group, Text, Image, Paper, rem, createTheme, ColorSchemeScript, MantineProvider, Title, Divider, List, Button, Badge, Popover, ActionIcon, Modal, PasswordInput, Center, Loader, TextInput, Progress, Fieldset, PinInput, Box, ThemeIcon, CopyButton } from "@mantine/core";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Notifications, showNotification } from "@mantine/notifications";
import crypto from "crypto";
import * as process from "node:process";
import process__default from "node:process";
import * as os from "node:os";
import EC from "elliptic";
import base58check from "base58check";
import RIPEMD160 from "ripemd160";
import sha256 from "sha256";
import bip39 from "bip39";
import * as path from "node:path";
import path__default from "node:path";
import * as fs from "node:fs";
import fs__default from "node:fs";
import { exec, execSync } from "child_process";
import axios from "axios";
import { useDisclosure, useInputState } from "@mantine/hooks";
import { IconBug, IconCheck, IconMoodSad, IconHome, IconArrowRight, IconX, IconSettingsBolt, IconServerCog, IconBolt, IconCircleCheck, IconChecks, IconPuzzle, IconQrcode, IconArrowBack, IconDatabaseStar, IconShieldBolt, IconEngine, IconRocket, IconLicense, IconHexagonLetterG, IconTag, IconNetwork, IconCalendarBolt, IconWorldWww, IconCube, IconCloudDownload, IconRefresh, IconCodeOff, IconRadarOff, IconSquareAsterisk, IconKey, IconHexagonLetterP, IconCopy, IconLockSearch } from "@tabler/icons-react/dist/esm/icons/index.mjs";
import { CodeHighlight } from "@mantine/code-highlight";
import { useState, useEffect } from "react";
import { QRCode } from "react-qrcode-logo";
import { createRequire } from "module";
const ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
const logo = "/assets/pirichain-DpXSmLuM.png";
const web_img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAUVBMVEVzc3Nzc3N0dHRwcHBwcHAAAAB1dXVzc3N0dHT///+Xl5eFhYXl5eXu7u7CwsL29vaxsbHd3d18fHzLy8uoqKjU1NSWlpaOjo739/e5ubmgoKBxdJ5OAAAACHRSTlPvn5AgEADf32jlG/QAAACvSURBVCjPdZLrDoMgDEarwKS0XMXL9v4POjSZEWTnB02+EyBNC0qOoBtgEArES3d4SRh0lxGgL+455TXdzBVHLLiHIMvomP3citkaXB2XoxYJs0EKVselFoQ/bCucwzD7zLEW5YkN6c1kcyMMOh8is6W2j4C4I5a8FZqC55D0U+h0dVeLZHd0jfjgyRbO4m83zIGPlo+6tX+YxZG++D+osS8GkFMvnwQoMTzXZ5TqC6wsFDAr8yTaAAAAAElFTkSuQmCC";
const psce_img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAVFBMVEVzc3N0dHRwcHBwcHAAAABzc3N0dHRzc3Nzc3N0dHT////39/e5ubnu7u6WlpaFhYXd3d2oqKh8fHzCwsKOjo7Ly8vT09N9fX3l5eXU1NSwsLCgoKBe2VjVAAAACXRSTlPv3yAQAJ+QkKA6GurcAAAApElEQVQoz3XS2Q6DIBBA0SmgdmbYceny///ZYIyKTu+T8UCAABjdA16CThlQDxR6aOhQrAeQof6XayCLECITT+EGI3NJE7nlAtm5XKdxaSBHorR+FW4gsh1xzVJMB3hK+1JTpM8OiQIevefTDH/s2p/XcG4X9zpDcLQ2o6Xim3N8bW3EOsJv0JQ9R5QALQcZlm3n/y9qkKEDLT8GBUY9789n0OYHUjsVoeM5R1sAAAAASUVORK5CYII=";
const wp_img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAUVBMVEVzc3NwcHBwcHAAAABzc3N1dXVzc3N0dHRzc3Nzc3N0dHT////d3d2oqKiFhYXLy8vU1NTu7u739/fDw8PCwsKXl5d9fX3m5uaxsbGfn5+Ojo45YBPbAAAACnRSTlPvIBAAn9/fkJCgiCWJzwAAAI5JREFUKM+V0VkOwyAMRVEzZKgNGJI0Hfa/0CYFNQi5UnI/OdLjw2D0ANgEVhlQHQp1GiyKDQAy/N7vfu91SIGFctwCLWHLZ6kgkP/uERNL8CaXiAXAOaWJQgs5fx6i24oCzDvw5SkWgKU/1mPqSWsF+EiRc1PCGgK7UgwF/h5qlMGC7lGoV2DUDbAJRm0+xigX03SaWUoAAAAASUVORK5CYII=";
const policy_img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAVFBMVEV0dHRzc3Nzc3NwcHBwcHAAAAB1dXVzc3Nzc3N1dXV0dHR0dHT///+oqKjl5eXLy8t9fX2Ojo7u7u7d3d339/e5ubmFhYXU1NSxsbGgoKCXl5e6uroeVZtaAAAAC3RSTlPv758gEADf35CQj+x/OQkAAACrSURBVCjPddFZDsMgDARQlyVJiwPY2dP737OAKggpnU8/zUgI0OoF5hYQUoPsTCOdAmGaecKjDXDdP8iUXMAhji1wuLgiBQjZmywFiGe0QeYbOJxpREvMFcR7GNkRea3gwMVb3G1cq+BEZ4KkNV9NjUEoPiNKgSQbs82SIQqvvkiCkq8sGWrZpgyrS6Ek9tKgKeWMHTe9U/n/Rw1tEKD61r2XoKX4WXsMSn8AsH8af7iJ3ZgAAAAASUVORK5CYII=";
const docs_img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAV1BMVEVzc3NwcHBwcHAAAABzc3N1dXVzc3N0dHRzc3Nzc3N0dHT///+oqKjLy8vc3Ny5ubnu7u6FhYWWlpaOjo6Xl5f29vbl5eXU1NSfn598fHz39/fCwsKxsbHRncrBAAAACnRSTlPvIBAAn9/fkJCgiCWJzwAAAJFJREFUKM+t0tkOAiEMBdCyzGJpBxBnU///O63z4DKWxBhvQiH3JCQkgLMd4C7gjQPToJLGgkc1HYAO0lfyK6yRCbEw8yXjQk+YznMaMI7MsvHwgFPIskpM2/EFKMgIxzuUHRCRwEg0J3wDiYCMqaB6leQrWEnGNWfaoCzVl/8boNb3Oniwrda3Bpw5fH6f3robBtEXwQD7zUkAAAAASUVORK5CYII=";
const linkedIn_img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAATlBMVEVzc3Nzc3N0dHRwcHBwcHAAAAB1dXVzc3N0dHT////d3d2Xl5eoqKju7u6FhYXT09PU1NSOjo58fHzLy8ugoKD29vbl5eXDw8OxsbGNjY2gFgUBAAAACHRSTlPvn5AgEADf32jlG/QAAACUSURBVCjPjdLJDsIwDEVRZ2qfMzZpmf7/R1EFsigYwV1kkSNlEZuCt4S3yLhAboLS5MlAzRLp8LxPLUotP2Q/Mh9KAgtXSJWbQGSgi3B8hcRZB2xDh9o6rmtbq/ZUYeYyNDiNC980KMic/oXOG8pZASSgDqBjh59fkvhQFkBeorQk7H0flNXBkJ+hNDsKznyuj/XhDuxBE6CiKep0AAAAAElFTkSuQmCC";
const twitter_img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAUVBMVEVzc3N0dHRwcHBwcHAAAABzc3N0dHRzc3Nzc3N0dHT////Ly8vu7u7d3d3Dw8P29vaxsbGFhYV9fX2Xl5egoKDl5eXU1NS6urq5ubmoqKiOjo4oQLUcAAAACXRSTlPv3yAQAJ+QkKA6GurcAAAAs0lEQVQoz3WSSRKEIAxF04LaiUxRHO9/0EatQJXSf8HivcVPkYBWHeAj0DYamg9W8lHQYjUdQF3cPNiUKGwL53uJlVI833wgl8VoaJrIjDcfMAs8EnXkhBeBgRacKQovAi0F9j7zIth43inzInCSmqfARM/p3mIg2tkbforU6z0HsiIKx0gzLhRECM81hwjh5WuycDI/e0rZsgirjBBtytXyf1F9XbSg6sfQgG6+7/Pplf4BGdAWSAF3+vgAAAAASUVORK5CYII=";
const telegram_img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAVFBMVEVzc3Nzc3NwcHBwcHAAAAB1dXVzc3N0dHRzc3N0dHT///+5ubnd3d2Xl5d8fHz39/fl5eWFhYX29vaxsbHLy8vCwsKoqKiWlpbU1NSfn5+Ojo7u7u6gQinlAAAACXRSTlPvnyAQAN/fkJDVjIpdAAAAxElEQVQoz3XR6Y7DIAwEYOfoMcMVQo5m+/7vuW6XCC2l/oGQP8uDhIzDTVCVdP0o/QWNugzSoVk3kTa0+u7h9KwhmkCaGvxmyTBx/w9uDaR1sAQK+PQaNl6vtAXcEhg005sIR3PC8SRt0mE/8YDhfkIip4h33+AVcQLiQqbc14gCSrPFyhX4iyiAhTFx/kGOKKCDE1VyRAE/B66bCm2BvOvpsZE0Fbj3i1X2CnIdj3z5/lH3NnQyXFv9ay9j38nHnvsw/gJjFxapvUG2qgAAAABJRU5ErkJggg==";
const lottie = "/assets/lottie-B8tdssKb.lottie";
function Layout({ children }) {
  const theme2 = useMantineTheme();
  const gradient = getGradient({ from: "gray.0", to: "blue.1", deg: 180 }, theme2);
  return /* @__PURE__ */ jsx(Container, { size: "100%", h: "100%", m: 0, p: 0, children: /* @__PURE__ */ jsx(Stack, { align: "center", justify: "center", h: "100%", gap: 0, children: /* @__PURE__ */ jsxs(Group, { justify: "space-between", align: "space-between", children: [
    /* @__PURE__ */ jsxs(Stack, { gap: 0, h: "100%", mr: "lg", w: "640px", px: "lg", children: [
      /* @__PURE__ */ jsx(Stack, { h: "100%", gap: 0, children }),
      /* @__PURE__ */ jsxs(Group, { w: "598px", bottom: 0, justify: "space-between", mt: "xl", children: [
        /* @__PURE__ */ jsx(Text, { ff: "Dosis", fw: 700, c: "dark.2", size: "xl", children: "PIRICHAIN TECHNOLOGY ™" }),
        /* @__PURE__ */ jsxs(Group, { justify: "flex-end", gap: "xs", children: [
          /* @__PURE__ */ jsx("a", { href: "https://piriscan.com", target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsx(Image, { src: web_img }) }),
          /* @__PURE__ */ jsx("a", { href: "https://smartscenarios.pirichain.com", target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsx(Image, { src: psce_img }) }),
          /* @__PURE__ */ jsx("a", { href: "https://whitepaper.pirichain.com", target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsx(Image, { src: wp_img }) }),
          /* @__PURE__ */ jsx("a", { href: "https://policy.pirichain.com", target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsx(Image, { src: policy_img }) }),
          /* @__PURE__ */ jsx("a", { href: "https://docs.pirichain.com", target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsx(Image, { src: docs_img }) }),
          /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/company/pirichain", target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsx(Image, { src: linkedIn_img }) }),
          /* @__PURE__ */ jsx("a", { href: "https://twitter.com/pirichain", target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsx(Image, { src: twitter_img }) }),
          /* @__PURE__ */ jsx("a", { href: "https://t.me/pirichainglobal", target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsx(Image, { src: telegram_img }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(
      Paper,
      {
        radius: "lg",
        shadow: "md",
        mih: "620px",
        h: "100%",
        bg: gradient,
        py: "xl",
        pos: "relative",
        style: { overflow: "hidden" },
        children: [
          /* @__PURE__ */ jsx(Image, { src: logo, pos: "absolute", top: "-140px", right: "-110px", opacity: 0.08 }),
          /* @__PURE__ */ jsxs(Stack, { align: "center", h: "100%", pos: "relative", w: 400, p: "lg", children: [
            /* @__PURE__ */ jsxs(Stack, { px: "xl", gap: 0, ta: "right", w: "100%", children: [
              /* @__PURE__ */ jsx(Text, { size: "40px", fw: 800, ff: "Satoshi Variable", c: "blue.6", children: "BLOCKCHAIN" }),
              /* @__PURE__ */ jsx(Text, { size: "24px", fw: 800, ff: "Satoshi Variable", c: "blue.4", mt: 2, children: "FOR ALL INDUSTRIES" }),
              /* @__PURE__ */ jsxs(Stack, { gap: 2, children: [
                /* @__PURE__ */ jsx(Text, { size: "36px", lh: "1.7rem", fw: 600, ff: "Satoshi Variable", c: "dark.3", mt: "lg", children: "Your business" }),
                /* @__PURE__ */ jsx(Text, { size: "28px", lh: "1.7rem", fw: 600, ff: "Satoshi Variable", c: "dark.2", children: "No longer need" }),
                /* @__PURE__ */ jsx(Text, { size: "20px", lh: "1.7rem", fw: 600, ff: "Satoshi Variable", c: "dark.1", children: "Blockchain Oracles" })
              ] }),
              /* @__PURE__ */ jsxs(Stack, { gap: 2, mt: "lg", children: [
                /* @__PURE__ */ jsx(
                  Text,
                  {
                    size: "20px",
                    fw: 600,
                    ff: "Satoshi Variable",
                    variant: "gradient",
                    gradient: { from: "dark.2", to: "blue.6", deg: 135 },
                    children: "The new era of blockchain!"
                  }
                ),
                /* @__PURE__ */ jsxs(Text, { size: "14px", fw: 400, ff: "Satoshi Variable", c: "dark.2", children: [
                  "- ",
                  /* @__PURE__ */ jsx("i", { children: "Pirichain Technology" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx(
              DotLottieReact,
              {
                src: lottie,
                autoplay: true,
                loop: true,
                style: { width: 400, height: 400, position: "absolute", bottom: "-75px" }
              }
            )
          ] })
        ]
      }
    )
  ] }) }) });
}
const CONTAINER_SIZES = {
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
      vars: (_, { size, fluid }) => ({
        root: {
          "--container-size": fluid ? "100%" : size !== void 0 && size in CONTAINER_SIZES ? CONTAINER_SIZES[size] : rem(size)
        }
      })
    })
  }
});
const meta = () => {
  return [
    { title: "Pirichain - Build Your Sub-Chain Infrastructure" },
    {
      name: "description",
      content: "Create your own blockchain ecosystem with Pirichain! Step into a blockchain experience beyond boundaries, where you can effortlessly integrate your business and data!"
    }
  ];
};
function App() {
  return /* @__PURE__ */ jsxs("html", { style: { height: "100%" }, lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx("link", { href: "https://api.fontshare.com/v2/css?f[]=satoshi@1&display=swap", rel: "stylesheet" }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {}),
      /* @__PURE__ */ jsx(ColorSchemeScript, {})
    ] }),
    /* @__PURE__ */ jsx("body", { style: { height: "100%" }, children: /* @__PURE__ */ jsxs(MantineProvider, { theme, children: [
      /* @__PURE__ */ jsx(Notifications, { position: "top-center" }),
      /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsx(Outlet, {}) }),
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] }) })
  ] });
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: App,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const ec = new EC.ec("secp256k1");
const changeAuth = (username, password) => {
  try {
    const authFilePath = path.join("/root/pirichain/bin", ".auth");
    const auth = JSON.parse(fs.readFileSync(authFilePath, { encoding: "utf8" }));
    auth.user = crypto.createHash("sha256").update(username).digest("hex");
    auth.pass = crypto.createHash("sha256").update(password).digest("hex");
    fs.writeFileSync(authFilePath, JSON.stringify(auth));
  } catch (error) {
    console.error("Auth Credentials Update Error", error);
  }
};
const update2FA = (secret) => {
  try {
    const _2faFilePath = path.join("/root/pirichain/bin", "auth.json");
    fs.writeFileSync(_2faFilePath, secret);
  } catch (error) {
    console.error("2FA Update Error:", error);
  }
};
const controlLicenceParameters = async (request) => {
  const formData = await request.formData();
  const clientHash = formData.get("clientHash");
  const nodeCode = formData.get("nodeCode");
  const licenceKey = formData.get("licenceKey");
  const nodeName = formData.get("nodeName");
  const errors = {};
  if (!/^[0-9A-Fa-f]{64}$/.test(clientHash))
    errors.clientHash = "Invalid Client Service! Please check your service is installed!";
  if (!/^[0-9A-Fa-f]{64}$/.test(licenceKey))
    errors.licenceKey = "Invalid Licence Key Format!";
  if (!/^\d{9}$/.test(nodeCode))
    errors.nodeCode = "Invalid Node Installation Code";
  if (Object.keys(errors).length > 0)
    return { errors };
  return { clientHash, nodeCode, licenceKey, nodeName };
};
function hexEncode(str) {
  let hex, i;
  let result = "";
  for (i = 0; i < str.length; i++) {
    hex = str.charCodeAt(i).toString(16);
    result += ("000" + hex).slice(-4);
  }
  return result;
}
const controlLicence = async (request) => {
  const _hostName = hexEncode(os.hostname());
  const { errors, clientHash, nodeCode, licenceKey, nodeName } = await controlLicenceParameters(request);
  if (errors)
    return { errors };
  const address = getAddressFromFile();
  const urlencoded = new URLSearchParams();
  urlencoded.append("_0xd", address.pub.subString(0, 2));
  urlencoded.append("_0xff", nodeCode);
  urlencoded.append("_0xfa", licenceKey);
  urlencoded.append("_0xa", clientHash);
  urlencoded.append("_0xc", nodeName ? hexEncode(nodeName) : _hostName);
  urlencoded.append("_0xafa", typeof address === "string" ? address : address.pub);
  const response = await sendRequest(request, "/network/validateInstallationCode", "POST", urlencoded);
  return { response };
};
async function sendRequest(request, endPoint, method, body, encodedType) {
  try {
    const response = await fetch(`https://generator.pirisubchains.com${endPoint}`, {
      method,
      body,
      headers: {
        "Content-Type": `application/${encodedType ?? "x-www-form-urlencoded"}`
      }
    });
    const result = await response.json();
    if (!response.ok) {
      return { error: 1, message: result.message };
    }
    return result;
  } catch (error) {
    return { error: 1, message: error };
  }
}
const createAddress = (addressPrefix) => {
  const key = ec.genKeyPair();
  const prefix = "83";
  let publicKey = key.getPublic("hex");
  const _publicKey = publicKey;
  const privateKey = key.getPrivate("hex");
  publicKey = sha256.x2(publicKey);
  publicKey = new RIPEMD160().update(publicKey).digest("hex");
  const secondHash = prefix + publicKey;
  let hashLast = sha256.x2(secondHash);
  hashLast = sha256.x2(hashLast);
  const firstByte = hashLast.substr(0, 8);
  const resultStr = secondHash + firstByte;
  const b58 = base58check.encode(resultStr, prefix);
  bip39.setDefaultWordlist("english");
  const words = bip39.entropyToMnemonic(privateKey);
  addressPrefix = addressPrefix && /^[A-Z]{2}$/.test(addressPrefix) ? addressPrefix : "PR";
  return { data: { pri: privateKey, pub: addressPrefix + b58, words, publicKey: _publicKey } };
};
const getAddressFromFile = (addressPrefix) => {
  console.log("addressPrefix : ", addressPrefix);
  const dir = path.join(process.cwd(), "address");
  const filePath = path.join(dir, "node.json");
  if (!fs.existsSync(dir))
    fs.mkdirSync(dir);
  if (!fs.existsSync(filePath)) {
    const { data: address } = createAddress(addressPrefix);
    fs.writeFileSync(filePath, JSON.stringify(address, null, 2));
    return address;
  } else {
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data);
  }
};
const regenerateNewAddress = (addressPrefix) => {
  const dir = path.join(process.cwd(), "address");
  const filePath = path.join(dir, "node.json");
  if (fs.existsSync(filePath))
    fs.unlinkSync(filePath);
  return getAddressFromFile(addressPrefix);
};
const saveNodesInfo = (nodes) => {
  const dir = path.join(process.cwd(), "setting");
  const filePath = path.join(dir, "setting.json");
  if (!fs.existsSync(dir))
    fs.mkdirSync(dir);
  fs.writeFileSync(filePath, JSON.stringify(nodes, null, 2));
};
const checkNodeStatus = () => {
  const dir = path.join(process.cwd(), "setting");
  const filePath = path.join(dir, "setting.json");
  if (!fs.existsSync(dir))
    return { exist: false };
  else {
    if (!fs.existsSync(filePath))
      return { exist: false };
    else {
      try {
        const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
        const address = getAddressFromFile();
        const { downloadableURL: _url } = data;
        const _node = data.nodeList.find((item) => item.nodeAddress === address.pub);
        return { exist: true, _node, _url };
      } catch {
        return { exist: false };
      }
    }
  }
};
const runCommand = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(`Error: ${stderr}`);
      } else {
        resolve(stdout.trim());
      }
    });
  });
};
const checkMongoDB = async () => {
  try {
    const mongoVersion = await runCommand("mongod --version");
    const versionMatch = mongoVersion.match(/db version v(\d+\.\d+\.\d+)/);
    if (versionMatch && parseFloat(versionMatch[1]) >= 5) {
      return { error: 0, min: "5.0", message: `MongoDB version is ${versionMatch[1]} (Compatible)` };
    } else {
      return {
        error: 1,
        min: "5.0",
        message: `MongoDB ${!versionMatch || versionMatch[1] ? "version is not compatible" : "not installed"}`
      };
    }
  } catch (error) {
    return { error: 1, min: "5.0", message: `MongoDB check failed: ${error}` };
  }
};
const checkRedis = async () => {
  try {
    const redisVersion = await runCommand("redis-server --version");
    const versionMatch = redisVersion.match(/v=(\d+\.\d+\.\d+)/);
    if (versionMatch && parseFloat(versionMatch[1]) >= 6) {
      return { error: 0, min: "6.0.8", message: `Redis version is ${versionMatch[1]} (Compatible)` };
    } else {
      return { error: 1, min: "6.0.8", message: "Redis version is not compatible or not installed" };
    }
  } catch (error) {
    return { error: 1, min: "6.0.8", message: `Redis check failed: ${error}` };
  }
};
const checkUbuntu = async () => {
  try {
    const ubuntuVersion = await runCommand("lsb_release -r");
    const versionMatch = ubuntuVersion.match(/Release:\s+(\d+\.\d+)/);
    if (versionMatch && parseFloat(versionMatch[1]) >= 20) {
      return { error: 0, min: "20.04.6", message: `Ubuntu version is ${versionMatch[1]} (Compatible)` };
    } else {
      return { error: 1, min: "20.04.6", message: "Ubuntu version is not compatible" };
    }
  } catch (error) {
    return { error: 1, min: "20.04.6", message: `Your OS is not Ubuntu. You can not install a node on this OS.` };
  }
};
const controlReq = async (request) => {
  const ubuntu = await checkUbuntu();
  const mongo = await checkMongoDB();
  const redis = await checkRedis();
  const path2 = new URL(request.url).pathname;
  if ((ubuntu.error || mongo.error || redis.error) && !path2.trim().endsWith("requirements")) {
    throw redirect("/requirements");
  } else
    return { ubuntu, mongo, redis };
};
async function getExternalIp() {
  try {
    const response = await axios.get("https://api.ipify.org?format=json");
    return response.data.ip;
  } catch (error) {
    return null;
  }
}
const ubuntu_img = "data:image/png;base64,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";
const mongo_img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARMSURBVHgB7ZrPbxVVFMe/586bea+tka5E3AgujEQXGkgfGhBcKW5cKWJIaDW2aIJ/gpKoiRsTpAm1JvQlGt24ETdsicbiI5Kw0oURG34FAgTKr74Z+u7h3Ck/Gpg3M9x7h5DAp+lkOve8O+875957zrlT4BEPGdtazXfHptZsQsUQKuTj1isvaug/mJnA/OrkBwf/QkVUJmR0ctUSFYaH5Q7Lzd8MOhKF+qXxLe2LqACFilBRuPumCIO45Jn5BOOoiEo8Mjb18mYi/gmZN6R3JkYO/AzPeBeSDqko+kcG07Ksdmac6qPGyp0j+y/AI96HVhCFX/USYSDCk3OY+wKe8eqRsT1Dq6FUmxY/IJafhTvR7UvQinhoYrh9CJ7w6xEVfEl39ckxk04WX0ltuuzVK948MrqnuVYp+j2jaVbmBcmQevzOBia1fnJ4+jd4wJtHFNHnWdclGMZEOkZ2ozeveBFivCG+3ZDVRooSOWQKkdiy7qNWcw084EVIQPiwZ6PWsWQoSa/mLnI+ew84z5GFuBGelNP+HiZ/azaOwcqsRmJcqUX8lGvq4uyRoF7bgt4iZBroWIZQ3LOdMHAtUZvhiLMQGTZb8y3M/KBOnoWkMyNwxEnI6A+rlkl0W51nY1Ys+aJJno0sz0NpXw44CaFu9ObiiJ0FI4gZqpPfkcyh+fB1OOAmhHldkY2E8BgFHkn7AtbCgRpcYG6aLDDXhMQjMpGKlkfN5BRPrD0y3NrQkK/3bKEhcyI3iYvMCPq57bs21mGJtZD+oLOCSnxegzuyxBYKEc8GnSXnnoYl1kJkpVlexi4AJYpLCDG23WAFLLGeI7pLg7KsFtpJUI9NsCmTQ0jpMghLrIWIiMdKGbKpR8xkL6FEUbk+M3ARQuZBlzCMF0QUe09BB7DEWojMkblShiT1iJZjmfSU1WVYYu8RRWdZF9uxlqEFoMzQkodzDpY4DC3MFA+WG4WVoYQxsZqBJdbL7xNHGv+aWqLITlL4DjQVB0Tpa+mx8D9YYi1kx47985qoXWSXVofEhUJkDk2bPmGJYz3CvxRaMJlSt9gjxHvhgJMQTq59L5P5fJ4NBeiU8Mhsnft+hANOQr4bOzQrk3lXng1xN6GczYcF+GvXvWDnUreBxk5ZkY72NOiqWCJn78KKMROG+AaOOAsxT1KRektOr2bfQcc6UNkeEYGyOfG2j5c/Xva1do9MH5bi6T1kiOmySlhn7jRelWG5ydfrOG9bppPvt/dK0veaxO//F1+vyS5j7Y6dRvMaTsStnxj+81d4wutu/LdbDxxsDNDzkut+Jon+mfRiIN4IbnrEXONP+wfwgu8Xo5W9DDWlcB/iNyR/WpreiHC6dmlw3/gn+0oVWQ8co63miW1TzeOoGLddlBJIDKnLAC6TXzpRuRBRUr/1+q1CqvcI6L4IqewfBlI4XUxCOUY3ziujUiHbxzdGJqk0v+Ycj3iIuA7WAooxfE9tfQAAAABJRU5ErkJggg==";
const redis_img = "data:image/png;base64,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";
const control = "_control_l8rps_1";
const image = "_image_l8rps_13";
const highlight = "_highlight_l8rps_31";
const title = "_title_l8rps_47";
const classes = {
  control,
  image,
  highlight,
  title
};
const loader$3 = async ({ request }) => {
  const result = await controlReq(request);
  return result;
};
const RequirementRow = ({ item }) => {
  const [opened, { close, open }] = useDisclosure(false);
  const [openedModal, { close: closeModal, open: openModal }] = useDisclosure(false);
  const navigation = useNavigation();
  return /* @__PURE__ */ jsx(Paper, { radius: "md", p: "xs", withBorder: true, style: { borderColor: item.error ? "var(--mantine-color-red-2)" : "var(--mantine-color-green-3)" }, children: /* @__PURE__ */ jsxs(Group, { wrap: "nowrap", gap: "xs", pl: "xs", justify: "space-between", children: [
    /* @__PURE__ */ jsxs(Group, { wrap: "nowrap", gap: "xs", children: [
      /* @__PURE__ */ jsx(Image, { src: item.img, h: 30 }),
      /* @__PURE__ */ jsx(Divider, { orientation: "vertical", variant: "dashed" }),
      /* @__PURE__ */ jsx(Stack, { gap: 0, miw: 30, align: "center", children: item.error ? /* @__PURE__ */ jsx(IconX, { color: "red" }) : /* @__PURE__ */ jsx(IconCheck, { color: "green" }) }),
      /* @__PURE__ */ jsx(Divider, { orientation: "vertical", variant: "dashed" }),
      /* @__PURE__ */ jsxs(Stack, { gap: 0, align: "center", ta: "center", children: [
        /* @__PURE__ */ jsx(Text, { size: "xs", miw: 80, children: "Minimum Ver." }),
        /* @__PURE__ */ jsx(Badge, { fullWidth: true, size: "xs", variant: "default", children: item.min })
      ] }),
      /* @__PURE__ */ jsx(Divider, { orientation: "vertical", variant: "dashed" }),
      /* @__PURE__ */ jsx(Text, { size: "xs", fw: 500, c: item.error ? "red" : "green", children: item.message })
    ] }),
    item.error && item.installable && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(Divider, { orientation: "vertical", variant: "dashed" }),
      /* @__PURE__ */ jsxs(Popover, { width: 200, position: "bottom", withArrow: true, shadow: "md", opened, children: [
        /* @__PURE__ */ jsx(Popover.Target, { children: /* @__PURE__ */ jsx(
          ActionIcon,
          {
            color: "dark.2",
            variant: "outline",
            onMouseEnter: open,
            onMouseLeave: close,
            onClick: openModal,
            children: /* @__PURE__ */ jsx(IconSettingsBolt, {})
          }
        ) }),
        /* @__PURE__ */ jsx(Popover.Dropdown, { children: /* @__PURE__ */ jsx(Text, { size: "sm", children: `Click to show installation instruction of ${item.name}.` }) })
      ] })
    ] }),
    item.error && item.installable && /* @__PURE__ */ jsx(Modal, { size: "lg", opened: openedModal, onClose: closeModal, withCloseButton: false, children: /* @__PURE__ */ jsxs(Stack, { p: "lg", c: "dark.2", children: [
      /* @__PURE__ */ jsxs(Group, { justify: "space-between", children: [
        /* @__PURE__ */ jsxs(Stack, { gap: 0, children: [
          /* @__PURE__ */ jsx(Title, { children: `Install: ${item.name}` }),
          /* @__PURE__ */ jsx(Text, { size: "xs", children: "* This installation instruction has created for Ubuntu OS" })
        ] }),
        /* @__PURE__ */ jsx(IconServerCog, { size: 60 })
      ] }),
      /* @__PURE__ */ jsx(
        CodeHighlight,
        {
          code: item.code,
          language: "shell",
          copyLabel: "Copy Code",
          copiedLabel: "Copied!"
        }
      ),
      /* @__PURE__ */ jsx(Group, { justify: "flex-end", children: /* @__PURE__ */ jsxs(Form, { method: "POST", children: [
        /* @__PURE__ */ jsx("input", { type: "hidden", name: "code", value: item.code }),
        /* @__PURE__ */ jsx(
          Button,
          {
            type: "submit",
            loading: navigation.state !== "idle",
            leftSection: /* @__PURE__ */ jsx(IconBolt, {}),
            children: `Click to install ${item.name}`
          }
        )
      ] }) })
    ] }) })
  ] }) });
};
function Requirements() {
  const { ubuntu, mongo, redis } = useLoaderData();
  const [systemStatus, setSystemStatus] = useState([]);
  const [ready, setReady] = useState(false);
  const actionData = useActionData();
  useEffect(() => {
    if (actionData) {
      showNotification({
        title: (actionData == null ? void 0 : actionData.error) ? "ERROR" : "SUCCESS",
        message: actionData.message,
        color: (actionData == null ? void 0 : actionData.error) ? "red" : "green",
        icon: (actionData == null ? void 0 : actionData.error) ? /* @__PURE__ */ jsx(IconBug, {}) : /* @__PURE__ */ jsx(IconCheck, {}),
        bg: (actionData == null ? void 0 : actionData.error) ? "red.0" : "green.0",
        onClose: () => {
          if (actionData == null ? void 0 : actionData.error)
            window.location.reload();
        }
      });
    }
  }, [actionData]);
  useEffect(() => {
    setSystemStatus([
      { ...ubuntu, name: "Ubuntu OS", img: ubuntu_img, installable: false },
      {
        ...mongo,
        name: "Mongo DB",
        img: mongo_img,
        installable: true,
        code: `yes | sudo apt-get install gnupg curl
curl -fsSL https://www.mongodb.org/static/pgp/server-6.0.asc | sudo gpg -o /usr/share/keyrings/mongodb-server-6.0.gpg --dearmor
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
yes | sudo apt-get update
yes | sudo apt-get install -y mongodb-org=6.0.13 mongodb-org-database=6.0.13 mongodb-org-server=6.0.13 mongodb-org-mongos=6.0.13 mongodb-org-tools=6.0.13
sleep 5
mongod --version`
      },
      {
        ...redis,
        name: "Redis Server",
        img: redis_img,
        installable: true,
        code: `yes | sudo apt update
yes | sudo apt install redis-server
systemctl restart redis-server
redis-server --version`
      }
    ]);
    setReady(!ubuntu.error && !mongo.error && !redis.error);
  }, [ubuntu, mongo, redis]);
  return /* @__PURE__ */ jsxs(Stack, { gap: 0, children: [
    /* @__PURE__ */ jsxs(Group, { align: "center", justify: "space-between", w: "100%", children: [
      /* @__PURE__ */ jsxs(Stack, { gap: 0, children: [
        /* @__PURE__ */ jsx(Title, { order: 2, c: "dark.3", children: "CHECK SYSTEM REQUIREMENTS" }),
        /* @__PURE__ */ jsx(Title, { order: 4, c: "dark.3", children: "Check Your Infrastructure is Prepared" }),
        /* @__PURE__ */ jsx(Text, { size: "xs", children: "Please complete all as compatible to start your instance on this server" })
      ] }),
      /* @__PURE__ */ jsx(Text, { size: "60px", variant: "gradient", gradient: { from: "gray.2", to: "dark.0", deg: 135 }, fw: 700, children: "1/4" })
    ] }),
    ubuntu.error ? /* @__PURE__ */ jsxs(Stack, { gap: "xs", mt: "md", children: [
      /* @__PURE__ */ jsx(Divider, {}),
      /* @__PURE__ */ jsxs(Stack, { align: "center", c: "dark.3", py: "lg", gap: "sm", children: [
        /* @__PURE__ */ jsx(IconMoodSad, { size: 60 }),
        /* @__PURE__ */ jsxs(Stack, { gap: 0, align: "center", mb: "xl", children: [
          /* @__PURE__ */ jsx(Title, { order: 2, children: "Your OS is not eligible to install" }),
          /* @__PURE__ */ jsx(Title, { order: 2, children: "a subchain node" })
        ] }),
        /* @__PURE__ */ jsx(Title, { order: 4, children: "Min. System. Requirements" }),
        /* @__PURE__ */ jsx(Divider, { w: "50%" }),
        /* @__PURE__ */ jsxs(List, { type: "unordered", children: [
          /* @__PURE__ */ jsx(List.Item, { children: "Ubuntu OS: 20 or higher" }),
          /* @__PURE__ */ jsx(List.Item, { children: "Mongo DB: 5 or higher" }),
          /* @__PURE__ */ jsx(List.Item, { children: "Redis-Server: 6 or higher" })
        ] })
      ] })
    ] }) : /* @__PURE__ */ jsxs(Stack, { gap: "xs", mt: "md", children: [
      /* @__PURE__ */ jsx(Divider, {}),
      systemStatus.map(
        (item, index) => /* @__PURE__ */ jsx(RequirementRow, { item }, index)
      )
    ] }),
    /* @__PURE__ */ jsxs(Group, { mt: 30, justify: "space-between", w: "100%", children: [
      /* @__PURE__ */ jsx(NavLink, { to: "/", unstable_viewTransition: true, children: /* @__PURE__ */ jsx(Button, { variant: "default", radius: "sm", size: "md", className: classes.control, children: /* @__PURE__ */ jsx(IconHome, { color: "gray" }) }) }),
      ready && /* @__PURE__ */ jsx(NavLink, { to: "/new", unstable_viewTransition: true, children: /* @__PURE__ */ jsx(Button, { rightSection: /* @__PURE__ */ jsx(IconArrowRight, {}), children: "Next Step to Proceed" }) })
    ] })
  ] });
}
const action$3 = async ({ request }) => {
  const formData = await request.formData();
  const code = formData.get("code");
  if (!code)
    return { error: 1, message: "Execution Code is Missing!" };
  try {
    const errors = [];
    await Promise.all(
      code.trim().split("\n").map(
        (command) => execSync(command.trim()).toString().trim()
      )
    );
    if (errors.length)
      return { error: 1, message: "There is an error!" };
    return { error: 0, message: "Installation has been succeed!" };
  } catch (error) {
    return { error: 1, message: error };
  }
};
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$3,
  default: Requirements,
  loader: loader$3
}, Symbol.toStringTag, { value: "Module" }));
function CustomQrCode({ code, size }) {
  return /* @__PURE__ */ jsx(
    QRCode,
    {
      value: code,
      ecLevel: "Q",
      fgColor: "#555555",
      size: size ?? 100
    }
  );
}
function CustomPassInput(props) {
  const [value, setValue] = useState("");
  return /* @__PURE__ */ jsx(
    PasswordInput,
    {
      value,
      onChange: (event) => setValue(event.currentTarget.value),
      ...props
    }
  );
}
const passwordRequirements = [
  { re: /[0-9]/, label: "Includes number [0..9]" },
  { re: /[a-z]/, label: "Includes lowercase letter [a-z]" },
  { re: /[A-Z]/, label: "Includes uppercase letter [A-Z]" },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "Includes special symbol [$&+,:;=?@#|'<>.^*()%!-]" }
];
function getStrength(password) {
  let multiplier = password.length > 9 ? 0 : 1;
  passwordRequirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });
  return Math.max(100 - 100 / (passwordRequirements.length + 1) * multiplier, 0);
}
const subchains_lottie = "/assets/subchains-BU8G9jTW.lottie";
const require2 = createRequire(import.meta.url);
const speakeasy = require2("speakeasy");
const loader$2 = async ({ request }) => {
  await controlReq(request);
  const dir = path__default.join(process__default.cwd(), "app");
  const filePath = path__default.join(dir, "commands", "install.sh");
  const data = fs__default.readFileSync(filePath, "utf8");
  const ip = await getExternalIp();
  return { command: data, ip };
};
function PasswordRequirement({ meets, label }) {
  return /* @__PURE__ */ jsxs(
    Text,
    {
      c: meets ? "teal" : "red",
      style: { display: "flex", alignItems: "center" },
      mt: 7,
      size: "sm",
      children: [
        meets ? /* @__PURE__ */ jsx(IconCheck, { style: { width: rem(14), height: rem(14) } }) : /* @__PURE__ */ jsx(IconX, { style: { width: rem(14), height: rem(14) } }),
        " ",
        /* @__PURE__ */ jsx(Box, { ml: 10, children: label })
      ]
    }
  );
}
function Validate() {
  var _a;
  const navigation = useNavigation();
  const { command, ip } = useLoaderData();
  const actionData = useActionData();
  const [secret, setSecret] = useState(null);
  const [verified, setVerified] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useInputState("");
  const [success, setSuccess] = useState(false);
  const [popoverOpened, setPopoverOpened] = useState(false);
  const checks = passwordRequirements.map((requirement, index) => /* @__PURE__ */ jsx(PasswordRequirement, { label: requirement.label, meets: requirement.re.test(password) }, index));
  const strength = getStrength(password);
  const color = strength === 100 ? "teal" : strength > 50 ? "yellow" : "red";
  useEffect(() => {
    if (actionData) {
      if (actionData.secret) {
        setSecret(actionData.secret);
        if (actionData.type === "verify") {
          setVerified(actionData.verified);
        }
      } else {
        setSuccess(!actionData.error);
        showNotification({
          title: actionData.error ? "ERROR" : "SUCCESS",
          message: actionData.message,
          color: actionData.error ? "red" : "green",
          bg: actionData.error ? "red.0" : "green.0",
          icon: actionData.error ? /* @__PURE__ */ jsx(IconBug, {}) : /* @__PURE__ */ jsx(IconCheck, {}),
          onClose: () => {
            if (!actionData.error || actionData.result)
              window.location.href = `http://${ip}:1459`;
          }
        });
      }
    }
  }, [actionData]);
  return /* @__PURE__ */ jsxs(Stack, { gap: 0, children: [
    /* @__PURE__ */ jsxs(Group, { align: "center", justify: "space-between", w: "100%", children: [
      /* @__PURE__ */ jsxs(Stack, { gap: 0, children: [
        /* @__PURE__ */ jsx(Title, { order: 2, c: "dark.3", children: "SECURITY & SETUP" }),
        /* @__PURE__ */ jsx(Title, { order: 4, c: "dark.3", children: "Security Settings & Node Setup" }),
        /* @__PURE__ */ jsx(Text, { size: "xs", children: "Please follow all safety precautions below to complete your setup." })
      ] }),
      /* @__PURE__ */ jsx(Text, { size: "60px", variant: "gradient", gradient: { from: "gray.2", to: "dark.0", deg: 135 }, fw: 700, children: "4/4" })
    ] }),
    success ? /* @__PURE__ */ jsxs(Stack, { mt: "md", children: [
      /* @__PURE__ */ jsx(Divider, { w: "100%" }),
      /* @__PURE__ */ jsxs(Stack, { align: "center", py: "xl", gap: 0, c: "green", children: [
        /* @__PURE__ */ jsx(IconCircleCheck, { size: 80, color: "green" }),
        /* @__PURE__ */ jsx(Title, { order: 2, children: "Installation has been succeed" }),
        /* @__PURE__ */ jsx(Title, { order: 6, children: "You are being redirected to your node admin panel..." }),
        /* @__PURE__ */ jsx(Title, { order: 5, mt: "md", children: `http://${ip}:1459` })
      ] })
    ] }) : !((_a = navigation.formData) == null ? void 0 : _a.getAll("2fa")[0]) && navigation.state !== "idle" ? /* @__PURE__ */ jsxs(Stack, { mt: "md", align: "center", c: "dark.2", children: [
      /* @__PURE__ */ jsx(Divider, { w: "100%" }),
      /* @__PURE__ */ jsxs(Stack, { align: "center", children: [
        /* @__PURE__ */ jsx(Center, { mt: "xl", pos: "relative", w: 150, h: 150, children: /* @__PURE__ */ jsx(
          DotLottieReact,
          {
            src: subchains_lottie,
            autoplay: true,
            loop: true,
            style: { width: 200, height: 200, position: "absolute" }
          }
        ) }),
        /* @__PURE__ */ jsx(Title, { order: 2, children: "Subchain Node is installing.." }),
        /* @__PURE__ */ jsx(Title, { order: 4, children: "Please wait on this screen until it is completed!" }),
        /* @__PURE__ */ jsx(Title, { order: 5, children: "Nearly done.." }),
        /* @__PURE__ */ jsx(Loader, { type: "dots" })
      ] })
    ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs(Stack, { mt: "md", children: [
        /* @__PURE__ */ jsx(Divider, {}),
        /* @__PURE__ */ jsxs(Stack, { w: "100%", c: "dark.2", children: [
          /* @__PURE__ */ jsxs(Stack, { gap: 0, children: [
            /* @__PURE__ */ jsx(Title, { order: 5, children: "Admin Panel Security" }),
            /* @__PURE__ */ jsx(Text, { size: "sm", children: "Please create Admin Panel username / password of this node and keep all in safe!" })
          ] }),
          /* @__PURE__ */ jsxs(Group, { justify: "space-between", grow: true, children: [
            /* @__PURE__ */ jsx(
              TextInput,
              {
                w: "100%",
                label: "Username",
                placeholder: "Please create admin panel username",
                description: "Must be at least 5 characters.",
                name: "username",
                value: username,
                onChange: (event) => setUsername(event.currentTarget.value),
                required: true
              }
            ),
            /* @__PURE__ */ jsxs(
              Popover,
              {
                opened: popoverOpened,
                position: "bottom",
                width: "target",
                transitionProps: { transition: "pop" },
                children: [
                  /* @__PURE__ */ jsx(Popover.Target, { children: /* @__PURE__ */ jsx(
                    Stack,
                    {
                      w: "100%",
                      onFocusCapture: () => setPopoverOpened(true),
                      onBlurCapture: () => setPopoverOpened(false),
                      children: /* @__PURE__ */ jsx(
                        CustomPassInput,
                        {
                          w: "100%",
                          label: "Password",
                          placeholder: "Please create admin panel password",
                          description: "Must contain [A-Z], [a-z], [0..9] and special chars.",
                          type: "password",
                          name: "password",
                          value: password,
                          onChange: setPassword,
                          required: true
                        }
                      )
                    }
                  ) }),
                  /* @__PURE__ */ jsxs(Popover.Dropdown, { children: [
                    /* @__PURE__ */ jsx(Progress, { color, value: strength, size: 5, mb: "xs" }),
                    /* @__PURE__ */ jsx(
                      PasswordRequirement,
                      {
                        label: "Includes at least 10 characters",
                        meets: password.length > 9
                      }
                    ),
                    checks
                  ] })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx(Divider, {}),
        /* @__PURE__ */ jsxs(Group, { justify: "space-between", c: "dark.2", wrap: "nowrap", children: [
          /* @__PURE__ */ jsx(Center, { w: 360, children: /* @__PURE__ */ jsx(Paper, { withBorder: true, radius: "md", w: 180, h: 180, bg: "gray.0", children: /* @__PURE__ */ jsx(Stack, { gap: 0, align: "center", justify: "center", h: "100%", children: secret ? /* @__PURE__ */ jsx(CustomQrCode, { code: secret.otpauth_url, size: 154 }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(Title, { order: 4, children: "2FA QR" }),
            /* @__PURE__ */ jsx(Title, { order: 4, children: "CODE" })
          ] }) }) }) }),
          /* @__PURE__ */ jsxs(Stack, { w: "100%", children: [
            /* @__PURE__ */ jsxs(Stack, { gap: 0, w: "100%", children: [
              /* @__PURE__ */ jsx(Title, { order: 3, children: "Powerful Protection" }),
              /* @__PURE__ */ jsx(Title, { order: 6, children: "Your node will cover with your 2FA" })
            ] }),
            secret ? verified ? /* @__PURE__ */ jsxs(Stack, { gap: 0, children: [
              /* @__PURE__ */ jsx(
                Badge,
                {
                  size: "lg",
                  radius: "md",
                  color: "green",
                  leftSection: /* @__PURE__ */ jsx(IconChecks, {}),
                  children: "OTP CODE HAS BEEN VERIFIED"
                }
              ),
              /* @__PURE__ */ jsx(Text, { size: "sm", children: "You will use generated code/s to login to node admin panel. We care your security!" })
            ] }) : /* @__PURE__ */ jsx(Fieldset, { legend: "Verify Your OTP", children: /* @__PURE__ */ jsx(Form, { method: "POST", style: { width: "100%" }, children: /* @__PURE__ */ jsxs(Group, { wrap: "nowrap", children: [
              /* @__PURE__ */ jsx(PinInput, { length: 6, name: "token" }),
              /* @__PURE__ */ jsx("input", { type: "hidden", name: "secret", value: JSON.stringify(secret) }),
              /* @__PURE__ */ jsx("input", { type: "hidden", name: "ip", value: ip }),
              /* @__PURE__ */ jsx(
                ActionIcon,
                {
                  size: "lg",
                  variant: "light",
                  type: "submit",
                  name: "2fa",
                  value: "verify",
                  children: /* @__PURE__ */ jsx(IconPuzzle, {})
                }
              )
            ] }) }) }) : /* @__PURE__ */ jsxs(Stack, { w: "100%", children: [
              /* @__PURE__ */ jsx(Text, { size: "sm", children: "Please generate a 2FA Code and use it on your Authenticator device (mobile, pc, etc..)" }),
              /* @__PURE__ */ jsx(Form, { method: "POST", style: { width: "100%" }, children: /* @__PURE__ */ jsx(
                Button,
                {
                  fullWidth: true,
                  type: "submit",
                  leftSection: /* @__PURE__ */ jsx(IconQrcode, {}),
                  name: "2fa",
                  value: "generate",
                  children: "Generate 2FA Code"
                }
              ) })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Divider, { mt: "md" }),
      /* @__PURE__ */ jsxs(Group, { mt: 16, justify: "space-between", w: "100%", children: [
        /* @__PURE__ */ jsx(NavLink, { to: "/node", unstable_viewTransition: true, children: /* @__PURE__ */ jsx(
          Button,
          {
            variant: "default",
            radius: "sm",
            size: "md",
            className: classes.control,
            leftSection: /* @__PURE__ */ jsx(IconArrowBack, {}),
            children: "Back"
          }
        ) }),
        /* @__PURE__ */ jsxs(Form, { method: "POST", children: [
          /* @__PURE__ */ jsx("input", { type: "hidden", name: "command", value: command }),
          /* @__PURE__ */ jsx("input", { type: "hidden", name: "secret", value: secret == null ? void 0 : secret.base32 }),
          /* @__PURE__ */ jsx("input", { type: "hidden", name: "username", value: username }),
          /* @__PURE__ */ jsx("input", { type: "hidden", name: "password", value: password }),
          /* @__PURE__ */ jsx(
            Button,
            {
              disabled: !verified || !command || !secret || !username || !password || strength !== 100,
              type: "submit",
              rightSection: /* @__PURE__ */ jsx(IconBolt, {}),
              children: "Start Installation"
            }
          )
        ] })
      ] })
    ] })
  ] });
}
const action$2 = async ({ request }) => {
  var _a, _b;
  const formData = await request.formData();
  if (formData.getAll("2fa")[0] === "generate") {
    const hostname = os.hostname();
    const ip = formData.get("ip") ?? await getExternalIp();
    const secret = speakeasy.generateSecret({ name: `PIRI Sub-Chains: ${hostname}:${ip}` });
    return { type: "generate", secret };
  } else if (formData.getAll("2fa")[0] === "verify") {
    const _secret = formData.get("secret");
    if (!_secret)
      return { error: 1, message: "OTP Secret is missing!" };
    const token = formData.get("token");
    if (!token)
      return { error: 1, message: "You need to send your Token to verfiy your OTP!" };
    const secret = JSON.parse(_secret);
    const verified = speakeasy.totp.verify({ secret: secret.base32, encoding: "base32", token });
    return { type: "verify", verified, secret };
  }
  try {
    const command = formData.get("command");
    if (!command)
      return { error: 1, message: "Installation Script is missing!" };
    const secret = formData.get("secret");
    if (!secret)
      return { error: 1, message: "2FA Security is required!" };
    const username = formData.get("username");
    if (!username || username.length < 5)
      return { error: 1, message: "Username is mandatory and at least 5 character!" };
    const password = formData.get("password");
    if (!password || getStrength(password) < 100)
      return { error: 1, message: "Please check your password strength requirement!" };
    const filePath = path__default.join("app", "commands", "install.sh");
    execSync(`chmod +x ${filePath}`);
    const result = execSync(`bash ${filePath}`, { stdio: "pipe" });
    const hanFilePath = path__default.join("/root/pirichain/bin", "han.json");
    const hanFileData = fs__default.readFileSync(hanFilePath, { encoding: "utf8" });
    const han = JSON.parse(hanFileData);
    const address = getAddressFromFile();
    const dir = path__default.join(process__default.cwd(), "setting");
    const settingFilePath = path__default.join(dir, "setting.json");
    const nodes = JSON.parse(fs__default.readFileSync(settingFilePath, "utf8"));
    han.NODE_NAME = (_a = nodes.nodeList.find((item) => item.nodeAddress === address.pub)) == null ? void 0 : _a.nodeAlias;
    han.NODE_ADDRESS = address.pub;
    han.NODE_PUB = address.publicKey;
    han.GENESIS_ADDRESS = (_b = nodes.nodeList.find((item) => item.genesis !== "")) == null ? void 0 : _b.genesis;
    han.TX_CONFIRMATION_COUNT = nodes.nodeList[0].txConfirmation ?? 3;
    han.IP_ADDRESS = await getExternalIp();
    han.ROF = nodes.ROF;
    han.MAINNET_NODES = nodes.nodeList.map((item) => {
      return {
        "ip": item.nodeIP,
        "name": item.nodeAlias,
        "address": item.nodeAddress,
        "server": false
      };
    });
    fs__default.writeFileSync(hanFilePath, JSON.stringify(han));
    changeAuth(username, password);
    update2FA(secret);
    execSync("sudo systemctl daemon-reload");
    execSync("sudo systemctl enable piriChain");
    execSync("sudo systemctl restart piriChain");
    return { error: 0, message: "Your node has been installed successfully", result: result.toString() };
  } catch (error) {
    return { error: 1, message: error };
  }
};
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$2,
  default: Validate,
  loader: loader$2
}, Symbol.toStringTag, { value: "Module" }));
function Index() {
  return /* @__PURE__ */ jsxs(Stack, { gap: 0, children: [
    /* @__PURE__ */ jsxs(Title, { className: classes.title, children: [
      "A unique ",
      /* @__PURE__ */ jsx("span", { className: classes.highlight, children: "Blockchain" }),
      " designed for your ",
      /* @__PURE__ */ jsx(
        "span",
        {
          className: classes.title,
          style: { color: "var(--mantine-color-red-4)" },
          children: "business and data"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(Group, { gap: "xs", children: [
      /* @__PURE__ */ jsx(Title, { className: classes.title, children: "by" }),
      /* @__PURE__ */ jsx(Text, { className: classes.title, variant: "gradient", gradient: { from: "red", to: "blue", deg: 45 }, children: "PIRICHAIN" })
    ] }),
    /* @__PURE__ */ jsx(Text, { c: "dimmed", mt: "md", children: "You will rid yourself of external applications and high costs to integrate your business and data into the blockchain, enabling you to freely establish technology within your own sub-chain ecosystem." }),
    /* @__PURE__ */ jsxs(
      List,
      {
        mt: 30,
        spacing: "sm",
        size: "sm",
        children: [
          /* @__PURE__ */ jsxs(List.Item, { icon: /* @__PURE__ */ jsx(ThemeIcon, { size: 40, radius: "sm", color: "gray", children: /* @__PURE__ */ jsx(IconDatabaseStar, { style: { width: rem(28), height: rem(28) }, stroke: 1.5 }) }), children: [
            /* @__PURE__ */ jsx("b", { children: "Blockchain for Data" }),
            " – With three different encryption variations, you will be able to securely process your data on your blockchain."
          ] }),
          /* @__PURE__ */ jsxs(List.Item, { icon: /* @__PURE__ */ jsx(ThemeIcon, { size: 40, radius: "sm", color: "green", children: /* @__PURE__ */ jsx(IconShieldBolt, { style: { width: rem(28), height: rem(28) }, stroke: 1.5 }) }), children: [
            /* @__PURE__ */ jsx("b", { children: "D.V.P.A. " }),
            " – (Domain Verified PIRI Address) With this feature bringing domain-based security to your business, preventing fraud targeting or using your brand will be very easy."
          ] }),
          /* @__PURE__ */ jsxs(List.Item, { icon: /* @__PURE__ */ jsx(ThemeIcon, { size: 40, radius: "sm", children: /* @__PURE__ */ jsx(IconEngine, { style: { width: rem(32), height: rem(32) }, stroke: 1.5 }) }), children: [
            /* @__PURE__ */ jsx("b", { children: "Pirichain Smart Scenarios" }),
            " – With Pirichain Smart Scenarios based on JavaScript, you will have a technology that can easily integrate with your existing code, instantly retrieve and process external data, and export it instantly. Get ready for a smart scenario experience beyond boundaries!"
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx(Group, { mt: 30, justify: "flex-end", children: /* @__PURE__ */ jsx(NavLink, { to: "/requirements", unstable_viewTransition: true, children: /* @__PURE__ */ jsx(
      Button,
      {
        variant: "default",
        radius: "sm",
        size: "md",
        className: classes.control,
        rightSection: /* @__PURE__ */ jsx(IconRocket, {}),
        children: "Start to Build Your Sub-Chain"
      }
    ) }) })
  ] });
}
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index
}, Symbol.toStringTag, { value: "Module" }));
const checkDownload = async (request, url) => {
  const urlencoded = new URLSearchParams();
  urlencoded.append("url", url);
  return await sendRequest(request, "/checkDownloadLink", "POST", urlencoded);
};
async function loader$1({ request }) {
  await controlReq(request);
  const { exist, _node, _url } = checkNodeStatus();
  if (!exist)
    return redirect("/new");
  else {
    const fileStatus = await checkDownload(request, _url);
    return { _node, _url, fileStatus };
  }
}
function Node() {
  const { _node, _url, fileStatus } = useLoaderData();
  const actionData = useActionData();
  const navigation = useNavigation();
  useEffect(() => {
    if (actionData == null ? void 0 : actionData.error) {
      showNotification({
        title: "ERROR",
        message: actionData == null ? void 0 : actionData.message,
        color: "red",
        icon: /* @__PURE__ */ jsx(IconBug, {}),
        bg: "red.0"
      });
    }
  }, [actionData]);
  return /* @__PURE__ */ jsxs(Stack, { gap: 0, children: [
    /* @__PURE__ */ jsxs(Group, { align: "center", justify: "space-between", w: "100%", wrap: "nowrap", children: [
      /* @__PURE__ */ jsxs(Stack, { gap: 0, children: [
        /* @__PURE__ */ jsx(Title, { order: 2, c: "dark.3", children: "NODE INFORMATION" }),
        /* @__PURE__ */ jsx(Title, { order: 4, c: "dark.3", children: "Saved Node Information for Subchain" }),
        /* @__PURE__ */ jsx(Text, { size: "xs", children: "You can check your node instance on this server and downloadable generated package." })
      ] }),
      /* @__PURE__ */ jsx(Text, { size: "60px", variant: "gradient", gradient: { from: "gray.2", to: "dark.0", deg: 135 }, fw: 700, children: "3/4" })
    ] }),
    /* @__PURE__ */ jsxs(Stack, { gap: 2, mt: "md", children: [
      /* @__PURE__ */ jsx(Divider, {}),
      _node ? /* @__PURE__ */ jsxs(Stack, { c: "dark.2", gap: 0, children: [
        /* @__PURE__ */ jsxs(Stack, { p: "lg", gap: "xs", children: [
          /* @__PURE__ */ jsxs(Group, { children: [
            /* @__PURE__ */ jsx(IconLicense, {}),
            /* @__PURE__ */ jsxs(Stack, { gap: 0, children: [
              /* @__PURE__ */ jsx(Text, { size: "xs", children: "Licence Key" }),
              /* @__PURE__ */ jsx(Text, { size: "sm", children: _node.networkLicenceKey })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Group, { children: [
            /* @__PURE__ */ jsx(IconHexagonLetterG, {}),
            /* @__PURE__ */ jsxs(Stack, { gap: 0, children: [
              /* @__PURE__ */ jsx(Text, { size: "xs", children: "Genesis Address" }),
              /* @__PURE__ */ jsx(Text, { size: "sm", children: _node.genesis })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Group, { justify: "space-between", grow: true, children: [
            /* @__PURE__ */ jsxs(Group, { children: [
              /* @__PURE__ */ jsx(IconTag, {}),
              /* @__PURE__ */ jsxs(Stack, { gap: 0, children: [
                /* @__PURE__ */ jsx(Text, { size: "xs", children: "Node Alias" }),
                /* @__PURE__ */ jsx(Text, { size: "sm", children: _node.nodeAlias })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Group, { children: [
              /* @__PURE__ */ jsx(IconNetwork, {}),
              /* @__PURE__ */ jsxs(Stack, { gap: 0, children: [
                /* @__PURE__ */ jsx(Text, { size: "xs", children: "IP Address" }),
                /* @__PURE__ */ jsx(Text, { size: "sm", children: _node.nodeIP })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Group, { justify: "space-between", grow: true, children: [
            /* @__PURE__ */ jsxs(Group, { children: [
              /* @__PURE__ */ jsx(IconCalendarBolt, {}),
              /* @__PURE__ */ jsxs(Stack, { gap: 0, children: [
                /* @__PURE__ */ jsx(Text, { size: "xs", children: "Node Creation Time" }),
                /* @__PURE__ */ jsx(Text, { size: "sm", children: new Date(_node.createdAt).toLocaleString() })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Group, { children: [
              /* @__PURE__ */ jsx(IconWorldWww, {}),
              /* @__PURE__ */ jsxs(Stack, { gap: 0, children: [
                /* @__PURE__ */ jsx(Text, { size: "xs", children: "Sub-Domain Address" }),
                /* @__PURE__ */ jsx(Text, { size: "sm", children: _node.subDomainAddress || "N/A" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Group, { children: [
            /* @__PURE__ */ jsx(IconCube, {}),
            /* @__PURE__ */ jsxs(Stack, { gap: 0, children: [
              /* @__PURE__ */ jsx(Text, { size: "xs", children: "Node Address" }),
              /* @__PURE__ */ jsx(Text, { size: "sm", children: _node.nodeAddress })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(Paper, { py: "sm", px: "lg", w: "100%", withBorder: true, children: /* @__PURE__ */ jsxs(Group, { justify: "space-between", children: [
          /* @__PURE__ */ jsxs(Group, { children: [
            /* @__PURE__ */ jsx(IconCloudDownload, {}),
            /* @__PURE__ */ jsxs(Stack, { gap: 0, children: [
              /* @__PURE__ */ jsx(Text, { size: "xs", children: "Generation Package ID" }),
              /* @__PURE__ */ jsx(Text, { size: "sm", children: new URL(_url).pathname.split("/")[1] })
            ] }),
            /* @__PURE__ */ jsx(Divider, { orientation: "vertical", variant: "dashed" }),
            /* @__PURE__ */ jsxs(Stack, { gap: 0, children: [
              /* @__PURE__ */ jsx(Text, { size: "xs", children: "Generation Status" }),
              /* @__PURE__ */ jsx(Badge, { variant: "light", color: fileStatus ? "green" : "gray", children: fileStatus ? "Ready" : "Not Ready" })
            ] })
          ] }),
          !fileStatus && /* @__PURE__ */ jsx(Button, { rightSection: /* @__PURE__ */ jsx(IconRefresh, {}), onClick: () => window.location.reload(), children: "Check Status" })
        ] }) })
      ] }) : /* @__PURE__ */ jsx(Stack, { align: "center", children: /* @__PURE__ */ jsx(Title, { order: 2, children: "Missing Node Information!.." }) })
    ] }),
    /* @__PURE__ */ jsxs(Group, { mt: 30, justify: "space-between", w: "100%", children: [
      /* @__PURE__ */ jsxs(Group, { children: [
        /* @__PURE__ */ jsx(NavLink, { to: "/", unstable_viewTransition: true, children: /* @__PURE__ */ jsx(Button, { variant: "default", radius: "sm", size: "md", className: classes.control, children: /* @__PURE__ */ jsx(IconHome, { color: "gray" }) }) }),
        /* @__PURE__ */ jsx(NavLink, { to: "/new", unstable_viewTransition: true, children: /* @__PURE__ */ jsx(Button, { disabled: true, variant: "default", radius: "sm", size: "md", className: classes.control, leftSection: /* @__PURE__ */ jsx(IconArrowBack, {}), children: "Reset" }) })
      ] }),
      /* @__PURE__ */ jsxs(Form, { method: "POST", children: [
        /* @__PURE__ */ jsx("input", { type: "hidden", name: "url", value: _url }),
        /* @__PURE__ */ jsx(
          Button,
          {
            type: "submit",
            disabled: !fileStatus,
            radius: "sm",
            size: "md",
            className: classes.control,
            loading: navigation.state !== "idle",
            rightSection: /* @__PURE__ */ jsx(IconArrowRight, {}),
            name: "_action",
            value: "download",
            children: "Download File"
          }
        )
      ] })
    ] })
  ] });
}
const action$1 = async ({ request }) => {
  const formData = await request.formData();
  const url = formData.get("url");
  if (!url)
    return { error: 1, message: "Missing Downloadable URL!" };
  else {
    if (!await checkDownload(request, url))
      return { error: 1, message: "No such a file to download for this Generation Package ID yet or ever never been!" };
    else {
      try {
        const download_sh_file = path__default.join(process__default.cwd(), "app", "commands", "download.sh");
        execSync(`bash ${download_sh_file} ${url}`, { stdio: "inherit", shell: "/bin/bash" });
        return redirect("/validate");
      } catch (error) {
        return { error: 1, message: error };
      }
    }
  }
};
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$1,
  default: Node,
  loader: loader$1
}, Symbol.toStringTag, { value: "Module" }));
const licence_lottie = "data:application/octet-stream;base64,UEsDBBQAAAAAAOJ4VViIAhbTBAEAAAQBAAANAAAAbWFuaWZlc3QuanNvbnsidmVyc2lvbiI6IjEuMCIsInJldmlzaW9uIjoxLCJrZXl3b3JkcyI6IiIsImF1dGhvciI6IkxvdHRpZUZpbGVzIiwiZ2VuZXJhdG9yIjoiZG90TG90dGllLWpzIiwiYW5pbWF0aW9ucyI6W3siaWQiOiI0ZmZiM2NjNC01NzEyLTRkMmYtOWEzYS0zZWVlNTNjYTQ5YTEiLCJkaXJlY3Rpb24iOjEsInNwZWVkIjoxLCJwbGF5TW9kZSI6Im5vcm1hbCIsImxvb3AiOmZhbHNlLCJhdXRvcGxheSI6ZmFsc2UsImhvdmVyIjpmYWxzZSwiaW50ZXJtaXNzaW9uIjowfV19UEsDBBQAAAAIAOJ4VVgCyJv0JwkAAH87AAA0AAAAYW5pbWF0aW9ucy80ZmZiM2NjNC01NzEyLTRkMmYtOWEzYS0zZWVlNTNjYTQ5YTEuanNvbu1bWW/cNhD+Kws9S4TES5LfeqNAiwZtWqAw+rBNNrERX9jdtA2C/Pd+35C6tfYm3jiOYwSxlqOZITkczkXqbfJPcpQ4VaoqSZMX6+TI52lyepUc4XGJh7b48W9y5AqdJifxeXEOop++evL0lyeL37775vdff3z6J8ifP38udMvNZrXdJEfHf6XJ2fLNas3fb9vXpxd4FmmyfZMc2YYZ0RZ68cvr7dnpxWoDbhsMBlivQPw2ueSfpZC/Ajgnm//wo3iXJsDrvWve5HiD8ffeHGvnlKltqq1RpS7SHOMjLmZ0hr8gAG6foFTalWmRK6tNi40xRWwZWYfNUcX/EdVHVHLGDIC3OVleYXYUB6efvFxjpqdbAYhcgCMvNid8EboLImg7AibwjwtlnOWojtElfjv5FdqZUbqMbYwFfR8fZ32CKVrHBgRQimO0vcq1x5tMK+uK1ChXmq6JR+lIPtsMyOD1LDnarl+vIAORNZ6y4k+W25NFgUmeX6D11bdff7f4Y/Vse7le/EYZLbLFD+vL11dAOIFYXizPNmARpfbiDGDw7Usfc8C/IkreopsdOuOCykCuf2McAMpwvj89O5sfzg/r5dXJ6TMMiDiz49lyFUfKViqndVpYiKFRs6mCieDDMu/Up4hgdmm63z3VkkxFY8ZElM9mOJieeEQiT9fLi82Ly/V58g5DEJCsiEjpgqYBaxC3T5Rk1NcZEe5ayVvpf15AnVWeW+pkoQrn0/CIyuxN1dd+b2rRc6LUeF2IagsD0uWFYAfVV9oLM1dyW/Gt8SBxnvqvVZGX6Bk4h1fwvnXspAAZz0uBlkynYRYyt9yaVEP3sBM47tpg2HXctdRIzsUSFdsfO1b3RMQm5hUnbCEVkEAqZFvjDdmJvSAYdrFlJOZ0JLwSIyJu5lTtOaRKkDNsiBzGgg+2CYekiaTRFKr9RKs/zHacn5MOXCBjYfbzav1ytSDLzfxyYdtv4ZyyhWB+xgZJY4OIS3tgBomaQIOEYGLGIKG1h0HipLqox3PAG5glPIQVJTuIX8B1Gr+YjxS/kE0wkQTgLZDQOYmFMSHKGCNQEmLkjjOIQY/Hwhc1YrwYxmy537H/c+WxjwVCY4LFjwAxRIO+yLXrq/BlgPJX6K+a9GdVMewvKFfT1bgbVcUJDKfVdhW6KfbpZzytdqKyQbB4BSQ6LxxRhOtiQl0rW9eIIZXxXQh5q6DwZLn5ecltQVsHbcXvzZP15dVqvT2NweLpBUyraCreXz5f0Tdwi2MyH6whtg5CiJ6kCQKHfxvnsPOtmPxaGbgdi/Daid8xysKMj9sej5JON6DHZs/Mf4hCNPpwuFnkyiFw6GYxartKeQkDAnps7p6Fj+PdT63v2TRksxx8aLfXk56T2mFa6Z7wmPc0wfFjn8HDktcB07Iw6awwnFP4jdU2DtETQTPCQXiFRCsiA9cSlxAGRDMSHnLrdTRlzK4H7OKvaxcpo22zVWpVVcoQEJMhYitqpY2Ev3xdt69jE4+i4CLCQOqZ9ohb+zobvW/aPYQwnAj4cjNK8TwiB3ieBxbCHSKnjCFchspOCOLEwUVHNx/Fwb9Mozj78atQyI9YhKqrEKZcG3CYSpU5lh2ROx73rQoVzUdIorXSFbdsND5swvg0uWlrkvKc+aCuQp5OYMAMiL10tAO2dko6miOe72YwpM7AYSchHsy0hjGUrNSgXIXiWFaUSHF7ALZDnSDStCTj9phgzHHU56euG1hV1zDDlBKDgk66tPt13cmRLVmEDk2oMBW8apdh6P8D1Sz3AVUaxzHLX8bRrFkjbq9qJ1HMBIB9Yl3VW7EI6Na0XYKGZgIYkwx5PhYkDurP+obtoZUkGn82X5J4L3+2d0kCfU2dmbsDZ4YE2uTIH7S/2ZshhFOmwKpj7SUM/VTp8/K26fMB0yJ4qcrA7CAi0OKOPDqbtnEQlUteFPFj+31Tz9E8ysPNQ2MvFx415n0n0hDcNJM9VsPc32lwePVHHJ5GSuDnAHsN8P6m0jid9OHIJsYFQ8Ao5BhjN+1GbDizUbQ7NibCaJYs5I0BcrpJSCCIzS837RxY7Afqpg+QdtIdiJ8WvxD9w7yjdnOO2t+No9YVjATSz/dx1J+1mz6c3aU/hZHFZRkcTkqOI05h1C6QcRrJQ4MJDs1b+mheyjmY9/DBe+w7j4bgppns4aP1/Z3GgWvwk+Fp5P0D9WkAew3wy/PRYxc98dBDB/3on2moH73zrZNo+K2pby7vpCJsHIJ01Kpvds2uVq7GqbVTOe733NOScNjxFa9QjSuBbOIInu96pd3+X1xZ6tsJ3MDEvVOcCNv5euMcP2lNapDDwzHLinqPqwBxQ3RHml44q6xFwbAGktypaiFOuYpVU5zLVSgWuhQohoDQtl17TDFhanD9CavbtuEX8pyHeDj/otnTuG6Fc6BwSYrFAKMqHKl1beDzvC6iZ+BnCAj8PnXhGdZKl6E2LMd73QKm4VW3FOMLq1wwLDMe/RUbLWkNp98HBy7z7mjHWIY0M9o41EwWtYdDmhk49TPOr3V2UTNwR7SK2hR1pwfBVjfhglyjXw0EcYIJF/tw41FV0Iiso9OoreLWXR/icR5BMpymy1U7nkRojx2CWoEWPWMb0mjbpEC7pRCm1KyGaeiYTDvIeHSjGTzW0A/r/Aeu4IH6/7ssoiMZm/r/6i78P79LQM4Ce3RzAGAL7Dd+mYBk/l77//euhOMqHz46MGkFKyQfGwRAOQVkhPhgEyNRA/rkPo7fUQxmOPxAY+5TjOvc1PXYwd/M9dd6Gu14hSqtYCwkQoLEphCeeULOCELF/LeQTEB9qqwlm4OMqEaMHx3AYR0ATYEJpsDWCEEePcDH+NTE4BZAd8FkvPtqGG3+legcwfloszpVyY2EBiBVj0GKpCf3XLB/AG4Sl+u+4ZIO48ceTLVkOB136Vy497/0Gg4h9tYZKLQkr+zbE9w56yLXGpcQeZzEg0jZ9cYrXyHEzZFsyIWbBpJVFS8uCQRXYmqUwGqWoiX1YcnLMjVBZGmjKWcVjNlQByKnmhal4dSCuu4QguLznHlQn7Bhz/3ipYhECD9f6yATsjHvL7jY1I88HpixaT4jmS83HeYzErw/X65fhU9i/3r3P1BLAQIUABQAAAAAAOJ4VViIAhbTBAEAAAQBAAANAAAAAAAAAAAAAAAAAAAAAABtYW5pZmVzdC5qc29uUEsBAhQAFAAAAAgA4nhVWALIm/QnCQAAfzsAADQAAAAAAAAAAAAAAAAALwEAAGFuaW1hdGlvbnMvNGZmYjNjYzQtNTcxMi00ZDJmLTlhM2EtM2VlZTUzY2E0OWExLmpzb25QSwUGAAAAAAIAAgCdAAAAqAoAAAAA";
const loader = async ({ request }) => {
  await controlReq(request);
  const { exist } = checkNodeStatus();
  if (exist)
    return redirect("/node");
  else {
    let clientHash = null;
    if (!os.platform().includes("win"))
      try {
        clientHash = execSync("~/bin/pirisubchain.client").toString().trim();
      } catch (error) {
        console.error(`Error: ${error}`);
      }
    const address = getAddressFromFile();
    const hostName = os.hostname();
    return { clientHash, address, hostName };
  }
};
function New() {
  var _a, _b;
  const { clientHash, address, hostName } = useLoaderData();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const actionData = useActionData();
  const [nodeCode, setNodeCode] = useState("");
  const [licenceKey, setLicenceKey] = useState("");
  const [nodeName, setNodeName] = useState(hostName || "");
  const [prefix, setPrefix] = useState("PR");
  useEffect(() => {
    if (actionData == null ? void 0 : actionData.errors) {
      showNotification({
        title: actionData == null ? void 0 : actionData.errors.code,
        message: actionData == null ? void 0 : actionData.errors.message,
        color: "red",
        bg: "red.0",
        icon: /* @__PURE__ */ jsx(IconCodeOff, {})
      });
    }
  }, [actionData]);
  return /* @__PURE__ */ jsxs(Stack, { align: "center", children: [
    /* @__PURE__ */ jsxs(Group, { align: "center", justify: "space-between", w: "100%", children: [
      /* @__PURE__ */ jsxs(Stack, { gap: 0, children: [
        /* @__PURE__ */ jsx(Title, { order: 2, c: "dark.3", children: "ENTER LICENCE KEY" }),
        /* @__PURE__ */ jsx(Title, { order: 4, c: "dark.3", children: "To Start Setup Your Sub-Chain" })
      ] }),
      /* @__PURE__ */ jsx(Text, { size: "60px", variant: "gradient", gradient: { from: "gray.2", to: "dark.0", deg: 135 }, fw: 700, children: "2/4" })
    ] }),
    /* @__PURE__ */ jsxs(Form, { method: "POST", unstable_viewTransition: true, style: { width: "100%" }, children: [
      /* @__PURE__ */ jsxs(Group, { align: "center", justify: "space-between", w: "100%", wrap: "nowrap", children: [
        /* @__PURE__ */ jsx(Center, { pos: "relative", w: 190, h: 160, style: { overflow: "hidden" }, children: /* @__PURE__ */ jsx(
          DotLottieReact,
          {
            src: licence_lottie,
            autoplay: true,
            loop: true,
            style: { width: 290, height: 290, position: "absolute" }
          }
        ) }),
        /* @__PURE__ */ jsxs(Stack, { w: "calc(100% - 210px)", children: [
          /* @__PURE__ */ jsx("input", { type: "hidden", name: "clientHash", value: clientHash }),
          clientHash ? /* @__PURE__ */ jsx(Badge, { variant: "filled", color: "green", size: "lg", leftSection: /* @__PURE__ */ jsx(Loader, { color: "white" }), children: "Client Service is Working" }) : /* @__PURE__ */ jsx(Badge, { variant: "filled", color: "red", size: "lg", leftSection: /* @__PURE__ */ jsx(IconRadarOff, { size: 18 }), children: "Client Service Failed / Stopped" }),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              placeholder: "Enter your Node Installation Code",
              w: "100%",
              name: "nodeCode",
              description: "Enter Node Installation Code which is gave for this node",
              radius: "sm",
              value: nodeCode,
              required: true,
              error: ((_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.nodeCode) ?? false,
              onChange: (event) => setNodeCode(event.currentTarget.value),
              leftSection: /* @__PURE__ */ jsx(IconSquareAsterisk, { size: 16 }),
              size: "sm"
            }
          ),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              placeholder: "Enter your sub-chains Licence Key (Unique)",
              w: "100%",
              name: "licenceKey",
              description: "Enter your Pirichain Licence Key",
              radius: "sm",
              value: licenceKey,
              required: true,
              error: ((_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.licenceKey) ?? false,
              onChange: (event) => setLicenceKey(event.currentTarget.value),
              leftSection: /* @__PURE__ */ jsx(IconKey, { size: 16 }),
              size: "sm"
            }
          ),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              placeholder: "Enter your Node Name",
              w: "100%",
              name: "nodeName",
              description: "Enter your Node Name (or you may leave to use pc-name)",
              radius: "sm",
              value: nodeName,
              onChange: (event) => setNodeName(event.currentTarget.value),
              leftSection: /* @__PURE__ */ jsx(IconTag, { size: 16 }),
              size: "sm"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Fieldset, { legend: /* @__PURE__ */ jsx(Text, { size: "xs", c: "dark.2", children: "Node Address" }), children: [
        /* @__PURE__ */ jsxs(Stack, { gap: 2, mb: "xs", children: [
          /* @__PURE__ */ jsxs(Stack, { gap: 0, children: [
            /* @__PURE__ */ jsx(Text, { size: "xs", children: "Address" }),
            /* @__PURE__ */ jsx(Text, { size: "sm", style: { wordBreak: "break-all" }, children: address.pub })
          ] }),
          /* @__PURE__ */ jsx(Divider, {}),
          /* @__PURE__ */ jsxs(Stack, { gap: 0, children: [
            /* @__PURE__ */ jsx(Text, { size: "xs", children: "Public Key" }),
            /* @__PURE__ */ jsx(Text, { size: "sm", style: { wordBreak: "break-all" }, children: address.publicKey })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Group, { justify: "space-between", children: [
          /* @__PURE__ */ jsxs(Form, { method: "POST", children: [
            /* @__PURE__ */ jsx(
              TextInput,
              {
                placeholder: "Enter your Chain Prefix",
                w: "100%",
                maxLength: 2,
                name: "prefix",
                description: "Enter your Chain Prefix as 2 Char (e.g. PR)",
                radius: "sm",
                value: prefix,
                onChange: (event) => {
                  var _a2;
                  return setPrefix((_a2 = event.currentTarget.value) == null ? void 0 : _a2.toUpperCase());
                },
                leftSection: /* @__PURE__ */ jsx(IconHexagonLetterP, { size: 16 }),
                size: "sm"
              }
            ),
            /* @__PURE__ */ jsx(
              Button,
              {
                type: "submit",
                name: "type",
                value: "refreshAddress",
                variant: "light",
                size: "compact-sm",
                radius: "xl",
                leftSection: /* @__PURE__ */ jsx(IconRefresh, { size: 18 }),
                px: "md",
                children: "Generate A New Node Address"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(CopyButton, { value: JSON.stringify(address), children: ({ copied, copy }) => /* @__PURE__ */ jsx(
            Button,
            {
              radius: "xl",
              variant: "light",
              size: "compact-sm",
              color: copied ? "teal" : "blue",
              px: "md",
              rightSection: copied ? /* @__PURE__ */ jsx(IconChecks, { size: 18 }) : /* @__PURE__ */ jsx(IconCopy, { size: 18 }),
              onClick: copy,
              children: copied ? "Copied Node Address" : "Copy Node Address"
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Group, { mt: 30, justify: "space-between", w: "100%", children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "default",
            radius: "sm",
            size: "md",
            className: classes.control,
            leftSection: /* @__PURE__ */ jsx(IconArrowBack, {}),
            onClick: () => {
              navigate(`/`, {
                viewTransition: true
              });
            },
            children: "Back"
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            disabled: !clientHash || !nodeCode || !licenceKey,
            type: "submit",
            loading: navigation.state !== "idle",
            radius: "sm",
            size: "md",
            className: classes.control,
            rightSection: /* @__PURE__ */ jsx(IconLockSearch, {}),
            children: "Verify My Licence Key & Code"
          }
        )
      ] })
    ] })
  ] });
}
const action = async ({ request }) => {
  const formData = await request.clone().formData();
  if (formData.getAll("type")[0] === "refreshAddress") {
    const prefix = formData.get("prefix");
    regenerateNewAddress(prefix);
    return null;
  }
  const { errors, response } = await controlLicence(request);
  if (errors) {
    return { errors };
  }
  if (response.error)
    return {
      errors: {
        code: "ERROR",
        message: response.message
      }
    };
  try {
    saveNodesInfo({
      nodeList: response.nodeList,
      downloadableURL: response.downloadableURL
    });
    return redirect(`/node`);
  } catch (error) {
    return { errors: { code: "ERROR", message: error } };
  }
};
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action,
  default: New,
  loader
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-DUkWNeNJ.js", "imports": ["/assets/components-DElVZEoG.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/root-kuX3udDF.js", "imports": ["/assets/components-DElVZEoG.js", "/assets/index-CieArXv9.js", "/assets/Stack-CZghuHls.js", "/assets/Image-DIy4q9te.js", "/assets/Paper-8-s7Fcnp.js", "/assets/get-contrast-color-B8HawcpG.js", "/assets/CloseButton-C60wr1be.js", "/assets/notifications.store-iAyqDRQr.js", "/assets/OptionalPortal-CTwich56.js"], "css": ["/assets/root-BX6AEV_9.css"] }, "routes/requirements": { "id": "routes/requirements", "parentId": "root", "path": "requirements", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/requirements-lp7j5Ov8.js", "imports": ["/assets/components-DElVZEoG.js", "/assets/welcome.module-DqEXhBLK.js", "/assets/notifications.store-iAyqDRQr.js", "/assets/IconBug-C94eXtwh.js", "/assets/IconX-DZkbMSAl.js", "/assets/Stack-CZghuHls.js", "/assets/Divider-ipocHKcR.js", "/assets/List-CIWPpX4k.js", "/assets/IconHome-B2hh6MWc.js", "/assets/Paper-8-s7Fcnp.js", "/assets/Image-DIy4q9te.js", "/assets/OptionalPortal-CTwich56.js", "/assets/create-safe-context-7NRW7rcv.js", "/assets/CloseButton-C60wr1be.js", "/assets/use-resolved-styles-api-BMYCrQAl.js", "/assets/CopyButton-tnjc4j_P.js"], "css": ["/assets/welcome-BvNhj6k5.css"] }, "routes/validate": { "id": "routes/validate", "parentId": "root", "path": "validate", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/validate-CEQwNczk.js", "imports": ["/assets/components-DElVZEoG.js", "/assets/welcome.module-DqEXhBLK.js", "/assets/Stack-CZghuHls.js", "/assets/use-resolved-styles-api-BMYCrQAl.js", "/assets/IconX-DZkbMSAl.js", "/assets/IconChecks-Cgq4Qcvj.js", "/assets/index-CieArXv9.js", "/assets/notifications.store-iAyqDRQr.js", "/assets/IconBug-C94eXtwh.js", "/assets/Divider-ipocHKcR.js", "/assets/create-safe-context-7NRW7rcv.js", "/assets/get-contrast-color-B8HawcpG.js", "/assets/Paper-8-s7Fcnp.js", "/assets/OptionalPortal-CTwich56.js", "/assets/IconArrowBack-BaPesawu.js", "/assets/CloseButton-C60wr1be.js"], "css": ["/assets/welcome-BvNhj6k5.css"] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_index-UEmZFhny.js", "imports": ["/assets/components-DElVZEoG.js", "/assets/welcome.module-DqEXhBLK.js", "/assets/Stack-CZghuHls.js", "/assets/List-CIWPpX4k.js", "/assets/create-safe-context-7NRW7rcv.js"], "css": ["/assets/welcome-BvNhj6k5.css"] }, "routes/node": { "id": "routes/node", "parentId": "root", "path": "node", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/node-Dnvb9YpQ.js", "imports": ["/assets/components-DElVZEoG.js", "/assets/welcome.module-DqEXhBLK.js", "/assets/notifications.store-iAyqDRQr.js", "/assets/IconBug-C94eXtwh.js", "/assets/Stack-CZghuHls.js", "/assets/Divider-ipocHKcR.js", "/assets/IconTag-D9QK2-0T.js", "/assets/Paper-8-s7Fcnp.js", "/assets/IconHome-B2hh6MWc.js", "/assets/IconArrowBack-BaPesawu.js"], "css": ["/assets/welcome-BvNhj6k5.css"] }, "routes/new": { "id": "routes/new", "parentId": "root", "path": "new", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/new-DK0G387c.js", "imports": ["/assets/components-DElVZEoG.js", "/assets/welcome.module-DqEXhBLK.js", "/assets/index-CieArXv9.js", "/assets/notifications.store-iAyqDRQr.js", "/assets/Stack-CZghuHls.js", "/assets/IconChecks-Cgq4Qcvj.js", "/assets/Divider-ipocHKcR.js", "/assets/IconTag-D9QK2-0T.js", "/assets/CopyButton-tnjc4j_P.js", "/assets/IconArrowBack-BaPesawu.js", "/assets/use-resolved-styles-api-BMYCrQAl.js", "/assets/CloseButton-C60wr1be.js"], "css": ["/assets/welcome-BvNhj6k5.css"] } }, "url": "/assets/manifest-7dc147d5.js", "version": "7dc147d5" };
const mode = "production";
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "v3_fetcherPersist": false, "v3_relativeSplatPath": false, "v3_throwAbortReason": false, "v3_routeConfig": false, "v3_singleFetch": false, "v3_lazyRouteDiscovery": false, "unstable_optimizeDeps": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/requirements": {
    id: "routes/requirements",
    parentId: "root",
    path: "requirements",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/validate": {
    id: "routes/validate",
    parentId: "root",
    path: "validate",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route3
  },
  "routes/node": {
    id: "routes/node",
    parentId: "root",
    path: "node",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/new": {
    id: "routes/new",
    parentId: "root",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
};
