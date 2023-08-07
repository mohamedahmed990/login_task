

let signUpName = document.querySelector("#sign-up-name");
let signUpEmail = document.querySelector("#sign-up-email");
let signUpPassword = document.querySelector("#sign-up-password");
let signUpError = document.querySelector(".sign-up-error");

let signUpBtn = document.querySelector("#sign-up-btn");

let users = [];
function loadData(){
    if(localStorage.getItem("users")!==null){
        users=JSON.parse(localStorage.getItem("users"));
    }
}
function emailValidation(){
    if(signUpEmail.value.search(/^[a-zA-Z0-9.]{1,}@[a-z]{3,10}.[a-z]{2,}$/)===-1){
        return false;
    }
    return true;
}

function nameValidation(){
    if(signUpName.value.search(/^[a-zA-Z ]{3,}$/)===-1){
        return false;
    }
    return true;
}

function passwordValidation(){
    if(signUpName.value.search(/[a-zA-Z0-9]{5,}/)===-1){
        return false;
    }
    return true;
}
function resetInputs(){
    signUpName.value="";
    signUpEmail.value="";
    signUpPassword.value="";
}

function repeatedemail(){
    for (let index = 0; index < users.length; index++) {
        if(users[index].email==signUpEmail.value){
            return true;
        }; 
    }
    return false;
}

loadData();

signUpBtn.addEventListener("click", function () {

    if(signUpName.value==="" || signUpEmail.value=="" || signUpPassword.value==""){
        signUpError.innerHTML="All inputs are reuired";
        return;
    }
    if(nameValidation()===false){
        signUpError.innerHTML="invalid name";
        return;
    }
    if(emailValidation()===false){
        signUpError.innerHTML="invalid email";
        return;
    }
    if(repeatedemail()){
        signUpError.innerHTML="Email already exists";
        return;
    }
    
    if(passwordValidation()===false){
        signUpError.innerHTML="password must be 5 characters long";
        return;
    }
    let user = {
        name: signUpName.value,
        email: signUpEmail.value,
        password: signUpPassword.value
    }

    // signUpError.innerHTML="success";
    users.push(user);
    resetInputs();
    localStorage.setItem("users",JSON.stringify(users));
    window.location.href = "html/signIn.html";
});

