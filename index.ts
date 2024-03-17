import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstnumber" },
  { message: "Enter second number", type: "number", name: "secondnumber" },
  {
    message: "Select one of the operators to perform operator",
    type: "list",
    name: "operators",
    choices: ["addition", "Subtraction", "multiplication", "division"],
  },
]);

console.log(answer);
