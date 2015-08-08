//Use this file to implement Part One of your project

var animal = [
    { 
        "species": "dog", 
        "tagline": "Max", 
        "noises": ["woof", "bark", "whine", "growl"], 
        "relationships": {
            "friends":[], /*["horse", "cat"],*/
            "matches":[] /*["bird", "rabbit"] */
        }
    },
    { 
        "species": "horse",
        "tagline": "Bronco", 
        "noises": ["nahhh", "snort", "neehhh", "pufffff"],
        "relationships": {
            "friends": ["dog", "cat", "cat"],
            "matches": ["bird", "rabbit"]
        }
    },
     { 
        "species": "horse", 
        "tagline": "Dave", 
        "noises": ["nahhh", "snort", "neehhh", "pufffff"],
        "relationships": {
            "friends": ["dog", "cat"],
            "matches": ["bird", "rabbit"]
        }
    },
    { 
        "species": "rabbit", 
        "tagline": "Jacky-Legs", 
        "noises": ["fluff", "scratchy-scratch", "thump", "sot"],
        "relationships": {
            "friends":[], /*["dog", "cat"],*/
            "matches": ["bird", "horse"]
        }
    },
    { 
        "species": "cat", 
        "tagline": "Grumpy Cat", 
        "noises": ["Meoh", "scratchy-scratch", "screech", "sissst"],
        "relationships": {
            "friends": ["dog", "rabbit"],
            "matches": ["bird", "horse"]
        }
    }
];
/*
var objKeyPrinter;
var objValuePrinter;
var arrValuePrinter;
var dataTypeChecker;
var capatalizeVals;
var strCapatilizer;

function objKeyPrinter(animal) {
    for (var key in animal){
        var value = (animal);
        
    }
}

function objValuePrinter() {
for (var key in animal){
    var value = (animal[key]);
    if (typeof value === "string") {
        console.log(animal[key]);
        }
    }
}
*/
var unique = function(arr) {
    var seen = {};
    return arr.filter(function(val) {
        if (seen[val]) {
            return false;
        } else {
            seen[val] = true;
            return true;
        }
    });
};


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}



function welcomeMessages(obj) {
    console.log("Welcome" + " " + capitalizeFirstLetter(obj.species) + "!");
};

welcomeMessages(animal[0]);


function profileData(obj){
    for (var key in obj){
    var value = (obj[key]);
        if (typeof value === "string") {
            console.log(capitalizeFirstLetter(key) + ":" + capitalizeFirstLetter(obj[key]));
        }
            else if (Array.isArray(value)) {
                console.log(key + ": " + obj[key]);
        }
    }
};

profileData(animal[0]);

function relationshipLogger(obj) {
    var relationships = obj.relationships
    if ((relationships && relationships.friends.length > 0) ||  (relationships && relationships.matches.length > 0)) {
        console.log(obj.relationships);    
    }
        else{
        console.log("You have no relationships :(");
    }

};

relationshipLogger(animal[0]);
relationshipLogger(animal[1]);
relationshipLogger(animal[2]);

function hasRelationship(species, animal) {

};


function addFriend() {
    
};


function addMatch() {
    
};


function nonFriend(animals, animal) {
    var nonFriendsArr = [];
    var friends = animal.relationships.friends;
    var i, currentAnimal;
    for (i=0; i < animals.length; i++) {
        currentAnimal = animal[i].species;
        if (friends.indexOf(currentAnimal) === -1) {
            nonFriendsArr.push(currentAnimal);
    }
    }
    return nonFriendsArr
};


function search(collection, query) {
    var searchResults = [];
    var i;
    for (i = 0; i < animal.length; i++) {
        if (query === collection[i].species || query === collection[i].tagline) {
            searchResults.push(collection[i]);
        }
    }
    return searchResults
};

search(animal, "horse");
search(animal, "Max");

function noRepeatFriends(aniNum) {
    return unique(aniNum.relationships.friends);
}
noRepeatFriends(animal[1])

function changeAndAdd(obj, key, newVal) {
    return(obj[key] = newVal);
};

changeAndAdd(animal[3], "tagline","Jacky Daniels");
console.log(animal[3]);

function newAnimalObjCreator() {
    
};

var testArray = [{'a': 'b', 'c': 'd'},{'a': 'q'}];

function cleanseData(a, b) {
     for (var i = 0; i < a.length; i++) {
         for (var key in a[i]) {
             if (b !== key) {
                 delete a[i][key];
             }
         }
    }
    return a;
};

console.log(cleanseData(testArray, "a"));
