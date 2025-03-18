//1.Extract the last four characters
let word = "extravaganza";
let lastFour = word.slice(-4);
console.log(lastFour);

//2.Inserting string at the fourth index

const food = "The quick fox jumped over the lazy dog";
const newFood = food.slice(0, 4) + "eat" + food.slice(4);
console.log(newFood);

//3.Counting number of repititive strings

const story = "The quick brown fox jumps over the lazy dog";
const lowerStory = story.toLowerCase();
const theCount = (lowerStory.match(/the/g) || []).length;
const brownCount = (lowerStory.match(/brown/g) || []).length;
console.log(`"the" appears ${theCount} times`);
console.log(`"brown" appears ${brownCount} times`);

//4.Finding words from strings

const string1 = "The pupils are reading in the library";
const string2 = "The child was sitting on the table before it fell";
const findAre = string1.includes("are");
console.log(`Is "are" in string1? ${findAre}`);
const findSitting = string2.includes("sitting");
console.log(`Is "sitting" in string2? ${findSitting}`);

//5. Converting format into specified format

const upperCaseWord = "wonderful".toUpperCase();
console.log(upperCaseWord); 

const lowerCaseWord1 = "amazing".toLowerCase();
const lowerCaseWord2 = "UndERneath".toLowerCase();
console.log(lowerCaseWord1); 
console.log(lowerCaseWord2);

const toTitleCase = (str) => {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

const titleCaseSentence = toTitleCase("A wonderful world");
console.log(titleCaseSentence); 

