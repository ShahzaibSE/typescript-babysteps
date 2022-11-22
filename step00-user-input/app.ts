import inquirer  from "inquirer";

let message = await inquirer.prompt([
    {
        type: "input",
        name: "message",
        message: "Enter your message"
    }
])

console.log(message.message);
