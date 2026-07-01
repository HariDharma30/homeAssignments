import { test } from "@playwright/test";

test("Login with manual OTP", async ({ page }) => {
  await page.goto("https://test-unum-apps.eu.digital1st.io/adviser?kc_idp_hint=unum-brp-test2stg");

  await page.getByLabel(/email address/i).fill("haridharma.r+Agency2026@majesco.com");
  await page.getByRole("button", { name: /^Next$/ }).click();

  const otpInput = page.getByRole("textbox", { name: /^Enter one time passcode$/i });
  await otpInput.waitFor({ state: "visible" });

  console.log("Enter OTP manually, then click Resume.");
  await page.pause();

  await page.getByRole("button", { name: /^Submit$/ }).click();

  await page.getByLabel("Password", { exact: true }).fill("Password@2026");
  await page.getByRole("button", { name: /^Next$/ }).click();

  console.log("Title:", await page.title());
  console.log("URL:", page.url());

  await page.pause();
});
