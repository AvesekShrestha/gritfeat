# Question 1

```
function print(){
console.log("Hello World")
}
```

**Time Complexity** 

* *console.log()* takes O(1) or constant time.

# Question 2

```
function sumArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
sum += arr[i];
}
return sum;
}
```

**Time Complexity** 

* *sumArray()* takes O(n), becuase *sum += arr[i]* runs *n* times

# Question 3 

```
function findX(arr) {
    let x = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === 10) {
                x.push([arr[i], arr[j]]);
            }
        }
    }
    return x;
}
```

**Time Complexity** 

* Time complexity of findX is *O(n^2)*, since function has two nested loops for *n* time.
* inner loop runs *n* times for single iteration of outer loop
* and outer loop also runs for *n* times.


# Question 4 

```
function getFirstTwoElements(arr) {
    if (arr.length < 2) {
        return null;
    }
    const first = arr[0];
    const second = arr[1];
    return [first, second];
}
```

**Time Complexity** 

* Time complexity of *getFirstTwoElements()* is O(1)
* Accessing of array using index has constant time complexity

# Question no 5 

```
function countF(n) {
    let count = 0;
    for (let i = 1; i < n; i = i * 2) {
        count++;
    }
    return count;
}
```

**Time Complexity** 

* Time Complexity of *countF()*  is o(log(n)).
* Since, i increase with multiple of 2. 

# Question no 6 : Find worst, average and best cases:

```
function findElement(sortedArr, target) {
    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] === target) {
            return i;
        }
    }
    return -1;
}
```

**Time Complexity** 

* **Best Case** : O(1) - when target elemet is at the first index of array.
* **Worst Case** : O(n) - when target element is at the last index of array.
* **Average Case** : O(n) 


# Question no 7

```
function recursiveSum(n) {
    if (n <= 0) {
        return 0;
    }
    return n + recursiveSum(n - 1);
}

```

**Time Complexity** 

* **Best Case** : O(1) - when n == 0
* **Worst Case** : O(n) - for each recurssion call, it is added in stack
* **Average Case** : O(n)

# Question no 8 

```
function dFunction(arr) {
    const seen = {};
    for (let i = 0; i < arr.length; i++) {
        if (seen[arr[i]]) {
            return true;
        }
        seen[arr[i]] = true;
    }
    return false;
}
```

**Time Complexity** 

* **Best Case** : O(1) - if dublicate is found at first few indexes
* **Worst Case** : O(n) - if dublicates is not present 
* **Average Case** : O(n)


# Question no 9 

```
function repeatLog(arr) {
    for (let i = 0; i < arr.length; i++) {
        let repetitions = arr[i];
        for (let j = 0; j < repetitions; j++) {
            console.log('hello');
        }
    }
}
```

**Time Complexity** 

* **Best Case** : O(n) if all the elements in array is 0.
* **Worst Case** : O(n^2) if elements in array are large number.







