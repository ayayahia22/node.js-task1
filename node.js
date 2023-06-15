const fs = require("fs");

// Read the JSON in problem1.json
const data = JSON.parse(fs.readFileSync("problem1.json", "utf8"));


// Add height and weight to Fluffy
data.height = 10;
data.weight = 20;

// Fluffy name is spelled wrongly. Update it to Fluffyy
data.name = "Fluffyy"

console.log(data);
// List all the activities of Fluffyy’s catFriends.
 const activities = [...data.catFriends[0].activities,...data.catFriends[1].activities];
console.log(activities)

// Print the catFriends names.
const catFriendsnames = [data.catFriends[0].name,data.catFriends[1].name,];
console.log(catFriendsnames)

// Print the total weight of catFriends

const weight = data.catFriends.reduce(function(a, b) { return a.weight + b.weight; });
console.log(weight)

// Print the total activities of all cats 
console.log( data.activities + data.catFriends[0].activities,data.catFriends[1].activities);

// Add 2 more activities to Bar & Foo cats
  const bar = data.catFriends[1].activities;
  const foo = data.catFriends[1].activities;
  bar.push("run" ,"jump");
  foo.push("run" ,"jump");
  console.log(bar,foo)
// Update the fur color of bar
console.log (data.catFriends[1].furcolor = "yello");