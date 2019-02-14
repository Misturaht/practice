// var a= prompt("Input a number");
// var b = prompt("Imput a new number");
// var c = prompt("Input another number");
// var d= prompt("Input a number");
// var e = prompt("Imput a new number");
// var f = prompt("Input another number");
// var g= prompt("Input a number");
// var h = prompt("Imput a new number");
// var i = prompt("Input another number");
// var i = prompt("Input a new number");

// function aliyah(){
//     num = [];
//     for(i = 0; i < 10; i++){
//         num.push(prompt("enter a number"));
//     }
//     var biggest = num[0];
//     for(i = 1; i < 9; i++){
//         if (biggest < num[i]){
//             biggest = num[i]
//         }
//     }
//     console.log(biggest+ " is the greatest")
// }
// aliyah();
function check(){
    num = [];
    counter = 1;
    while (true){
        value = (prompt ("enter a number"))
        if(isNaN(value)){
            continue;
        }
        else {
            value = parseInt(value)
        }
        num.push(value);
        a = prompt("Do u want to continue (y/n): ")
        if (a == 'n'){
            break
        }
        else {
            counter++;
        }
    }
    var biggest =  num[0];
    var sum = 0;
    var avg = 0.0;
    for(i = 1; i<counter-1; i++){
        sum+=num[i];
        avg = sum/counter;
        if (biggest < num[i]){
            biggest = num[i]
        }
     }

console.log("the sum is " + sum + "the average is " + avg)
console.log(biggest+ "is the biggest number");
    } 
    check();