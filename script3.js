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