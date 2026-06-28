const likes=document.querySelectorAll(".like");

likes.forEach(btn=>{

let count=0;

btn.onclick=()=>{

count++;

btn.querySelector("span").innerText=count;

}

});

const cards=document.querySelectorAll(".card");

cards.forEach((card,index)=>{

const input=card.querySelector(".comment-input");

const btn=card.querySelector(".comment-btn");

const list=card.querySelector(".comments");

let comments=JSON.parse(localStorage.getItem("comments"+index))||[];

show();

btn.onclick=()=>{

if(input.value==="") return;

comments.push(input.value);

localStorage.setItem("comments"+index,JSON.stringify(comments));

input.value="";

show();

}

function show(){

list.innerHTML="";

comments.forEach(c=>{

list.innerHTML+=`<li>${c}</li>`;

});

}

});

const search=document.getElementById("search");

search.onkeyup=()=>{

const value=search.value.toLowerCase();

cards.forEach(card=>{

const title=card.querySelector("h2").innerText.toLowerCase();

card.style.display=title.includes(value)?"block":"none";

});

}