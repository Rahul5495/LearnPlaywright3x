
/*After a test suite runs, you receive an array of test results (strings: "pass", "fail", "skip"). 
Write a JavaScript program using a for loop that counts how many tests passed, failed, and were skipped. 
Print a test report with total tests, counts, pass rate percentage, and a verdict 
(all passed → ready for release, ≤2 failures → review, >2 failures → block release).*/

const testResults = ["pass", "fail", "pass", "skip", "fail", "pass", "pass", "pass"];

let passed = 0;
let failed = 0;
let skipped = 0;

// Count test results using a for loop
for (let i = 0; i < testResults.length; i++) {
  if (testResults[i] === "pass") {
    passed++;
  } else if (testResults[i] === "fail") {
    failed++;
  } else if (testResults[i] === "skip") {
    skipped++;
  }
}

let totalTests = testResults.length;

// Calculate pass rate percentage
let passRate = (passed / totalTests) * 100;

// Determine verdict
let verdict;

if (failed === 0) {
  verdict = "Ready for release";
} else if (failed <= 2) {
  verdict = "Review";
} else {
  verdict = "Block release";
}

// Print test report
console.log("Test Report");
console.log("----------------");
console.log("Total Tests: " + totalTests);
console.log("Passed: " + passed);
console.log("Failed: " + failed);
console.log("Skipped: " + skipped);
console.log("Pass Rate: " + passRate.toFixed(2) + "%");
console.log("Verdict: " + verdict);