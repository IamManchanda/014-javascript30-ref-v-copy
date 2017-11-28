/**
 * JavaScript30 | Ref vs Copy
 */

// start with strings, numbers and booleans
// 
let age = 100;
let age2 = age;
console.log('age, age2:', age, age2);
age = 200;
console.log('age, age2:', age, age2);

let name = 'Harry';
let name2 = name;
console.log('name, name2:', name, name2);
name = 'Harman';
console.log('name, name2:', name, name2);


// Array Reference (not an array copy)
// 
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
// const team = players;
// console.log('players, team:', players, team);
// team[3] = 'Harry';
// console.log('players, team:', players, team); // They both point to the same array!

// So, how do we fix this? We take a copy instead!
// 
// const team2 = players.slice(); // one way, Slice
// const team2 = [].concat(players);// or create a new array and concat the old one in
// const team2 = Array.from(players); // Array.from()
const team2 = [...players] // or use the new ES6 Spread
console.log('players, team2:', players, team2);
team2[3] = 'Harry'; // now when we update it, the original one isn't changed
console.log('players, team2:', players, team2);

// The same thing goes for objects, let's say we have a person object
// 
const person = {
  name: 'Harry Manchanda',
  age: 24
};

// and I think we make a copy:
// 
// const dockerCaptain = person; // why not? I love dreaming challenges DevOPS!
// dockerCaptain.age = 26; // Maybe 1.5-2 years from now, who knows?
// dockerCaptain.number = 99; // Another Entry for Docker Captain
// console.log('person, dockerCaptain:', person, dockerCaptain);

// how do we take a copy instead?
// 
const dockerCaptain2 = Object.assign({}, person, { // why not? I love dreaming challenges DevOPS!
  age: 26, // Maybe 1.5-2 years from now, who knows?
  number: 99 // Another Entry for Docker Captain
});
console.log('person, dockerCaptain2:', person, dockerCaptain2);

// We will hopefully soon see the object ...spread
// const dockerCaptain3 = {...person}; // Not in Vanilla JavaScript Yet!

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
// 
const harry = {
  name: 'Harry Manchanda',
  age: 24,
  social: {
    twitter: '@harmanmanchanda',
    github: 'IamManchanda',
  }
}

const dev = Object.assign({}, harry);
console.log('harry, dev:', harry, dev);

dev.name = 'Harman Singh Manchanda';
console.log('harry, dev:', harry, dev);

console.log('harry.social, dev.social:', harry.social, dev.social);
dev.social.twitter = '@sirjadeja';
console.log('harry.social, dev.social:', harry.social, dev.social);

// Way to use it deeply, not recommended if not needed due to performance!
const dev2 = JSON.parse(JSON.stringify(harry));
dev2.social.github = 'gaearon';
console.log('harry.social, dev2.social:', harry.social, dev2.social);