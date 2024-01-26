// let x = 20;
// let x1 = "20";
// let x2 = true;
// let x3 = null;
// let x5 = undefined;
// let x6 = function(){};
// let x7 = 123456789000000000n;
// console.log(typeof x);
// console.log(typeof x1);
// console.log(typeof x2);
// console.log(typeof x3);
// console.log(typeof x5);
// console.log(typeof x6);
// console.log(typeof x7);

// let array = [10,20,30,40,50];
// console.log(typeof array)
// console.log(array[0]);
// console.log(array[4])
// console.log(array.length);
// array.length=10;
// console.log(array.length);
// console.log(array[-10]);
// console.log(array[6]);
// // Push Method is used to add the elements at the end of the array
// let y = array.push(60);
// console.log(y);
// console.log(array);
// array.push(70,80,90,100);
// console.log(array);
// // Pop Method done remove element at the of the array
// let y1 = array.pop();
// console.log(y1);
// console.log(array);
// // Shift Method do remove element from the begining of array
// let y2 = array.shift();
// console.log(y2);
// console.log(array);
// // Unshift Method is used to add the elements at the begining
// let y3 = array.unshift(10,100,1000);
// console.log(y3);
// console.log(array)

// Splice method is used to add and remove the elements from array.

// let array1 = [1,2,3,4,5,6,7];
// let deletedElements=array1.splice(2,3);
// console.log(deletedElements);
// console.log(array1);
// let addedElements = array1.splice(2,0,3,4,5);
// console.log(array1);

// Problem 
// let array2 = [1,2,3,4,5,6,7,8,9,10];
// for (let i=0;i<array2.length;i++){
//     if(array2[i]%2!==0){
//         array2.splice(i,1);
//     }
// }
// console.log(array2);

// slice is used print subarrays from array.
// let array3 = [10,20,30,40,50,60];
// let subarray=array3.splice(1,4);
// let subarray1=array3.splice();
// console.log(subarray1);
// console.log(subarray);


/******* Objects *******/
// let user = {
//     Name:"gopi",
//     Address:"Khammam",
//     role:"Frontend Developer",
//     age:23
// }
// console.log(user.age);
// console.log(user["age"]);
// delete user.role;
// console.log(user);
// user["Address"]={distrit:"khammam",State:"Telangana"};
// user["role"]="Student";
// console.log(user);

/********* Functions *********/
// function gopi(){
//     console.log("Function")
// }
// gopi();
// function gopi1(a,b){
//     console.log(a+b);
// }
// gopi1(10,20);
// function gopi2(a,b){
//     return a+b;
// }
// let result = gopi2(100,200);
// console.log(result);
// let gopi3 = function x(){
//     console.log("something something");
// }
// gopi3();

// let arrow = (a,b,c)=>{
//     console.log(a+b+c);
// }
// arrow(10,20,30);

// let arrow1 = a=>2*a;
// let result1 = arrow1(10);
// console.log(result1);

// function asif(a){
//     function asif2(){
//         console.log("inside function2");
//     }
//     asif2();
//     a();
// }
// asif(function asif1(){
//     console.log("inside function1")
// });

// function callme(){
//     return function callme1(a){
//         console.log("inside function",a);
//     }
// }
// let result3=callme(10);
// result3(10);

// let array = [10,20,30,40,50];
// array.forEach((element,index,list)=>{
//     console.log(element,index,list);
// })
// array.forEach((a)=>{
//     console.log(a);
// })


// let Name = "Sriramula Gopi";
// console.log(Name.toLowerCase());
// console.log(Name.toUpperCase());