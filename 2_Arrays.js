// Array Functions  / Methods


//1) For each  method

/*  Syntax =>  myArry.foreach((parameter)=>{....anywork})  or   myArry.foreach(function(parameter){.....any work})     */


// For each method in array is used to iterate over each element of an array and can aslo perform any task on each element for example

let arr =[1, 2, 3, 4, 5 , 6, 7, 8, 9]

 arr.forEach((elements)=>{

    console.log(elements) // Output: 1, 2, 3, 4, 5, 6, 7, 8, 9
    console.log(elements **2) // Output: 1 4 9 16 25 36 49 64 81

    return elements // for each method does not return anything it just iterate and do operations on an array

})



//2) Map method

//  map  is also same as for each it iterates each element of array and also do operation on them but it also creates a new array of that elements

let arr1 =[1, 2, 3, 4, 5 ]

let returnElements = arr1.map((elements)=>{

   console.log(elements) // Output: 1, 2, 3, 4, 5
   return elements * 2  // as we return values and values stored into the varaible we can see the result of map that, it creates a new array  based on what ever we do with elements

})

console.log(returnElements) // Output: [ 2, 4, 6, 8, 10 ]



//3) filter method 

// filter method  creates a new array of elements which give true value for a condition

let array = [1, 3, 6, 8, 9, 10, 12, 11, 32, 89, 90, 44, 2]

let filteredElements = array.filter((element)=>{

   console.log(element) // Output: 1, 2, 3, 4, 5

   return element % 2 !== 0 // Any of the the elements which satisfies the condition filter  creates a new array of that elements 
})

console.log(filteredElements) // Output: [ 1, 3, 9, 11, 32, 89, 90, 44, 2 ]


//one more examlpe 


let array2 = [1, 2, 3, true,"Azan",false,"Hello world!"]

let filteredElements2 = array2.filter((element)=>{
   
   console.log(element) // Output: 1, 2, 3, true, "Azan", false, "Hello world!"
   
   return typeof element === "string" // Any of the the elements which are numbers filter  creates a new array of that elements
})

console.log(filteredElements2) // Output: [ 'Azan', 'Hello world!']



//4) Reduce Method

/* syntax myArray.reduce((curr,prev)=>{})  */

// reduce method is used to reduce an array to a single value , and return the single value

let array3 = [1, 2, 3, 4, 5]

let reducedValue = array3.reduce((prev ,  curr)=>{

      return(prev+curr)
});

console.log(reducedValue) // Output: 15


let reducedValue2 = array3.reduce((prev , curr)=>{

   return prev * curr
})

console.log(reducedValue2) // Output: 120


//4) Some method

// some method checks if at least one element in the array passes the condition implemented by the provided function.
//if the test is passes by atleast one element in return true else false.(if there are two elements passing the same condition implemented by the provided function, then some checks the first element and return true)

let array4 = [1, 2, 3, 18, 20, 6]

let age = 18

let result = array4.some((element)=>{

 return element  >= age // some method checks each element in the array to see if it is greater than or equal to 18. It stops and returns true as soon as it finds the first element that satisfies the condition
   
})

console.log(result) // Output: true

let array5 = [1, 2, 3, 20, 6]

let result2 = array5.some((elements)=>{

   return elements ==  age  // now it search in array where if it finds the first element which satisfy the condition it returns true, if not then false

})

console.log(result2) // Output: false


//5) Every Method 

    // every method checks if every element in the array passes the condition implemented by the provided function.
    // if the test is passes by all the elements in return true else false.

let array6 = [18, 20, 22, 23, 33, 6]

let age2 =  18

let result3 =  array6.every((element)=>{
   
   return element >= age2 
})

console.log(result3) // Output: false)


let array7 = [18, 20, 22, 23, 24]

let result4 =  array7.every((elements)=>{
   
   return elements >= age2 
})

console.log(result4) // Output: true)

// THE MAIN DIIFFERENCE BETWEEN SOME AND EVERY IS THAT , SOME CHECKS FOR ANY ONE ELEMENT IN ARRAY IF IT SATISFY THE CONDITION IT RETURN TRUE ESLE FALSE ,
// BUT EVERY LOOK FOR EVERY ELEMENT IN ARRAY , IF ALL ELEMENTS SATISFY THE CONDITION IT RETURN TRUE ESLE FALSE,


//6) find Method

// find method is used to return the value of the first element in the array that satisfies the provided condition in function.

let array8 = [11, 12, 13, 20, 18, 16,]

let Age = 18

let returnNumber = array8.find((elements)=>{
   
   return elements >= Age   //return the value of the first element in the array that satisfies the provided condition
})

console.log(returnNumber) // Output: 20)  



let arrayString =  ["Azan", "huzaif", "Anus",]

let returnString = arrayString.find((elements)=>{
   
   return elements.startsWith("A")  // return the value of the first element in the array that satisfies the provided condition
})

console.log(returnString) // Output: Azan)  


// 7)  findIndex method

// findIndex method is used to return the index of the first element in the array that satisfies the provided condition in function.

let array9 = [10, 22, 32, 20, 15,]

let adultAge = 20

let returnIndex = array9.findIndex((elements)=>{
   
return elements >= adultAge   // return the index of the first element in the array that satisfies the provided condition in our case it is 22 which is at index 1 if no element found it returns -1
})

console.log(returnIndex) // Output: 1)



//8) valueof  Method

//it is defualt function used to print the array

let array10 = [1, 2, 3, 4, 5, 6,]

console.log(array10)  // Output: [ 1, 2, 3, 4, 5, 6 ]

console.log(array10.valueOf())  // Output: [ 1, 2, 3, 4, 5, 6 ]


//9) fill Method

// fill method is used to fill all elements in an array with a static value.

let names = ["Azan","Huzaif","Anus","Asharib"]

console.log(names.fill("Hello, world!"))  // Output: [ 'Hello, world!', 'Hello, world!', 'Hello, world!', 'Hello, world!' ]

console.log(names.fill(123)) // Output: [ 123, 123, 123, 123 ]


//10) entries Method

//The entries method in JavaScript is used to return a new Array Iterator object that contains the key/value pairs for each index in the array. 

let array11 = ["Azan","Huzaif","Anus","Asharib"]

let iterator = array11.entries()

for(let val of iterator){

        console.log(val)
}


//output  

// [ 0, 'Azan' ]
// [ 1, 'Huzaif' ]
// [ 2, 'Anus' ]
// [ 3, 'Asharib' ]
