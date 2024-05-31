const { test, expect } = require("@playwright/test");
const Setup = require("../pages/Setup");
const LoginPage = require("../pages/LoginPage");

test("Admin cannot successfully login with invalid inputs", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  const setup = new Setup(page);
  await setup.gotoLoginPage();
  await loginPage.login("invalid", "invalid");
  await expect(loginPage.errorMessageElement).toHaveText("Invalid credentials");
});

test("Admin can successfully login with valid inputs", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const setup = new Setup(page);
  await setup.gotoLoginPage();
  await loginPage.login("admin", "admin123");
  await expect(loginPage.profilePic).toBeVisible();
});

