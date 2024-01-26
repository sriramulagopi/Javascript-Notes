/***** ForEach ******/

// let arr = [10,20,30,40,50];
// arr.forEach((e,i,l)=>{
//     console.log(e,i,l);
// })
///////or///////
// let callback = function(e,i,l){
//     console.log(e,i,l);
// }
// arr.forEach(callback);


// let arr =  [1,2,3,4,5];
// function Foreach(callback){
//     for (let i=0;i<arr.length;i++){
//         callback(arr[i],i,arr);
//     }
// };
// let sum = 0;
// Foreach(function(element,index,list){
//     console.log(element,index,list)
//     sum+=element;
// });
// console.log(sum);

/***** Map ******/
// let arr = [1,2,3,4];
// let arr1=arr.map(e=>e%2===0 ?2*e:3*e);
// console.log(arr1);
 
// arr.forEach(e=>e%2===0?2*e:3*e)
// console.log(arr);

/***** filter ******/
// let arr = [1,2,3,4,5,6,7,8,9,10];
// let arr1 = arr.filter(e=>e%2===0);
// console.log(arr1);

/***** Strings ******/
// let str = "sriramulagopi1234";
// console.log(str.charCodeAt(1));
// console.log(str.charCodeAt(str.length-2));
// console.log(String.fromCharCode(65));

// let str = "sriramulagopi1234";
// let str1 = str.split('');
// console.log(str1);
// let str2 = str1.join(',');
// console.log(str2);

// let arr = [4,2,9];
// let arr1 = arr.join('ABC');
// console.log(arr1);

// console.log("1&2&3&4&5&6".split('&'))
// let str = "1,2,3,4,5,6;9,0;11,12"
// let str1 = str.split(/,|;/);
// console.log(str1);

// let array = [1,2,3,4,5,6,7];
// for (let i in array){
//     console.log(typeof i,typeof array[i]);
//     console.log(i,array[i]);
// }
// for (let i of array){
//     console.log(i ,typeof i);
// }

// let object = {
//     Name:"Gopi",
//     Address:"Khammam",
//     Street:"BokkalaGadda",
//     PhoneNo:9848226388
// }
// for (let i in object){
//     console.log(i,object[i]);
// }
// for (let i of object){
//     console.log(i);
// }