import inquirer  from "inquirer";
import chalk  from "chalk";

let message = await inquirer.prompt([
    {
        type: "input",
        name: "message",
        message: "Enter your message"
    }
])

console.log(chalk.blue(message.message));
