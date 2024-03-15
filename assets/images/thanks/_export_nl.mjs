// cd into the "thanks folder"
// and execute "node _export_nl.mjs"

import puppeteer from "puppeteer";
import fs from "node:fs";
import path from "node:path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

// Get all files in folder
const filenames = fs.readdirSync(__dirname);

// Filter out SVGs
const svgNames = filenames.filter((elm) => elm.match(/.*\.(svg?)/gi));

const browser = await puppeteer.launch({ headless: "new" });
const page = await browser.newPage();

for (let index = 0; index < svgNames.length; index++) {
  const svgFilename = svgNames[index];
  const pngFilename = svgFilename.replace(".svg", "_nl.png");

  await page.goto(`file://${path.join(__dirname, svgFilename)}`);
  const svgNode = await page.$("svg");

  let viewBox = await svgNode.evaluate((el) => {
    el.style.background = "#fefcfc";

    viewBox = el.getAttribute("viewBox");
    if (viewBox === null) {
      const width = el.getAttribute("width");
      const height = el.getAttribute("height");

      if (width && height) {
        el.setAttribute("viewBox", `0 0 ${width} ${height}`);
        el.removeAttribute("width");
        el.removeAttribute("height");
      }
    }

    el.style.width = "500px";
    el.style.height = "165px";
  });

  await svgNode.screenshot({ path: path.join(__dirname, pngFilename) });

  console.log(`${svgFilename} PNG version exported!`);
}
await browser.close();
