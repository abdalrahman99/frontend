
function calc(){

    let firstnumber = document.getElementById("first-number");
    let secondnumber = document.getElementById("second-number");
    let result = document.getElementById("result");
    let opesum = document.getElementById("sum");
    let opemin = document.getElementById("min");
    let opemult = document.getElementById("mult");
    let opediv = document.getElementById("div");
    let opemod = document.getElementById("mod");

    if(opesum.checked){
        result.innerHTML= parseInt(firstnumber.Value) + parseInt(secondnumber.Value);

    }
    if(opemin.checked){
        result.innerHTML= parseInt(firstnumber.Value) - parseInt(secondnumber.Value);

    }
    if(opemult.checked){
        result.innerHTML= parseInt(firstnumber.Value) * parseInt(secondnumber.Value);

    }
    if(opediv.checked){
        result.innerHTML= parseInt(firstnumber.Value) / parseInt(secondnumber.Value);

    }
    if(opemod.checked){
        result.innerHTML= parseInt(firstnumber.Value) % parseInt(secondnumber.Value);

    }
}