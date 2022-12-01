//     ======= promise ========= API ==========
// url ===> API ====> reseve link 
//fetch ==> API بعمل كل عمليات ال 
// callback()
// function run(){
//     console.log("hello");
// }


           //========= طريقة1 ==============

// let url ="https://jsonplaceholder.typicode.com/users";

// function fetchUsers(callback){
//     fetch(url) //promise 
//     .then((result)=>{
//         console.log(result);
//        return result.json()   
//     })
//     .then((json)=>{
//         callback(null,json)
        
//     })
//     .catch(error =>{
//         console.log(error,null);
//     })
// }

// fetchUsers((error,users)=>{
// if(error){
//     console.log(error);
//     return;
// }
// let user4 =users[3];
// console.log(user4);
// })



    // fetch(url) //promise 
    // .then((result)=>{
    //     console.log(result);
    //    return result.json()   
    // })
    // .then((json)=>{
    //     callback(null,json)
        
    // })
    // .catch(error =>{
    //     console.log(error,null);
    // })





 //============= طريقة 2 ============
    let url ="https://jsonplaceholder.typicode.com/users";

async function fetchUsers(){
    let fetchPromise = fetch(url);
    let response = await  fetchPromise;
    let json = await  response.json();
    return json;
}


async function main(){
    try {       //catch اي ايرور بصير فيها بروح ل 
        let users = await fetchUsers();
        console.log(users);          
        
    } catch (error) {}

}
main();
 