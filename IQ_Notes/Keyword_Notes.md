# JavaScript Keywords

## Example File: `01_Chapter_JavaScript/01_HelloWorld.js`

```javascript
console.log("HelloWorld");
let a = 10;
console.log(a);
```

- `let` → a **keyword** (variable declaration)
- `console` → a **global object**, not a keyword
- `log` → a **property/method name**, not a keyword

---

## Comparison: Keyword Categories

| Category | Keywords | Purpose | Example |
|----------|----------|---------|---------|
| **Variable Declaration** | `var`, `let`, `const` | Declare variables and constants | `let a = 10;` |
| **Control Flow** | `if`, `else`, `switch`, `case`, `break`, `default`, `continue` | Branch and conditional logic | `if (a > 5) { ... }` |
| **Loops** | `for`, `while`, `do`, `in`, `of` | Iteration and looping | `for (let i of arr) { ... }` |
| **Functions** | `function`, `return`, `async`, `await`, `yield` | Define and control functions | `function greet() { return "Hi"; }` |
| **Objects & Classes** | `class`, `extends`, `super`, `new`, `this`, `static`, `get`, `set` | OOP — constructors, inheritance, accessors | `class Dog extends Animal { ... }` |
| **Error Handling** | `try`, `catch`, `finally`, `throw` | Handle runtime exceptions | `try { ... } catch (e) { ... }` |
| **Modules** | `import`, `export`, `from`, `as` | Split code across files | `import { add } from "./math.js";` |
| **Boolean & Null** | `true`, `false`, `null` | Literal truth values and empty intent | `let done = false;` |
| **Operators as Keywords** | `typeof`, `instanceof`, `delete`, `void`, `in` | Type/instance checks, property removal | `typeof a === "number"` |
| **Miscellaneous** | `debugger`, `with` | Debugging pause (debugger); scope extension (with — deprecated) | `debugger;` |

---

## Reserved Words (Contextual)

These are **not fully reserved** in all contexts but behave like keywords in specific positions:

| Keyword | When it's a keyword | Example |
|---------|-------------------|---------|
| `of` | In `for...of` loops | `for (let x of arr)` |
| `get` / `set` | Inside class/object literal property definitions | `get name() { ... }` |
| `async` | Before function declarations | `async function fetchData()` |
| `await` | Inside async functions only | `let data = await fetch(url);` |
| `yield` | Inside generator functions only | `function* gen() { yield 1; }` |
| `from` / `as` | Inside import/export statements | `import x from "./lib.js"` |

---

## Keywords That Are NOT in Our Example

Running `01_HelloWorld.js` only touches **1 keyword** (`let`). The rest exist in the language but don't appear in this tiny script:

```
var, const, if, else, for, while, do, switch, case, break,
continue, function, return, class, extends, super, new, this,
try, catch, finally, throw, import, export, typeof, instanceof,
delete, void, debugger, with, async, await, yield, static, get,
set, true, false, null, in, of, from, as
```

---

## Full Alphabetical List (ES2023+)

```
await, break, case, catch, class, const, continue, debugger,
default, delete, do, else, export, extends, false, finally,
for, function, if, import, in, instanceof, let, new, null,
of, return, static, super, switch, this, throw, true, try,
typeof, var, void, while, with, yield
```

> **Key Point:** JavaScript has ~40+ keywords. They are **reserved words** — you cannot use them as variable names, function names, or identifiers. `let` is one of the most common, used for block-scoped variable declaration.
