const coffeeOrder = (size, drinkType) => {
    console.log(`Order is a ${size} ${drinkType}`);

}

coffeeOrder ("Large", "Latte");
coffeeOrder ("Small", "Black Coffee");
coffeeOrder ("medium", "Iced Coffee")

//Activity (1)
let orderCount = 0; 

const takeOrder = (toppingOne, toppingTwo, toppingThree) => {
    console.log(`Pizza with ${toppingOne}, ${toppingTwo} and ${toppingThree}. Order number: ${orderCount}`); 
    orderCount++;

}

takeOrder("pineapple", "mushrooms", "ham")
takeOrder("ham", "ham", "ham")

//Activity(2)

const withdrawCash = (pin, amount, balance) => {
    if (pin == 1111 && amount <= balance){
        console.log(amount); 
    }
        else{
            console.log("Your request is denied")
        }
}; 

withdrawCash(1111, 100, 1000)
withdrawCash(12, 100, 1000)
withdrawCash(12, 100, 1000)
withdrawCash(12,100, 1000)

let age = 21;
const birthday = (day, month) => {
    if (day == 30 && month == 3){
        console.log(`Happy birthday, you're ${age}!`);
        age++;
    }
}

birthday(30, 3)
birthday (30, 3)
birthday (30, 3)


const subSandwichOrder = (topping1, topping2, topping3, topping4, topping5) => {
    console.log(`${topping1}, ${topping2}, ${topping3}, ${topping4}, ${topping5}`)
}

subSandwichOrder ("ham", "peppers", "cheese", "tomato", "sauce")
subSandwichOrder ("peppers", "beef", "salad", "mustard", "chilli")

for (i=9 ; i >= 0 ; i--){
    console.log(i);
}

let favouriteFilms = [
    "Pulp Fiction", 
    "Fight Club", 
    "Green Room", 
    "Mad Max",
    "Kill Bill"
]; 

favouriteFilms.push("Get Out", "10 Things I Hate About You")
for(filmIndex = 0; filmIndex < favouriteFilms.length; filmIndex++){
    console.log(favouriteFilms[filmIndex])
};

const filmCheck = ()  =>{
    if(favouriteFilms[4] == "Ghostbusters"){
        console.log("Yay! It's Ghostbusters")
    }
else {
    console.log("Booo we want Ghostbusters!")
} 
};
filmCheck()

//WHILE LOOP CHALLENGE
// Use a while loop to generate random numbers until 50 is reached
// Use the random card suit generator as an example.
// Be creative and research if you’re not sure

let cards = ["Diamond", "Spade", "Heart", "Club"];
let currentCard = "Spade";
while(currentCard != "Spade"){
 console.log(currentCard);
 currentCard = cards[Math.floor(Math.random()*4)];
}
console.log(currentCard);


//Example of a 'While Loop'
let currentNumber = 0; //so this is your starting number
while(currentNumber != 50){ //So this acts to stop the number at 50, basically saying when the random generation hits 50 to stop
    console.log(currentNumber);
    currentNumber = (Math.floor(Math.random() * 100)); //this is times 100, so you're asking the generator to randomly generate 100 times
} 
console.log(currentNumber);


const number = (number1) => {
    console.log(number1.toString());
}

let cake = "7007"
let palindrome = true;
let c =0; 
let e = cake.length -1; 
for(i= 0; c < e; i++){
    if (cake.charAt(c) != cake.charAt(e)) {
        palindrome = false; 
        break;
    }
    c++;
    e++;
}
if (palindrome){
    console.log("This is a palindrome")
}
else console.log("not one")

// Challenge(3)


