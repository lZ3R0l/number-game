function generateRandomArray() {
    let length;
    const array = [];
    length = prompt('Enter the desired length of the array:');
    length = parseFloat(length)
    
    if(isNaN(length) || length <= 0) {
        alert('Please enter a valid positive number!');
    } else {
        for (let i = 0; i < length; i++) {
            array.push(Math.floor(Math.random() * 100) + 1);
        }
        return array;
    }
}

function sumEvenNumbers(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            sum += array[i];
        }
    }
    return sum;
}

export function runArrayFunctions() {
    const array = generateRandomArray();
    const sum = sumEvenNumbers(array);
    alert(`Generated array: ${array} \nThe sum of even numbers in the array is: ${sum}`);
}