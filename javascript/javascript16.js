
// const btn= document.getElementById("idbtn");
// const btn= document.getElementsByClassName("itn");
// const btn= document.getElementsByTagName("bttuon");
// const btn= document.querySelectorAll('#demo');
// console.log(btn);

//          =========create element js ======

// const div = document.createElement('div');
// div.id='demo';
//div.innerHTML='<p>hello wolrd</p>';
// div.class='hello-p';
// document.body.appendChild(div);



//          ======add text with element =======

// const div = document.createElement('div');
// div.id='demo';
// div.class='hello-p';
// let text = document.createTextNode("new text ");
// div.appendChild(text); //   add child with html 
// //          =======add element with div ======

// let h2 =document.createElement('h2');
// h2.textContent = 'h2 was add';
// div.appendChild(h2);

// document.body.appendChild(div);


// ============= end ==========



// ================start =================

// const header =document.createElement('header');
// const div1 =document.createElement('div1');
// const div2 =document.createElement('div2');
// const footer =document.createElement('footer');
// div1.appendChild(document.createElement("img"))

// const ol=document.createElement("ol");
// const li1=document.createElement("li1");
// const li2=document.createElement("li2");

// ol.appendChild(li1)

// ol.appendChild(li2)
// div2.appendChild(document.createElement("img"))
// const ul=document.createElement("ul");
// const ulli=document.createElement("ulli");
// const ulli2=document.createElement("ulli2");

// ul.appendChild(ulli)
// ul.appendChild(ulli2)

// document.body.appendChild(header)
// document.body.appendChild(div1)
// document.body.appendChild(div2)
// document.body.appendChild(footer)


// //========= add element with html ======
// const menu = document.querySelector('menu')
// menu.appendChild(menu)
// menu.appendChild(menu)

// ============= factori ===============


function addItemToList(number){

    for (let i = 1; i <= number; i++) { 
        let li = document.createElement('li');
        li.textContent = i;
        menu.appendChild(li)
    }
}
const menu =document.querySelector('#number');

addItemToList(10)












