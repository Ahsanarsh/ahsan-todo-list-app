#! /usr/bin/env/
import inquirer from "inquirer";
let todos = [];
let condition = "true";
while (condition) {
    let question = await inquirer.prompt([
        {
            message: "What you want to add in todos",
            type: "input",
            name: "firstquestion",
        },
        {
            message: "Do you want to add",
            type: "confirm",
            name: "secondquestion",
        },
    ]);
    todos.push(question.firstquestion);
    console.log(todos);
    condition = question.secondquestion;
}
