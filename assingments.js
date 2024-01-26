// let a = "#abc";
// let array = [];
// array.push(a[0]);
// let count = 0;
// for (let i=1;i<a.length;i++){
//     if (a[i]>='A' && a[i]<='Z'){
//         count++;
//     }
//     array.push(a[i],a[i]);
// }
// count>0 ? console.log(array.join('').toUpperCase()):console.log(array.join(''))

// let arr = [4,3,2,8,3,4,11,4];
// let i = 0,j = 1,map={},max=1;
// map[arr[0]]=0;
// while(j<arr.length){
//     let curr = arr[j];
//     if (map[curr]!==undefined && map[curr]>=i){
//         i=map[curr]+1;
//     }
//     map[curr]=j;
//     let currentLength = j-i+1;
//     max=max<currentLength?currentLength:max;
//     j++;
// }
// console.log(max);