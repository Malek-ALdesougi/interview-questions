// Q1: map
// Write a function named createList that takes in an array of the currt store inventory.

// The inventory is formatted like this:
// [
//   { name: 'apples', available: true },
//   { name: 'pears', available: true },
//   { name: 'oranges', available: false },
//   { name: 'bananas', available: true },
//   { name: 'blueberries', available: false }
// ]

// This function should use forEach to populate your grocery list based on the store's inventory.
//  If the item is available, add it to your list. Return the final list.


// function Grocerys(name, isAvailable){
//     this.name = name ;
//     this.isAvailable = isAvailable ;
// }

// let storeArray = [];

// let apples = new Grocerys();
// apples.name = "Apples";
// apples.isAvailable = true ;
// storeArray.push(apples);

// let pears = new Grocerys();
// pears.name = "Pears";
// pears.isAvailable = true ;
// storeArray.push(pears);

// let oranges = new Grocerys();
// oranges.name = "Oranges";
// oranges.isAvailable = false ;
// storeArray.push(oranges);


// let bananas = new Grocerys();
// bananas.name = "Bananas";
// bananas.isAvailable = true ;
// storeArray.push(bananas);


// let blueberries = new Grocerys();
// blueberries.name = "Blueberries";
// blueberries.isAvailable = false ;
// storeArray.push(blueberries);


// // console.log(storeArray);


// function createList(arr){

//     let availableGrocerysList = [];

//     arr.forEach((x) => {

//         if(x.isAvailable == true){

//             availableGrocerysList.push(`${x.name}  is Available`);
//         }
//     })

//         return availableGrocerysList ;

// }

// console.log(createList(storeArray));


// ================================================================================= Q2


// Q2:
// Write a function that, given an array of numbers as input, uses map to return a new array where each element is either the string "even" or the string "odd", based on each value.

// If any element in the array is not a number, the resulting array should have the string "N/A" in its place.

// For example: evenOdd([1,2,3]) returns ['odd','even','odd'].

// let inputArray = [1,2,"hi",3,4,"malek"];

// function OddEven(arr) {

//     let final =  arr.map(function(current){

//         if(isNaN(current) == true ){
//             return "N/A";
//         }

//          if(current % 2 == 0){
//             return "Even";
//         }

//         else {
//             return "Odd";
//         }
//     },0)

//     // The function must return something !!!!!
//     return final ;  


// }
// console.log(OddEven(inputArray));

// ============================================== another way Q2 

// const sweetArray = [1,2,3,4,"malek"];

// const sweeterArray = sweetArray.map(function(sweetItem){

//     if(isNaN(sweetItem) == true){
//         return "N/A";
//     }

//     else if (sweetItem % 2 == 0){
//         return "Even";
//     }

//     else  {
//         return "Odd";
//     }
// })

// console.log(sweeterArray)



//======================================================================================== Q3


// Q3: filter
// Write a function named notInFirstArray that, given two arrays as input,
//  uses filter to return an array of all the elements in the second array that are not included in the first array.

// For example, notInFirstArray([1,2,3], [1,2,3,4]) returns [4].

// let array1 = [1,2,3];
// let array2 = [1,2,3,4,5,7];

// function notInFirstArray(arr1, arr2){

//     let result = arr2.filter((ele) => {

//         if (arr1.includes(ele)){
            
//             console.log(`Number  ${ele} includes in arr1`);
//         }

//         else {

//             return ele;
//         }
//     })

//     return `result of numbers that are not include in arr1 [${result}]`;
    
// }
// console.log(notInFirstArray(array1, array2));


//======================================================================================== Q4 


// Q4: reduce
// Write a function named reversedString that takes in a string and returns a string with the letters in reverse order.

// Note: You must use reduce for this challenge. You may not use the built-in .reverse() string method.


// let myString = "malek";

// function reversedString(str){

//      str = myString.split('');

//     let finalResult = str.reduce((accumelater, currentValue) => {

//         return  currentValue + accumelater ; 

//     })

//     return finalResult ;
// }

// console.log(reversedString(myString));




// Q5: rejex =============================================================================== Q5 

// Write a function named isNum that takes in a string or number of any length. 
// This function should use a regular expression pattern to return true if the input contains a number,
//  and false if the input does not contain a number.

// For example:
// 12345 returns true
// '12345' returns true
// 'h3llo world' returns true
// 'hello world' returns false



// function IsMatch(v) {

//     let numRegEx = /[0-9]/ig;

//         return numRegEx.test(v);
    
    // //basically build your regex here
    // var exp = new RegExp(/[0-9]?[0-9]/g); 
    
    // return exp.test(v);
//  }

//  call 
// let result = IsMatch("gdfdg");

// console.log(result);





// Q6: rejex ====================================================================================================== Q6

// You have created a game application and begin by asking users an easy question: In which month is Halloween?

// Write a function named matchMonth which uses a regular expression pattern to match any of these 
// inputs: October, Oct, 

// october, oct use these with (i)

// If the user enters any of these four inputs, return true. For any other input, return false.

// function matchMonth(str){

//     let myRegularEx = /\boctober\b/i;
//     let myRegularEx2 = /\boct\b/i;

//     let result = myRegularEx.test(str) || myRegularEx2.test(str) ;

//     return result ;
// }

// console.log(matchMonth("october"));






















