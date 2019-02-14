var name 
var maths 
var english
var science
var economics
var counter = 1
store =[]
function data(){
    name = prompt("Pls enter ur name: ")
    maths = parseInt(prompt("Pls enter your maths score: "))
    eng = parseInt(prompt("Pls enter your english score: "))
    science = parseInt(prompt("Pls enter your science score: "))
    econs = parseInt(prompt("Pls enter your economics score: "))


dataset = {
    name:name,
    maths:maths,
    english:english,
    science:science,
    economics:economics
}
store.push(dataset)

     check = prompt("do u want to enter more data (n): ")
     if (check != "n"){
         data ()
         counter++
     }
     else{
         console.log(store)
     }

}
data()