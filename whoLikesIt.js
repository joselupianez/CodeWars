// Who likes it?

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// Solution:
function likes(names) {
    let [a,b,c,...others] = names;
    switch (names.length) {
        case 0:
          return 'no one likes this';
        case 1:
          return `${a} likes this`;
        case 2:
          return `${a} and ${b} like this`;
        case 3:
          return `${a}, ${b} and ${c} like this`;
        default:
          return `${a}, ${b} and ${others.length+1} others like this`
    }
}