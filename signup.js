"use strict";
const a = 10;


document.querySelector(".Register").addEventListener("click", function () {
  const Email = document.getElementById("email").value;
  const Username = document.getElementById("username").value;
  const Password = document.getElementById("password").value;
  const Phone = document.getElementById("phoneno").value;
  const DOB = new Date(document.getElementById("DOB").value);
  const Gender = document.getElementsByName("gender");
  const gend =Gender[0].value;
  const Proffession = document.getElementById("proffession").value;
//   const topics = document.getElementById("topics").value;


const Reg= 
    "Email : " +
    Email +
    "\n " +
    "Username : " +
    Username +
    "\n" +
    "PassWord : CONFIDENTIAL!" /*Password +*/ +
    "\n" +
    "Phone :" +
    Phone +
    "\n" +
    "DOB : " +
    DOB +
    "\n" +
    "Gender : " +
    gend +
    "\n" +
    "Proffession : " +
    Proffession +
    "\n" ;
    

 
  document.querySelector("#message").textContent = `${Reg}`;
  
  
  document.getElementById("message").style.display = "block";
 
});
