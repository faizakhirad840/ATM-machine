#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const greetMsg = chalk.cyanBright("Welcome to my  ATM Machine");
console.log(greetMsg);
let pinCode = 76543;
let balance = 100000;
let userPin = await inquirer.prompt({
    name: "userPinCode",
    message: "Enter your pin code:",
    type: "number"
});
if (userPin.userPinCode === pinCode) {
    console.log(chalk.greenBright("Correct pin!"));
    let feature = await inquirer.prompt({
        name: "operation",
        message: "What do you want to perform?",
        type: "list",
        choices: ["withdraw", "check balance", "deposit cash"]
    });
    if (feature.operation === "withdraw") {
        let amount = await inquirer.prompt({
            name: "userAmount",
            message: "Enter amount:",
            type: "number"
        });
        let remainingAmount = balance - amount.userAmount;
        console.log(`Now your remaining balance is ${remainingAmount} `);
    }
    else if (feature.operation === "check balance") {
        console.log(chalk.magenta("Your balance is: $" + balance));
    }
    else if (feature.operation === "deposit cash") {
        let amountAdded = await inquirer.prompt({
            name: "userAmountAdded",
            message: "Enter amount:",
            type: "number"
        });
        balance += amountAdded.userAmountAdded;
        console.log(`now your balance is $${balance}`);
    }
}
else {
    console.log(chalk.red("Incorrect pin!"));
}
