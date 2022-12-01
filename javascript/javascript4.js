// let names1=['ezz','sana','zaid','hussam','sana'];

// if(names1.length !=10){
//     console.log('hello')
   
// } else{
//     console.log('fulse')
// }

// let isActive=true;
// if(!isActive){
      
// }



// let names=[];
// add end index
// names.push('abed')
// names.push('ali')
// add first index
// names.unshift('alll')
//delete first index
// names.shift()
//delete end index
// names.pop()
//splice(start,count,items1,items2,items3,items4)
// names.splice(1,1,'ezz','sana')
// console.log(names)
//slice(start,end)
// let names1=['ezz','sana','zaid','hussam','sana'];
// names1.slice(0,1)
// console.log(names1.slice(0,1))
// console.log(names1.indexOf('sana'))
// console.log(names1.lastIndexOf('sana'))
// console.log(names1.includes('sana'))
//search index sana in array names1
// console.log(names1.filter(obj=>obj==='sana'))






















// //array
// let names=['abed','aseel','ali',true,[1,2,3,[4,5,6]],{
//     firstName: 'ahmad',
// },
// null,
// undefined,
// ];
// //update
//  names[0]='ahh'
// console.log(names[0]);

















//opject and method


// let x=false;
// let user = {
//     //property
//     firstName: 'abed',
//     lastName: 'alsaad',
//     age: 23,
//     skills:['html','css','js','php'],
//     active: x,
//     phoneNumber:{
//         number:25662,
//         cc:962,
//         att1:{
//             element1:""
//         }
//     },
//     address:{
//         city: "Zarqa",
//         zipCode:'8454'
//     },
//     job:undefined,
//     study:null,
// //method
// isActive: function (){
//     if(user.active){
//         return "hello";
//     }else {
//         return "sory"
//     }
// },
//  getAge: function (){
//     if(user.age >=18){
//         return "avalable";

//     }else{
//         return 'unavalable'
//     }
//  }

// };
// // console.log(user.skills)
// console.log(user.active);
// console.log(user.isActive());
// console.log(user.getAge());
// console.log(user["getAge"]());

// let user1 = {};
// user1.name = 'abdelrahman';
// user1.name = getAge=function (){
//     if(user.age >=18){
//         return "avalable";

//     }else{
//         return 'unavalable'
//     }
//  };
// console.log(user1)

// let user2 = new Object({
//     name:'abed',
//     age:23
// });
// console.log(user2);


// let user3={
//     name:"abed",
//     getWelcome:function(){
//         return "hello" +  this.name
//     }
// }

// let user4= Object.create(user3);
// user4.name="aseel";

// console.log(user4.getWelcome());
// console.log(this);
//  console.log(this.alert());

// function calc(){
//     console.log(this);
// }
// calc();


