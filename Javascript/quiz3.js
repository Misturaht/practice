function number(){
num = prompt("enter a number");
if (num >= 75 && num <= 100){
    alert('your grade is excellent');
}
else if(num >= 64 && num <=74 ){
    alert ('Your grade is credit');
}
else if(num >= 54 && num <= 63){
    alert(' Your grade is credit ');
} 
else if(num >= 50 && num <= 54){
    alert('Your grade is credit');
}
else if (num >= 1 && num <= 49){
    alert('You failed');
}
else{
    return number();
}
}
number();