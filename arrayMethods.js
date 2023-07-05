// /* Array.map () review:

// It is what's known as a High-Order function becasue we pass to it a callback function as an argument. */
// const names = ['anne', 'barry', 'chloe'];
// it will iterate over each array item taking the value of an item assigning it to the variable name.
// const bigNames = names.map((name) => name.toUpperCase()); //assign a new variable for the new array.

// console.log(bigNames);

//The map method does not mutate the original array.

// Array.filter() and Array.find() basic syntax.
// Filter will iterate throgh the array and return a new array that may or may not be the same size as the old array.
// its callback function tests the item to test what to put into the new array. The item values are not changed.
// Find will iterate through the array and return a single value.

// const newArray = Array.filter(callbackFn);
// const value = Array.find(callbackFn);

const things = [
    {
        id: 0,
        title: 'whiskers on kittens',
        favorite: true,
        points: 97
    },
    {
        id: 1,
        title: 'raindrops on roses',
        favorite: true,
        points: 77
    },
    {
        id: 2,
        title: 'brown paper packages tied up with string',
        favorite: true,
        points: 87
    },
    {
        id: 3,
        title: 'dog bite',
        favorite: false,
        featured: 'true',
        points: 12
    },
    {
        id: 4,
        title: 'bee sting',
        favorite: false,
        points: 6
    }
];

// Filter array and create new array that only contains the objects where the property of favorite is equal to true.
// const myFavoriteThings = things.filter((thing) => thing.favorite); //=== true);
// console.log(myFavoriteThings);

// const thingsWithOverFiftyPoints = things.filter((thing) => thing.points > 50);
// console.log(thingsWithOverFiftyPoints);

// const selectThingById = (id) => {
//     return things.find((thing) => thing.id === id);
// };

// const selectedThing = selectThingById(4);
// console.log(selectedThing);

// Filter and Find can be referred to as selector functions, meaning they are used to search through data
// to select a specific item without modifying the original data

const myFeatured = things.filter((thing) => thing.featured);
console.log(myFeatured);
