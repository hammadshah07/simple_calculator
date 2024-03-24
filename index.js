import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstnumber" },
    { message: "Enter secand number", type: "number", name: "secandnumber" },
    {
        message: "select one of the operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division",],
    },
]);
// conditioal statment
if (answer.operator === "addition") {
    console.log(answer.firstnumber + answer.secandnumber);
}
else if (answer.operator === "subtraction")
    console.log(answer.firstnumber - answer.secandnumber);
else if (answer.operator === "multiplication")
    console.log(answer.firstnumber * answer.secandnumber);
else if (answer.operator === "division")
    console.log(answer.firstnumber / answer.secandnumber);
else {
    ("please select valid operator");
}
