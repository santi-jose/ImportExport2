// import arithmetic functions from their respective modules
import { add } from "./add.js";
import { subtract } from "./subtract.js";
import { multiply } from "./multiply.js";
import {divide} from "./divide.js";

// define arrays to test arithmetic functions
let arr1 = [1, 2, 3, 4, "five"];
let arr2 = ["six", 7, 8, 9, 10];

// iterate through arr1 and arr2 and perform arithmetic
for(let i = 0; i < arr1.length; i++){
    console.log(`add(${arr1[i]}, ${arr2[i]}): ${add(arr1[i],arr2[i])}`);
    console.log(`subtract(${arr1[i]}, ${arr2[i]}): ${subtract(arr1[i], arr2[i])}`);
    console.log(`multiply(${arr1[i]}, ${arr2[i]}): ${multiply(arr1[i], arr2[i])}`);
    console.log(`divide(${arr1[i]}, ${arr2[i]}): ${divide(arr1[i], arr2[i])}\n`);
}