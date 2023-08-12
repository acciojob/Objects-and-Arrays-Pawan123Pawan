const players = ["John", "Bob", "Alice", "Poppy"];
const person = {
  name: "John Doe",
  age: 80,
};

// Create a reference to the 'players' array using the 'team' variable
const team = players;

// Create a copy of the 'players' array using the 'team1' variable
const team1 = players.slice();

// Create a copy of the 'person' object using the 'cap1' variable
const cap1 = Object.assign({}, person);

// Testing modifications
team.push("Molly"); // This will also modify 'players' array
team1.pop(); // This will not affect 'players' array
cap1.name = "Jane"; // This will not affect 'person' object
cap1.age = 90; // This will not affect 'person' object
console.log(players); // Check if 'players' array is modified
console.log(team1); // Check 'team1' array
console.log(person); // Check 'person' object
console.log(cap1); // Check 'cap1' object


// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
