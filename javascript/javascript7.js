// duplicate  المكرره الارقام
let array=[13,23,12,45,22,48,23,12,66,100];
function findDuo(array){
    let dupArray = [];
    for (let i = 0; i < array.length; i++) {

        if ( 
        array.indexOf(array[i]) != i && 
        dupArray.indexOf(array[i])== -1) {
        dupArray.push(array[i]);

        }
        
    }
    return dupArray;
}
console.log(findDuo(array));


//large element

// let array=[13,23,12,45,22,48,23,12,66,100];
// function largeElement(array){
//     let largeElement = array[0];
//     for (let i = 1; i < array.length; i++) {
//         if (largeElement == array[i]) {
//             largeElement = array[i]
//         }
        
//     }
//     return largeElement;
// }
// console.log(largeElement(array));


// function printPattern(range){
//     for (let i = range; i>=1; i--){
//         let result = "";
//         for (let x = 1; x<=i; x++){
//             result += "*" + " " ;    
//         }
        
//     }
//     console.log(result);
// }

// printPattern(9)




// function printPattern(range){
//     for (let i = range; i>=1; i--){
//         let result ='';
//         for (let x = 1; x<=i; x++){
//             result += '*' + ' ' ;    
//         }
        
//     }
//     console.log(result);
// }

// printPattern(9)



//1
//1 2 
//1 2 3 
//1 2 3 4 
//1 2 3 4 5 
//1 2 3 4 5 6 
//1 2 3 4 5 6 7
//1 2 3 4 5 6 7 8 

// function numPower(num,pow){
//     let result = 1;
//     for (let i = 0; i < pow; i++) {
//         result *=num;
        
//     }
//     return result;
// }
// console.log(numPower(5,3));


// let array=[13,23,12,45,22,48,66,100];
// function deleteElement(array , element) {
    
//     return array;
// }
// //arwwo function    let x = x=>  10 * x;
// let x = (z,y)=>  y * z;
// console.log(x(2,4));
// array.forEach((value)=> {
//     console.log(value)

// });

// array = deleteElement(array,90)
// console.log(array);

