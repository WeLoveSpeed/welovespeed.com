// cd into the "thanks folder"
// and execute "node _export_nl.mjs"

import puppeteer from "puppeteer";
import fs from "fs";
import clipper from "image-clipper";
import canvas from "canvas";


// Get all files in folder
const filenames = fs.readdirSync(".");

// Filter out SVGs
const svgNames = filenames.filter((elm) => elm.match(/.*\.(svg?)/gi));

const browser = await puppeteer.launch();
const page = await browser.newPage();

for (let index = 0; index < svgNames.length; index++) {
  const svgFilename = svgNames[index];
  const pngTempFilename = svgFilename.replace(".svg", "_nl_temp.png");
  const pngFilename = svgFilename.replace(".svg", "_nl.png");

  await page.goto(`file://${process.cwd()}/${svgFilename}`);
  const svgNode = await page.$("svg");
  await svgNode.evaluate((el) => (el.style.background = "#fefcfc"));
  await svgNode.screenshot({ path: pngTempFilename });

  clipper.configure("canvas", canvas);
  clipper(pngTempFilename, function () {
    this.crop(0, 170, 800, 264)
      .resize(500, 165)
      .toFile(pngFilename, function () {
        fs.unlinkSync(pngTempFilename);
        console.log(`${svgFilename} PNG version exported!`);
      });
  });
}
await browser.close();
