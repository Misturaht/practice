function nurse(){
var usernameA = prompt("Enter your username")
 alert('Thanks for signing up with us');
}
function nurse2(){
var usernameB = prompt("Enter your username")
if(usernameB === usernameA){
    prompt("This username has been used , please use another one");
}else{
    alert("Your username is" +" "+ usernameB +" "+"Your password is" +" "+ pin);
}
}
nurse()
nurse2()