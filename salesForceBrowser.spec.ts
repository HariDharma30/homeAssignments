import { chromium, test } from "@playwright/test";

test("Launch Salesforce and get title and URL", async () => {
  const browser = await chromium.launch({ headless: false, channel: "chrome" });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://login.salesforce.com/?locale=in");

  const title = await page.title();
  const url = page.url();

  console.log("Title: " + title);
  console.log("URL: " + url);

  await page.waitForTimeout(3000);
  await browser.close();
});
