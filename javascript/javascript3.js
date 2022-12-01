// let 
// name = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos sed provident quae explicabo odit, impedit sapiente possimus voluptatum! Saepe rem odio debitis et voluptatibus vero neque rerum nihil esse facere";

//  console.log(name.length);
//  console.log(name[0]);
//  console.log(name.charAt(12));
//  console.log(name.indexof('a',4));
//  console.log(name.lastIndexof('a',4));
//  يعني وقف عند الاندكس الخامس
//  console.log(name.slice(0,5)); 
//  تقسيم السترنج من اي حرف او فراغ بدي اياه
//  an array resive
//  console.log(name.split('L'));
//  console.log(name.split(' ')[0]);
//  نفس slice
// start 12 end length 5
//  console.log(name.subStr(15,5)); 
//  search char or string or any    boolean resive true ot fulse 
//  console.log(name.include('Abd'));
//   search char or string or any    boolean resive true ot fulse between char with let name 
//  console.log(name.startswith('a',6));
//  console.log(name.endwith('s',15));

 
// object
let car1 = {
   carName: "bmw",
   carModel: "20222",
   carColor: "black",
   print:function(){
    return console.log(this.carName + " " + this.carModel);
   },
};

 let car = {
    carName: "bmw",
    carModel: "2022",
    carColor: "black",
    print:function(){
     return console.log(this.carName + " " + this.carModel);
    },
 };
//  update carName
car.carName='KIA'; 


car.print()
car1.print()