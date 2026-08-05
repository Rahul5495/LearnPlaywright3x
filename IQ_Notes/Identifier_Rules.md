# JavaScript Identifier Rules

## Example File: `01_Chapter_JavaScript/01_HelloWorld.js`

```javascript
console.log("HelloWorld");
let a = 10;
console.log(a);
```

Identifiers in this file: `console` (object), `log` (property), `a` (variable)

---

## Identifier Rules & Conventions

| Rule # | Rule | Valid Example | Invalid Example |
|--------|------|---------------|-----------------|
| 1 | Must begin with a letter (`a-z`, `A-Z`), underscore (`_`), or dollar sign (`$`) | `let name = 5;` | `let 1name = 5;` ❌ starts with digit |
| 2 | After the first character, can include letters, digits, `_`, and `$` | `let user1 = 5;` | `let user-name = 5;` ❌ hyphen not allowed |
| 3 | **Cannot** be a reserved keyword | `let result = 10;` | `let let = 10;` ❌ `let` is a keyword |
| 4 | Case-sensitive — `Name` and `name` are different | `let x = 1; let X = 2;` (both valid, different) | — |
| 5 | Cannot contain spaces | `let firstName = "Raj";` | `let first Name = "Raj";` ❌ space |
| 6 | Unicode letters are allowed | `let π = 3.14;` | — |
| 7 | Cannot start with a digit | `let _count = 0;` | `let 9lives = 0;` ❌ |

---

## Naming Conventions (Not enforced by JS, but standard practice)

| Convention | Style | Example | Used For |
|-----------|-------|---------|----------|
| **camelCase** | First word lowercase, subsequent words capitalized | `firstName`, `getUserById` | Variables, functions, methods ✅ most common |
| **PascalCase** | Every word starts with capital | `UserProfile`, `HttpClient` | Classes, constructors, React components |
| **snake_case** | Words separated by underscores | `user_name`, `MAX_LIMIT` | Constants (uppercase), Python-style (rare in JS) |
| **SCREAMING_SNAKE_CASE** | All caps, underscore separated | `MAX_RETRY_COUNT`, `API_BASE_URL` | True constants (configuration values) |
| **$prefix** | Starts with `$` | `$el`, `$scope` | jQuery objects, Angular framework internals |
| **_prefix** | Starts with `_` | `_privateVar`, `_internalFn` | Convention for "private" members (not truly private) |

---

## Allowed Characters (Quick Reference)

```
Allowed start:  a-z, A-Z, _ , $
Allowed body:   a-z, A-Z, 0-9, _ , $
NOT allowed:    spaces, hyphens (-), special chars (@, #, %, &, *)
```

---

## Common Error Examples

```javascript
let 123abc;     // SyntaxError: Unexpected number
let my-var;     // SyntaxError: Unexpected token '-'
let function;   // SyntaxError: Unexpected token 'function'
let class;      // SyntaxError: Unexpected token 'class'
let my var;     // SyntaxError: Unexpected identifier
```

---

## Key Takeaways

| | Rule | Example from `01_HelloWorld.js` |
|--|------|--------------------------------|
| ✅ | Starts with a letter | `a` starts with `a` |
| ✅ | No spaces | `console.log` — dot separates, not space |
| ✅ | Not a keyword | `console`, `log`, `a` are not reserved |
| ✅ | Case-sensitive | `log` is lowercase — `Log` would be a different identifier |
