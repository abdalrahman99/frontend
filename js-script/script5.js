               //============ function =======

// function myfunction(x,y) {
//     console.log(x *y);
// }
// myfunction(10,5);
// myfunction(10,2);
// myfunction(10,3);

// (1)============= fahernheit ==========

// function tocelsius(fahren){
//     let result = (5 / 9) * (fahren - 32);
//     return result;
// }
// document.getElementById('demo').innerHTML=tocelsius(12);

//(2) =============  two  dimantion array ========
let arr = [
    [1,2,13],
    [3,4,99],
    [5,6,55],
    [7,8,66],
    [9,10,44],
] 
function printArray(arr){
  for(let i=0;i< arr.length;i++){
     for (let x = 0; x < arr[i].length; x++) {
        console.log(arr[i][x]);
     }
  }
}
printArray(arr);

// (3)=============== eveenAndOdd ===========
console.log('========');

let arrays=[13,23,12,45,22,48,66,100];

function eveenAndOdd(arrays){
    let eveen=[];
    let odd=[];
    for (let j = 0; j < arrays.length; j++) {
      
       if ( arrays[j] % 2==0) {
        eveen.push(arrays[j]);
       }else{
        odd.push(arrays[j]);
       }
    }
    //========= one ====
    // console.log(eveen);
    // console.log(odd);
    // ======== or ====
    console.log('eveen');
    eveen.forEach(value=>console.log(value));
    console.log('odd');
    odd.forEach(value=>console.log(value))
}
eveenAndOdd(arrays);


console.log('========');

// (4)============   deleteElement ==========

let arrays1=[13,23,12,45,22,48,66,100];

function deleteElement(arrays1 , element){
    //=========== first 
    let index=arrays1.indexOf(element); 
    if(index > -1){
        arrays1.splice(index,1);
    }
    return arrays1
}
arrays1=deleteElement(arrays1,23);
console.log(arrays1);

// (4)============   deleteElement ==========
    //================= second
let arrays2=[13,23,12,45,22,48,66,100];
function deleteElement(arrays2 , element){
      for (let z = 0; z < arrays2.length; z++) {
          if(arrays2[z]== element){
            arrays2.splice(z,1);
          }  
      }
        return arrays2;
    }
arrays2=deleteElement(arrays2,13);
console.log(arrays2);
