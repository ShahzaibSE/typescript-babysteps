let mathematician = Math.random() > 0.5 ? undefined : "Mark Goldberg";

console.log(mathematician);

let num1: number | boolean = 1;
let num2: boolean | number = 2;

num1 = num2;
console.log();
console.log(num1);

console.log();

let physicist = Math.random() > 0.5
? "Marie Curie"
: 84;
physicist.toString(); // Ok
console.log(physicist);
// physicist.toUpperCase();
// ~~~~~~~~~~~
// Error: Property 'toUpperCase' does not exist on type 'string | number'.
// Property 'toUpperCase' does not exist on type 'number'.
// physicist.toFixed();
// ~~~~~~~
// Error: Property 'toFixed' does not exist on type 'string | number'.
// Property 'toFixed' does not exist on type 'string'.


// | ====== Narrowing ====== |
// console.log();
// > ------ Assignment Narrowing.
let admiral: number | string;
admiral = "Grace Hopper";
admiral.toUpperCase(); // Ok: string
console.log(admiral);
// admiral.toFixed();
// > ------ Conditional Checking 
// Type of scientist: number | string
let scientist = Math.random() > 0.5
? "Rosalind Franklin"
: 51;
if (scientist === "Rosalind Franklin") {
// Type of scientist: string
    scientist.toUpperCase(); // Ok
} //
// Type of scientist: number | string
// scientist.toUpperCase();
// ~~~~~~~~~~~
// Error: Property 'toUpperCase' does not exist on type 'string | number'.
// Property 'toUpperCase' does not exist on type 'number'.
//
// > ------- TypeOf Checks
let researcher = Math.random() > 0.5 ? "Rosalind Franklin" : 51;
if (typeof researcher === "string") {
    researcher.toUpperCase(); // Ok: string
}

typeof researcher === "string" ? researcher.toUpperCase() // Ok: string
                                : researcher.toFixed(); // Ok: number

console.log(researcher);

// > ------ Union and literal declaration.
let str1: string | "shahzaib" = "noor";
str1 = "noor";
// str = 2;
console.log(typeof str1);
// > ------ Literal type only.
const str2 = "bruce";
const str3: "clark" = "clark";

let specificallyAda: "Ada";
specificallyAda = "Ada"; // Ok
// specificallyAda = "Byron";
// Error: Type '"Byron"' is not assignable to type '"Ada"'.
let someString = ""; // Type: string
// specificallyAda = someString;
// Error: Type 'string' is not assignable to type '"Ada"'.
specificallyAda = "Ada";
someString = specificallyAda;
//
let nullishValue: string | undefined;
nullishValue?.length