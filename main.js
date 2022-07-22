

// Create an object (with keys and values) called person with the following data:

// firstName: "Jane",
// lastName: "Doe", "Doe"
// birthDate: "Jan 5, 1925"
// gender: "female"
//
// #2
const person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
};

// Create a function that logs out the keys of the object using Object.keys()
//

// const getKeys = (obj) => {
//    return Object.keys(obj);
// }

// #3
const getKeys = (obj) => {
    return Object.keys(obj);
}
console.log(getKeys(person));

// Create a function that logs out the keys and values of the object using Object.entries()

// #4
const getEntries = (obj) => {
    return Object.entries(obj);
}
console.log(getEntries(person));

// Create an arrayOfPersons that contains multiple "people" objects
// the values to reflect people you might have in your database

//Arrays of Persons
// #5
const arrayOfPersons = [
    {
        firstName: "Kyle",
        lastName: "Suda",
        birthDate: "08/16/1991",
        gender: "male",
        favoriteFoods: ["pizza", "burritos", "ice cream"]
    },
    {
        firstName: "Patrick",
        lastName: "Hernandez",
        birthDate: "03/30/1991",
        gender: "male",
        favoriteFoods: ["pizza", "beer", "bacon"]
    },
    {
        firstName: "Brandon",
        lastName: "Henry",
        birthDate: "05/04/1994",
        gender: "male",
        favoriteFoods: ["taco salad", "burgers", "ice cream"]
    }
];

// Create a function that uses a for.... of loop and an if statement to console.log() the
// value associated with the key birtDate of each object if the birth year is an odd number.
//#6

const birth = () => {
    let yearEnd = 0;
    let newArray = []
    for (let i=0; i<arrayOfPersons.length; i++) {
        yearEnd = arrayOfPersons[i].birthDate.slice(-1)
        if (yearEnd % 2 !== 0) {
            newArray.push(arrayOfPersons[i])
        }
    }
    console.log(newArray)
};
birth();



/** use . map()
 * to map over the arrayOf Persons and
 * console.log() their information.
 */
// #7
const names = arrayOfPersons.map((person) => {
    return person.firstName;
});

console.log(names)

/**
 * Use .filter() to filter the
 * person array and console.log only males in the array.
 */
// #8
const gender = arrayOfPersons.filter((person) => {
    return person.gender === 'male';
});

console.log(gender)

/** use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.
 */
// #9
const bornBefore = (array, date) => {
    let beforeDate = (date.slice(-4))
    for (let person of array) {
        let birthYear = (person.birthDate.slice(-4))
        if (birthYear < beforeDate) {
            console.log(`${person.firstName} born in ${birthYear}, which is  ${date}`)
        }
    }
}
bornBefore(arrayOfPersons, 'True')

// #1
// use a do....while loop to console.log() the numbers from 1 - 1000
let counter = 1;
while (counter <=1000) {
    console.log(counter);
    counter = counter +1;
}