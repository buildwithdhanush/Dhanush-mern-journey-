function calculateGrade(score) {
  // Check for invalid numbers first
  if (typeof score !== "number" || score > 100 || score < 0) {
    return "Invalid  Please enter a number between 0 and 100.";
  }

  // Determine the letter grade
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// Test cases
// Test cases
console.log(calculateGrade(95)); // "A"
console.log(calculateGrade(85)); // "B"
console.log(calculateGrade(72)); // "C"
console.log(calculateGrade(65)); // "D"
console.log(calculateGrade(45)); // "F"
console.log(calculateGrade(100)); // "A" (edge case)
console.log(calculateGrade(0)); // "F" (edge case)
console.log(calculateGrade("hello")); // "Invalid"
console.log(calculateGrade(-5)); // "Invalid"
console.log(calculateGrade(105)); // "Invalid"
