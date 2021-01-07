/*
    Bubblesort - largest item always go to last pos in each interation 
*/

let arrRandom = [];

for (let i = 0; i < 30000; i++) {
    arrRandom.push(Math.floor(Math.random() * 100000));
}

// let arr = [11, 13, 1 , 3, 2, 9, 10];

function swap(arr, indexB, indexS) {
    let temp = arr[indexB];
    arr[indexB] = arr[indexS];
    arr[indexS] = temp;
}

for (let i = 0; i < arrRandom.length; i++) {
    for(let j = 0; j < arrRandom.length; j++) {
        if(arrRandom[j] > arrRandom[j + 1]) {
            swap(arrRandom, j, j + 1);
        }
    }
}


console.log(arrRandom);



let arrRandom = [];

for (let i = 0; i < 500; i++) {
    arrRandom.push(Math.floor(Math.random() * 1000));
}

console.log(arrRandom);

