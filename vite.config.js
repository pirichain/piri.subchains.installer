import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import {resolve} from "path";

export default defineConfig({
    plugins: [remix()],
    server: {
        port: 7473,
    },
    resolve: {
        alias: {
            // eslint-disable-next-line no-undef
            '~': resolve(__dirname, './app'),
            '@tabler/icons-react': '@tabler/icons-react/dist/esm/icons/index.mjs',
        }
    },
    assetsInclude: [
        "**/*.lottie",
        "**/*/*.lottie"
    ]
});
