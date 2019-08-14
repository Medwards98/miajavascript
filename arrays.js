let favouriteSongs = [
    "In the morning",
    "In Bloom",
    "Just like heaven"
];

favouriteSongs.pop();
console.log(favouriteSongs)

//Activity(1)
let favouriteWebsites = [
    "Youtube",
    "Reddit",
    "Facebook"
];
favouriteWebsites.push("Amazon", "Wikipedia");
favouriteWebsites.pop();
console.log(favouriteWebsites)

//Activity(2)

let favouriteBands = [
    "Wolf Alice",
    "The Cure",
    "Pixies", 
    "Nirvana",
];

console.log(favouriteBands.shift());
console.log(favouriteBands.unshift("Placebo"));
console.log(favouriteBands.slice(3)); 
console.log(favouriteBands.splice(0))

// let favouriteFoods = [
//     "chocolate",
//     "Pizza",
//     "Curry"
// ];
// console.log(favouriteBands.concat(favouriteFoods));
// console.log(favouriteBands.copyWithin(3,2))


