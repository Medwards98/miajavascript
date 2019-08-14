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




