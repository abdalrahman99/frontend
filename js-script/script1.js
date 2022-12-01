//================= object  ========
let car={
    name:'Bmw',
    model:2022,
    color:'red',
    print:function(){   //===== method
   console.log(this.name + " " + this.color); // this --->   تعود ع الاوبجكت تستخدم داخل الميثود
    }
}
console.log(car.name);//=== Bmw
console.log(car['name']);//=== Bmw
car.name='kia'; //==== UPdate name 
car.color=['yellow'];
car.print();




//=======================================
// let name ='abd alsaad mohammed';

// console.log(name.length);
// console.log(name.indexOf('b'));
// console.log(name.indexOf('b',5));
// console.log(name.slice(0,5)); start=0 and end=5;
// console.log(name.split(' '));
// console.log(name.split(' ')[0]);
// console.log(name.substr(0,5));start=0  and  length=5;
// console.log(name.includes('a')); true or fulse
// console.log(name.includes('a',5));
// console.log(name.startsWith('H')); true or fulse
// console.log(name.endsWith('d'));



