// // How to decleard array

let myArray = [1, 2, 3, 4, 5];
console.log(typeof myArray); // Output: object


let myArray1 =  new Array("1, 2, 3, 4, 5");
myArray1[6] =  10
console.log(myArray1);  // output:  [ '1, 2, 3, 4, 5', <5 empty items>, 10 ] so we can also add elements in to the arrray at any specifc index


//AND

let myArray3 = new Array(2)  // now it is waiting for 2 elements as we give it 2 elements it creates an array .
myArray3[0] = 1
myArray3[1] = 2
console.log(myArray3); // output: [1,2]


// Array Methods (This all methods change the orignal Array)

//1) To get the any Element of an Array 

console.log(myArray[0]); // Output: 1


//2) To add an element at the end of an array

myArray.push(6)
console.log(myArray) // Output: [ 1, 2, 3, 4, 5, 6 ]

//3) To add an element at the start of an array

myArray.unshift(0)
console.log(myArray) // Output: [ 0, 1, 2, 3, 4, 5, 6 ]

//4) To remove the last element from an array

myArray.pop()
console.log(myArray) // Output: [ 0, 1, 2, 3, 4, 5 ]

//5) To remove the first element from an array

myArray.shift()
console.log(myArray) // Output: [ 1, 2, 3, 4, 5 ]

//6) To update any value at a specific index inside an array

 myArray[2] = 10
console.log(myArray) // Output: [ 1, 2, 10, 4, 5 ]

//7) To get the length of an array

console.log(myArray.length) // Output: 5

//8) To check if an array contains a specific element

console.log(myArray.includes(11))  // Output: False
console.log(myArray.includes(10)) // Output: True


//9) To converet an array into string format ny toString() / join

// To string method converets an array into string format 
console.log(myArray.toString())// Output: 1, 2, 3, 4, 5


//  join method converets an array into string format with a specific separator
let names = ["Azan","Muhammad","Huzaif","Anus"]
 
console.log( "Join Method",names.join('-'))// Output: Azan-Muhammad-Huzaif-Anus

// NOTE : THIS METHOD DOES NOT CHANGE THE ORIGINAL ARRAY
console.log("Orignal array",names)

// To delete Element at any index of array

let num = [1,2,3,4,5,6]
console.log("Before",num)  // output: Before [ 1, 2, 3, 4, 5, 6 ]
delete num[0]
console.log("After",num)  // output: After [ <1 empty item>, 2, 3, 4, 5, 6 ]  element at index 0 is deleted


//11) To get a part of string

console.log("Slice Method",names.slice(0,2)) //it gives an array from 0 to 1 and ingonres the 2 , Output : [ 'Azan', 'Muhammad' ]

//NOTE : THIS METHOD DOES NOT CHANGE THE ORIGINAL ARRAY

console.log("Orignal array",names) // [ 'Azan', 'Muhammad', 'Huzaif', 'Anus' ]


//12) TO reverse an array

console.log("Before reverse",names) // before reverse output : [ 'Azan', 'Muhammad', 'Huzaif', 'Anus' ]
names.reverse()
console.log("After reverse",names) // after reverse output :   [ 'Anus', 'Huzaif', 'Muhammad', 'Azan' ]


//*********************************************************************************************************************************//
                                            // Understand the sorting method on Alphabats and Numbers//

//13) To set an array on the bases of Alphabetical order


//a)
let firuts  = ["Bannan", "Orange","Apple","Kiwi", "pomegrante"]

console.log("Before sort",firuts) // before sort output :  [ 'Bannan', 'Orange','Apple','Kiwi', 'pomegrante' ]
firuts.sort()
console.log("After sort",firuts) // after sort output :  [ 'Apple', 'Bannan', 'Kiwi', 'Orange', 'pomegrante' ]



//b) in the context of sorting numbers in ascending order, a - b ensures that smaller numbers appear before larger numbers

let numbers1 = [100,20]
console.log("Before sort",numbers1) // before sort output :  [ 100, 20]  

//1).if a - b is positive, it means b should come before a , so they swap the position

numbers1.sort((a,b) => a-b)  // 100 - 20 = postive value +80, so b should come  before a

console.log("After sort",numbers1) // after sort output : [100,20] => [20,100] bcz a-b is positive


let numbers2 = [20,100]
console.log("before sort",numbers2) // before sort output : [20,100]

// 2). if a - b is negative, it means a should come before b, so they remain in the same order.

numbers2.sort((a,b) => {a-b}) // 20 - 100 = negative value -80,  so a should come before b 

console.log("after sort",numbers2) // after sort output : [20,100] => [20,100] bcz a-b is negative


//3)If a - b is zero, it means a and b are equal in terms of sorting

let numbers3 = [30,30]
console.log("before sort",numbers3) //before sort output : [30,30]

numbers3.sort((a,b) => {a-b}) // 30 - 30 = zero value ,  so both remains in same order

console.log("after sort",numbers3) // after sort output : [30,30] => [30,30] bcz a-b is zero


//c)The context of sorting numbers in desceding order, b - a ensures that  larger numbers appear before Smaller numbers

let num1 = [20,200]
console.log("Before sort",num1) // before sort output : [20,200]

//1).if b - a is positive, it means b should come before a , so they swap the position
num1.sort((a,b) => b - a) // 200 - 20 = postive value , so b should come before a

console.log("After sort",num1) // after sort output : [20,200] => [200,20] bcz b-a is positive


//2) if b - a is negative, it means  a should come before b , so they remain in the same order.

let num2 = [200,20]
console.log("Before sort",num2) // before sort output : [200,20]

num1.sort((a,b) => {b-a}) // 20 - 200 =  negative value , so a should come before b 
console.log("After sort",num1) // after sort output : [200,20]


//3)If a - b is zero, it means a and b are equal in terms of sorting

let num3 = [30,30]
console.log("before sort",num3) //before sort output : [30,30]

num3.sort((a,b) => {b-a}) // 30 - 30 = zero value ,  so both remains in same order

console.log("after sort",num3) // after sort output : [30,30] => [30,30] bcz a-b is zero

// ***********************************************************************************************************************************//


//14)To remove element or  update element inside an arry we use splice

let arrayOfNames = ["Ayesha","Azan","Zaid","Hassan","Ubaid","ALi","Zayyan","Ifra","Mehmona"]

//syntax array.splice(starting Index, Number of ELement delete,updated values)

arrayOfNames.splice(0,3,"HELLO WORLD") 
console.log(arrayOfNames) // after splice : ["HEllO WORLD","Hassan","Ubaid","ALi","Zayyan","Ifra","Mehmona"]


// one more example 

// we can also just remove the Elements

let arrayOfNames2 = ["Ayesha","Azan","Zaid","Hassan","Ubaid","ALi","Zayyan","Ifra","Mehmona"]
arrayOfNames2.splice(3,4)
console.log(arrayOfNames2) // after splice : ["Ayesha","Azan","Zaid","Ifra","Mehmona"]

// we can also just update the elements

arrayOfNames2.splice(3,0,"Hassan","Ubaid","ALi","Zayyan")
console.log(arrayOfNames2) // after splice :  ["Ayesha","Azan","Zaid","Hassan","Ubaid","ALi","Zayyan","Ifra","Mehmona"]


// **********************************************************************************************************************************//

//15) Find the the  first index and last index of any element in the array

let myArray2 = [1,2,3,4,5,5,5,6,7,8,9,9,9,10]

console.log(myArray2.indexOf(5)) // index of return the first index of any element Output: 4   

console.log(myArray2.lastIndexOf(5)) //  index of return the Last index of any element Output: 6


// if the element is not found in the array then ir return -1 for it for example

console.log(myArray2.indexOf(11)) // index of 11 as 11 is not found Output: -1
console.log(myArray2.lastIndexOf(33)) // index of 33 as 33 is not found Output: -1



//16) To combine an Array with another Array

//using spread operator
let arry1 = [1, 2, 3, 4,]
let arry2 = [5, 6, 7, 8,]
let arry3 = [9, 10, 11, 12]

let combinedArray1 = [...arry1, ...arry2, ...arry3]   // spread method can combine multiple arrays at a time
console.log(combinedArray1) // ouput : [1,  2, 3, 4,  5, 6,  7, 8, 9, 10, 11, 12]


// using concat method

let combinedArray2 = arry1.concat(arry2)
console.log(combinedArray2)  // [1, 2, 3, 4, 5, 6, 7, 8]

let combinedArray3 = combinedArray2.concat(arry3)   // so concate method has a limit, it can only combines one array at a time
console.log(combinedArray3) //[1,  2, 3, 4,  5, 6, 7, 8, 9, 10, 11, 12]
 

//17) to converts all sub arrays into one array

let arr = [1, 2, 3, [4, 5, 6], 7, 8, 9, [10, 11, 12, 13, [14, 15, 16]]]

let allArr = arr.flat(Infinity) // flat Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(allArr)  //[ 1,  2,  3,  4,  5,  6, 7,  8,  9, 10, 11, 12, 13, 14, 15, 16]

//infinity is a depth here which means convert all sub arry into one arry


//18) To check if any thing is an arry or not

let a = 123
let b = [1, 2, 3]
let c = 'hello'

console.log(Array.isArray(a)) // false
console.log(Array.isArray(b)) // true
console.log(Array.isArray(c)) // false


//19) To convert any string into an array

//Array.from is better suited for converting each element of an iterable (like a string) into an array.
// so array.from() used to convert each element into an array

let string = 'hello'

let StringToArry = Array.from(string)
console.log(StringToArry)  //  [ 'h', 'e', 'l', 'l', 'o' ]


//20) TO convert anything into an array using of Array.of() method

let score1 = 100
let score2 = 200
let score3 = 300

let convertingToArry = Array.of(score1,score2,score3)
console.log(convertingToArry) // [ 100, 200, 300 ]


console.log(Array.of("Azan")) // ['Azan']
console.log(Array.of("Azan","huzaif","Ayesha" ,"Alishba")) // [ 'Azan', 'huzaif', 'Ayesha', 'Alishba' ]
console.log(Array.of(1,2,3,4,5)) // [ 1, 2, 3, 4, 5 ]
console.log(Array.of("Azan",123,true,{id:"12345"},[1, 2, 3, 4,],)) // [ 'Azan', 123, true, { id: '12345' }, [ 1, 2, 3, 4 ] ]

