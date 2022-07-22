let screen = document.getElementById("display");
buttons = document.querySelectorAll("butn");
// var buttonText = 0;
for(button of buttons){
    button.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        console.log("sda",buttonText);
    });    
}
// var Ans = 0;
// function fn1(){
//     document.get
// }