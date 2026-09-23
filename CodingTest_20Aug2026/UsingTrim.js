
/* Given a raw Playwright error message string, write a function that trims extra spaces, converts the message to lowercase, collapses multiple spaces into a single space, and prints a category. 
Use TIMEOUT if the normalized message contains "timeout", LOCATOR if it contains "locator", otherwise GENERAL. */

function categorizeError(rawMessage) {
  const normalized = rawMessage
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");

  let category;

  if (normalized.includes("timeout")) {
    category = "TIMEOUT";
  } else if (normalized.includes("locator")) {
    category = "LOCATOR";
  } else {
    category = "GENERAL";
  }

  console.log(`Category: ${category}`);
}

// Examples
categorizeError("  Test   TIMEOUT   while waiting  ");
// Category: TIMEOUT

categorizeError("  Invalid   LOCATOR   found  ");
// Category: LOCATOR

categorizeError("  Something   unexpected happened  ");
// Category: GENERAL