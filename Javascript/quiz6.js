
var age
var school
var username
var pin
var firstname;
var lastname
var store = []
var counter = 1
function register(){
   firstname = prompt("enter your first name")
   lastname = prompt("enter your last name:")
   age = prompt("Enter your  age")
   school = prompt("Enter your class")
   username = prompt("Enter your username")
   pin = prompt("Enter your password")

   var data ={
       firstname :firstname,
       lastname :lastname,
       age :age,
       school : school,
       username:username,
       pin:pin
   }
   store.push(data)
    check = prompt("Do you want to enter more data (y/n)")
    if (check == "y"){
       counter++
       register();
   }else{
    login();
   }
   if("y" = store){
    prompt("The details  has been used , p");
   }
   if("y" = store){
    alert("The details  has been used");
   }
   else if("y" != store){
    alert("Your name is " + store[i]['firstname'] +" " +  store[i]['lastname'] + " you are " + store[i]['age'] + " years old and you are in " + store[i]['school']);
   }
   else{
       alert("Your name is " + store[i]['firstname'] +" " +  store[i]['lastname'] + " you are " + store[i]['age'] + " years old and you are in " + store[i]['school']);
   }
   function login(){
   username1 = prompt("Verify your username");
   pin1 = prompt("Verify your password");
   for(i=0; i < counter; i++){
   if(username1 == store[i]['username'] && pin1 == store[i]['pin']){
       alert("Your name is " + store[i]['firstname'] +" " +  store[i]['lastname'] + " you are " + store[i]['age'] + " years old and you are in " + store[i]['school']);
       break;
   }
   if(i == counter.length-1)
   {
       alert("incorrect")
   }
   }
}
}
register()