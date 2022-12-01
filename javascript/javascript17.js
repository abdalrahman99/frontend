let url ="https://jsonplaceholder.typicode.com/users";

let userArray=[];
function fetchuser(callback){
    fetch(url) 
    .then((result)=>{
        console.log(result);
       return result.json()   
    })
    .then((json)=>{
        callback(null,json)
        
    })
    .catch(error =>{
        callback(error,null);
    });
}

fetchuser((error,users)=>{
    if(error){
        console.log(error);
        return
    }
    userArray=users;
    console.log(userArray);
    addTable(userArray);
})


function addTable(userArray){
    let col=['name','email','street','city','phone']
    const table=document.createElement('table')
    table.border='1';
    let tr=table.insertRow(-1)
    for (let i = 0; i < col.length; i++) {
       let th = document.createElement('th');
       th.innerHTML=col[i];
       tr.appendChild(th);
        
    }
    for (let i = 0; i < userArray.length; i++) {
        tr=table.insertRow(-1);
        let tableCell1=tr.insertRow(-1);
        let tableCell2=tr.insertRow(-1);
        let tableCell3=tr.insertRow(-1);
        let tableCell4=tr.insertRow(-1);
        let tableCell5=tr.insertRow(-1);
        tableCell1.innerHTML=userArray[i].name;
        tableCell2.innerHTML=userArray[i].email;
        tableCell3.innerHTML=userArray[i].address.street;
        tableCell4.innerHTML=userArray[i].address.city;
        tableCell5.innerHTML=userArray[i].phone;
        
    }
    const divShowData=document.getElementById('myDynamicTable');
    divShowData.innerHTML='';
    divShowData.appendChild(table);
}

