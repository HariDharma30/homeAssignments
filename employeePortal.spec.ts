import { test } from "@playwright/test";

test("Login with manual OTP and continue claim flow", async ({ page }) => {
  const treatmentName = "Routine dental treatment";

  await page.goto(
    "https://test-unum-apps.eu.digital1st.io/employee?kc_idp_hint=unum-eesap-test2stg"
  );

  await page.getByLabel(/email address/i).fill("Haridharma.r+M00181300@majesco.com");
  await page.getByRole("button", { name: /^Next$/ }).click();

  const otpInput = page.getByRole("textbox", { name: /^Enter one time passcode$/i });
  await otpInput.waitFor({ state: "visible" });

  console.log("Enter OTP manually, then click Resume.");
  await page.pause();

  await page.getByRole("button", { name: /^Submit$/ }).click();

  await page.getByLabel("Password", { exact: true }).fill("Password@June2026");
  await page.getByRole("button", { name: /^Next$/ }).click();

  console.log("Title:", await page.title());
  console.log("URL:", page.url());

  // Cookies popup
  const acceptAllButton = page.locator(".btn.acceptBtn");
  if (await acceptAllButton.isVisible().catch(() => false)) {
    await acceptAllButton.click();
  }

  // Make a claim
  await page.locator(".btn.btn-primary.btn-wdth.makeAClaim").click();

  // Claim details section - open calendar and select a date
  await page.locator(".fa.fa-calendar").first().click();

  // Pick a date from the calendar
  // Adjust this locator if your datepicker uses a different active-day selector
  await page.locator(".day, .datepicker-day, td.available").first().click();

  // Patient tab - Who is this claim for?
  await page.locator(".select2-selection__arrow").first().click();
  await page.locator(".select2-results__option", { hasText: "Me" }).click();

  // Which insured treatment are you claiming for?
  await page.locator(".select2-selection__arrow").nth(1).click();
  await page.locator(".select2-results__option", { hasText: treatmentName }).click();

  // Continue
  await page.locator(
    '#582237a2-cfaf-4d7e-bef9-0a41710cc6cb_4c0ec28f-3912-4150-93db-83ee455fe960_1008-button'
  ).click();

  // Keep browser open
  await page.pause();
});
