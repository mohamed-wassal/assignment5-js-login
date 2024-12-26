
let nameInput2=document.querySelector("#nameInput2")
let emailInput2=document.querySelector("#emailInput2")
let passwordInput2=document.querySelector("#passwordInput2")
let signBtn=document.querySelector("#signBtn")
let inputsAlert2=document.querySelector("#inputsAlert2")
let nameAlert=document.querySelector("#nameAlert")
let emailAlert=document.querySelector("#emailAlert")
let passwordAlert=document.querySelector("#passwordAlert")

let loginBtn=document.querySelector("#loginBtn")

let emailInput1=document.querySelector("#emailInput1")
let passwordInput1=document.querySelector("#passwordInput1")
let inputsAlert1=document.querySelector("#inputsAlert1")

let welcomeMessage=document.querySelector("#welcomeMessage")

let inputssuccess=document.querySelector("#inputssuccess")
let inputsAlert3=document.querySelector("#inputsAlert3")

if (localStorage.getItem("usersData")!==null) {
    var users=JSON.parse(localStorage.getItem("usersData"))
    
}else{
  var users=[];
}

function validateForm(regex,input,alertBox) {

    if(regex.test(input.value)){
        input.classList.add("is-valid")
        input.classList.remove("is-invalid")
        alertBox.classList.add("d-none")
        return true;
    }else{

        input.classList.add("is-invalid")
        input.classList.remove("is-valid")
        alertBox.classList.remove("d-none")
        return false;
    }
}


if (nameInput2) {
    nameInput2.addEventListener("blur",()=>{
        validateForm(/^[a-zA-Z\s]+$/,nameInput2,nameAlert)
    })
}
if (emailInput2) {
    emailInput2.addEventListener("blur",()=>{
        validateForm( /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,emailInput2,emailAlert)
    })
}
if(passwordInput2){
    passwordInput2.addEventListener("blur",()=>{
        validateForm(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,passwordInput2,passwordAlert)
    })
    
}
function signUp() {

    let userdetails={
        uname:nameInput2.value,
        uemail:emailInput2.value,
        upassword:passwordInput2.value,
    }
    let emailExist=users.some(user=> user.uemail===emailInput2.value)


if(userdetails.uemail===""||userdetails.uname===""||userdetails.upassword===""){
    inputsAlert2.innerHTML="all inputs are requried"
}else if(emailExist){
    inputsAlert2.innerHTML="this email already exists"
    inputssuccess.innerHTML=""
}
else if(
        validateForm(/^[a-zA-Z\s]+$/,nameInput2,nameAlert)&&
        validateForm( /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,emailInput2,emailAlert)&&
        validateForm(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,passwordInput2,passwordAlert)
    ){
        users.push(userdetails)
        localStorage.setItem("usersData",JSON.stringify(users))
        inputssuccess.innerHTML="it is been done successfuly"
         inputsAlert2.innerHTML=""
    }
   
}


if(signBtn){
    signBtn.addEventListener("click",signUp)
}







// function login() {
    
//     let usersData =JSON.parse( localStorage.getItem("usersData"));
    
    
// let emailSearch=usersData.some(user=> user.uemail===emailInput1.value);
// let passSearch=usersData.some(user=> user.upassword===passwordInput1.value);
// if(emailSearch && passSearch){

//     window.location.href = "welcome.html"

// }else{
// inputsAlert1.innerHTML="incorrect email or password"
// }

// }

// if(loginBtn){
//     loginBtn.addEventListener("click",()=>{
//         login()

//     })
// }
// if(welcomeMessage){
    
//         welcomeMessage.innerHTML="Welcome"+use
    
// }


function login(){
    if (localStorage.getItem("usersData")!==null) {
     users=JSON.parse(localStorage.getItem("usersData"))

        inputsAlert1.innerHTML="incorrect email or password"
    }else{
      users=[];
      inputsAlert1.innerHTML="incorrect email or password"
    }
    

    for(i=0;i<users.length;i++){
        if(users[i].uemail===emailInput1.value&&users[i].upassword===passwordInput1.value){
            localStorage.setItem("message",users[i].uname)
             window.location.href = "welcome.html"
      
    
        }
    }

}

if(loginBtn){
    loginBtn.addEventListener("click",()=>{
        login()

    })
}

if(welcomeMessage){
   welcomeMessage.innerHTML+= localStorage.getItem("message")
    
}