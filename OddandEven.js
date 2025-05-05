function OddEven(arr) {
    let oddCount = 0;
    let evenCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    return [evenCount, oddCount];
}

console.log(OddEven([1, 3, 4, 5, 6, 55, 77, 4]));
