// This is the basic of js

// This is showing numerical and strings

var studyCase = 5;
var string = "Word";

console.log(studyCase);
console.log(string)

// This is incrementing and decrementing the number
studyCase ++;
studyCase = studyCase + 1; //This is both incrementation


studyCase --; 
studyCase = studyCase - 1; //This is both decrementation

console.log(studyCase);

// multiplying of decimals and devide decimal

var prod = 2.0 * 2.3;
var div = 3.0/2.3;

console.log(prod);
console.log(div);

//For remainder

var remainder;
remainder = 11 % 3;

console.log(remainder);

// adding 
var a = 3;

a = a + 12 ;
// and there is a shortcut way

a += 12; //This is used for adding fast and for subtract is also same
a -= 1;
a *= 5 // This is also same as add and subtract 
a /= 5 ; // This is for divide
console.log(a);


//Escaping Literal Quotes

var myStr = "i am a \"double quoted\" string inside \" double quotes";
// To add double quoted inside the double quote we used \".
console.log(myStr);

var myStr1 = '<a href="http://www.example.com"';
//we can add quote quote by replacing the "" by '' so we have to use the \" to insert the double quote

console.log(myStr1);

//ESCAPE SEQUENCES IN STRINGS

/*
CODE OUTPUT
\'   single quote
\"   double quote
\\   backslash
\n   newline
\r   carry return
\t   tab
\b   backspace
\f   form feed

*/
//Example of multiple Line
var myStr2 = "Firstline\n\t\\Secondline\nThirdline";
console.log(myStr2);

 // Concatenting String with Plus Operator

var firstName = "Sujal";
var lastName = " Shakya";

var myName = firstName + lastName;

console.log(myName);


var ourStr = "I come first. " + "I come Second";
console.log(ourStr)

//Concatenting using plus equal 
var ourStr1 = " I come First. ";
ourStr1 += "I come Second";

//other examples
var ourN = "free ";
var ourS = "Hello " + ourN + "How are you?";

console.log(ourS);


// Appending variable to string
// Example

var someAdj = "worthwhile";
var myStr3 = "Learning to code is ";

myStr3 += someAdj;

console.log(myStr3);



