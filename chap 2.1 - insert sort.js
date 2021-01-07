/*

Insertion sort; create 2 'substring' - sorted / unsorted - keep moving to the right

*/

let arr = [15, 2,3,5,10,11];

for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1; 
    while (j >= 0 && arr[j] >= key) {
        // moving the hole to the left
        arr[j + 1] = arr[j]
        j--;
    }
    // fill the hole
    arr[j+1] = key
}

console.log(arr);


