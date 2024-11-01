const btn=document.querySelector("button");
const inputTextArea=document.querySelector("input");
const copyButton=document.querySelector(".copy");


const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const numbers="0123456789";
const symbols="!@#$%^&*()_(){}[]<>/~="

const arrayPassword=upperCase+lowerCase+symbols+numbers;

function passwordGenerator(){
       let password="";
    //    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    //    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    //    password+=numbers[Math.floor(Math.random()*numbers.length)];
    //    password+=symbols[Math.floor(Math.random()*symbols.length)];

       while(password.length<12)
       {
        password+=arrayPassword[Math.floor(Math.random()*arrayPassword.length)];
       }
       inputTextArea.value=password;
}
btn.addEventListener("click",(e)=>{
    passwordGenerator();  
})

copyButton.addEventListener("click",(e)=>{
    inputTextArea.select();
    document.execCommand("copy");  // Mimic the activity Ctrl+C
})