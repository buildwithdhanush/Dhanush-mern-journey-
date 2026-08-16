// ============================================
// Day 2 — Operators Demo
// ============================================

const a = 6;
const b = 5;
const c = 4;
const d = 3;
const e = 2;
const f = 1;

// --- Arithmetic ---
console.log("=== Arithmetic Operators ===");
const add = a + b;
const sub = c - d;
const mul = e * f;
const div = e / f;
const mod = add % sub;
const pow = sub ** div;
console.log({ add, sub, mul, div, mod, pow });

// --- Assignment ---
console.log("\n=== Assignment Operators ===");
let x = 20;
console.log("x = 20:", x);
x += 6;  console.log("x += 6:", x);
x -= 5;  console.log("x -= 5:", x);
x *= 6;  console.log("x *= 6:", x);
x /= 2;  console.log("x /= 2:", x);
x %= add; console.log("x %= add:", x);

// --- Comparison ---
console.log("\n=== Comparison Operators ===");
console.log("5 == '5':", 5 == "5");    // true (loose)
console.log("5 === '5':", 5 === "5");  // false (strict)
console.log("5 > 6:", 5 > 6);          // false
console.log("5 < 6:", 5 < 6);          // true
console.log("5 <= 5:", 5 <= 5);        // true

// --- Logical ---
console.log("\n=== Logical Operators ===");
const isAdult = true;
const hasID = false;
console.log("isAdult && hasID:", isAdult && hasID);   // false
console.log("isAdult || hasID:", isAdult || hasID);   // true
console.log("!isAdult:", !isAdult);                   // false

// --- Ternary ---
console.log("\n=== Ternary Operator ===");
const age = 17;
const status = age >= 18 ? "adult" : "minor";
console.log(`Age ${age} is ${status}`);

// --- Nullish Coalescing ---
console.log("\n=== Nullish Coalescing ===");
const userInput = null;
const defaultValue = "guest";
console.log("null ?? 'guest':", null ?? defaultValue);           // "guest"
console.log("'' ?? 'guest':", "" ?? defaultValue);             // "" (empty string is NOT nullish)
console.log("0 ?? 'guest':", 0 ?? defaultValue);               // 0 (0 is NOT nullish)
console.log("undefined ?? 'guest':", undefined ?? defaultValue); // "guest"
