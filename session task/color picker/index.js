
const select=document.getElementById("selected");
const box=document.getElementById("colors");
const selected=document.querySelector(".card div")
box.addEventListener("click", (e)=>{
    if(e.target.id!==colors){
    select.style.backgroundColor=e.target.id;  
select.textContent=`selected Color: ${e.target.id}`; 
    }
    else{
        select.style.backgroundColor=none; 
        select.textContent=`please select one color`;   
    }
})
