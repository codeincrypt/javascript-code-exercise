const threeDArray = [
    [
        [
            [
                [1],
                2
            ],
            3
        ],
        [4, 5, 6],
    ],
    [
        [7, 8, 9],
        [10, 11, 12],
    ],
];

/**
 * Flattens a 3D array into a 1D array.
 * @param {Array} arr - The 3D array to be flattened.
 * @returns {Array} - The flattened 1D array.
 */
function flatten3DArray(arr) {
    return arr.flat(Infinity);
}

function flattenNestedArray(arr) {
    const flattenedArray = [];

    function flattenHelper(subArray) {
        for (let i = 0; i < subArray.length; i++) {
            if (Array.isArray(subArray[i])) {
                flattenHelper(subArray[i]);
            } else {
                flattenedArray.push(subArray[i]);
            }
        }
    }
    flattenHelper(arr);
    return flattenedArray;
}


console.log(flatten3DArray(threeDArray)); // 👉️ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

console.log(flattenNestedArray(threeDArray)); // 👉️ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]