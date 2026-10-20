/* Repro 2: scroll bertahap ala manusia + klik filter tab + toggle show-all.
   Deteksi kartu yang opacity-nya 0 (tidak muncul). */
import puppeteer from "puppeteer-core";

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const RUNS = Number(process.argv[2] || 4);

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--disable-gpu", "--window-size=1440,900"],
  defaultViewport: { width: 1440, height: 900 },
});

const checkGrid = (page) =>
  page.evaluate(() => {
    const section = document.querySelector("#demo");
    if (!section) return { error: "no #demo" };
    const grid = section.querySelector(".grid");
    if (!grid) return { error: "no grid", filter: null };
    const cards = Array.from(grid.children);
    const invisible = cards
      .map((c, i) => ({ i, o: getComputedStyle(c).opacity }))
      .filter((x) => parseFloat(x.o) < 0.99)
      .map((x) => `#${x.i} op=${x.o}`);
    const gridRect = grid.getBoundingClientRect();
    return {
      cards: cards.length,
      invisible: invisible,
      gridTop: Math.round(gridRect.top),
      gridH: Math.round(gridRect.height),
      scrollY: Math.round(window.scrollY),
      viewportH: window.innerHeight,
    };
  });

for (let run = 1; run <= RUNS; run++) {
  const page = await browser.newPage();
  await page.goto("http://localhost:5173/", { waitUntil: "networkidle2", timeout: 60000 });
  await new Promise((r) => setTimeout(r, 2600)); // splash

  // scroll bertahap, 200px per langkah
  let step = 0;
  while (step < 30) {
    await page.evaluate(() => window.scrollBy({ top: 200, behavior: "instant" }));
    await new Promise((r) => setTimeout(r, 120));
    step++;
    const y = await page.evaluate(() => window.scrollY);
    // berhenti saat grid demo sudah melewati viewport atas
    const past = await page.evaluate(() => {
      const g = document.querySelector("#demo .grid");
      return g ? g.getBoundingClientRect().top < 0 : true;
    });
    if (past) break;
  }
  await new Promise((r) => setTimeout(r, 600));
  console.log(`RUN ${run} after slow scroll:`, JSON.stringify(await checkGrid(page)));

  // ekstra: pasti masih ada area DiGrid — screenshot bila ada kartu tak muncul
  const c1 = await checkGrid(page);
  if (c1.invisible && c1.invisible.length) {
    await page.screenshot({ path: `tests/repro-bug-run${run}.png` });
  }

  // klik tab "Sistem Web"
  const tabs = await page.$$("#demo [role='tab']");
  if (tabs[3]) {
    await tabs[3].click();
    await new Promise((r) => setTimeout(r, 1500));
    console.log(`RUN ${run} after 'Sistem Web':`, JSON.stringify(await checkGrid(page)));
  }
  // klik tab "Semua Karya"
  if (tabs[0]) {
    await tabs[0].click();
    await new Promise((r) => setTimeout(r, 1500));
    console.log(`RUN ${run} after 'Semua Karya':`, JSON.stringify(await checkGrid(page)));
  }
  // toggle "Lihat Semua Portofolio"
  const showAllBtn = await page.$$eval("#demo button", (btns) => {
    const b = btns.find((x) => x.textContent.includes("Lihat Semua") || x.textContent.includes("Tampilkan"));
    return b ? true : false;
  });
  if (showAllBtn) {
    await page.evaluate(() => {
      const b = [...document.querySelectorAll("#demo button")].find(
        (x) => x.textContent.includes("Lihat Semua") || x.textContent.includes("Tampilkan")
      );
      b && b.click();
    });
    await new Promise((r) => setTimeout(r, 2000));
    console.log(`RUN ${run} after show-all:`, JSON.stringify(await checkGrid(page)));
  }
  await page.close();
}

await browser.close();
console.log("DONE");
