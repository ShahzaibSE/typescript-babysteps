let mathematician = Math.random() > 0.5 ? undefined : "Mark Goldberg";
console.log(mathematician);
let num1 = 1;
let num2 = 2;
num1 = num2;
console.log();
console.log(num1);
console.log();
let physicist = Math.random() > 0.5
    ? "Marie Curie"
    : 84;
physicist.toString(); // Ok
physicist.toUpperCase();
// ~~~~~~~~~~~
// Error: Property 'toUpperCase' does not exist on type 'string | number'.
// Property 'toUpperCase' does not exist on type 'number'.
physicist.toFixed();
export {};
// ~~~~~~~
// Error: Property 'toFixed' does not exist on type 'string | number'.
// Property 'toFixed' does not exist on type 'string'.
