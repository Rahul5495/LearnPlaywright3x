
/* Playwright Result Summary Generator

You receive an array of Playwright step result objects in the format `{ name, status, durationMs }`, where status can be `"passed"`, `"failed"`, or `"skipped"`. 
Write a JavaScript function that prints a summary report with total steps, passed count, failed count, skipped count, total duration, 
and a comma-separated list of failed step names. 
Example:
results = [{ name: "open login", status: "passed", durationMs: 400 }, { name: "fill form", status: "failed", durationMs: 700 }, { name: "submit", status: "skipped", durationMs: 0 }] 
Output:
Total Steps: 3 Passed: 1 Failed: 1 Skipped: 1 Total Duration: 1100ms Failed Steps: fill form */

function printSummary(results) {
  const summary = results.reduce(
    (acc, step) => {
      acc.totalSteps++;
      acc.totalDuration += step.durationMs;

      if (step.status === "passed") acc.passed++;
      if (step.status === "failed") {
        acc.failed++;
        acc.failedSteps.push(step.name);
      }
      if (step.status === "skipped") acc.skipped++;

      return acc;
    },
    {
      totalSteps: 0,
      passed: 0,
      failed: 0,
      skipped: 0,
      totalDuration: 0,
      failedSteps: []
    }
  );

  console.log(`Total Steps: ${summary.totalSteps}`);
  console.log(`Passed: ${summary.passed}`);
  console.log(`Failed: ${summary.failed}`);
  console.log(`Skipped: ${summary.skipped}`);
  console.log(`Total Duration: ${summary.totalDuration}ms`);
  console.log(`Failed Steps: ${summary.failedSteps.join(", ")}`);
}

const results = [
  { name: "open login", status: "passed", durationMs: 400 },
  { name: "fill form", status: "failed", durationMs: 700 },
  { name: "submit", status: "skipped", durationMs: 0 }
];

printSummary(results);