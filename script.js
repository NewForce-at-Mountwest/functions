// Let's say we want to log a VERY ENTHUSIASTIC greeting to the console for every student in the class

// We'd need to convert everythings to uppercase, build a greeting, and then console.log it a bunch of times

// OR we could write a handy function that does it for us

// Functions can either be written a few different ways

//function nameOfFunction(){} or 

//const nameOfFunction = function(){}

// const fatArrow = () => {}


// LIGHTNING EXERCISE ONE

// Pure functions are self-contained little machines (i.e. one that only takes parameters)

// Impure functions affect the rest of the code (i.e. one that prints to the DOM or modifies a variable outside of the function)

// Imagine you manage a book store. Write a function that loops through the inventory array. 

const inventoryData = [
  {
    name: "Harry Potter Box Set",
    quantity: 4
  },
  {
    name: "The Hobbit",
    quantity: 0
  },
  {
    name: "The Hunger Games",
    quantity: 8
  },
  {
    name: "How to Cook Everything",
    quantity: 16
  },
  {
    name: "The Lion, The Witch, and the Wardrobe",
    quantity: 9
  },
  {
    name: "Crime and Punishment",
    quantity: 0
  },
]

//Check and see if the item is in stock and, if so log it(and its quantity) to the console
// Check to see if the quantity is more than 10 and, if so, print it in uppercase

// Refactor the function so that it takes in the array as a parameter and loops through it (so it would work with any array)

// Refactor the function again so that, instead of logging each item to the console, it loops through each item and checks to see if it's in stock and then RETURNS a new array of in stock items
