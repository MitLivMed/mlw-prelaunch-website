import { readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";

const root = resolve(import.meta.dirname, "site");

// Shared page parts (like the footer) live once in site/partials/<name>.html.
// A page includes one with the marker <!-- partial:<name> -->, which is
// replaced at build time and in the dev server.
function partials() {
  return {
    name: "partials",
    // "pre": insert partials before Vite processes the HTML, so a module
    // script in a partial (js/mlm.js) gets bundled like any other.
    transformIndexHtml: {
      order: "pre",
      handler: (html) => html.replace(/<!-- partial:([\w-]+) -->/g, (_, name) =>
        readFileSync(resolve(root, "partials", `${name}.html`), "utf-8").trimEnd(),
      ),
    },
  };
}

// Every .html file in site/ is a page.
const pages = Object.fromEntries(
  readdirSync(root)
    .filter((file) => file.endsWith(".html"))
    .map((file) => [file.replace(/\.html$/, ""), resolve(root, file)]),
);

export default defineConfig({
  root,
  // .env files (VITE_* keys for local dev) live in the repo root, like on the
  // old site; on Vercel the values come from the project's env variables.
  envDir: import.meta.dirname,
  // Separate pages, not a single-page app: unknown paths are a 404 in dev
  // too, instead of silently serving index.html.
  appType: "mpa",
  // Scripts, images, favicons etc. in site/public/ are copied as-is.
  publicDir: "public",
  plugins: [partials()],
  // The pages' inline CSS is hand-tuned (contrast, colour scheme): pass it
  // through untouched instead of transforming or minifying it.
  css: { transformer: "postcss" },
  build: {
    cssMinify: false,
    outDir: resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: { input: pages },
  },
});
