

let signInEmail = document.querySelector(".sig-in-email");
let signInPassword = document.querySelector(".sig-in-password");

let signInBtn = document.querySelector(".sign-in-btn");
let signInMsg = document.querySelector(".sign-in-error");

let users = [];


function loadData(){
    if(localStorage.getItem("users")!==null){
        users=JSON.parse(localStorage.getItem("users"));
    }
}

function searchForUser(){
    for(let index = 0; index < users.length; index++){
        if(users[index].email==signInEmail.value && users[index].password==signInPassword.value){
            return index;
        }
    }
    return -1;
}

loadData();

signInBtn.addEventListener("click",function(){
    let index = searchForUser();
    if(index!=-1){
        localStorage.setItem("userName",users[index].name);
        signInMsg.innerHTML="login successful";
        window.location.href = "welcome.html";
    }
    else{
        signInMsg.innerHTML="invalid email or password";   
    }

    
})