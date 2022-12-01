 let user =[{  
    userid : 1,
    firstname :  'Krish' ,
    lastname :  'Lee' ,
    phonenumber :  '123456' ,
    emailaddress :  'krish.lee@learningcontainer.com' },
 {
     userid : 2,
    firstname :  'racks' ,
    lastname : 'jacson' ,
    phonenumber :  '123456' ,
    emailaddress : 'racks.jacson@learningcontainer.com' ,
},
{
    userid : 3,
    firstname :  'denial' ,
    lastname :  'roast' ,
    phonenumber :  '21312312' ,
    emailaddress :  'denial.roast@learningcontainer.com' ,
 },
 { userid : 4,
    firstname :  'devid' ,
    lastname :  'neo' ,
    phonenumber :  '8975343' ,
    emailaddress :   'devid.neo@learningcontainer.com' ,
 },
 { 
     userid : 5,
    firstname :' jone'  ,
    lastname : 'mac ' ,
    phonenumber : '3254667',
    emailaddress :"jone.mac@learningcontainer.com", 
 }
]

//Q1

 function q1(fnames) {
    
    for (let i = 0; i < user.length; i++) {
            if(user[i].firstname == fnames)
            return user[i].userid;
        
    }
}
console.log(q1("denial"));
// Q2

function q2(lnames) {
    
  for (let i = 0; i < user.length; i++) {
          if(user[i].lastname == lnames)
          return user[i].userid;
  }
}
console.log(q2("Lee"));

// Q3
function q3(number) {
  for (let i = 0; i < user.length; i++) {
    if(user[i].phonenumber == number)
    return user[i].firstname +" " +user[i].lastname;

}
}
console.log(q3("3254667"));


 ////////////////////
let user1=[
    {
      firstName: "Hussam",
      lastName: "Bawwab",
      age: 28,
      address: "Irbid",
      phoneNumber: "7981323312",
      jobDescription: {
        title: "Frontend",
        salary: 132123,
      },
      childreen: [
        {
          firstName: "Samer",
          lastName: "Bawwab",
          age: 3,
        },
        {
          firstName: "Bilal",
          lastName: "Bawwab",
          age: 6,
        },
        {
          firstName: "Mariam",
          lastName: "Bawwab",
          age: 8,
        },
      ],
    },
    {
      firstName: "Sara",
      lastName: "Lobani",
      age: 22,
      address: " Irbid ",
      phoneNumber: "7213454654",
      jobDescription: {
        title: "Frontend",
        salary: 2133,
      },
      childreen: [
        {
          firstName: "Ail",
          lastName: "Lobani",
          age: 13,
        },
        {
          firstName: "Lobna",
          lastName: "Lobani",
          age: 16,
        },
        {
          firstName: "Zaid",
          lastName: "Lobani",
          age: 1,
        },
      ],
    },
    {
      firstName: "Ezz",
      lastName: "Ashore",
      age: 25,
      address: "Amman",
      phoneNumber: "79823216",
      jobDescription: {
        title: "Frontend",
        salary: 2133,
      },
      childreen: [
        {
          firstName: "Rami",
          lastName: "Lobani",
          age: 20,
        },
        {
          firstName: "Omar",
          lastName: "Lobani",
          age: 9,
        },
      ],
    },
    {
      firstName: "Mohammad",
      lastName: "Damra",
      age: 30,
      address: "Amman",
      phoneNumber: "79898798465",
      jobDescription: {
        title: "Frontend",
        salary: 1133,
      },
      childreen: [
        {
          firstName: "Laith",
          lastName: "Damra",
          age: 1,
        },
        {
          firstName: "Ahmad",
          lastName: "Damra",
          age: 8,
        },
      ],
    },
  ];

// Q4

function upp(user1){
 let user1up= user1.fliter((element) =>element.age >=25);
 return {user1up:user1up}
}
console.log(upp(user1));

// Q5
function less(user1){
  let user1less= user1.fliter((element) =>element.age < 25);
  return {use1rless:user1less}
 }
 console.log(less(user1));
  
// Q6
function calcTax(){
    let res = {username: "",salaryAfter:"",jopTitles:""};
    let resls =[];
    ss.forEach(element => {
        res.username = element.firstName + " "+ element.lastName;
        res.salaryAfter = Number(element.jobDescription.salary)*0.7;
        res.jopTitles = element.jobDescription.title;
        resls.push(res);
    });
    return resls;
}
console.log(calcTax());

// Q7
function getUserByAddress(user1,address){
  return  user1.fliter((element) =>element.address == 25);
}
// q8
function getUserChildreen(user1){
  return  user1.fliter((element) =>element.childreen > 2);
}
// Q9
function Bouns(user1){
  user1.forEach(element=>{
    if(element.jobDescription.salary <1500){
      element=jobDescription.salary=element.jobDescription.salary *0.5;
    }
  })
  return user1;
}
user1 = Bouns(user1);

// Q10
console.log('abd alsaad');