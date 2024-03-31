import inquirer from "inquirer";
let myBalance = 10000; // Dollar
let myPin = 4414;
let pinAnswer = await inquirer.prompt([
    {
    name: "pin",
    message: "enter your pin",
    type: "number",
}
]
);
if(pinAnswer.pin===myPin){
    console.log("correct pin code!!!");
    let operationAns= await inquirer.prompt(
        [
         {
            name:"operation",
            message:"please select option",
            type:"list",
            choices:["withdraw","check balance","fastCash"], 
        }

]
    );
    console.log(operationAns);
    if (operationAns.operation === "withdraw"){
        let amountAns = await inquirer.prompt(
     [
        {
            name: "amount",
            message: "enter your amount",
            type: "number",
        }
          ]
        );
        myBalance -= amountAns.amount;

        console.log(`You're  remaining balance is: ${myBalance}`)
    }else if (operationAns.operation === "check balance") {
    console.log(`your balance is : ${myBalance}`);
}
else if("operationAns.operation > mybalance"){
    console.log("Insufficient Balance")
}
if (operationAns.operation === "fastCash"){
    let cash = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "select any option",
                type:"list",
                choices:["1000","3000","6000","9000"]
            }
        ]
)
    
}
}
else {
    console.log("Incorrect pin number");
}
