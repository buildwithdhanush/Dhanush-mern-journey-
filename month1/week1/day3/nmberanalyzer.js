const analyzeNumbers = (arr) => {
    if (arr.length === 0) {
        return {
            max: null,
            min: null,
            sum: 0,
            average: 0,
            evens: []
        };
    }

    let max = arr[0];
    let min = arr[0];
    let sum = 0;
    let evens = [];

    for (const num of arr) {
        if (num > max) {
            max = num;
        }

        if (num < min) {
            min = num;
        }

        sum += num;

        if (num % 2 === 0) {
            evens.push(num);
        }
    }

    return {
        max: max,
        min: min,
        sum: sum,
        average: sum / arr.length,
        evens: evens
    };
};


// Test Case 1
console.log(
    analyzeNumbers([3, 1, 4, 1, 5, 9, 2, 6])
);

// Expected:
// {
//   max: 9,
//   min: 1,
//   sum: 31,
//   average: 3.875,
//   evens: [4, 2, 6]
// }


// Test Case 2
console.log(
    analyzeNumbers([])
);

// Expected:
// {
//   max: null,
//   min: null,
//   sum: 0,
//   average: 0,
//   evens: []
// }