   //============ function =======
   // (5)============ arrow function    ==========
   // one prameters
// let x= x => 10 * x;
// console.log(x(2));
// //====== two prameters 
// let z = (c,y) => c * y ;
// console.log(z(12,3));
//================== foreach and arrow function ========
let array=[13,23,12,45,22,48,66,100];

array.forEach((value)=>{
    console.log(value);
})

console.log('===============');

//============== power number =======

function powerNum(num,power) {
    let  result =1;
    for (let i = 0; i < power; i++) {
        result = result * num;
    } 
    return result;
}
console.log(powerNum(4,3));
console.log('===============');

//============ pattren =====

/*
1
12
123
1234
12345
123456
1234567
12345678 
123456789
*/

// function pattren(range){
//     for (let i = 1; i <=range; i++){
//         let res='';
//      for (let x = 1; x <=i; x++) {
//       res +=x;
//      }
//      console.log(res);
//     }
// }
// pattren(9)

function pattren(range){
    for (let i = 0; i< range ; i++){
        let res='';
     for (let x = 1; x <= range - i ; x++) {
      res += '*' +' ';
     }
     console.log(res);
    }
    
}
pattren(9);

console.log ('===============');

//=========== largeNumber ==========

let arr=[13,23,12,45,22,48,66,100];
function largeNumber(array){
let larget=array[0];
for (let j = 1; j < arr.length; j++) {
    if (larget < arr[j]) {
        larget =arr[j];
    } 
  }
return larget;
}
console.log(largeNumber(array));
console.log('===============');
//===================== dublicte()  ==========

let arr1=[13,23,12,45,22,,15,45,100,13,48,66,100];
function dublicte(arr1){
    let fil=[];
  for (let c = 0; c < arr1.length; c++) {
    if(arr1.indexOf(arr1[c]) != c && fil.indexOf(arr1[c]) == -1){
         fil.push(arr1[c]);
        }
        
    }    
    return fil;
}
console.log(dublicte(arr1)); 