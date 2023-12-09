function mergeSort (array) {
    let leftHalf = [];
    let rightHalf = [];
    let sortedArray = [];

    if (array.length === 0) {
        return array;
    } else if (array.length === 1) {
        sortedArray.push(array[0]);
        return sortedArray;
    }

    leftHalf = array.slice(0, array.length/2);
    rightHalf = array.slice(array.length/2);

    leftHalf = mergeSort(leftHalf);
    rightHalf = mergeSort(rightHalf);

    while (leftHalf.length !== 0 || rightHalf !== 0) {
        if (leftHalf[0] <= rightHalf[0] ) {
            sortedArray.push(leftHalf[0]);
            leftHalf.shift();
        } else if (rightHalf[0] <= leftHalf[0]) {
            sortedArray.push(rightHalf[0]);
            rightHalf.shift();
        } else if (rightHalf.length === 0 && leftHalf.length !== 0) {
            sortedArray.push(leftHalf[0]);
            leftHalf.shift();
        } else if (leftHalf.length === 0 && rightHalf.length !== 0) {
            sortedArray.push(rightHalf[0]);
            rightHalf.shift();
        } else{
            return sortedArray;
        }
    }
}

const unsortedArray = [];
console.log(mergeSort(unsortedArray));