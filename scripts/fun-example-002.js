/**
 * File: fun-example-002.js
 * Description: JavaScript source file for fun-example-002.html
 */

/* What is the benefit of using external JS ?
    1. Increasing reusability of your code.  Other pages that are 
    referencing to statements in an external JS file will be affected
    if changes are made to the external file.
    2. It is much easier to maintain
    3. Better scalability (Later on, you can use functional JavaScript)
    4. Your code is much more cleaner (Imagine a page with 50 scripts)
    5. Slight improvement to the overall performance because your browser will
    cache included file.  Therefore, if same methods are reused throughout your
    website, it will increase the overall performance.
*/

// Q: Do you know what variable is?
// A: Variable is a pointer to a memory that holds your data.

// Q: Is JavaScript variables case-sensitive?
// A: Yes, JavaScript is case-sensitive, just like other common languages (C#, Java)

/* Hint: Try to use Camel Casing.  Example - instead of naming your
   variable name being: FullName, write fullName.  Some of common naming convention is as following:
   1. start with lower case letters
   2. use CAPITAL letters for CONSTANTS
   3. Camel Case convention
   4. Do not start with symbol or number */

/* ECMAScript 6th (European Computer Manufacturers Associationvar) included let statement
Prior, we used var to define variable names.  Unlike var, let allows block scope local variable.
As you are aware, JavaScript is interpreted language, which means that there is no compiler.
Browser will create object by reading data from top to bottom fashion.  Therefore, without block scope,
there were lots of problems (especially if you are used to strongly typed language like Java), where your variable
gets used from unintended location. */

// !! Some people do not use var keyword to declare variable.  This is very bad practice.

// EXAMPLE OF BAD & GOOD PRACTICES
badGreeting = "HELLO - I am a bad programmer";
var properGreeting = "HELLO - I am a good programmer";

window.alert(badGreeting);
window.alert(properGreeting);

/* TIP: Don't be too desperate to learn more advanced contents.  
        Understanding and following fundamentals of programming can really help you in the future.
        When you see other people's code, you can easily determine if they are bad coder or not.
        By following good practice, you will greatly reduce chance of having bugs. */

// Simple calculations (I will demonstrate with let keyword)
let x = 5;
let y = 5;
let z = 10;

let addition = x + y + z;
let substraction = x - y - z;
let multiplication = x * y * z;
let division = x / y / z; // It will follow precedence rule (Equivalent to (x/y)/z)
let modulus = x % y; // Will give remainder
let increment = ++x; // It will increment x by 1
let decrement = --x; // It will decrement x by 1

window.document.write("<p>Addition: " + addition + "<br>Substraction: " + substraction + "<br>" + 
"Multiplication: " + multiplication + "<br>Division: " + division + "<br>" + 
"Modulus: " + modulus + "<br>Increment: " + increment + "<br>Decrement: " + decrement + "</p>");
// Guess why decrement gives 5

x *= y; // This will multiply x by y (currently, x = 5)
window.document.write("<br>x *= y; will give x: " + x);

// You can event apply arithmetic operations on String!
let name = "Kiwi";
let bye = "... says Bye Bye";
let concatenated = name + bye; // This will set concatenated value to "Kiwi... says Bye Bye"
window.document.write("<br><br>" + concatenated);

