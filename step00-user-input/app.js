import inquirer from "inquirer";
// let message = inquirer.prompt([
//     {
//         type: "input",
//         name: "message",
//         message: "Enter your message"
//     }
// ]).then(answers => {
//     console.log(answers.message);
// }).catch(err => {
//     console.log("Internal error");
// });
let message = await inquirer.prompt([
    {
        type: "input",
        name: "message",
        message: "Enter your message"
    }
]);
console.log(message.message);
