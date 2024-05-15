#! /usr/bin/env node
import inquirer from "inquirer";

console.log("\n\tWelcome to CodewithOwais - CLI Number Guessing Game\n");

const randomNumber = Math.floor(Math.random() * 5 + 1);

const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter Your Guess Number (Number Limit from 1 to 5)",
    },
]);

if(answer.userGuessedNumber === randomNumber){
    console.log("Congratulations ! You Guess A Correct Number.");
}
else(
    console.log("Sorry, You Guess A Wrong Number.")
)