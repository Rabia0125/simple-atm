#! /usr/bin/env node

import inquirer from "inquirer";

let MyBalance = 50000;
let MyPin = 449458;
let PinAnswer = await inquirer.prompt(
    [
        {
            name: "PIN",
            message: "Please enter your pin:",
            type: "number"
        }
    ]
)
if (PinAnswer.PIN === MyPin){
    console.log("You have successfully logged in!")
    let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "Please select your option",
                type: "list",
                choices: ["Withdraw", "Deposit", "Check Balance"]
            }
        ]
    )
    if (operationAns.operation === "Withdraw"){
        let WithdrawAmount = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "How much do you want to withdraw:",
                    type: "list",
                    choices: [10000,20000,30000,40000]
                
                }
            ]
        )
        MyBalance -= WithdrawAmount.amount
        console.log("Your new balance is:" + MyBalance )
    }
    else if (operationAns.operation === "Deposit"){
        let DepositAmount = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "How much do you want to deposit:",
                    type: "number"
                }
            ]
        )
        MyBalance += DepositAmount.amount
        console.log("Your new balance is:" + MyBalance)
    }
    else if (operationAns.operation === "Check Balance"){
        console.log("Your balance is:" + MyBalance)
    }
    
}
else{
    console.log("Wrong pin , please try again!")
}