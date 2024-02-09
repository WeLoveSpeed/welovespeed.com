// cd into the "thanks folder"
// and execute "node _export_nl.mjs"

import { access } from "node:fs/promises";
import { join } from "node:path";
import { chromium } from "playwright";
import * as url from "url";
import StaticServer from 'static-server'

/* On utilise StaticServer plutôt que le serveur de Jekyll en dev
 * parce que celui de Jekyll n'est pas fiable (des assets manquants sans raison) */
const server = new StaticServer({
  rootPath: join(process.cwd(), '_site'),
  port: 4000,
  host: '127.0.0.1',
  cors: '*',
  followSymlink: true,
});

await new Promise((resolve, reject) => {
  server.start(function () {
    console.log('Starting...')
    resolve();
  });
})

const adminTalksHref = `http://localhost:4000/admin/talks/`;
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
const response = await page.goto(adminTalksHref);

if (!response.ok()) {
  console.error('Page indisponible. Avez-vous pensez à exécuter `bundle exec rake build:prod` avant de lancer cette commande ?')
}

const conferences = await page.locator('[name="conference"] option').all();
const locales = await page.locator('[name="locale"] option').all();

const maxNumberOfProcesses = 10;
let numberOfRunningProcesses = 0;
const renderingQueue = [];

/**
 * @param {() => Promise<T>} callback
 * @param {number} [options.timeout]
 * @returns {T}
 */
function pushToRenderQueue(callback, options = { timeout: 5000 }) {
  return new Promise((resolve, reject) => {
    renderingQueue.push(() => {
      return Promise.race([
        callback(),
        new Promise((resolve, reject) => {
          setTimeout(() => {
            reject(new Error("Render timeout"));
          }, options.timeout);
        })
      ]).then((result) => {
        resolve(result)
      }).catch((error) => {
        console.log('RETRY')
        console.error(error)
        pushToRenderQueue(callback, options).then((result) => {
          resolve(result)
        });
      });
    });

    render();
  });
}

async function render() {
  if (
    renderingQueue.length > 0 &&
    numberOfRunningProcesses < maxNumberOfProcesses
  ) {
    const nextCallback = renderingQueue.shift();

    numberOfRunningProcesses++;
    await nextCallback();
    numberOfRunningProcesses--;

    await render();
  }
}

async function screenshotConferenceCover(page, locale, conference) {
  const imagePath = join(
    __dirname,
    locale === "fr_FR" ? "fr" : "en",
    `${conference}.png`
  );

  const searchParams = new URLSearchParams({
    locale,
    conference,
    scale: "on",
  });
  const url = `${adminTalksHref}?${searchParams.toString()}`;

  await page.goto(url);

  await page.evaluate(async () => {
    return new Promise((resolve) => {
      window.addEventListener("cover-ready", () => {
        resolve();
      });
    });
  });

  await page.locator("#result .cover").screenshot({
    path: imagePath,
  });

  await page.close();
}

await Promise.allSettled(
  locales.map(async (localeOption) => {
    const locale = await localeOption.textContent();
    await Promise.allSettled(
      conferences.map(async (conferenceOption) => {
        const conference = await conferenceOption.getAttribute("value");
        const conferencePage = await browser.newPage();

        try {
          await pushToRenderQueue(
            () => screenshotConferenceCover(conferencePage, locale, conference),
            { timeout: 10000 }
          );

          console.log("OK", locale, conference);
        } catch (error) {
          console.error("NOT OK", locale, conference);
          console.error(error);
          await conferencePage.close()

          throw error;
        }
      })
    );
  })
);

await server.stop();

console.log("Closing browser...");

await browser.close();
