/* Verifikasi DigitalProductsSection: scroll ke section, pastikan semua kartu & banner tampil. */
import puppeteer from "puppeteer-core";

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--disable-gpu"],
  defaultViewport: { width: 1440, height: 900 },
});

const RUNS = 3;
for (let run = 1; run <= RUNS; run++) {
  const page = await browser.newPage();
  await page.goto("http://localhost:5173/", { waitUntil: "networkidle2", timeout: 60000 });
  await new Promise((r) => setTimeout(r, 2600));
  await page.evaluate(() => {
    const el = document.querySelector("#digital-products");
    el && el.scrollIntoView({ behavior: "instant", block: "center" });
  });
  await new Promise((r) => setTimeout(r, 1500));
  const res = await page.evaluate(() => {
    const section = document.querySelector("#digital-products");
    if (!section) return { error: "no section" };
    const grid = section.querySelector(".grid");
    const cards = Array.from(grid ? grid.children : []);
    const invisibleCards = cards.filter((c) => parseFloat(getComputedStyle(c).opacity) < 0.99).length;
    const banner = section.querySelector(".reveal-standalone");
    return {
      cards: cards.length,
      invisibleCards,
      bannerOpacity: banner ? getComputedStyle(banner).opacity : "no-banner",
    };
  });
  console.log(`RUN ${run}:`, JSON.stringify(res));
  await page.close();
}
await browser.close();
console.log("DONE");
