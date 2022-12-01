//  ============ event or action ======= 

//============alert event with (btn and div and h1) ========
// let btn=document.getElementById('btn');
// let counter=0;
// btn.addEventListener('click',alert);

// function alert(){
//     // window.alert('Btn click')
//     console.log(counter++);
// }

//==========  js17 with event ======



let url ="https://jsonplaceholder.typicode.com/users";
async function fetchUser(){
let response = await fetch(url);
let json = await response.json();
return json;
}
let btn=document.getElementById('btn');
 btn.addEventListener('click',()=>{
    fetchUser().then(result=>{
        console.log(result);
    })
 });

