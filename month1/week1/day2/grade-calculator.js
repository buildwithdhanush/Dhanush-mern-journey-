function calculateGrade(score) {
  // Check for invalid numbers first
  if ( typeof score !== "number" || score > 100 || score < 0) {
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
console.log(calculateGrade(95)); // Output: "A"
console.log(calculateGrade(72));
console.log(calculateGrade("hello")) // Output: "C"
console.log(calculateGrade(-5)) // Output: "C"
