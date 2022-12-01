           //========= promise  counstructr ==== sync and async ======
//sync لما يجيي دورها بالتنفيذ بتنفذ كل شغلها لحتى تخلص بتروح على يلي بعدها 
//async بتلاقيه ماشي يلي بدخل بالاول بطلع بالاول 
// تمييز اذا كان sync or async
// promise في 2 بارميتر  resolve , reject
//resolve في حالة النجاح نستخدم  ==> use (then)
//reject في حالة الفشل ===> use  (catch)
// three prototype (promise)==>1) then 2) catch  3)finaly
const promise = new Promise((resolve ,reject) =>{
      let i=10;
      if(i<20){
        resolve('we are good'); 
      }else{
        reject('we are not good');
      }
});
promise.then(result =>{
    console.log(result);
}).catch(error=>{
    console.log(error);
}).finally(()=>{
    console.log(123);
})
// طريقة1====
// promise.catch(result =>{
//     console.log(result);
// })





// ============ start export =============
// multible think 1-import 2-export
// مجموعة ميثود في جافا وبدي ارجع استخدمهم من هاد الملف 
// export const add=(x,y)=>{
//     return x+y;
// };

             // =========== export function =====

//export defult  function 
// export default function add( x,y){
//     return x,y;
// };

//=============== end  export   ==========




// ===============  inherthnes ============

//  inherthes  الوراثة 
// class car{
//     constructor(name){
//         this.name = name; //prameter
//     }

//     getCarName(){
//         console.log(this.name);
//     }
// }
//extends   التوارث من خلال هاد الاسم
// class Kia extends car{
//      constructor(){
//             super(name);
//      }

// }
// const newKiaCar=new Kia('kia 1')