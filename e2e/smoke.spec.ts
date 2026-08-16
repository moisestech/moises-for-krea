import { test, expect } from "@playwright/test";

test("homepage shows thesis, visual proof, and replay CTA", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", {
      name: /I turn frontier creative AI into workflows/,
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Run the 90-second replay" }),
  ).toHaveAttribute("href", "https://krea-field-studio.vercel.app/replay");
  await expect(page.getByText(/REPLAY · PUBLIC · NO LOGIN · NO SPEND/)).toBeVisible();
  await page.screenshot({ path: "docs/assets/home.png", fullPage: true });
});

test("field studio case points source at GitHub and replay at the public demo", async ({
  page,
}) => {
  await page.goto("/field-studio");
  await expect(
    page.getByRole("heading", { name: /From curator brief to an approved proposal/ }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Source / README" })).toHaveAttribute(
    "href",
    "https://github.com/moisestech/krea-field-studio",
  );
  await expect(page.getByRole("link", { name: "Run replay" }).first()).toHaveAttribute(
    "href",
    "https://krea-field-studio.vercel.app/replay",
  );
  await expect(page.getByText("PLANNED")).toBeVisible();
  await page.screenshot({ path: "docs/assets/field-studio.png", fullPage: true });
});

test("evidence and technical notes render", async ({ page }) => {
  await page.goto("/evidence");
  await expect(page.getByRole("heading", { name: "Evidence map" })).toBeVisible();
  await page.goto("/technical-notes");
  await expect(page.getByRole("heading", { name: "Technical notes" })).toBeVisible();
});
