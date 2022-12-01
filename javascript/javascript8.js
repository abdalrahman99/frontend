//هات الاحرف  مش مكرر 
let string = 'hussm ujj  jklml  qijji kmkk kjnjfxedf ';
function uniqueChar(string) {
    let uniq = "";   
    for (let x = 0; x < uniqueChar.length; x++) {
        if (uniq.indexOf(string.charAt(x)) == -1) {
            uniq += string[x];
        }
    }
    return uniq;
}
console.log(uniqueChar(string));

//larget ,poss,negative,larget  

// let array =[12,-15,-16,19,20,54,-100]
// function longest(str){
//     let arrayposs = [];
//     let arrayNegative = [];
//     let largetposs = [];
//     let largetNgative = [];
//       array.forEach(element=>{
//         if (element >=0) {
//             arrayposs.push(element);
//         }else{
//             arrayNegative.push(element);
//         }
//       });
//       largetposs = arrayposs.length>0 ? largetposs[0]: null;
//       largetNgative = arrayNegative <0 ? largetNgative[0]: null;
//       for (let x = 0; x < arrayposs.length; x++) {
//           if (largetposs < arrayposs[x]) {
//             largetposs = arrayposs[x]
//           } 
//       }
//       for (let x = 0; x < arrayposs.length; x++) {
//         if (largetNgative < arrayNegative[x]) {
//           largetNgative = arrayNegative[x]
//         } 
//         return 'largest positive : ' + largetposs + 'larget negative :' + largetNgative ;
//     }
// }
// console.log(longest(array));


//longest array

// function longest(str){
//     let array = str.split(" ");
//     let longeststring = array[0];
//     for (let x = 1; x < array.length; x++) {
//       if(array[x].length>longeststring.length){
//         longeststring=array[x]
//       }
      
//     }
// return longeststring;
// }

// console.log(longest("hussam start new javascript course"));



//uppercase

// function uppercase(str){
//     let array = str.split(" ");
//     let newarray = [];
//     for (let x = 0; x < array.length; x++) {
//         newarray.push(array[x].charAt(0).toUpperCase()
//          + array[x].slice(1)); 
//     }
//     return newarray.join(" ");
// }

// console.log(uppercase("hussam start new js course"));