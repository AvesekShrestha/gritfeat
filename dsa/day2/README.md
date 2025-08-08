# Question 1 

**Solution**

```
const findDuplicate = (numbers: number[]): number[] => {
    let duplicate: number[] = []
    let set = new Set();

    numbers.map((number) => {
        if (set.has(number)) duplicate.push(number)
        else set.add(number)
    })

    return duplicate;
}

const duplicate: number[] = findDuplicate([1, 3, 5, 2, 4, 5]);
console.log(duplicate)
```

**Time Complexity** 

* Linear Time Complexity : O(n) -> for iterating over set


# Question 2 

**Solution**

```
const roleExists = (userRoles: string[], requiredRoles: string[]): boolean => {
    return userRoles.some(userRole => requiredRoles.includes(userRole))
}

const userRoles = ['user', 'editor'];
const requiredRoles = ['admin', 'editor'];

console.log(roleExists(userRoles, requiredRoles))
```


# Question 3 

**Solution** 

```

const findCommonElement = (arr1: number[], arr2: number[]): number[] => {

    let commonElements: number[] = []
    let set = new Set(arr1)

    arr2.map((e) => {
        if (set.has(e)) commonElements.push(e)
        else set.add(e)
    })
    return commonElements
}
const a1 = [1, 4, 2, 8, 9]
const a2 = [7, 5, 0, 4, 1]
console.log(findCommonElement(a1, a2))
```

**Time Complexity** 

* Linear Time Complexity : O(n)


# Question no 4 

**Solution** 

```
interface Ivalue {
    key: string,
    value: string | number
}

const data: Ivalue[] = [
    { key: 'name', value: 'John' },
    { key: 'email', value: 'john@example.com' },
    { key: 'age', value: 20 },
]

const allowedKeys: string[] = ['name', 'age']

const filterData = (data: Ivalue[], allowedKeys: string[]): Ivalue[] => {
    return data.filter(item => allowedKeys.includes(item.key))
}

console.log(filterData(data, allowedKeys))
```

# Question no 5 

**Solution**

```
interface Idata {
    name: string,
    email: string,
    age: number
}

const d1 = { name: 'John', email: 'john@example.com', age: 20 }
const d2 = { name: 'John', email: 'john@example.com', age: 20 }
const d3 = { name: 'Jane', email: 'jane@example.com', age: 20 }


const sameObject = (obj1: Idata, obj2: Idata): boolean => {
    return JSON.stringify(obj1) === JSON.stringify(obj2)
}

console.log(sameObject(d1, d2))
console.log(sameObject(d1, d3))
```

**Time Complexity** 

* Constant Time Complexity : O(1)


# Question no 6

**Solution**

```
interface Iproduct {
    id: number,
    name: string,
    categoryId: number
}


const products: Iproduct[] = [
    { id: 1, name: 'Phone', categoryId: 2 },
    { id: 2, name: 'Shirt', categoryId: 1 },
    { id: 3, name: 'Charger', categoryId: 2 }
];

const groupProducts = (products: Iproduct[]): Record<string, Iproduct[]> => {
    const groupedByCategory: Record<string, Iproduct[]> = {}

    products.map((product) => {
        const key = product.categoryId.toString()

        if (!groupedByCategory[key]) groupedByCategory[key] = []
        groupedByCategory[key].push(product)
    })

    return groupedByCategory
}

console.log(groupProducts(products))
```

**Time Complexity** 

* Linear Time Complexity : O(n) -> traversal over products

# Question no 7 

**Solution** 

```

const mergeSort = (arr: number[]): number[] => {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]): number[] {
    const result: number[] = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}

const binarySearch = (numbers: number[], target: number, front: number, rear: number): number => {
    if (front > rear) return -1;

    const mid = Math.floor((front + rear) / 2);

    if (numbers[mid] === target) return mid;

    if (numbers[mid] > target)
        return binarySearch(numbers, target, front, mid - 1);
    else
        return binarySearch(numbers, target, mid + 1, rear);
}

const numbers: number[] = [3, 2, 1, 4, 5]
const index: number = binarySearch(mergeSort(numbers), 3, 0, numbers.length - 1)
console.log(index)
```

**Time Complexity** 

* Merge Sort : O(nlog(n))
* Binary Search : O(log(n))
* Total Time Complexity : O(nlog(n)) + O(log(n)) = O(nlog(n))

# Binary Search Tree 

A Binary Search Tree is a special kind of binary tree where:

* Each node has at most two children: left and right.
* For every node:

    * All values in its left subtree are less than the node's value.
    * All values in its right subtree are greater than the node's value.

This property allows efficient searching, insertion, and deletion operations, generally running in O(log n) time.

## Basic operations of BST:

* Insert: Add a node keeping the BST property.
* Search: Find if a value exists.
* Traverse: Visit nodes in order (inorder, preorder, postorder).
* Delete: Remove a node maintaining BST property.



