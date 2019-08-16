if (1 != "1") {
    console.log(true);
}
else {
    console.log(false);
}

let age = 2; let country = "France"; 
if ( age > 17 && weather == "UK"){
    console.log("Yes I can serve you and you're in the UK!")
}
else{
    console.log("You aren't old enough and we're not in the UK")
}
//Challenge One
let password = "Code Nation";
if (password.length < 8){
    console.log("Password is too short")
}
else {
    console.log(password)
}
//Challenge two
let num = 20; 
if (num % 3 == 0 || num % 5 == 0){//need the % because this is a division which leaves a remainder, rather than /
    console.log("This number is divisible by 3 or 5")
} 
else {
    console.log("This number can't be divided by 3 or 5")
}
//Challenge three
num = 10;
if (num % 3 == 0 ){
    console.log("Fizz")
}
if (num % 5 == 0){
    console.log("Buzz")
}
//Extra Challenges: Challenge 1 (Palindrome)
// num = 7007

//Challenge 2
// let time = 9;
// const townOfHome = "Manchester";
// const placeOfWork = "CodeNation";

// if (time <=8){
//     console.log("I'm at home")
// }
// if (time = 8) 

let Space1="     x   "; let Space2="    o    "; let Space3= "     "; let Space4="     x   ";
 let Space5="    x    "; let Space6="         "; let Space7="     o   "; let Space8="         ";
 let Space9="         ";
console.log(`                        
              ${Space1}  | ${Space2}  | ${Space3}
                         |            |
            - - - - - - - - - - - - - - - - - - -
                         |            | 
              ${Space4}  |  ${Space5} |  ${Space6}
                         |            | 
            - - - - - - - - - - - - - - - - - - - 
                         |            | 
               ${Space7} |  ${Space8} |  ${Space9}
                         |            |            `)

                         if (Space1 && Space2 == Space3){
                             console.log("You win!")
                         }
                         else {
                             console.log("You don't win :(")
                         }




