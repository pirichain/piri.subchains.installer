import {vitePlugin as remix} from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import {defineConfig} from "vite";
import {resolve} from "path";
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals();

export default defineConfig({
    server: {
        port: 7473,
    },
    resolve: {
        alias: {
            // eslint-disable-next-line no-undef
            '~': resolve(__dirname, './app')
        }
    },
    plugins: [
        remix({
            ignoredRouteFiles: ["**/*.css"],
        }),
        tsconfigPaths()
    ],
    assetsInclude: [
        "**/*.lottie",
        "**/*/*.lottie"
    ]
});
