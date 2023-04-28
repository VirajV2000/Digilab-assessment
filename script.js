
function validatePassword(){
    // console.log("hi")
    const pass=document.getElementById("password");
    const cpass=document.getElementById("cpassword");
    if(pass.value !== cpass.value){
        cpass.setCustomValidity("Passwords do not match");
        cpass.reportValidity();
        // console.log(cpass);
    }else{
        cpass.setCustomValidity("");
    }
}
function showInfo(infoId) {
    console.log("Hi");
    var info = document.getElementById(infoId);
    console.log(info)
    info.classList.toggle("show");
  }
