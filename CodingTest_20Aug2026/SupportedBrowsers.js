
/* You have an array of all supported browsers and another array of temporarily blocked browsers. 
Write a function that returns the runnable browsers, the blocked browsers, 
and a printable execution plan string such as "Run on: chromium, webkit | Skip: firefox". */

function createExecutionPlan(allBrowsers, blockedBrowsers) {
  const runnable = allBrowsers.filter(
    browser => !blockedBrowsers.includes(browser)
  );

  const blocked = allBrowsers.filter(
    browser => blockedBrowsers.includes(browser)
  );

  const plan = `Run on: ${runnable.join(", ")} | Skip: ${blocked.join(", ")}`;

  return {
    runnable,
    blocked,
    plan
  };
}
// Example
const allBrowsers = ["chromium", "firefox", "webkit"];
const blockedBrowsers = ["firefox"];

console.log(createExecutionPlan(allBrowsers, blockedBrowsers));