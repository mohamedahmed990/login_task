

let userName = localStorage.getItem("userName");;
let msg=document.querySelector("#welcome-message");
let logoutBtn=document.querySelector("#logout-btn");

window.addEventListener("load", function () { 
    console.log(userName);
    msg.textContent= `WELCOME ${userName.toUpperCase()}`; 
});

logoutBtn.addEventListener("click",function(){
    window.location.href = "signIn.html";
})