// ========= loops =======
// > , < , >= , <= , && , || , ! , != , == , === ,

//========= if(condtion) ========
// null and 0 ===> 0

let names = {}; // inhliztion
let boolean = false;
if (names && boolean){
    console.log('true');
    console.log(names);
}else{
    console.log('false');
}

//========= else if() =======


let x=-2;
let y =9;
let z=12;
if(y>10){
    console.log('y>=10');
}else if(x > -1){
    console.log('!y>=10');
}else if(z>20){
console.log('!y>=10 &&  y>=10');
}else{
    console.log('!y>=10 &&  y>=10');
}


//======= swicth(condtion) use  in (enum) ===========

let j=1;
switch (j) {
    case 1:
        console.log(j);
        break;
    case 2:
        console.log(j);
        break;
    default:
        console.log('sorry');
        break;
        
}

console.log('=========');

//======== for loops ===== 

// for (let i = 0; i <=10; i++) {
//     console.log(i);
  
// }

let array=['jj','jj','jj'];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    
}
console.log('============');
//========= for in object =====
let person={fname:'abed',lname:'alsaad',age:23};
let text='';
// for(key in object){}
for(let c in person){
  console.log(c);
  text +=person[c];    
}
console.log(text);


console.log('==============');
//========= for (in array )=====
let pers=[1,2,3,4,5,6];
let tex='';
for(let c in pers){
  console.log(c);
  tex +=pers[c];    
}
console.log(tex);

//====== while =======
let t=0;
while (t <10) {
    t++;
    console.log(t);
}

//======= do while =====
do {
    console.log(t);
    t++
} while (t< 5);

console.log('=============');
//=============  forech  //call back function ======
let arr=[{},2,3,4,5,6];
let ttcx='';
let v=0;
arr.forEach(element=>{
   ttxc +=element;
   v++;
});
 console.log(ttcx);

 //=========== forEach ===========

let arrayss =[{id:1,name:'sami'},{id:1,name:'rami'},{id:3,name:'leen'}];
arrayss.forEach(vaue =>{
    console.log(array);
});

//======== array ===========
// let names=['hassan','abed','sara',true,[1,2,3],{
//     firstname:'ffghh',
// },
// null,
// undefined,
// ]
// names[0]='zaid'; // === update value 
// console.log(names[0]);
// names.push('lees');
// names.unshift('ali')
// names.shift();
// names.pop();
// names.splice(0,0,'ssa','mass');
// let names1=['ezz','sami','abed','ezz']

// console.log(names1.indexOf('ezz'));
// console.log(names1.includes('ezz'));
// console.log(names1.filter(obj=>obj==='ezz'));



//========= object ==========
// let user={
//     //property
//     firstName:'abed',
//     lastName:'alsaad',
//     age:20,
//     skills:['html','css','js'],
//     active:true,
//     phoneNumber:{
//         number:154115,
//         cc:962,
//     },
//     address:{
//         city:'amman'
//     },
//     job:undefined,
//     study:null,
// //method
// isActive:function(){
//     if(user.active){
//         return 'hello'
//     }
// },
// getAge:function(){
//     if(user.age >= 18){
//         return ' welcome'
//     }
// }

// }
// console.log(user.isActive());
// console.log(user.getAge());


// let user1={};
// user1.name='husam';
// console.log(user1);


// let user2= new Object({
//     name:'abcd',
//     age:15,
// });

// console.log(user2);





// let user3={
//     name:'hello',
//     getAgee:function(){
//         return 'hello '+ this.name;
//     }
// }
// let user4 = Object.create(user3);
// user4.name='jasss';
// console.log(user4.getAgee());
// console.log(this);    ////=== global window 

// function clac(){
//     console.log(this);  ////===  window === 
// }
// clac();
