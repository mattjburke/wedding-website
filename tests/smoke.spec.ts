import { test, expect } from "@playwright/test";

const pages = [
  { url: "/", title: "Rebeca & Matthew" },
  { url: "/events", title: "Events" },
  { url: "/travel", title: "Travel" },
  { url: "/things-to-do", title: "Things to Do" },
  { url: "/registry", title: "Registry" },
  { url: "/faqs", title: "FAQs" },
];

for (const { url, title } of pages) {
  test(`${url} — page loads and shows heading`, async ({ page }) => {
    await page.goto(url);
    await expect(
      page.getByRole("heading", { name: title, exact: false })
    ).toBeVisible();
  });
}

test("home — RSVP button is present", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("link", { name: /rsvp/i })).toBeVisible();
});

test("nav — all links are present on desktop", async ({ page }) => {
  await page.goto("/");
  for (const label of ["Events", "Travel", "Registry", "FAQs"]) {
    await expect(page.getByRole("link", { name: label })).toBeVisible();
  }
});

test("home — ceremony and reception cards are visible", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Ceremony")).toBeVisible();
  await expect(page.getByText("Reception")).toBeVisible();
});
