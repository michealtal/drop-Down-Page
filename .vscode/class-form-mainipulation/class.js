
const errorMailMessage = document.getElementById("mail-error")
const errorPassMessage = document.getElementById("pass-error")
const numError = document.getElementById("num-error")

 errorMailMessage.style.display ="none";
 errorPassMessage.style.display ="none";
 numError.style.display = "none"
function ValidateInputs(providedEmail,providedPassword,providedNumber, e) {
    e.preventDefault();
    //email regex
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //password regex
   const passPattern =  /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/ ;
   //number regex
   const numPattern = /^(\+234[789][01]\d{8}|0[789][01]\d{8})$/;
   
   
   
     
//email check
if(providedEmail.value.match(mailFormat)){
  errorMailMessage.style.display = "none"
  //  alert("valid email address !");
  //  return true
}else{
    document.form1.text1.focus();
    errorMailMessage.style.display = "inline-block";
    
}

//pass check

if ( providedPassword.value.match(passPattern)) {
    errorPassMessage.style.display = 'none';
}else{
 document.form1.text2.focus();
 errorPassMessage.style.display = 'inline-block';
 
}
//num check
if (providedNumber.value.match(numPattern)) {
  numError.style.display = 'none';
  // document.form1.text3.focus()
}else{
  document.form1.text3.focus();
  numError.style.display = 'inline-block';
  
}

alert("Form submitted successfully");
}
