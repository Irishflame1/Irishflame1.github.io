// Use this file to implement Part One of your project

var animal = {};
    animal.species = "Lion";
console.log(animal.species);
    animal["tagline"] = "Leo";
console.log(animal["tagline"]);
    animal.noises = null;
console.log(animal);

var noiseArray = [];
    noiseArray[0] = "roar";
    noiseArray.push("growl");
    noiseArray.unshift("purr");
    noiseArray.push("sniffle");
console.log(noiseArray);
console.log(noiseArray.length);

//last index = 2 length = 3 the index starts at 0//
//noiseArray ["Purr!", "Roar", "Growl!"]//

var noises = "noises";
    noises = animal.noises;
    noises = noiseArray;
    animal.noises = noises;
console.log(animal);
console.log(animal.noises);

//Bracket noatation and Dot notation//
//.push and .unshift and Bracket notation//
//You can just add it in like $name??//
//You have to put the variable in {}//

var animals = [];
    animals[0] = animal;
console.log(animals);

var quackers = { 
    species: "duck", 
    tagline: "Afflack", 
    noises: ["quack", "honk", "sneeze", "growl"] 
};
    animals.push(quackers);
console.log(animals);

var squeaky = { 
    species: "mouse", 
    tagline: "Squeakers", 
    noises: ["squeak", "munch", "sneeze", "sniffle"] 
};

var splashy = { 
    species: "dolfin", 
    tagline: "Splashers", 
    noises: ["splash", "eeeee", "sneeze", "click"] 
};

animals.push(squeaky);
animals.push(splashy);
console.log(animals.length);

/*I would use a object because it allows me to make an array inside it with a list of all the friends names and then 
be able to call on the list of friends*/

var friends = [squeaky, splashy];

console.log(friends);
//friendsObject = {speciesOne: Object(squeaky), speciesTwo: Object(splashy}//

var relationships = {
};
relationships.friends = friends;
console.log(relationships); //.lengthundefined 

var matches = [];
    relationships.matches = matches;
console.log(relationships);
    relationships.matches.push(squeaky, splashy, quackers);
    console.log(relationships);
    
animal.relationships = relationships;
squeaky.relationships = relationships;
splashy.relationships = relationships;
quackers.relationships = relationships;

console.log(squeaky);