
// function sayHelloWorld (){
//   console.log("Hello, world");
// }


// // Let's say we want to log a VERY ENTHUSIASTIC greeting to the console for every student in the class

// // const sableGreeting = "Hello, Sable!";
// // const screamySableGreeting = sableGreeting.toUpperCase();
// // console.log(screamySableGreeting);

// // const nikkiGreeting = "Hello, Nikki!"
// // const screamyNikkiGreeting = nikkiGreeting.toUpperCase();

// // We'd need to convert everythings to uppercase, build a greeting, and then console.log it a bunch of times

// // OR we could write a handy function that does it for us
// function screamGreeting (taco){
//   console.log("This is the parameter", taco);
//   const studentGreeting = `Hello, ${taco}!`;
//   const screamyStudentGreeting = studentGreeting.toUpperCase();
//   console.log(screamyStudentGreeting);
// }

// screamGreeting("Sable");
// screamGreeting("Nikki");
// screamGreeting("Matt");


// // LIGHTNING EXERCISE ONE
// // ## 1.
// // 1. Write a function called `addToCart` that takes one argument of `itemName`
// function addToCart(itemName){
// // 2. The function should log the sentence "The [itemName] has been added to your cart!" to the console.
//   const cartSentence = `The ${itemName} has been added to your cart!`;
//   console.log(cartSentence);
// }

// addToCart("monkey"); 
// addToCart("dog");
// addToCart("cat");

// // 3. Call the function

// const petStoreInventory = ["monkey", "dog", "cat"];
// const bookStoreInventory = ["harry potter", "war and peace"];

// function upperCasifyInventory(anyArray){
//   for(let i = 0; i < anyArray.length; i++){
//     anyArray[i] = anyArray[i].toUpperCase();
//   }
//   console.log(anyArray);
// }

// upperCasifyInventory(petStoreInventory);
// upperCasifyInventory(bookStoreInventory);



// We can also call a function inside a loop!
// const studentArray = ["Sable", "Nikki", "Matt", "Charles", "Joey"];
// // for(let i = 0; i < studentArray.length; i++){
// //   screamGreeting(studentArray[i]);

// // }
// // // Functions can either be written a few different ways. Here are two:
// // sayHelloWorld();
// // //function nameOfFunction(){} or

// // //const nameOfFunction = function(){}
// // sayHelloPizza();
// // const sayHelloPizza = function(){
// //   console.log("Hello, pizza");
// // }


// // const sayHelloTaco = () => {
// //   console.log("Hello, taco")
// // }
// // sayHelloTaco()
// // Pure functions are self-contained little machines (i.e. one that only takes parameters)

// // Impure functions affect the rest of the code (i.e. one that prints to the DOM or modifies a variable outside of the function)



// // // ## 2.
// // // 1. Copy and paste the following array into your JavaScript file

// // const monkies = ["Coats", "Gloves", "Hats", "Scarves"]

// // // 2. Write a function that loops through the `inventory` array and prints each item to the console.
// // // 3. Call the function

// // const printInventory = function(inventoryArray){
// //   console.log("What is inventory array?", inventoryArray);
// //   for(let i=0; i < inventoryArray.length; i++){
// //     console.log(inventoryArray[i]);
// //   }
// // }

// // printInventory(monkies);
// // printInventory([1, 2, 3, 4, 5, 6]);
// // const singleItemArray = ["cheese"];
// // printInventory(singleItemArray);
// // printInventory(2);




// // Imagine you manage a book store. Write a function that loops through the inventory array. 

// const bookStoreData = [
//   {
//     name: "Harry Potter Box Set",
//     quantity: 4
//   },
//   {
//     name: "The Hobbit",
//     quantity: 0
//   },
//   {
//     name: "The Hunger Games",
//     quantity: 8
//   },
//   {
//     name: "How to Cook Everything",
//     quantity: 16
//   },
//   {
//     name: "The Lion, The Witch, and the Wardrobe",
//     quantity: 9
//   },
//   {
//     name: "Crime and Punishment",
//     quantity: 0
//   },
// ]

// //Check and see if the item is in stock and, if so log it(and its quantity) to the console
// function printInventory(inventoryDataArray){
//   for(let i = 0; i < inventoryDataArray.length; i++){
//     if(inventoryDataArray[i].quantity <= 9 && inventoryDataArray[i].quantity > 0){
//       console.log(inventoryDataArray[i].name)
//       console.log(inventoryDataArray[i].quantity)
//     } else if (inventoryDataArray[i].quantity >= 10){
//       console.log(inventoryDataArray[i].name.toUpperCase())
//       console.log(inventoryDataArray[i].quantity)
//     }

//   }
// }

// printInventory(bookStoreData);





// // Check to see if the quantity is more than 10 and, if so, print it in uppercase

// // Refactor the function so that it takes in the array as a parameter and loops through it (so it would work with any array, for any store)

// // Refactor the function again so that, instead of logging each item to the console, it loops through each item and checks to see if it's in stock and then RETURNS a new array of in stock items

// // LIGHTNING EXERCISE THREE

// // ## 3. 
// // 1. Copy and paste the following array into your JavaScript file:
const detailedInventory = [
  {
    name: "Coat",
    quantity: 9,
    price: 79.99
  },
  {
    name: "Gloves",
    quantity: 24,
    price: 12.99
  },
  {
    name: "Hats",
    quantity: 16,
    price: 9.99
  },
  {
    name: "Scarves",
    quantity: 6,
    price: 14.99,
  }
]

function flattenArray(){
  const arrayOfNames = [];
  for(let i = 0; i < detailedInventory.length; i++){
    arrayOfNames.push(detailedInventory[i].name);
  }
  console.log("this is inside the function", arrayOfNames);
  return arrayOfNames;
}

const justTheNames = flattenArray();
console.log("this is what it looks like outside the function", justTheNames);

document.querySelector("#item-names").textContent = justTheNames.join(", ")


// // 2. Write a function that loops through the `detailedInventory` and prints the name of each item to the console.
// function printItemName(){
//   for(let i = 0; i < detailedInventory.length; i++){
//     if(detailedInventory[i].price < 20){
//       console.log(detailedInventory[i].name);
//     } 
//   }
// }

// printItemName();
// // 3. Refactor the function so that it only prints the name of the item if it's under $20.00. 
// 4. Call the function

const sayHello = function(){
  const phrase = "Hello, world!";
  return phrase;
  // return {
  //   stringOne: "Hello, world",
  //   stringTwo: "Hello, taco!"
  // }
}

const theThingThatGotReturned = sayHello();
console.log("this is phrase", theThingThatGotReturned);