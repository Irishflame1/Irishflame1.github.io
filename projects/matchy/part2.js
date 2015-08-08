//Any code in part1.js is still accessible in this file! 
//Try it out. See if you can console.log a variable from part1 (like animals) from this page.
console.log(animal);

var profileAnimal = animal

for (var key in animal){
    var value = (animal[key]);
    if (typeof value === "string") {
        console.log(key + ":" + animal[key]);
    }
    else if (Array.isArray(value)) { 
        console.log(key + ": " + animal[key].join(" "));
    }
    else {
        console.log(key + ": " + "click here for more data");
    }
}

var relationships = profileAnimal.relationships;
var friends = relationships.friends;
console.log("friends: ");
for (var i = 0; i < friends.length; i++) {
    console.log(friends[i]);
}
console.log("matches: ");
for (var i = 0; i < matches.length; i++) {
    console.log(matches[i]);
}

function deleteFriend (friendss, friends) {
    var index = friends.indexOf(friend);
    if (index > -1) {
        return friends.splice (index, 1) [0];
    }
}

for (var j = 0; j < animals.length; j++) {
    var anything = animals[j];
    console.log((j + 1) + ". " + anything.species + ": " + anything.tagline);
}

 console.log(animal);
 
var user = animals[0];
printFriends(user);

/*
Now filter the loop you created above to only show other animals that are not friends with the signed-in user.
1. Write Loop
2. write an if statement
    a) (my friends = animals[0].friends)
    b) (who they are = animals[i].species)
    c) if animals[i].species !== animals[0].friends[i]
        console.log(animals[i]).species)
    
*/

function printFriends(user) {
    console.log(user.species + " " + "Friends: ");
    for (var i = 0; i < animals.length; i++) {
            if (animals[i] !== user)
console.log(animals[i].species);
    }
}

function  search (animals, species) {
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].species === species)
return animals[i];
    }
}

var found = search(animals, "Lion");
found.relationships.friends.push(animals[0].species);
console.log(found);

user.species = "Sloth";
user.noises = ["sleep", "slow", "purr", "sniffle"];
console.log(user);

animals[i].relationships.matches.push("Seth Kinard");
console.log(animals);


animals[i].name = animals[i].species;
delete animals[i].species;

console.log(animals);

