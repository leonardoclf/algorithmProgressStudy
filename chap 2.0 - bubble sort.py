arr = [15,2,3,5,10,11]

for i in range(len(arr) - 1):
    for j in range(len(arr) - 1):
        if arr[j] > arr[j + 1]:
            arr[j], arr[j + 1] = arr[j + 1], arr[j]

print(arr)
