let arr128 = new Array(128);
let arr1024 = new Array(1024);
let arr1048576 = new Array(1048576);
let checkArr = new Array(5);
checkArr = fillArr(checkArr);

function fillArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.round(Math.random() * 100);
    }
    return arr;
}

let counter = 0;

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
                counter++;
            }
        }
    }
    return arr;
}
// arr128 = fillArr(arr128);
// arr128.sort((a,b)=>b-a);
// console.log(arr128);
// console.time("bubble");
// bubbleSort(arr128);
// console.timeEnd("bubble");
// console.log(arr128);
// arr1024 = fillArr(arr1024);
// arr1024.sort((a,b)=>b-a);
// console.log(arr1024);
// console.time("bubble1");
// bubbleSort(arr1024);
// console.timeEnd("bubble1");
// console.log(arr1024);
// arr1048576 = fillArr(arr1048576);
// arr1048576.sort((a,b)=>b-a);
// console.log(arr1048576);
// console.time("bubble2");
// bubbleSort(arr1048576);
// console.timeEnd("bubble2");
// console.log(arr1048576);
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        let temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
        counter++;
    }
    return arr;
}
// arr128 = fillArr(arr128);
// arr128 = arr128.sort((a, b) => b - a);
// console.log(arr128);
// console.time("selection");
// selectionSort(arr128);
// console.timeEnd("selection");
// console.log(counter);
// console.log(arr128);

// arr1024 = fillArr(arr1024);
// arr1024 = arr1024.sort((a, b) => b - a);
// console.log(arr1024);
// console.time("selection");
// selectionSort(arr1024);
// console.timeEnd("selection");
// console.log(counter);
// console.log(arr1024);

// arr1048576 = fillArr(arr1048576);
// arr1048576 = arr1048576.sort((a, b) => b - a);
// console.log(arr1048576);
// console.time("selection");
// selectionSort(arr1048576);
// console.timeEnd("selection");
// console.log(counter);
// console.log(arr1048576);

function insertionSort(arr) {
    for (let i = 1, l = arr.length; i < l; i++) {
        let curr = arr[i];
        let j = i;

        while (j > 0 && arr[j - 1] > curr) {
            arr[j] = arr[j - 1];
            j--;
            counter++;
        }

        arr[j] = curr;
    }
    return arr;
}

// arr128 = fillArr(arr128);
// //arr128 = arr128.sort((a, b) => b - a);
// console.log(arr128);
// console.time("insertion");
// insertionSort(arr128);
// console.timeEnd("insertion");
// console.log(counter);
// console.log(arr128);

// arr1024 = fillArr(arr1024);
// //arr1024 = arr1024.sort((a, b) => b - a);
// console.log(arr1024);
// console.time("insertion");
// insertionSort(arr1024);
// console.timeEnd("insertion");
// console.log(counter);
// console.log(arr1024);

// arr1048576 = fillArr(arr1048576);
// arr1048576 = arr1048576.sort((a, b) => b - a);
// console.log(arr1048576);
// console.time("insertion");
// insertionSort(arr1048576);
// console.timeEnd("insertion");
// console.log(counter);
// console.log(arr1048576);

function shellSort(arr) {
    let l = arr.length;
    let gap = Math.floor(l / 2);

    while (gap >= 1) {
        for (let i = gap; i < l; i++) {
            let current = arr[i];
            let j = i;
            while (j > 0 && arr[j - gap] > current) {
                arr[j] = arr[j - gap];
                j -= gap;
                counter++;
            }
            arr[j] = current;
        }
        gap = Math.floor(gap / 2);
    }
    return arr;
}

// arr128 = fillArr(arr128);
// //arr128 = arr128.sort((a, b) => b - a);
// console.log(arr128);
// console.time("shell");
// shellSort(arr128);
// console.timeEnd("shell");
// console.log(counter);
// console.log(arr128);

// arr1024 = fillArr(arr1024);
// arr1024 = arr1024.sort((a, b) => b - a);
// console.log(arr1024);
// console.time("shell");
// shellSort(arr1024);
// console.timeEnd("shell");
// console.log(counter);
// console.log(arr1024);

// arr1048576 = fillArr(arr1048576);
// arr1048576 = arr1048576.sort((a, b) => b - a);
// console.log(arr1048576);
// console.time("shell");
// shellSort(arr1048576);
// console.timeEnd("shell");
// console.log(counter);
// console.log(arr1048576);

function combSort(arr) {
    let l = arr.length;
    let factor = 1.247;
    let gapFactor = l / factor;

    while (gapFactor > 1) {
        let gap = Math.round(gapFactor);

        for (let i = 0, j = gap; j < l; i++, j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
                counter++;
            }
        }
        gapFactor = gapFactor / factor;
    }
    return arr;
}

// arr128 = fillArr(arr128);
// //arr128 = arr128.sort((a, b) => b - a);
// console.log(arr128);
// console.time("comb");
// combSort(arr128);
// console.timeEnd("comb");
// console.log(counter);
// console.log(arr128);

// arr1024 = fillArr(arr1024);
// arr1024 = arr1024.sort((a, b) => b - a);
// console.log(arr1024);
// console.time("comb");
// combSort(arr1024);
// console.timeEnd("comb");
// console.log(counter);
// console.log(arr1024);

// arr1048576 = fillArr(arr1048576);
// arr1048576 = arr1048576.sort((a, b) => b - a);
// console.log(arr1048576);
// console.time("comb");
// combSort(arr1048576);
// console.timeEnd("comb");
// console.log(counter);
// console.log(arr1048576);

function swap(items, firstIndex, secondIndex) {
    const temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
    counter++;
}

function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)],
        i = left,
        j = right;
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    let index;
    if (items.length > 1) {
        left = typeof left != "number" ? 0 : left;
        right = typeof right != "number" ? items.length - 1 : right;
        index = partition(items, left, right);
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }
    }
    return items;
}
// arr128 = fillArr(arr128);
// //arr128 = arr128.sort((a, b) => b - a);
// console.log(arr128);
// console.time("quick");
// quickSort(arr128, 0, arr128.length - 1);
// console.timeEnd("quick");
// console.log(counter);
// console.log(arr128);

// arr1024 = fillArr(arr1024);
// arr1024 = arr1024.sort((a, b) => b - a);
// console.log(arr1024);
// console.time("quick");
// quickSort(arr1024, 0, arr1024.length - 1);
// console.timeEnd("quick");
// console.log(counter);
// console.log(arr1024);

// arr1048576 = fillArr(arr1048576);
// arr1048576 = arr1048576.sort((a, b) => a - b);
// console.log(arr1048576);
// console.time("quick");
// quickSort(arr1048576, 0, arr1048576.length - 1);
// console.timeEnd("quick");
// console.log(counter);
// console.log(arr1048576);

arr128 = fillArr(arr128);
arr1024 = fillArr(arr1024);
arr1048576 = fillArr(arr1048576);

function callBack(a, b) {
    if (a > b) {
        counter++;
        return 1;
    }
    if (a < b) {
        counter++;
        return -1;
    }
    return 0;
}
// arr128 = arr128.sort((a, b) => a - b);
// console.time("sort1");
// arr128.sort(callBack);
// console.timeEnd("sort1");
// console.log("counter: " + counter);

//arr1024 = arr1024.sort((a, b) => a - b);
// console.time("sort1");
// arr1024.sort(callBack);
// console.timeEnd("sort1");
// console.log("counter: " + counter);

//arr1048576 = arr1048576.sort((a, b) => a - b);
console.time("sort1");
arr1048576.sort(callBack);
console.timeEnd("sort1");
console.log("counter: " + counter);