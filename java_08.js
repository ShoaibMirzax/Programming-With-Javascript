// Object Literals and the Dot Notation
// var user = {} // empty object
//creating an object with properties and their values
var assistantManager = {
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money"
}
// console.log(assistantManager)
// Additionally, I can console log any individual property, like this:
// console.log(assistantManager.health)

// 2. Alternative method DOT notation
var house = {};
house.rooms = 4;
house.color = "brown";
house.priceUSD = 12345;
// console.log(house)
house.window = 4 
// console.log(house)

// 3. Object Literals and the Brackets Notation
var house2 = {};
house2["rooms"] = 4;
house2['color']= "pink";
house2["priceUSD"] = 12345;
// With the brackets notation, I can add space characters inside property names,
house2['No. of Windows'] = 2 //space added
// console.log(house2); // {rooms: 4, color: 'pink', priceUSD: 12345}
/* Finally, there's one really useful thing that bracket notation has but is not available in the dot notation: It can evaluate expressions.*/
var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}