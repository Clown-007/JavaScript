var ourArray = ["Asim", 21 , ["dog",23]];

ourArray.shift(); // Our Array now equals [21, ["dog,23"]]
ourArray.unshift("Hello");

// our array now equals ["Hello", 21 , ["dog", 23]]


var myArray = ["Love", "Life"]
myArray.shift();
myArray.unshift("Daam");

console.log(myArray);

// Its removes the Love and replace its place by Daam 
// Rather than saying replaced we can say that we added daam 