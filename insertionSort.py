arr = [15,2,3,5,10,11]

def insertionSort(arr):
    for i in range(len(arr) - 1):
        key = arr[i]
        j = i - 1 
        
        while j >= 0 and arr[j] >= key:
            arr[j + 1] = arr[j]
            j -= 1

        arr[j+1] = key
    return arr

print(insertionSort(arr))

