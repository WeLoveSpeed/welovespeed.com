import { Liquid } from "/assets/js/vendor/liquid.browser.esm.min.js";

// https://dev.to/jankapunkt/make-text-fit-it-s-parent-size-using-javascript-m40
function isOverflown({ clientHeight, scrollHeight }) {
  return scrollHeight > clientHeight;
}
function tick() {
  return new Promise((resolve) => {
    requestAnimationFrame(() => resolve());
  });
}
async function resizeText({ element, parent }) {
  let i = 32; // let's start with 12px
  let overflow = false;
  const maxSize = 80; // very huge text size

  while (!overflow && i < maxSize) {
    element.style.setProperty("font-size", `${i}px`);
    await tick();
    overflow = isOverflown(parent);
    if (!overflow) {
      i += 2;
    }
  }

  // revert to last state where no overflow happened:
  element.style.setProperty("font-size", `${i - 2}px`);
  parent.style.setProperty("height", "auto");
}

function getConferenceInfo(conferenceId, locale) {
  return JSON.parse(
    talkCoverForm.querySelector(`option[value="${conferenceId}"]`).dataset[
      locale === "fr_FR" ? "conference" : "conferenceEn"
    ]
  );
}

async function render(templateString, properties) {
  const engine = new Liquid();
  const template = engine.parse(templateString);
  return await engine.render(template, properties);
}

function initFormWithSearchParams(form) {
  const searchParams = new URLSearchParams(window.location.search);
  for (let key of searchParams.keys()) {
    const input = form.querySelector(`[name="${key}"]`);
    if (input.getAttribute('type') === 'checkbox') {
      input.checked = true;
    } else {
      input.value = searchParams.get(key);
    }
  }
}

async function displayCover(form) {
  const formData = new FormData(form);
  const conferenceId = formData.get("conference");
  const locale = formData.get("locale");
  const scale = formData.get('scale')

  const resultContainer = document.querySelector("#result");
  if (scale === 'on') {
    resultContainer.classList.add('full-size')
  }
  resultContainer.innerHTML = await render(
    document
      .querySelector("#talkCover")
      .innerHTML.toString()
      .replace(/\\/g, "")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">"),
    {
      site: JSON.parse(form.dataset[locale === "fr_FR" ? "site" : "siteEn"]),
      conference: getConferenceInfo(conferenceId, locale),
      locale,
    }
  );

  await Promise.all(
    [...resultContainer.querySelectorAll("[data-fit-text]")].map((element) => {
      return resizeText({
        element: element.querySelector("span"),
        parent: element,
      });
    })
  );

  window.dispatchEvent(new CustomEvent('cover-ready'))
}

const talkCoverForm = document.querySelector("#talk_cover");
talkCoverForm.addEventListener("change", () => {
  talkCoverForm.submit();
});

initFormWithSearchParams(talkCoverForm);
displayCover(talkCoverForm);
