// ============================================
// Day 3 — Loops & Functions Demo
// ============================================

const nums = [10, 20, 30, 40, 50];


// --------------------------------------------
// 1. for loop
// --------------------------------------------
console.log("=== for loop ===");

for (let i = 0; i < nums.length; i++) {
    console.log(`Index ${i}: ${nums[i]}`);
}


// --------------------------------------------
// 2. while loop
// --------------------------------------------
console.log("\n=== while loop ===");

let j = 0;

while (j < nums.length) {
    console.log(nums[j]);
    j++;
}


// --------------------------------------------
// 3. for...of loop
// --------------------------------------------
console.log("\n=== for...of ===");

for (const num of nums) {
    console.log(num);
}


// --------------------------------------------
// 4. for...in loop
// Objects — NOT recommended for arrays
// --------------------------------------------
console.log("\n=== for...in (object) ===");

const person = {
    name: "dhanush",
    role: "student",
    stack: "MERN"
};

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}


// --------------------------------------------
// 5. Function Styles
// --------------------------------------------
console.log("\n=== Function Styles ===");

// Function Declaration
function addDecl(a, b) {
    return a + b;
}

// Function Expression
const addExpr = function(a, b) {
    return a + b;
};

// Arrow Function
const addArrow = (a, b) => a + b;

console.log("Declaration:", addDecl(2, 3));
console.log("Expression:", addExpr(2, 3));
console.log("Arrow:", addArrow(2, 3));


// --------------------------------------------
// 6. break example
// Stops the loop completely
// --------------------------------------------
console.log("\n=== break example ===");

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }

    console.log(i);
}

// Output:
// 0
// 1
// 2
// 3
// 4


// --------------------------------------------
// 7. continue example
// Skips the current iteration
// --------------------------------------------
console.log("\n=== continue example ===");

for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;
    }

    console.log(i);
}

// Output:
// 0
// 1
// 3
// 4