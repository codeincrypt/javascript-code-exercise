function uniqueOccurrences(arr) {
    // Count occurrences of each value
    const countMap = new Map();
    for (const num of arr) {
        console.log('num', num, (countMap.get(num) || 0) + 1)
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    // Check if the counts are unique
    const countSet = new Set(countMap.values());
    return countMap.size === countSet.size;
}

// Example usage:
const exampleArray = [1, 2, 2, 1, 1, 3];
const result = uniqueOccurrences(exampleArray);
console.log(result);  // Output: true
