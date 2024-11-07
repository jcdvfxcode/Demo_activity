console.log("Hello World");

////////

// String
let name = "JCDV";

// Number
let number = 5;

// Boolean
let isCoding = false;

// Undefined
let nickname;

// Null
let lastName = Null;

//////////////////////////////////////////////////////////////////////////////////////////////////

// Concatenation
//Sample1####
let userName = "JCDV";
let pi = 3.14;
console.log (userName);

console.log("Hello, " + userName + "!");
//output: Hello, JCDV!

//Sample2####
console.log(userName + ", The valie of pi is " + pi);
//output: JCDV, The valie of pi is 3.14

//EXERCISE#
//Alenere, the friendly neighbor, waved at David as she walked by David's house.
//David smiled back and invited Alenere in for a cup of coffee.

////////////////////////////////////////////////////////////////////////////////////////////

let p1 = "Alenere";
let p2 = "David";
let p3 = "she";
let drink = "coffee";

//Solution@
console.log(p1 + ", the friendly neighbor, waved at " + p2 + " as " + p3 +
     " walked by " + p2 + "'s house." + p2 + " smiled back and invited " + p1 +
      " in for a cup of " + drink + ".");

//OR// string literals

console.log(`${p1}, the friendly neighbor, wave at ${p2} as ${p3} walked by ${p2}'s house.
      ${p2} smiled back and invited ${p1} in for a cup of ${drink}.`);

//output : Alenere, the friendly neighbor, waved at David as she walked by David's house.
//David smiled back and invited Alenere in for a cup of coffee.

///////////////////////////////////////////////////////////////////////////////////////////////

// Value    =    // Type
5           =       Number (integer)
3.14        =       Number (float)
"12"        =       String
'3.1234'    =       String
6.43234     =       Number (float)

//// Convert Strings to Numbers ////

// Convert String to Integer
let num = parseInt("5");

//Sample1####
let num1 = "12";
let num2 = 2;
//console.log(num1 + num2)
//wrong output: 122 (because it just add the string plus number, need to conver into parseInt or parseFloat or both number not string)

num1 = parseInt(num1);
console.log(num1 + num2)

//or//

console.log(parseInt(num1) + num2);
// output : 14

//extrasample####
let num1 = "15.54"
num1 = parseInt(num1);
console.log(num1)
//output is 15 (without Decimal. if you convert string into Number always rounddown not roundoff)
 

//Convert String to Decimal
let pi = parseFloat(3.14);

//Sample1####
let num3 = "15.99"; //string
num3 = parseFloat(num3);
console.log(num3);
//output is 15.99

//or//

let num3 = "15.99";
let num4 = 0.01;
num3 = parseFloat(num3);
console.log(num3 + num4);
//output is 16

////////Arithmetic Precedence///////////
// 1. Parenthesis
// 2. Exponent
// 3. Multiplication
// 4. Division
// 5. Addition
// 6. Subtraction

//Sample1####
let x = 5;
let y = 10;
console.log((x+y)/x);
//((5+10)/5) = ((15)/5)
// answer is 3

//Sample2####
let x = 12;
let y = 3;
console.log(x/y+x);
//(12/3+12) = (4+12)
// answer is 16

//INSERT IMAGE FROM YT2***********

// Modulus
let num1 = 5;
let num2 = 2;
console.log(num1 % num2); // 5 divided by 2 = 4 reminder 1
//Output : 1

// Exponent
console.log(num1 ** num2) // 5 raise to 2
//Output : 25
onsole.log(num2 ** num1) // 2 raise to 5
//Output : 32

//Sample3####
let num1 = 5;
let num2 = 2;
let num3 = 7;
console.log((num1 - num3) + num2 ** num2);
// ((5-7) + 2 ** 2) = ((-2) + 4)
//Output : 2

///SHORTHAND OPERATORS INSERT IMAGE FROM YT3***********

//Sample1####
let num = 5;

num += 6; // <-- shortcut (num = num + 6)
console.log(num)
//Output : 11 

//Sample2####
let num = 5;
num += 3; // <-- shortcut (num = num * 3)
console.log(num)
//Output : 15

//Sample3####
let num = 5;
num **= 2;
console.log(num)
//Output : 25

//Sample4####
num += x;
//Output : 7
num += (x ** 4); // 5 += 16 = 21
//Output : 21

//Sample5####
let x = 5;
let y = 3;
let sum = x += y;
console.log(sum)
//Output : 8


////////////////////////////////////////////////////////////////////////////////////////

////////////// Increment / Decrement //////////////////
// ---> Adds / Substracts 1 to a variable

// Operator             Usage                   Description
//    ++             ++x or x++                 Adds 1
//    --             --x or x--                 Substracts 1

//Prefix (--> is the plusplus++ is at the first of the variable thats why ++ first then variable)
let x = 0;
console.log(++x); // add the ++ first then console.log = 1 + 0 = 1 then print.
//Output : 1
console.log(x);
//Output : 1

//Postfix (--> variable first then plusplus++ thats why variable firtst the add)
let x = 0;
console.log(x++); // console.log the x first then add plusplus. thats why the ++ is at the right side
//Output : 0
console.log(x); // Value first then plusplus++ ( 0 + 1 )
//Output : 1

//Sample1#####
let num = 0;
console.log(--num);
//Output : -1

//Sample2#####
let num = 0;
console.log(num--);
//Output : 0 (console.log the zero first then -1; firstprint is zero, you need another console.log(num) again to output is -1)

//EXERCISE#
//Crete a program that uses variables for 5 subject grades. Get the average of all the grades and display it.

//Solution@
let Math = 90;
let Science = 92;
let English = 95;
let Filipino = 97;
let Computer = 98;

let Average = ((Math+Science+English+Filipino+Computer)/5);

console.log("Average: " + Average)


//////////////////////////////////////////////////////////////////////////////////////////////

// String Length
let word1 = "Hello World"
let len1 = word1.length;
console.log(len1);
//Output : 11

let word2 = "HelloWorld"
let len2 = word1.length;
console.log(len2);
//Output : 10

//or//

let word = "JCDV";
console.log(word.length);

// String Indices 
let initial = "JCDV"

//*****How the proper count of elements and index******//
// Elements : J C D V 
              1 2 3 4
// Index    : 0 1 2 3

let initial = "JCDV"
console.log(initial[0]); //index method
//Output : "J"

let initialName = "JCDV"
console.log(initialName[initialName.length-1]); //<-- elements metohd counting then -1 alternative of Index
//Output : "V" (last letter)

///STRING METHOD INSERT FROM YT4.13:04 *****************

let word = "Hello"
console.log(word.toUpperCase());
// Output : HELLO

let word = "Hello"
console.log(word.toLowerCase());
// Output : hello

//or//
let word = "Hello"
word = word.toLowerCase();
console.log(word);
// Output : hello

// trim (); // remove the space at first and last
let name = " JCDV "

name = name.trim();
console.log(name.length);
//Output : 4 (if without trim(); it will become 6 including spaces)

// trimEnd();
name = name.trimEnd();
console.log(name)
//Output : " JCDV" ( remove the space at the End)

// trimStart();
name = name.trimStart();
console.log(name)
//Output : "JCDV " ( remove the space at the Start)

///STRING METHOD replace() INSERT FROM YT4.20:04 *****************

// Method               Usage                          Description
// replace()            word.replace(from,to)          Replaces first matching word on a string
// replaceAll()         word.replaceAll(from,to)       Replaces all matching words on a string

// replace() 
let s = "I have a dog, my dog is cute."
s = s.replace("dog","cat")
console.log(s);
//Output : "I have a cat, my dog is cute."

// replaceAll() 
s = s.replaceAll("dog","cat")
console.log(s);
//Output : "I have a cat, my cat is cute."

///STRING METHOD replace() INSERT FROM YT4.23:38 *****************

// Method               Usage                          Description
// slice()            word.slice(start,end)            Gets a part of a string by specifying the START and END index

//Sample1##
// slice()
let s = "I have a dog, my dog is cute."
//       0123456   (6 is the end of counting, not included)
s = s.slice(2,6)
console.log(s);
//Output : "have"

//Sample2##
let s = "I have a d o g , my dog is cute." // dont mind the spacing just for label of the numbers
//       0123456789101112   (start at 9, end at 12)
s = s.slice(9,12)
console.log(s);
//Output : "dog"

//Sample3##
let name = "Angela";
letter = name.slice(0,3);
console.log(letter);
// Output : Ang

let tweet = "A full-stack developer can communicate with both frontend and backend web development teams to organize and manage client software development.";
tweetCount = tweet.length;
console.log(tweetCount);

// Output : 181

let tweetUnder140 = tweet.slice(0,140);
console.log(tweetUnder140);

//or //

console.log(tweet.slice(0,140));

// Output: A full-stack developer can communicate with both frontend and backend web development teams to organize and manage client software developme
//  total of 140 letters& spaces 

// EXERCISE @@
// Make the first letter of the name capitalized from lower to Upper cases

//// EXPLANATION STEP BY STEP FOR SLICE AND DICE AND lowercase & uppercases

let name = "angela";
// a isolate the first char
let firstChar = name.slice(0,1);
// b Turn the first Char to Upper case
let upperCaseFirstChar = firstChar.toUpperCase();
//c Isolate the rest of the name
let restOfName = name.slice(1,name.length);
//d Change the rest of the name to lower case
restOfName = restOfName.toLowerCase();
//e concatenate the first char with the rest of the char
let capitalisedName = (`${upperCaseFirstChar}${restOfName}`);

console.log(`Hello ${capitalisedName}`);

// Output : Angela


///STRING TEMPLATE LITERALS INSERT FROM YT4.27:22 *****************

let sen = `'String' "Literals"`;
console.log(sen)

let firstName = "Aleberto"  
console.log(`Hi, ${firstName}!`);
//Output : Hi, Alberto!

//Sample1##

let num1 = 5;
let num2 = 3;
let sum = num1 + num2;
console.log (`${num1} + ${num2} = ${sum}`);

//or//

let num1 = 5;
let num2 = 3;
console.log (`${num1} + ${num2} = ${num1 + num2}`);

//////////////////////////////////////////////////////////////////////////

// CREATING ARRAYS

// Array of Strings
let name = ["Alenere", "David", "Jaymar", "May"];

// Array of Numbers
let numbers = [3, 6.5, 9.35, 12.75, 7, 2];

// Array of Mixed Datatypes
let mixed = ["Alener", 99, "David", true, 3.99];

// Empty Array
let dummy = [];

///ARRAY LENGTH INSERT FROM YT5 4:36 ******************************

let names = ["Alenere", "David", "Jaymar", "May"];
console.log(names.length);
//Output : 4

//Syntax
identifier[index];

//Sample1####
let cars = ["Yaris", "Innova"];
console.log(cars[0]);
//Output : Yaris

/////Sample2#####

let names = ["Alenere", "David", "Jaymar", "May", "Edward"];
// Elements      1         2        3        4       5      (use variablename.length-1) to convert to index counting
// Index         0         1        2        3       4
console.log(names[names.length-1]);
//Output : Edward

///UPDATING ARRAYS INSERT FROM YT5 10:42 ******************************

//Syntax
identifier[index]; value;

////Sample1#####
let cars = ["Yaris", "Innova"];
               0        1
cars[1] = "Sentra"
console.log(cars);
//Output : "Yaris", "Sentra"

////Sample2#####

let numbers = [13,24,36,48];
console.log(numbers[1]);
//Output : 24

let numbers = [13,24,36,48];
numbers[1] = 29
console.log(numbers)
//Output :  13, 29, 36, 48 

console.log(numbers[1])
//Output : 29


///UPDATING ARRAYS push/unshift INSERT FROM YT5 14:23 ******************************

//ADD using length
cars[cars.length] = "Sentra";

////Sample#######
let cars = ["Yaris", "Innova"];
cars[cars.length] = "Sentra";
console.log(cars);
//Output : Yaris, Innova, Sentra


//ADD using push (value) // END of the array
cars.push("Juke");


let cars = ["Yaris", "Innova"];
cars.push("Juke");
console.log(cars);
//Output : Yaris, Innova, Juke



//ADD using unshift (value) // START of the array
cars.unshift("Lancer");

////Sample#######
let cars = ["Yaris", "Innova"];
cars.push("Lancer");
console.log(cars);
//Output : Lancer, Yaris, Innova



////// ARRAY ELEMENTS USING PUSH by Base404 //////

let fruits = ["banana", "grapes", "mango"]
console.table(fruits);
fruits.push("apple");
console.table(fruits);
fruits.pop();
console.table(fruits);
fruits.shift();
console.table(fruits);
fruits.unshift("lemon");
console.table(fruits);

// Output :
┌─────────┬──────────┐
│ (index) │  Values  │
├─────────┼──────────┤
│    0    │ 'banana' │
│    1    │ 'grapes' │
│    2    │ 'mango'  │
└─────────┴──────────┘
┌─────────┬──────────┐
│ (index) │  Values  │
├─────────┼──────────┤
│    0    │ 'banana' │
│    1    │ 'grapes' │
│    2    │ 'mango'  │
│    3    │ 'apple'  │
└─────────┴──────────┘
┌─────────┬──────────┐
│ (index) │  Values  │
├─────────┼──────────┤
│    0    │ 'banana' │
│    1    │ 'grapes' │
│    2    │ 'mango'  │
└─────────┴──────────┘
┌─────────┬──────────┐
│ (index) │  Values  │
├─────────┼──────────┤
│    0    │ 'grapes' │
│    1    │ 'mango'  │
└─────────┴──────────┘
┌─────────┬──────────┐
│ (index) │  Values  │
├─────────┼──────────┤
│    0    │ 'lemon'  │
│    1    │ 'grapes' │
│    2    │ 'mango'  │
└─────────┴──────────┘





///DELETING ARRAYS INSERT FROM YT5 21:00 ******************************

//Deleting using lenth
names.length = 4;
////Samples#####
let names = ["Alenere", "David", "Jaymar", "May", "Ace"];
names.length = 2;
console.log(names);
// Output : Alenere, David   /because it is deleting array

names.length = 0;
console.log(names);
// Output : none/empty      / it deleted all cause of 0

//Deleteting using pop()   // delete End
names.pop()
////Sample1#####
let names = ["Alenere", "David", "Jaymar", "May", "Ace"];
names.pop();     // delete last index
console.log(names);
// Output : 'Alenere', 'David', 'Jaymar', 'May' 


//Deleting using shift()     // delete Start/Beginning
names.shift()
////Sample1#####
let names = ["Alenere", "David", "Jaymar", "May", "Ace"];
names.shift();      // delete first index
console.log(names);
// Output : 'David', 'Jaymar', 'May', 'Ace' 

///Sample2#####
let names = ["Alenere", "David", "Jaymar", "May", "Ace"];
names.shift();
names.shift(); // double shift it means 2 delete
console.log(names);
// Output : 'Jaymar', 'May', 'Ace' 

//Deleting using(start_index,end_index)
names.slice(0,2);
///Sample1#########
let names = ["Alenere", "David", "Jaymar", "May", "Ace"];
names = names.slice(0,2);
console.log(names);
// Output : Alenere , David
///Sample2#########
let names = ["Alenere", "David", "Jaymar", "May", "Ace"];
//index          0         1      slice(2) , 3   /  4(dice)
names = names.slice(2,4);
console.log(names);
// Output : Jaymar, May


//////Sample#################
let count = [12,28,45,78,89,99]
count.shift();
count.shift();
count.pop();
console.log(count);
// Output : 45, 78, 89


// Tutorial Challenge INSERT YT5 28:42**************
//EXERCISE@
// Use three arrays and use each index as a data for a person. Access and output of the data by using variable for the index
//Example Output
//Index : 0
//First Name : Juan
//Last Name : Dela Cruz
//Age : 22

//Solution^^^^

let firstName = ["Juan", "Miguel", "Alfonso", "Lite"];
let lastName = ["Dela Cruz", "Reyes", "Sy", "Santos"];
let age = [22,24,27,29];

let index = 0;

console.log(`Index : ${index}`);
console.log(`First Name : ${firstName[index]}`);
console.log(`Last Name : ${lastName[index]}`);
console.log(`Age : ${age[index]}`);
// Output :
//Index : 0
//First Name : Juan
//Last Name : Dela Cruz
//Age : 22


/////////////////////////////////////////////////////////////////////////////////////////

/// INSER YT6 1:23

///// COMPARISON OPERATORS //////

//    OPERATOR                      DESCRIPTIO
//      ==                          Equal
//     ===                          Equal VALUE and TYPE ( strict )
//      !=                          Not Equal
//     !==                          Not Equal VALUE and TYPE ( strict )

// always output TRUE  or  FALSE !!!!!!!!

/// INSERT YT6 1:43
                                                                  let x = 5;

console.log (5 == "5");                                           console.log (x == "5");  
// Output : true                                                  // Output : true      

console.log (5 === "5");                                          console.log (x === "5");
// Output : false  (because 3 equals it means "strict")           // Output : false

console.log (5 != "5");                                           console.log (x != "5");   // they are equal but comparison opators is != notequal
// Output : false                                                 // Output : false   (because 1equal consider as equal even not same data types)  

console.log (5 !== "5");                                          console.log (x !== "5");       
// Output : true  (opposite)                                      // Output : true  (not eqaul because it is strict)      


///////////

console.log (13 > 10);
// Output : true

console.log (5 < 10);
// Output : true

console.log (5 >= 5);   // greater than or EQUAL
// Output : true (equal)

console.log (5 <= 7);
// Output : true

console.log(10 <= 10);
// Output : true (equal)

/////Sample####

let x = 12;
let y = "15";

console.log(x > y);
// Output : false


/////////// IF STATEMENT ////////

/// INSERT YT6 13:33

let age = 18;

if (age >= 18){
      console.log("Legal Age");
}

console.log("Thank You!");
// Output : Legal Age
// Output : Thank You!

//////////// 

let age = 13;

if (age >= 18){
      console.log("Legal Age");
}else{ 
      console.log("Minor Age");
}

console.log("Thank You!");
// Output : Minor Age
// Output : Thank You!
//recommended use }else{}

//or//

if (age >= 18){
      console.log("Legal Age");
}
if (age < 18){
      console.log("Minor Age");
}

console.log("Thank You!");
// Output : Minor Age
// Output : Thank You!


// BASE-404 SAMPLE

let x = 10
let y = 5;

if(y > 4 && x < 100) {
      console.log("It works!");

      if(y != x){
            console.log("They are not the same")
      }
}

// BASE-404 EXERCISE @@

/* If a user is under 18, they're only eligible for a 'Junior Membership'.
If a user is 18 and above and currently not a member, they can apply for a 'Regular Membership'.
If a user is 18 and above and currently a 'Junior Member', they should be upgraded to a 'Regular Membership'.
If a user is 18 and above and already a 'Regular Member', they get a 'Loyalty Discount'. */

let age = 18;
let membershipStatus = "Not a member";

if (age < 18){
      membershipStatus = "Junior Membership";                               // skip because 18 < 18 is false. Should be equal so next condition...
}
/*or }else if*/if (age >= 18 && membershipStatus == "Not a member"){       // true ; so the answer is Regular Membership..
      membershipStatus = "Regular Membership";
}
if (age >= 18 && membershipStatus == "Junior Membership"){                 // false because the answer above is currently Regular membership
      membershipStatus = "Regular Membership"                              // Regular membership == Junior Membership is false so next condition..
}
if (age >= 18 && membershipStatus == "Regular Membership"){                // true both regular membership are equal!
      membershipStatus = "Loyalty Discount"
}
console.log(age);
console.log(membershipStatus);
console.log(`The age of the user is: ${age} and his/her membership status is: ${membershipStatus}`);

// Output : 18
// Output : Loyalty Discount
// Output : The age of the user is: 18 and his/her membership status is: Loyalty Discount


// UDEMY EXERCISE @@
prompt ("What is your name?");
prompt ("What is their name?");

let loveScore = Math.random() * 100;
loveScore = Math.floor (loveScore) + 1;
alert (`Your love score is ${loveScore} %`);

// Output : What is your name?
// Output : What is their name?
// Output : Your love score is 91 %

let loveScore = Math.random() * 100;
loveScore = Math.floor (loveScore) + 1;

if (loveScore > 70) {
      console.log(`Your love score is ${loveScore}% "You love each other like Kanye loves Kanye"`);
}

if (loveScore > 30 && loveScore <= 70) {
      console.log(`Your love score is ${loveScore}%`);
}

if (loveScore <=30) {
      console.log(`Your love score is ${loveScore}% "You go together like oil and"`);
}

// Output : Your love score is 73% "You love each other like Kanye loves Kanye"


//////////// ELSE IS STATEMENT ///////

/// INSERT YT6 22:25

let age = 18;

if (age >= 18){
      console.log("Legal Age");
}else if(age <= 0){                      // (age <= 0) <= mean "until 0 age"
      console.log("Invalid Age");
}else if(age > 0){                       // (age > 0) > no equal it means "until 1 age, not include zero"
      console.log("Minor Age");
}

console.log("Thank You!");
// Output : Minor Age
// Output : Thank You!

// UDEMY SAMPLE#####
if ( track === "clear"){
      goStraight();
}else {
      turnRight();
}


// EXERCISE@

//Create a program that outputs the standing of a student based on their general average.
// Given the following conditions
// 101 above = Invalid Grade
// 98 -100   = With Highest Hinor
// 95 - 97   = With High Honor
// 90 - 94   = With Honor
// 75 - 89   = Passed
// 74 below  = Failed

// My Solution@

let grade = 105;

if (grade >= 101){                              // or     if(grade > 100){
       console.log("Invalid Grade");            //         console.log("Invalid Grade");
}else if(grade >= 98){
       console.log("With Highest Honor");
}else if(grade >= 95){
       console.log("With High Honor");
}else if(grade >= 90){
       console.log("With Honor");
}else if(grade >= 75){
       console.log("Passed");
}if(grade <= 74){                              // or      }else{
       console.log("Failed");                    //          console.log("Failed")
}

//or//

let grade = 76;

if (grade < 75){
      console.log("Failed");
}else if(grade <= 89){
      console.log("Passed");
}else if(grade <= 94){
      console.log("With Honor");
}else if(grade <= 97){
      console.log("With High Honor");
}else if(grade <= 100){
      console.log("With Highest Honor");
}else{
      console.log("Invalid Grade");
}

////////////////////////////////////////////////

//////// LOGICAL OPERATORS /////////

//// INSERT YT7 1:48

// Method                     Description
//   &&                       AND      ( TRUE && TRUE = TRUE) / ( TRUE && FALSE = FALSE) must 2 true!!!
//   ||                       OR       ( TRUE && TRUE = TRUE) / ( TRUE && FALSE = TRUE)  atleast 1 true!!!
//   !                        NOT

// AND OPERATOR

let age = 18;
let experience = 3;

console.log(age >= 18 && experience > 1);
// Output : true

console.log(age >= 18 && experience > 3);
// Output : false

///Sample#####

let age = 19;
let experience = 0;
let language = "C++";

if(age >= 18 && experience > 1 && language === "C++"){
//    true            false               true    ( even 1 false in AND, it means false)
      console.log("You are Qualified for the Job");
}else{
      console.log("You are NOT Qualified for the Job");
}

// Output : "You are NOT Qualified for the Job"

// OR OPERATOR

let hasDegree = true;
let experience = 3;

console.log(hasDegree || experience > 2);
// Output : true

console.log(hasDegree || experience > 4);
//             true           false
// Output : true

///Sample1#####

let experience = 0;
let language = "C++";

console.log(experience > 1 || language === "C#");
//Output : false

///Sample2#####

let experience = 5;
let language = "C++";

if (experience > 1 || language === "C#"){
      console.log("You are qualified.")
}else{
      console.log("You are not qualified")
}

//Output : You are qualified.

// NOT OPERATOR

let hasDegree = true;
let experience = 3;

console.log(!hasDegree);
// Output : false

console.log(!(experience > 1));
//          ! ( true )
// Output : false

///Sample#####

let isTall = true;

if(!isTall){
      console.log("Wow Toll");
}else{
      console.log("Shmol");
}

/// NESTED CONDITIONAL STATEMENTS 

let age = 18;
let experience = 3;


if(age >= 18){

      if(experience > 1){
            console.log("You're Hired!");
      }else{
      console.log("You don't have experience.");
      }

}else{
      console.log("You are a Minor");
}

// Output : "You're Hired!"

///Sample1#####

let age = 18;
let experience = 0;


if(age >= 18){

      if(experience > 1) console.log("You're Hired!");
      else console.log("You don't have experience.");
      //other formula for 1 line

}else
      console.log("You are a Minor");

// Output : "You don't have experience."

///Sample2#####

let age = 20;
let experience = 5;


if(age >= 18){

   if(experience > 6){
      if(experience >= 5) console.log("You are OVER Qualified");
      else console.log("You are Qualified");
}
      else console.log("You don't have experience.");

}else
      console.log("You are a Minor");

// Output : "You don't have experience."

// EXECERCISE @@

/*Registered and 18 above - Valid Voter
Not Registered and 18 above - Register First
Registered and below 18  - Invalid Voter
Not Registered and below 18 - Non Voter */

let age = 16;
let isRegistered = false;

if(isRegistered && age >=18){
    console.log("Valid Voter");
}else if(!isRegistered && age >= 18){
    console.log("Register First");
}else if(isRegistered && age < 18){
    console.log("Invalid Voter");
}else if(!isRegistered && age < 18){
    console.log("Non Voter");
}
//Output : Non Voter

// EXERCISE SAMPLE2 @@

let age = 20;
let isRegistered = true;

if(isRegistered && age >=18)        console.log("Valid Voter");
else if(!isRegistered && age >= 18) console.log("Register First");
else if(isRegistered && age < 18)   console.log("Invalid Voter");
else if(!isRegistered && age < 18)  console.log("Non Voter");
// shortcut formula

// or //

let age = 18;
let isRegistered = true;

if (isRegistered){

      if(age >= 18) console.log("Valid Voter");
      else console.log("Invalid Voter");

}else{
      if(age >= 18) console.log ("Register First")
      else console.log("Non Voter");
}

///////////////////////////////////////////////////////

///////// SWITCH STATEMENT ///////////////

// INSERT SWITCH STATEMENT 0:44 YT8 

let difficulty = 1;

switch(difficulty){
      case 1:
            console.log("Easy");
            break;
      case 2:
            console.log("Normal");
            break;
      case 3:
            console.log("Hard");
            break;  
      default:
            console.log("Invalid Difficulty");
            break;        
}
// Output : Easy

///Sample1#####

let difficulty = 4;
// Output : Invalid Difficulty


///////// COMMON CASE ///////////////
// -->      You can specify TWO or MORE cases in a block

 
let num = 2;

switch(num){
      case 2:
      case 4:
            console.log("Even");
            break;
      case 3:
      case 5:
            console.log("Odd");
            break; 
      default:
            console.log("Unknown");
            break;        
}
// Output : Even

///Sample1####

let letter = "A";

switch(letter){
      case "a":
      case "A":
            console.log("Apple");
            break;
      case "b":
      case "B":
            console.log("Ball");
            break; 
      default:
            console.log("Unknown letter");
            break;        
}
// Output : Apple

//// EXERCISE @@

// Create a program that outputs the equivalent day of a number variable.

let day = 7;

switch(day){
      case 1:
            console.log("Monday");
            break;
      case 2:
            console.log("Tuesday");
            break;  
      case 3:
            console.log("Wednesday");
            break;    
      case 4:
            console.log("Thursday");
            break;  
      case 5:
            console.log("Friday");
            break;    
      case 6:
            console.log("Saturday");
            break;
      case 7:
            console.log("Sunday");
            break;
      default:
            console.log("Invalid Day");
            break;
}
// Output : Sunday


///////////////////////////////////////////////////////

///////// WHILE LOOP ///////////////
// -->      Is used to execute a block of code, while the condition is MET/TRUE.

// INSERT while loop 0:52 YT9 

let i = 0;

while(i < 5){
      console.log("Hello");
      i++;
}
// 0 is less than 5 the answer is Yes/TRUE then print "Hello" then i++ (plus 1). Then 1 < 5 = true...(vise versa until false) 5 < 5 = false.
// Output : Hello
// Output : Hello
// Output : Hello
// Output : Hello
// Output : Hello

let i = 0;

while(i < 5){
      console.log(i);
      i++;
}
// 0 < 5 = true print 0 then plus 1, 1<5=true print 1 i++, 2<5....
// Output : 0
// Output : 1
// Output : 2
// Output : 3
// Output : 4

///////// ITERATE ARRAY ///////////////
// -->      You can use while loop to read through all array elements.

// INSERT while loop 6:37 YT9 

let people = ["David", "Alenere", "Gilbert", "James"];
let i = 0;

while(people[i]){
      console.log(people[i]);
      i++;
}

//or

let names = ["David", "Alenere", "Gilbert", "James"];
let i = 0;

while(names[i] !== undefined){         // !== undefined is OPTINAL its okay to remove that its just the same to this (name[i]){}
      console.log(names[i]);
      i++;
}

// Output : David
// Output : Alenere
// Output : Gilbert
// Output : James


// reverse!!!
let names = ["David", "Alenere", "Gilbert", "James"];
let i = names.length-1;

while(names[i]){
      console.log(names[i]);
      i--;
}
// Output : James
// Output : Gilbert
// Output : Alenere
// Output : David


///////// BREAK KEYWORD///////////////
// -->      You can use break keyword to break out of a loop earlier than expected.

// INSERT while loop 10:50 YT9 

let people = ["David", "Alenere", "Gilbert", "James"];
let i = 0;

while(people[i]){
      console.log(people[i]);
      i++;
//or break;
//   0(David) then print David then i++ (even they have plus1(Alenere) it will STOP/break because of BREAK KEYWORD)

      if(i === 1){            // if 1 === 1 is MET/TRUE
            break;            // then it will BREAK and not continue 
      }
}
// Output : David

///Sample1####
if(i === 2){            
      break;           
}
// 0 print David then i++ equals to 1 if(1 === 2) equals to false/not yet, 1 console.log Alenere then i++ = 2, if(2 === 2){break}; then STOP/BREAK
// Output : Alenere

///Sample2####
let names = ["David", "Alenere", "Gilbert", "James"];
let i = 0;
let search = "Gilbert";

while(names[i]){
   if(names[i] === search){
      console.log(names[i]);
      break;
   }
   i++;
}
// Output : Gilbert

/////// DO-WHILE LOOP /////////
// -->           Always RUN the CODE ONCE before checking the condition.
// -->           Excute the console.log first before checking the condition

let i = 0;

do{
      console.log("Hello");
}while(i > 5);   //false

// Output : Hello
// DO LOOP is print first atleast ONCE even the while is FALSE

let i = 0;

do{
      console.log("Hello");
      i++;
}while(i < 5);   
// print Hello first then i++ then eqauls to 1, then (1 < 5) = TRUE

// Output : Hello
// Output : Hello
// Output : Hello
// Output : Hello
// Output : Hello

// BASE-404 SAMPLE ITRATIONS WHILE LOOP

let age = 12;
let membershipStatus = "Not a member";

while(age < 18){
      age++;
      console.log(`The current age of the user is: ${age}`);
}
// Output : The current age of the user is: 13
// Output : The current age of the user is: 14
// Output : The current age of the user is: 15
// Output : The current age of the user is: 16
// Output : The current age of the user is: 17
// Output : The current age of the user is: 18
/*After reaching the 18, the while condition turn to while(false){} then it will stop printing*/

/// EXERCISE BASE-404 @@
// Count every ODD NUMBER from 1 to 100.

let x = 1;                          // initialization

while(x <= 100){                    // condition
      console.log(x);
      x++;                          // increment
}
// Output : 1....100

let x = 1;

while(x <= 100){
//     if(x % 2 == 0){}        // EVEN NUMBER because (1 divided by 2 is equals to Zero) thats why the result will be EVEN number
      if(x % 2 != 0){         // ODD NUMBER becaue != not equal to zero, it would be Zero but the OPERATOR is !not equal to(!=) thats why the answer is FALSE
      console.log(x);
      }
      x++;                    // Outside the condition{}, for continous adding(printing) the ODD NUMBER....
}
//Output : 1..3..5..77..99.......
//EVEN Number Sample: while(2 % 2){}  the answer is 0; 2 divided by 2 is equal to 0, Zero is EVEN NUMBER so FALSE.

// Count 100 to 1 EVEN NUMBERS....
let x = 100;

while(x >= 1){       
      if(x % 2 == 0){         
      console.log(x);
      }
      x--;                   
}
// Output : 100..98..50..12...10...8..6..4..2.








/// EXERCISE SDPT @@
//    Create a program that uses while loop to get the summation ( sum of all numbers) of an array of numbers.

let numbers = [20, 50, 80, 150, 200];
// index       0   1   2    3    4
let sum = 0;
let i = 0;

while(numbers[i]){
//        20
      sum += numbers[i];
//     0  +     20
      i++;
//then plus the index 1(50) = 20 + 50.....vise versa
}
///Solution: start at variable of sum and the value of 0 (sum=0) for starting the formula for computation
console.log(sum);
// Output : 500



////////////////////////////////////////////////////////


/////////////// FOR LOOP ///////////////
// -->        Is used to execute a block of code, while the conidition is MET/TRUE.

// for(variable;condition;operation){}
// Initiation first(let i=0), then check the condition(0<5),then RUB console.log(i)or("Hello"),then operation(i++)

for(let i = 0; i < 5; i++){
      console.log(i);
}
// Output : 0
// Output : 1
// Output : 2
// Output : 3
// Output : 4
// Start with the variable of 0 then, 0 < 5 is equals to TRUE then console.log (i) which is 0, then i++ (plus 1) = 1 // i=1,1<5,print i,1 +1..vise versa

for(let i = 0; i < 5; i++){
      console.log("Hello");
}
// Output : Hello
// Output : Hello
// Output : Hello
// Output : Hello
// Output : Hello

for(x = 2; x < 5; x++){
      console.log("Meow!");
}
// Output : Meow!
// Output : Meow!
// Output : Meow!
// starts with number 2 to 5 thats why its just console only 3.


/////////////// ITERATE ARRAY ///////////////
// -->        You can use for loop to read through all the array elements.

let people = ["David", "Alenere", "Gibert", "James"];
//index         0          1         2         3
//length count  1          2         3         4
//Begin at 0 index for starting.
for(let i = 0; i < people.length;i++){
//        0  ; 0 <       4 ;then print David ; then i++
//        1  ; 1 <       4 ; then print Alenere ; then i++
//        2  ; 2 <       4 ; then print Gibert ; then i++
//        3  ; 3 <       4 ; then print James ; then i++
//        4  ; 4 <       4  is equals to FALSE, then STOP loop
      console.log(people[i]);
}
// Output : David
// Output : Alenere
// Output : Gibert
// Output : James


//reverse 
let people =                  ["David", "Alenere", "Gibert", "James"];
//index i=people.length-1        0          1         2        3
for(let i = people.length-1; i >= 0;i--){
//      i =      3         ; 3 >= 0 is equals to TRUE then print James, then i--
//      i =      2         ; 2 >= 0 is equals to TRUE then print Gibert, then i--
//      i =      1         ; 1 >= 0 is equals to TRUE then print Alenere, then i--
//      i =      0         ; 0 >= 0 is equals to TRUE then print David, then STOP.
      console.log(people[i]);
}
// Output : James
// Output : Gibert
// Output : Alenere
// Output : David



/////////////// FOR LOOP VS. WHILE LOOP ///////////////

// FOR LOOP VS. WHILE LOOP INSERT YT10 14:28

// FOR LOOPS are used when the NUMBER of INTERATIONS are KNOWN.
// -->      We know how many times did the code gonna run the FOR LOOP. Because of the index(i<people.length) // FOR LOOP COULD COUNT how many array are inside.
//Sample: let people = ["David", "Alenere", "Gibert", "James"]; // for(let i = 0; i < 5; i++){console.log(i);}

// WHILE LOOPS are used when the NUMBER of INTERATIONS are UNKNOWN.
// -->      We DON'T know how many people are INSIDE of the ARRAY. It is just checking if the loop are still NOT NULL.
// It will continous console.log the people[i] and adding i++ until NULL.

let people = ["David", "Alenere", "Gibert", "James"];
let i = 0;

while(people[i]){
      console.log(people[i]);
      i++;
}
// Output : David
// Output : Alenere
// Output : Gibert
// Output : James

// You can just choose one of this loop if you want either for loop or while loop


/////////////// BREAK KEYWORD ///////////////
// -->        You can use the break keyword to break out of a loop earlier than expected.

let people = ["David", "Alenere", "Gibert", "James"];

for(let i = 0; i < people.length;i++){
      console.log(people[i]);
      break;
}
// Output : David

let people = ["David", "Alenere", "Gibert", "James"];

for(let i = 0; i < people.length;i++){
      console.log(people[i]);

      if(i === 1){
            break;
      }
}
// Output : David
// Output : Alenere


/////////////// FOR/IN LOOP ///////////////
// -->        Are used for iterating over JSONs or ARRAYS. It returns the KEY or INDEX of each item.

let people = ["David", "Alenere", "Gibert", "James"];
// i is an index always begin with 0 index which is David
for(let i in people){
      console.log(people[i]);
}
// Output : David
// Output : Alenere
// Output : Gibert
// Output : James

///Sample1######

for(let x = 0; x < people.length;x++){          // you can still use this method if you want to SKIP some ARRAYS by using x+=2
      console.log(people[x]);                   // for example: let people = ["David", "Alenere", "Gibert", "James"]; for(let x = 0; x < people.length;x+=2){
}                                               // console.log(people[x]);} // Output : David // Output : Gibert // the counting is people/length(elements(1,2,3,4))

//or

for(let x in people){         //shortcut
      console.log(people[x]);
}
// Output : David
// Output : Alenere
// Output : Gibert
// Output : James

///Sample2#####

for(let x = 0; x < people.length;x++){          
      console.log(people[x]);   
      break;                
}                                              
// Output : David

//Sample3#####

for(let x = 0; x < people.length;x++){          
      console.log(x);                 
}                                              
// Output : 0
// Output : 1
// Output : 2
// Output : 3


/////////////// FOR/OF LOOP /////////////// (recommended, more easy)
// -->        Are used for iterating over ARRAYS. It returns the VALUE of each element.
// -->        It directs to VALUE immidiately, NO need for index(0,1,2,3).
// ONLY for ARRAY , NOT JSON. It is EASY for reading the ARRAYS because of direct CONSOLE.LOG the value/variable.

let people = ["David", "Alenere", "Gibert", "James"];

for(let person of people){
//     "David"
//     "Alenere"
//     "Gibert"
//     "James"
// then console.log direct to PERSON, no need for index!!!!
      console.log(person);
}
// Output : David
// Output : Alenere
// Output : Gibert
// Output : James

//// COMPARISON OF FOR/IN LOOP vs. FOR/OF LOOP

///Sample1####
for(let x in people){        
      console.log(x);
}   
// Output is all INDEX                                        
// Output : 0
// Output : 1
// Output : 2
// Output : 3

///Sample2####        //easy

let numbering = 1;
for(let person of people){
      console.log(`${numbering}. ${person}`);
      numbering++;
}
// Output : 1. David
// Output : 2. Alenere
// Output : 3. Gibert
// Output : 4. James

// vs.

///Sample1####
for(let person of people){
            console.log(person);
      }
// Output is direct to VALUE
// Output : David
// Output : Alenere
// Output : Gibert
// Output : James

///Sample2####          //hard

for(let i in people){
      console.log(`${parseInt(i)+1}. ${people[i]}`);
}
// Output : 1. David
// Output : 2. Alenere
// Output : 3. Gibert
// Output : 4. James


// EXERCISE @@

// Create an array of names then search a name using any for loop on the array.
// Output "Found{name}" if the name exists in the array, otherwise output "Not Found" if the name does not exists in the array.

let people = ["David", "Alenere", "Gibert", "James"];
let search = "giBert";
let isFound = false;    // false turns to TRUE because FOUND gibert

for(let i = 0; i < people.length;i++){
      if(people[i].toLowerCase() === search.toLowerCase()){
      isFound = true;
      console.log(`Found ${people[i]}`);
      break;
      }
}

if(!isFound) console.log("Not Found");
// Output : Found Gibert


///////////////////////////////////////////////////////////////////////////////////////

//////////////////// JSON ( Javascript Object Notation) ////////////////////////
//                    --> Is a FILE FORMAT that is commonly used in trasporting data, via API or other means.

////// JSON Example
let person ={
      firstName:"David",
      lastName:"SDPT",
      age:22,
      bloodType: "O",
      sex: "M",
};

//or

let person ={firstName:"David",lastName:"SDPT",age:22,loodType: "O",sex: "M",};

console.log(person);
///////// ALPHABETICALLY ORDER FOR OUTPUT
// Output : age: 22,
// Output : bloodType: 'O',
// Output : firstName: 'David',
// Output : lastName: 'SDPT',
// Output : sex: 'M',



////// JSON Structure
//    --> A JSON Data should have a KEY | VALUE pair and a colon ':' in the middle. JSONs should be surrounded by {}.

let      person   =     {firstName:"David"};
//      variable            KEY   : VALUE

// JSON structure YT11 2:11 !!!!!!!!!!!!!!!!!!!!!


////// JSON Structure
// --> can also have ARRAYS as its value.

let person ={
      firstName:"David",
      lastName:"SDPT",
      age:22,
      hobbies : ["coding","eating","sleeping"]
};

console.log(person);
// Output : age: 22,
// Output : firstName: 'David',
// Output : hobbies : ["coding","eating","sleeping"]
// Output : lastName: 'SDPT',

//// JSON Read insert YT11 21:06

console.log(person["hobbies"][0]);
console.log(person["hobbies"][1]);

// Output : coding
// Output : eating

////// JSON Structure
// --> can also have JSONs as its VALUE.

let person ={
      firstName:"David",
      lastName:"SDPT",
      age:22,
      hobbies : ["coding","eating","sleeping"],
      pets : {
      0:{
            name:"Shadow",
            type:"Dog",
        },
      1:{
            name:"Mocha",
            type:"Cat"
        }
      }
};

console.log(person);

// Output :  firstName: 'David',
// Output :  lastName: 'SDPT',
// Output :  age: 22,
// Output :  hobbies: [ 'coding', 'eating', 'sleeping' ],
// Output :  pets: {
// Output :    '0': { name: 'Shadow', type: 'Dog' },
// Output :    '1': { name: 'Mocha', type: 'Cat' }

// Stringify Output : {"firstName":"David","lastName":"SDPT","age":22,"hobbies":["coding","eating","sleeping"],"pets":{"0":{"name":"Shadow","type":"Dog"},"1":{"name":"Mocha","type":"Cat"}}}


//// JSON Read insert YT11 23:50

console.log(person["pets"][0]["name"]);
console.log(person["pets"][0]["type"]);

// or

console.log(person.pets[0].name);
console.log(person.pets[0].type);

// Output : Shadow
// Output : Dog


///// JSON Read
// --> You can READ SPECIFIC VALUES of a JSON by using its KEY surrounded by []

let person ={
      firstName:"David",
      lastName:"SDPT",
      age:22
};

console.log(person["firstName"]);
console.log(person["lastName"]);

// or (only works on a "String" key)
console.log(person.firstName);
console.log(person.lastName);

// Output : David
// Output : SDPT

/// Sample1#######

console.log (`${person.firstName} ${person.lastName}`); 

// Output : David SDPT


/// JSON WRITE
// ASSIGNING a VALUE to a NON-EXISTENT KEY will RESULT into ADDING it.
/// JSON Write INSERT YT11 27:37

let person ={
      firstName:"David",
      lastName:"SDPT",
      age:22
};

// Updating Existing "key|value"
person["firstName"] = "Alenere";
//person.firstName = "Alenere";
console.log(person)

// Create new "key|value"
person["middleInitial"] = "F";
// person.middleInitial = "F";
console.log(person);

///Sample1##########

console.log(person);
person["firstName"] = "Alenere";
console.log(person);
person["middleInitial"] = "F";
console.log(person);

//Output: { firstName: 'David', lastName: 'SDPT', age: 22 }
//Output: { firstName: 'Alenere', lastName: 'SDPT', age: 22 }
//Output: { firstName: 'Alenere', lastName: 'SDPT', age: 22, middleInitial: 'F' }

////Sample2######
hobbies : ["coding","eating","sleeping"],

console.log(person.hobbies);
person.hobbies[0] = "playing";
console.log(person.hobbies);

// Output : "coding","eating","sleeping"
// Output : "playing","eating","sleeping"


/// JSON STRINGIFY
// --> You can CONVERT JSON into STRING by using the JSON.stringify() method.

let person ={
      firstName:"David",
      lastName:"SDPT",
      age:22
};

let strPerson = JSON.stringify(person);
console.log(strPerson);

// Output : {"firstName":"David","lastName":"SDPT","age":22}
// Stringify - You can manipulate it like a STRING, can ACCESS just like INDEX and TRIM and etc.


/// JSON PARSING
// --> You can CONVERT VALID STRINGS into JSON by using the JSON.parse() method.
// If a STRING is INVALID it would THROW an ERROR at the CONSOLE.

let strPerson = `{"firstName":"David","lastName":"SDPT","age":22}`;

let person = JSON.parse(strPerson);
console.log(person);

// USE DOUBLE QUOTES (""), EVEN IF IT IS A NUMBER IN THE KEY / Sample {0:Dog,1:Shihtzu}

// Output : age: 22
// Output : firstName: "David"
// Output : lastName : "SDPT"

// CONVERT STRING into JSON.


/// JSON ARRAY
// --> You can also create an ARRAY of JSONs. Which can be MANIPULATED the same as any other ARRAYS.

let people = [
// Index 0  
      {
            firstName: "David",
            lastName: "SDPT",
            age: 22
      },
// Index 1
      {
            firstName: "Alenere",
            lastName: "SDPT",
            age: 21
      },
// Index 2
      {
            firstName: "Jaymar",
            lastName: "Catapang",
            age: 24
      },     
];

console.log(people[0].firstName);

// Output : David


/// EXERCISE @@

// Create an array of JSONs with different keys and value. Iterate the array and display all its values in an orderly way.

let people = [
      // Index 0  
            {
                  firstName: "David",
                  lastName: "SDPT",
                  age: 22
            },
      // Index 1
            {
                  firstName: "Alenere",
                  lastName: "SDPT",
                  age: 21
            },
      // Index 2
            {
                  firstName: "Jaymar",
                  lastName: "Catapang",
                  age: 24
            },    
      // Index 3 
            {
                  firstName: "Marielle",
                  lastName: "De Guzman",
                  age: 25
            }
      ];

for (let i = 0; i < people.length; i++){
      console.log(i);
}
// Output : 0 , 1 , 2 , 3

for (let i = 0; i < people.length; i++){
      console.log(`First Name : ${people[i].firstName}`);
      console.log(`Last Name  : ${people[i].lastName}`);
      console.log(`Age        : ${people[i].age}`);
      console.log("")
}

// Output : First Name : David
// Output : Last Name  : SDPT
// Output : Age        : 22

// Output : First Name : Alenere
// Output : Last Name  : SDPT
// Output : Age        : 21

// Output : First Name : Jaymar
// Output : Last Name  : Catapang
// Output : Age        : 24

// Output : First Name : Marielle
// Output : Last Name  : De Guzman
// Output : Age        : 25


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////// JSON & FOR/IN LOOP ////////////////////////
///     --> We can use FOR/IN loop to ITERATE over all the KEYS inside a JSON.

let person = {
      firstName: "David",
      lastName: "SDPT",
      age: 22
}

for (let key in person){
      console.log(key);
}

// Output : firstName
// Output : lastName
// Output : age

// only KEYS print!!!!!!!!!!!!!!!!!!!

for (let key in person){
      console.log(person[key]);
}

// Output : David
// Output : SDPT
// Output : 22

for (let key in person){
console.log(`${key} : ${person[key]}`);
}

// Output : firstName : David
// Output : lastName  : SDPT
// Output : age       : 22


/////// Object.keys() Method ////////////
/// --> Returns the KEYS of a JSON in an ARRAY format.

let person = {
      firstName: "David",
      lastName: "SDPT",
      age: 22
}

let keys = Object.keys(person);
console.log(keys);

// Output : [ 'firstName', 'lastName', 'age' ]
// index          0            1         2
//it converted into ARRAY FORMAT

for (let i = 0; i < keys.length; i++){
      console.log(keys[i]);
}

// Output : firstName
// Output : lastName
// Output : age

for (let i = 0; i < keys.length; i++){
      console.log(person[keys[i]]);
}

// Output : David
// Output : SDPT
// Output : 22

let person = {
      firstName: "David",
      lastName: "SDPT",
      age: 22,
      bloodType : "O",
      sex : "M"
}

let size = Object.keys(person).length;
console.log(size);

// Output : 5


//// EXERCISE @@

// Create a JSON and make the KEYS a subject name and the VALUE a corresponding grade.
// Use FOR/IN loop to iterate through the JSON and display the subjects and their grade,
// make sure to also compute the average of all the grades and display it.

/// SOLUTIONS !!

let grades = {
      Math: 87,
      English: 88,
      Filipino: 91,
      Science: 89,
      Computer: 97
};

let average = 0;              // start computing at 0, 0 + 87 = 87 += grades[subjects]..............

for (let subjects in grades){
      console.log(`${subjects} : ${grades[subjects]}`);
      average += grades[subjects];
}

average /= Object.keys(grades).length;
// Object.keys --> automatically COUNT how many JSON inside of the variable(grade) !!!!!!!!!!!!!!!!!!
console.log(`Average : ${average}`);

// Output : Math : 87
// Output : English : 88
// Output : Filipino : 91
// Output : Science : 89
// Output : Computer : 97
// Output : Average : 90.4

console.log(average);
// Output : 90.4

////////////////////////////////////////

for (let subjects in grades){
      console.log(subjects);
}

// Output : Math
// Output : English
// Output : Filipino
// Output : Science
// Output : Computer

console.log(grades[subjects]);

// Output : 87
// Output : 88
// Output : 91
// Output : 89
// Output : 97




/////////////////////////////////////
///////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////
/////////////////////////////////////


//////////// UDEMY //////////////////

let tweet = "Compose your tweet";
let tweetCount = tweet.length;
console.log(tweetCount);

// Output : 18

console.log(`You have written ${tweetCount} characters, you have ${140 - tweetCount} characters remaining.`)
// Output : You have written 18 characters, you have 122 characters remaining.

//UDEMY SAMPLE//
var tweet = prompt("Compose your tweet");
var tweetCount = tweet.length;
alert(`You have written ${tweetCount} characters, you have ${140 - tweetCount} characters remaining`);


/////////////////////////////////////////////////////

////// FUNCTIONS //////////

/// BASE-404 FUNCTION ////

//// function call** : hello();          // you can place it on above of the function definition**

// FUNCTION DEFINITION **********
function hello(){                                // function hello(function parameter)  <-- function heated
      console.log("Hello world!");              // {console.log("Hello world!");} <--it called function body
}

// FUNCTION CALL ********
hello();
hello();          // you can do repeatedly

// Output : Hello world!
// Output : Hello world!

//Sample1####
function hello(){  
      let x = 10;                              
      console.log(x);             
}

// FUNCTION CALL ********
hello();

// Output : 10

//Sample2####
function hello(){
      for(x = 0; x < 5; x++){
      console.log("Meow!");
      }
}
// FUNCTION CALL ********
hello();

// Output : Meow!
// Output : Meow!
// Output : Meow!
// Output : Meow!
// Output : Meow!


//Sample3####
function cat(){                   
      console.log("Meow!");           
}

function dog(){
      for(x = 0; x < 3; x++){
      console.log("Arf!!");
      }
}
// FUNCTION CALL ********
cat();
dog();

// Output : Meow!
// Output : Arf!!
// Output : Arf!!
// Output : Arf!!

//Sample4####
function hello(){
      for(x = 0; x < 4; x++){
      hi();
      }
}

function hi(){                   
      console.log("Hi!");           
}

// FUNCTION CALL ********
hello();

// Output : Hi!
// Output : Hi!
// Output : Hi!
// Output : Hi!



//// FUNCTION PARAMETER ********

function name(first_name, last_name){
//            (variable)                   //PARAMETER works like a VARIABLE
      console.log(`Hey ${first_name} ${last_name}!`);
}

// FUNCTION CALL(w/ ARGUMENT) ********
name("Juan", "Dela Cruz");                 //name(Function argument);
name("Jose", "Panalo");

// Output : Hey Juan Dela Cruz!
// Output : Hey Jose Panalo!

///////////////////


function getSumThreeNumbers(a,b,c){
      console.log(a + b + c);
}

// function call*****
getSumThreeNumbers(4,9,10);

// Output : 23

//////////////////////

function getSumThreeNumbers(a,b,c){
//                         (4,9,10)           
      let sum = a + b + c;
      return sum;
}
// function call*****
console.log(getSumThreeNumbers(4,9,10));
//                              value of a,b,c
// Output : 23

// or //

function getSumThreeNumbers(a,b,c){
      let sum = a + b + c;
      return sum;
}
// function call*****
let sum = getSumThreeNumbers(4,9,10);
console.log(sum);
// Output : 23

////Sample1####
function addNumbers (a,b,c,d){
      let add = a + b + c + d;
      return true;            // <-- this
  }
  console.log(addNumbers(10,20,30,40));
  //or//
  let add = addNumbers(10,20,30,40);
  console.log(add);

  // Output : true      // i dont know ; cant explain

/////////////////////
/*Write a function isOdd() that will return whether a passed number is odd or even*/

function isOdd(number){
      let result;
      if(number % 2 == 0){
            result = false;
      }else{
            result = true;
      }
      return result;
}

// function call*****
console.log(isOdd(22));

// Output : false 

///Sample1#####

function isItCat (pet){
      let animal;
      if (pet === "Cat"){
          animal = true;
          console.log(`Yes it is a ${pet}`)                   // optional
      }else{
          animal = false;
           console.log(`No! that's not a Cat`)                // optional
      }
      return animal;
  }
  // function call*****
  let animal = isItCat("Cat");
  console.log(animal);

  // Output : Yes it is a Cat                               // optinal answer depends if a print that
  // Output : true


/////////////////// shorter

function isOdd2 (number){
      return !number % 2 == 0
  }
  console.log(isOdd2(11));
  // Output : true

///////////////
/*Write a function that will count 1 to the given number*/

function countNum (x){
      for(let counter = 1; counter <= x; counter++){
            console.log(counter);
      }
}

// function call*****
countNum(10);

// Output : 1..2..3..4..5..6..7..8..9..10


/////////////////// switch / case / break ///////////////

function determineAge(age){
      if (age < 18){
            console.log("You are minor.");
      }
      
      if (age >= 18){
            console.log("You are legal.");
      }
      
      if (age >= 60){
            console.log("You are senior.");
      }
      
      switch (age){
            case 35:
                  console.log("You are in your");
                  break;
            case 50:
                  console.log("You are in your golden age.");
                  break;
            case 1:
            console.log("You are a newborn");
                  break;
            default:
                  console.log("You are unremarkable.")
          }
      }
      
// function call*****
determineAge(1);


////////////// Objects ////////////////

// Object Property

let person = {
      firstName: "Juan",
      lastName: "Dela Cruz",
      age : 18,
      isMarried: false,
      address: {
            street: "Parklane",
            barangay: "Katipunan",
            city: "Manila"
      },
      hello: function(name){
//function name first --> hello:
            console.log(`Hey there! ${name}`);
            // or return "Hey there!"
      },
      introduce: function(){
            console.log(`My firstname is ${this.firstName}.`);           // this method is calling the name inside of the property

      }
}

let company = {
      name: "XYZ Company",
      owner: person
}

console.log(`${person.firstName} ${person.lastName}`);
console.log(`${person.address.street} ${person.address.barangay} ${person.address.city}`);

// Output : Juan Dela Cruz
// Output : Parklane Katipunan Manila

console.log(company.owner.firstName);
console.log(company.owner.address.street.toUpperCase());

// Output : Juan
// Output : PARKLANE

// function call*****
person.hello("John");

// Output : Hey there! John

// function call*****
person.introduce();

// Output : My firstname is John.


//////////////////////////

let dog = {
      name: "Brownie",
      breed: "Shi Tzu",
      happinessLevel: 50,
      hungerLevel: 50,
      bark: function(){
            console.log("Arf!")
      },
      play: function(){
            this.happinessLevel += 20;
//  or console.log(`Happy Dog Level is ${this.happinessLevel += 20}`);  --> Output: Happy Dog Level is 70
      },
      hungry: function(level){
            console.log(`Hungry Level is ${level}%`);
      },
      eat: function(food){
            switch(food){
                  case "dogfood":
                        this.hungerLevel -= 30;
                        break;
                  case "egg":
                        this.hungerLevel -=15;
                        break;
                  case "chicken":
                        this.hungerLevel -=20;
                        break;
                  default:
                        this.hungerLevel -= 5;

            }
      },
      walk: function(distance){
            this.hungerLevel += distance;
      },
      checkHungerLevel: function(){
            console.log(this.hungerLevel);
            if(this.hungerLevel >= 50){
                  console.log("The dog is hungry.");
            }else{
                  console.log("The dog is satisfied.");
            }
      }
      
}

// function call*****
dog.bark();
// Output : Arf!

console.log(dog.happinessLevel);
dog.play();
console.log(dog.happinessLevel);
// Output : 70

// function call*****
dog.hungry(100);
// Output : Hungry Level is 100%
/* explanation: function name is "hungry"  and the method is function; inside of the parameter is the value of "hungry";
 "level" is just a variable name for tagging.*/

 console.log(dog.hungerLevel);
 // function call*****
 dog.eat("chicken");
 console.log(dog.hungerLevel);
 // Output : 30
// function call*****
 dog.walk(30)                  // 30 meters of distance of dog walking
 console.log(dog.hungerLevel);
  // Output : 60

// function call*****
dog.checkHungerLevel();       // Output : 50          Output : The dog is hungry.
dog.eat("chicken");           // Output : 30
dog.checkHungerLevel();       // Output : The dog is satisfied.
dog.walk(30)                  // Output : 60
dog.checkHungerLevel();       // Output : The dog is hungry.












// UDEMY FUNCTION MODULES //

//Sample1#####

// Create the function
function getMilk (money){
//value             4
console.log("moveRight");
console.log("moveUp");
console.log("moveLeft");
console.log("moveDown");
let numOfBottles = Math.floor(money / 1.5);                 // Math.floor --> to get only first digit of the number
console.log(`buy ${numOfBottles} bottles of milk`);
console.log("moveLeft");
console.log("moveUp");
console.log("enterHouse");
return money % 1.5;           // Remainder of this division.
}
// Calling the function
let change = getMilk(4);             // $1.5     4/1.5 = 3 bottles
console.log(change);
// Output of change : 1
// $1.5 is the cost of the bottle of milk

/* Overall Output
moveRight
moveUp
moveLeft
moveDown
buy 2 bottles of milk
moveLeft
moveUp
enterHouse
1
*/

/*
///Sample2#### NOT SURE
function getMilk (money){
//value             5
      console.log("leaveHouse");
      console.log(`buy ${calcBottles(money, 1.5)} bottles of milk`);
//then input value of money here        5                         // to calculate the value of calcBottles
//           calcBottles  (money = startingMoney / 1.5 =  costPerBottle)
      console.log("goBackToHouse");
      return money % 1.5;  
}

function calcBottles (startingMoney, costPerBottle){
      let numberOfBottles = Math.floor (startingMoney / costPerBottle);
      return numberOfBottles;
}
// Calling the function
getMilk(5);    

// Output : leaveHouse
// Output : buy 3 bottles of milk
// Output : goBackToHouse
// Output : 0.5

*///

//Sample1###
function main(){
      moveFourTimes();
      turnLeft();
      moveFourTimes();
      }
      
function moveFourTimes() {
      move();
      move();
      move();
      move();
}

///////////////////////////////////////

      // Create the function
function lifeInWeeks (age){
      let yearsRemaining = 90 - age;       // 78
      let days = yearsRemaining * 365;     
      let weeks = yearsRemaining * 52;
      let months = yearsRemaining * 12;

      console.log(`You have ${days} days ${weeks} weeks, and ${months} months left.`);
}
      // Calling the function
lifeInWeeks(12);

// Output : You have 28470 days 4056 weeks, and 936 months left.

//////////////////

// BMI
      // Create the function
function bmiCalculator(weight, height) {
      let bmi = weight / (height * height);
      return Math.round(bmi);     
// Output : 20.061728395061728
      return Math.round(bmi);                   // Math.round    --> it means ROUND OFF
// Output : 20
}

/* If my weight is 65kg and my height is 1.8m, I should be able to call your function like this:
 bmi should equal arround 20 in this case. */

      // Calling the function
let bmi = bmiCalculator(65, 1.8);
console.log(bmi);


////////////////////////////////////////////////

//////// RANDOM NUMBER GENERATION /////////////

let n = Math.random();              // 0.3647382746318429
console.log(n);
n = n * 6;                          // 2.18842964779
console.log(n);
n = Math.floor(n);                  // 2              // Math.floor --> to get only first digit of the number
console.log(n);




let n = Math.random();
console.log(n);
//Output : 0.6604478987827087
//Output : 0.01832327667527589
//Output : random

let n = Math.random();
Math.floor(n * 6) + 1
console.log(n)
//= 5.99 // (6) is the MAX number you want if you want until 6. Just like slice and dice method.??

/////////////////////////////////////
// Give RANDOM number but it DECIMAL      (formula)
Math.random() * 6;
2.2437203470918288
Math.random() * 6;
2.300755154719716

// A RANDOM number but ROUNDED OFF        (formula)
Math.floor(Math.random() * 6) + 1;
2
Math.floor(Math.random() * 6) + 1;
6
// Add +1 ; because if without +1 and just Math.floor(Math.random() * 6) the numbers count are just until 5; so need to +1 to reach 6.


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///// EXTRA LESSON FOR FUNCTION FROM YOUTUBE ////

// FUNCTIONS

function showMessage(){
      alert("Hello Everyone!");
}
// function call*****
showMessage();
// Output : Hello Everyone!

const userName = "JCDV";
function showMessage(){
      alert("Hello Everyone!" + userName);
}
// function call*****
showMessage();
// Output : Hello Everyone! JCDV

/// CHANGE the variable in function method
let userName = "JCDV";

function showMessage(){
      userName = "JCDV FX"                            // change or add another username
      alert("Hello Everyone!" + userName);
}
// function call*****
showMessage();
// Output : Hello Everyone! JCDV FX

/////

function add (num1, num2){
      console.log(num1 + num2);
}
add(10,20);
// Output : 30

////

function print(str){                      // you can insert any variable name inside the PARAMETER ; VARIABLE INSIDE the PARAMETER is NOT CONNECTED into FUNCTION CALL; variable inside the parameter is
      console.log(str);                   // variable inside the parameter is just variable name of the parameter to console.log 
}
// function call*****                     // only here in FUNCTION CALL to input the VALUE for the PARAMETER
print("Welcome to my channel!");
// Output : Welcome to my channel!

function objFunc(obj2){
      console.log(obj2);
}
let obj2 = {
      name: "JCDV",
      age: 28,
}
console.log(obj2.name);
// Output : JCDV
objFunc(obj2);
// Output :  name: 'JCDV', age: 28 

function mixed (num,str,bool,obj2){
      console.log(num,str,bool,obj2);
}
mixed(24,"RAMBO",true,obj2);
// Output : 24, "RAMBO", true, name: 'JCDV', age: 28 


///// FUNCTION & RETURN

// function that returns a value
function sum(num1, num2){
      let add = num1 + num2;
      return add;
}
console.log(sum(10,20));

// or //
function sum(num1, num2){
      let add = num1 + num2;
      console.log(add);
}
// function call*****   
sum(10,20)

// or //          // explanation step by step of how return procedure 
function sum(num1, num2){
     return num1 + num2;                //step 3 the RETURN (print the result)
//step:      1      2                  add these first or evaluate these first and then GO to RETURN 
}
console.log(sum(10,20));

// Output : 30

//// important!! : another technique of function and return using boolean or comaparison method ************************************************

function isLegalAge(age){
      return age > 17;
}
console.log(isLegalAge(18));

// Output : true

///
function sum(num1, num2){
      return num1 + num2;                            
 }
function isLegalAge(age){
      return age > 17;
}

let result = sum(10,20);
let determineLegalAge = isLegalAge(22);

console.log(result, determineLegalAge);

// Output : 30 true

///////

function isLegalAge(age){
      if(age > 17){
          console.log("Yes legal");
      }else{
          console.log("not legal idiots")
      }
}

isLegalAge(2);

// Output : not legal idiots

// default value

function sample(food = "hamburger"){
      console.log(food);
}
// function call*****  
sample();

// Output : hamburger

function sample(food){
      console.log(food);
}
// function call*****  
sample("french fries");

// Output : french fries

function midnightFood(snacks){
      if (snacks == "fries"){
          console.log(snacks)
      }else{
          console.log("not fries")
      }
 }
 // function call*****  
 midnightFood("fries");
 



/////////// BASE-404 ///////////////////

/// EXERCISES@@

/* 1. Introduction to Variables:
Declare three variables: One using let called city with a value of your favorite city, and two constants:
 birthYear with a value of your birth year and country with the name of your country.
Reassign the Variable: Change the value of city to another city of your choice.

2. Printing to Console:
Print the message "I live in [city], [country]" using console.log.

3. Working with Strings:
Concatenate the Strings: Create a variable sentence that concatenates "I was born in " and your birthYear and then print the result.
Use template literals to create and print the statement "I currently reside in [city], which is in [country]."
*/
let city = "Mandaluyong";
let country = "Philippines";

console.log(`I live in ${city}, ${country}`);
// Output : I live in Mandaluyong, Philippines

let birthYear = 1996;
let birthPlace = "tabitabi";
console.log(`I was born in ${birthPlace}.`);
// Output : I was born in tabitabi.

city = "Quezon City"
console.log(`I currenly reside in ${city}, which is in ${country}.`);
// Output : I currenly reside in Quezon City, which is in Philippines.


/*
4. Operators:
Given a number a = 7 and b = 3, calculate and print the result of their sum, difference, product, and quotient.
*/
let a = 7;
let b = 3;
let sum = a += b;
console.log(`Sum: ${sum}`);

let c = 7;
let d = 3;
let difference = c -= d;
console.log(`Difference: ${difference}`);

let e = 7;
let f = 3;
let product = e *= f;
console.log(`Product: ${product}`);

let g = 7;
let h = 3;
let quotient = g /= h;
console.log(`Quotient: ${quotient}`);

// Output : Sum: 10
// Output : Difference: 4
// Output : Product: 21
// Output : Quotient: 2.3333333333333335


/*
Use the Ternary Operator: Check if birthYear is before 2000, and store the result "20th century" or "21st century" in a variable century.
5. Control Flow Statements:
Write an if-else statement to print "You are from the 21st century" if century is "21st century" or "You are from the 20th century" otherwise.
*/
let birthYearCentury = 1995;
let century = "20th century"

// Control Flow Statements
if (century === "21st century") {
    console.log("You are from the 21st century");
} else {
    console.log("You are from the 20th century");
}

// Output : You are from the 20th century



// Create a for loop that prints numbers from 1 to 5.
// For loop: Print numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(`Number ${i}`);
}

// Output : Number 1
// Output : Number 2
// Output : Number 3
// Output : Number 4
// Output : Number 5

/*
Using the while loop: Create a counter that starts at 10 and decrements down to 1.
Create a do-while loop that prints "This is iteration number [counter]" for 3 iterations.
*/



/*
6. Variable Scope:
Block Scope Test: Create a block using {} and define a variable blockVar with let. Try accessing this variable outside the block. What do you observe?

*/

/// SOLUTIONS @@@

//......................not yet

////


//////////////// JAVASCRIPT BASICS 2 EXERCISES //////////////////////////////////////     /*     */

//Instructions: Copy the following problems and write your code answers below each of the given problems.

//1. Functions:
//1.1. Write a function named greet that accepts a name as a parameter and returns a greeting message.
function greet(greetMessage){
    console.log(greetMessage);
}
greet("Good Morning!");
// Output : Good Morning!

//1.2. Write a function add that accepts two numbers and returns their sum.
function add(num1,num2){
      let sum = num1 + num2;
      return sum;
  }
  console.log(add(10,20));
  // Output : 30

//2. Switch:
//2.1. Write a function getDay that accepts a number (1-7) and returns the day of the week.
// Expected Output: getDay(1) => "Monday"
function getDay(day){
      switch(day){
          case 1:
              console.log("Monday");
              break;
          case 2:
              console.log("Tuesday");
              break;
          case 3:
              console.log("Wednesday");
              break;
          case 4:
              console.log("Thursday");
              break;
          case 5:
              console.log("Friday");
              break;
          case 6:
              console.log("Saturday");
              break;
          case 7:
              console.log("Sunday");
              break;
          default:
              console.log("Invalid day");
              break;
              } 
      }
      getDay(1);
// Output : Monday


//2.2. Write a function fruitInfo that accepts the name of a fruit and returns a brief description of the fruit.
// Expected Output: fruitInfo("apple") => "Apples are sweet and crunchy!"
function fruitInfo(fruit){
      if(fruit === "apple"){
      console.log("Apples are sweet and crunchy!");
      }
  }
  fruitInfo("apple");
  // Output : Apples are sweet and crunchy!


//3. Objects:
//3.1. Create a person object with properties firstName, lastName, and a method fullName that returns the person's full name.
// Expected Output: person.fullName() => "John Doe"
let person = {
      firstName: "John",
      lastName: "Doe",
      fullName: function() {
          return `${this.firstName} ${this.lastName}`;
      }
  };
  console.log(person.fullName());

//3.2. Write a function getAge that accepts an object with a property birthYear and returns the age of the person.
// Expected Output: getAge({birthYear: 2000}) => 23  (assuming current year is 2023)
function getAge(currentYear,birthYear){
      let ageOfPerson = currentYear - birthYear;
      console.log(ageOfPerson);
  }
  getAge(2024,1996);
  // Output: 28


//4. Arrays:
//4.1. Write a function getFirstElement that accepts an array and returns the first element.
// Expected Output: getFirstElement([7, 9, 11]) => 7
function getFirstElement(num1,num2,num3){
      console.log(num1);
  }
  getFirstElement(7,9,11);
  //or//
  function getFirstElement(arr) {
      return arr[0];
  }
  console.log(getFirstElement([7, 9, 11])); 
  // Output: 7
  
4.2. Write a function getLastElement that accepts an array and returns the last element.
// Expected Output: getLastElement([7, 9, 11]) => 11
function getFirstElement(num1,num2,num3){
      console.log(num3);
  }
  getFirstElement(7,9,11);
  //or//
  function getFirstElement(arr) {
      return arr[2];
  }
  console.log(getFirstElement([7, 9, 11])); 
  // Output: 11


//5. Loops:
//5.1. Write a function countToTen that prints numbers from 1 to 10 using a for loop.
function countToTen(number){
      for(let counter = 1;counter <= number;counter++){
      console.log(`Number ${counter}`);
            }
  }
  countToTen(10);
  // Output : Number 1..Number 2.........Number 10

//5.2. Write a function listArray that accepts an array and prints each element using a for loop. (prints using arrays or values)
function listArray(arr) {
 
      for (let i = 0; i < arr.length; i++) {
          console.log(arr[i]);
      }
  }
  let arrElements = [1,2,3,4,5];
  listArray(arrElements);
  // Output : 1...2...3...4...5

//5.3. Write a function findEvenNumbers that accepts a number n and returns an array of all even numbers from 2 up to n using a while loop.                                   // ????????????????????????????????
function findEvenNumbers(n) {
      const evenNumbers = [];
      let current = 2;
  
      while (current <= n) {
          evenNumbers[evenNumbers.length] = current; // Add current even number to the array
          current += 2; // Move to the next even number
      }
  
      return evenNumbers;
  }
  
  const result = findEvenNumbers(10);
  console.log(result); 
  // Output: [2, 4, 6, 8, 10]


//5.4. Write a function multiplyArray that accepts an array of numbers and multiplies each number by 2 using a for loop.
function multiplyArray(numbers) {
      let result = [];              // Initializes an empty array result; its just like Zero on (let sum=0) it means we started at empty array then we gonna input on our own arrays below
  
      for (let i = 0; i < numbers.length; i++) {
          result[i] = numbers[i] * 2;
      }
  
      return result;
  }

  let multiArr = [1, 2, 3, 4, 5];
  let outputArray = multiplyArray(multiArr);
  console.log(outputArray); 
  // Output: [2, 4, 6, 8, 10]


//5.5. Write a function sumArray that accepts an array of numbers and returns the sum of all elements.*/
// basic formula
function sumArray(a,b,c){       
            let sum = a + b + c;
            return sum;
      }
console.log(sumArray(10,20,30));
// Output : 60

//advance formula using FOR LOOP
function sumArray(numbers) {
      let sum = 0;
  
      for (let i = 0; i < numbers.length; i++) {
          sum += numbers[i];
      }
  
      return sum;
  }
  
  let arrNum = [10, 20, 30, 40, 50];
  let totalSum = sumArray(arrNum);
  console.log(totalSum); 
  // Output: 150






function myFunction(){
      return "Hello world!";
}

console.log(myFunction());

// Output : Hello world!

/////////////////

let arr = [1, true, "Hello world", 4, 5];
//               array elements           --> values inside the array
console.table(arr);

// Output : 
┌─────────┬───────────────┐
│ (index) │    Values     │
├─────────┼───────────────┤
│    0    │       1       │
│    1    │     true      │
│    2    │ 'Hello world' │
│    3    │       4       │
│    4    │       5       │
└─────────┴───────────────┘


/// Two dimensional array

let row = [
      [1, 2, 3, 4, 5],
      ['a', 'b', 'c'],
          ];

console.table(row);

// Output :
┌─────────┬─────┬─────┬─────┬───┬───┐
│ (index) │  0  │  1  │  2  │ 3 │ 4 │
├─────────┼─────┼─────┼─────┼───┼───┤
│    0    │  1  │  2  │  3  │ 4 │ 5 │           // 5 arr elements 
│    1    │ 'a' │ 'b' │ 'c' │   │   │           // 3 arr elements
└─────────┴─────┴─────┴─────┴───┴───┘

/////////////////

let students = [
      {
          name: "Juan Dela Cruz",
          bootcamp: "BASE404",
          grade: 100
      },
      {
          name: "John Doe",
          bootcamp: "BASE404",
          grade: 50
      },
      ];
      
  console.log(students);

  // Output :
                                                                              /*
  [
   { name: 'Juan Dela Cruz', bootcamp: 'BASE404', grade: 100 },
  { name: 'John Doe', bootcamp: 'BASE404', grade: 50 }
  ]
                                                                              */


  console.log(students[0].grade);
  // Output : 100

  console.log(students[1].name);
  // Output : John Doe


///Sample1#####

let students = [
      {
          name: "Juan Dela Cruz",
          bootcamp: "BASE404",
          grade: 100
      },
      {
          name: "John Doe",
          bootcamp: "BASE404",
          grade: 50
      },
      {
            name: "Maria Santos",
            bootcamp: "BASE404",
            grade: 70,
            activities: [
                  "Activity 1",
                  "Activity 2",
                  "Activity 3"
            ]
        },
      ];
      
  console.log(students[students.length-1]);                 // put the .length-1 inside the bracket[] because its an INDEX insted of using 3 index just use .length-1 to get the total array without counting

  // Output :
                                                                                                /*
  {
  name: 'Maria Santos',
  bootcamp: 'BASE404',
  grade: 70,
  activities: [ 'Activity 1', 'Activity 2', 'Activity 3' ]
}
                                                                                                */


console.log(students[students.length-1].activities[1]); 

// Output : Activity 2


/// Create a function that takes a student as an argument and returns their average grade.
// Object of arrays
const students = {                              // object with array properties
      John: [85, 90, 92],
      Jane: [88, 84, 91],
      Smith: [89, 87, 82],
      Emil: [81, 99, 72],
};

function averageGrade(student){
      console.log(student);
}

averageGrade(students.John);

// Output : [ 86, 90, 92 ]

function averageGrade(student){
      for(let i = 0; i < student.length; i++){
      console.log(student[i]);
      }
}

// Output : 85
// Output : 90
// Output : 92

//adding the arrays
function averageGrade(student){                       // parameter "student" is made name or variable for the value of array or FOR ARRAYS[85,90,92] to console/print the "value" inside the array -> Output: 85,90,92
      let averageGrade = 0;
      for(let i = 0; i < student.length; i++){
            averageGrade += student[i];
            }
      console.log(averageGrade);
}
averageGrade(students.John);

// Output : 267

// Return the average grade after add/sum
function averageGrade(student){
      let averageGrade = 0;
      for(let i = 0; i < student.length; i++){
            averageGrade += student[i];
            }
      return averageGrade / student.length;            //instead of using divided by 3; use "student.length" to automatic consider all array
}
console.log(averageGrade(students.John));

// Output : 89.333333333333

///////////////////

// Write a function that takes a product ID as an argument and returns the respective product, or NULL if the product doesn't exist
// Array with object

const products = [
      { id: 1, name: "Laptop", price: 1000},
      { id: 2, name: "Mouse", price: 20},
      { id: 3, name: "Keyboard", price: 50},
      { id: 4, name: "Monitor", price: 150},
];

// Iterations
// For, do-while, while loops

// Iterables      --> require an array or an object for them to work
// For let

function findProduct(id){
      for(let product of products){   
            console.log(product.name); 
                        // products is our arrays.
/* what for "let" will do is that for every elements in this array is gonna input to temporary variable which is the "product" variable; product is made variable to input the array
example: product =  { id: 1, name: "Laptop", price: 1000}, then next: { id: 2, name: "Mouse", price: 20}, then next......... until end!      
product is always the value/properties of array or inside of the array[value/properties]*/
            }
}
findProduct();

// Output : Laptop
// Output : Mouse
// Output : Keyboard
// Output : Monitor

function findProduct(id){
      for(let product of products){  
            if(id == product.id){
                  return product;
            }
      }
      return null;
}

console.log(findProduct());         or console.log(findProduct(5));
// Output : null
console.log(findProduct(3));
// Output : { id: 3, name: 'Keyboard', price: 50 }


/// Write a function that will return the total price of all products

const products = [
      { id: 1, name: "Laptop", price: 1000},
      { id: 2, name: "Mouse", price: 20},
      { id: 3, name: "Keyboard", price: 50},
      { id: 4, name: "Monitor", price: 150},
];

function totalPrice(){
      let totalPrice = 0;                            // start with the value of 0; for addition (0 + 1000 = 1000 + 20 = 1020 + 50 = 1070 = 150 = 1220)
      for(let product of products){                  // "product" variable are the properties inside the arrays ( id: 1, name: "Laptop", price: 1000},{ id: 2, name: "Mouse", price: 20},{ id: 3, name: "Keyboard", price: 50},{ id: 4, name: "Monitor", price: 150},) 
            totalPrice += product.price;             // totalPrice is equal to 0 and then product.price is the properties of the array and ".price" is the mention property/value of the array(price: 1000,price: 20,price: 50,price: 150)
      }
      return totalPrice;
}

console.log(totalPrice());

//Output : 1220


/////////////////////////////////


// Error Handling
// try catch statemnet

try {
      // block of code to be executed that may or may not result in an error
      // code that not sure if it works or may not ; that we try it
}catch(err{             // this will be happend if the code will error
      console.log("There has been an error!");
})


//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////


////////////////////////      JAVASCRIPT DOM (Document Object Mode) AND MANIPULATION      ////////////////////////////////////////////

////////// INTEGRATING HTML DOM WITH JAVASCRIPT 1 //////////////

////// ---> Every element in HTML doucment is an OBJECT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

///////////// for Each /////////////

let letters = ["a","x","z","w"];
letters.forEach(letter){                  // not sure
      console.log(letter);
}
// Output : a,x,z,w
// It will print the value/properties inside of array using the temporary variable of "letter"
// It means it will increment EACH string or value/prpoerties of array then give it FUNCTION EACH of them.






////////////////////////////////////////////////////////////////////
////////////////////////////////

//// Higher Order Function
//// CHOOSE / SELECT THE FUNCTION //
// ---> Choosing or selecting what function are gonna you if add or multiply

function add(num1, num2) {
      return num1 + num2;
}

function mulitply(num1, num2) {
      return num1 * num2;
}

function calculator(num1, num2, operator) {
      return operator (num1, num2);
}

calculator (4,5,add);
// Output : 9                 // it used add function

calculator (4,5,multiply);
// Output : 20                 // it used multiply function

debugger;                     // dubugger is a system that use to see the explantion how the functions work by showing the values of each parameters.
calculator(3,4,multiply);
// Output : 12


//////////////////////////////////////////////////////////////////////////////

/// CONSTRUCTOR FUNCTION by Udemy //////////
/// --> must capitalized the first letter at fnction name.

function BellBoy (name, age, hasWorkPermit, languages) {                      // function name has to be capitalized, not camel casing just use "BellBoy" bigletter at firstlettername to determined it is a CONSTRUCTOR FUNCTION
      this.name = name;
      this.age = age;
      this.hasWorkPermit = hasWorkPermit;
      this.languages = languages;
}

/// Initialise Object
// advanced method by using "NEW" on Object Properties with arrays

let bellBoy1 = new BellBoy ("Timmy", 19, true, ["French", "English"]);              //after "new" must capitalized the first letter on function name!!!

let bellBoy1 = new BellBoy ("Jimmy", 21, false, ["English", "German"]);


////

/// Initialise Object
//shorter version
let bellBoy1 = new BellBoy ("Timmy", 19, true, ["French", "English"]);

//longer/hard version of using Object properties
let bellBoy1 = {
      name: "Timmy",
      age: 19,
      hasWorkPermit: true,
      languages: ["French", "English"]
}

////Sample1###########
/// old/long/hassle version
let houseKepper1 = {
      yearsOfExperience: 12,
      name: "Jane",
      cleaningRepertoire: ["bathroom", "lobby", "bedroom"]
}

let houseKepper2 = {
      yearsOfExperience: 14,
      name: "Janet",
      cleaningRepertoire: ["bath", "room", "sala"]
}


/// Constructor Function      (advanced JS)
// advanced method/version for object property with array
// FORMULA for easy calling and input function on object properties parameters
function HouseKeeper (yearsOfExperience, name, cleaningRepertoire) {
      this.yearsOfExperience = yearsOfExperience;
      this.name = name;
      this.cleaningRepertoire = cleaningRepertoire;
}
// calling funtion with input value on parameters
let houseKepper1 = new HouseKeeper(9,"Tom", ["lobby", "bedroom"]);
console.log (houseKepper1.name);
// Output : Tom

// calling funtion with input value on parameters
let houseKepper2 = new HouseKeeper(14,"Janet", ["bath", "room", "sala"]);
console.log(houseKepper2.age);
// Output : 14

//////

let bellBoy1 = {
      name: "Timmy",
      age: 19,
      hasWorkPermit: true,
      languages: ["French", "English"]
      moveSuitcase: function() {
            alert ("may I take your suitcase?");
            pickUpSuitcase();
            move();
      }
}
// Call method
bellBoy1.moveSuitcase();
// Output: it will perform that method (the suitcase is gonna move).

/// or // advanced method

function HouseKeeper (yearsOfExperience, name, cleaningRepertoire) {
      this.yearsOfExperience = yearsOfExperience;
      this.name = name;
      this.moveSuitcase: function() {
            alert ("may I take your suitcase?");
            pickUpSuitcase();
            move();
      }
}

///////////
///Sample1####

function HouseKeeper (yearsOfExperience, name, cleaningRepertoire) {
      this.yearsOfExperience = yearsOfExperience;
      this.name = name;
      this.cleaningRepertoire = cleaningRepertoire;
      this.clean = function () {
            alert ("cleaning in progress...");
      }
}
let houseKepper1 = new HouseKeeper (12, "James", ["bedroom"]);
/// Calling function method
houseKepper1.clean();
// Output : "cleaning in progress..." // it will ALERT on the Webpage

/// CONSTRUCTOR FUNCTION on HTML JS reviewer sample at external JS

function Audio (fileLocation) {
      this.fileLocation = fileLocation;
      this.play = function () {
          // Tap into the audio hardware
          // Check the file at fileLocation exists
          // Check the file at fileLocation is a sound file
          // Play the file at fileLocation
      }
  }
  let tom1 = new Audio ("sounds/tom-1.mp3");
  tom1.play();










































//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// FUNCTION MEANS they allow the code to be called many times without repetition

// RETURNS MEANS IPAPAKITA OR PRINT OR CONSOLE.LOG !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// ITERATIONS means paulit ulit or ulit ulitin. Continous printing.

// FILO means First in, Last Out







