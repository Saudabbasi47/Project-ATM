#! /usr/bin/env node
let balance = 100;
let myPin = 2233;
import inquirer from "inquirer";
let pincode = await inquirer.prompt({
    name: "code",
    message: "Enter your PIN",
    type: "number",
});
if (pincode.code === myPin) {
    console.log("Your PIN is correct");
    let machine = await inquirer.prompt({
        name: "action",
        message: "What do you want to do?",
        type: "list",
        choices: ["Withdraw Cash", "Check Balance"],
    });
    if (machine.action === "Check Balance") {
        console.log(`Your current Balance is ${balance}.`);
    }
    else if (machine.action === "Withdraw Cash") {
        let withdrawing = await inquirer.prompt({
            name: "with_draw",
            message: "Enter Your Amount",
            type: "number",
        });
        balance -= withdrawing.with_draw;
        if (withdrawing.with_draw < balance) {
            console.log(`Your remaining Balance is ${balance}.`);
        }
        else {
            console.log("Insufficient Balance.");
        }
    }
}
else {
    console.log("Wrong PIN,Please Enter correct PIN");
}
