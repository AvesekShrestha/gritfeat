// Find if a duplicate exists in a list of numbers.
// For eg:
// const data = [1, 3, 5, 2, 4, 5];
// Answer:  [5]


const findDuplicate = (numbers: number[]): number[] => {
    let duplicate: number[] = []
    let set = new Set();

    numbers.map((number) => {
        if (set.has(number)) duplicate.push(number)
        else set.add(number)
    })

    return duplicate;
}

// const duplicate: number[] = findDuplicate([1, 3, 5, 2, 4, 5]);
// console.log(duplicate)



// Check if any item from user roles exists in required roles.

// For eg: 
// Find if user and editor roles are present in requiredRoles.(roles can be any of length)

// const roles = ['admin', 'manager',  supervisor‘',  'editor', ‘viewer', ‘owner', ‘']
// const userRoles = ['user', 'editor']
// const requiredRoles = ['admin',  'editor']

// Answer: true


const roleExists = (userRoles: string[], requiredRoles: string[]): boolean => {
    return userRoles.some(userRole => requiredRoles.includes(userRole))
}

const userRoles = ['user', 'editor'];
const requiredRoles = ['admin', 'editor'];

// console.log(roleExists(userRoles, requiredRoles))


// Find Common Elements Between Two Arrays

// For eg:
// const a1 =  [1,4,2,8,9]
// const a2 = [7,5,0,4,1]
// Answer: [1, 4]



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

// console.log(findCommonElement(a1, a2))


// Filter items based on allowed keys
// For eg:
// const data = [
//   { key: 'name', value: ‘John'},
//   { key: 'email', value:'john@example.com' },
//   { key: 'age', value: 20 },
// ]
// const allowedKeys = ['name', 'age']
// Answer: [ { key: 'name', value: 'John' }, { key: 'age', value: 20 } ]


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

// console.log(filterData(data, allowedKeys))


// Determine whether both keys and values  of two objects are equal 
// For eg:
// const d1= {name:'John', email:'john@example.com' ,  age: 20 }
// const d2= {name:'John', email:'john@example.com' ,  age: 20 }
// const d3= {name:'Jane', email:'jane@example.com' ,  age: 20 }

// Answer: sameObject(d1,d2) => true
// Answer: sameObject(d1,d3) => false

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

// console.log(sameObject(d1, d2))
// console.log(sameObject(d1, d3))



// Group the related data by category 
// const products = [
//   { id: 1, name: 'Phone', categoryId: 2 },
//   { id: 2, name: 'Shirt', categoryId: 1 },
//   { id: 3, name: 'Charger', categoryId: 2 }
// ]
// Answer: 
// {
//   '1': [ { id: 2, name: 'Shirt', categoryId: 1 } ],
//   '2': [
//     { id: 1, name: 'Phone', categoryId: 2 },
//     { id: 3, name: 'Charger', categoryId: 2 }
//   ]
// }

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

// console.log(groupProducts(products))



// Implement binary search algorithm. (If sorting is required, you should use one of the sorting algorithms: Selection, Insertion, Merge, Quick, Heap Sort)


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


 
