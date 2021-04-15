const puppeteer = require("puppeteer");

test("Should add user and display a message", async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: ["--window-size=1920x1080"],
  });

  const page = await browser.newPage();
  await page.goto(
    "file:///home/jsbisht/workspace/tests/jest-tests/puppeteer.html"
  );

  // add name and age
  await page.click("input#username");
  await page.type("input#username", "jsbisht");
  await page.click("input#userage");
  await page.type("input#userage", "25");
  await page.click("button#add");

  // assertions
  const paraText = await page.$eval("p", (el) => el.textContent);
  expect(paraText).toBe("jsbisht 25");
}, 10000);
