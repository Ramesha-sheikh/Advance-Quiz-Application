#!/usr/bin/env node

import inquirer from 'inquirer';
import chalk from "chalk";
interface User {
    email: string;
    password: string;
}
console.log(chalk.greenBright("\n\t\t\t\t*******************************************************************************************************************"));
console.log(chalk.greenBright("\n\t\t\t\t*******************************************************************************************************************"));
console.log(chalk.blueBright("\n\t\t\t\t\t\t\t\t           WELCOME TO QUIZ APPLICATION"));
console.log(chalk.greenBright("\n\t\t\t\t*******************************************************************************************************************"));
console.log(chalk.greenBright("\n\t\t\t\t*******************************************************************************************************************"));

let users: User[] = [];

async function signUp() {
    console.log(chalk.greenBright("\n\t\t\t\t*******************************************************************************************************************"));
     console.log(chalk.yellowBright("\n\t\t\t\t\t\t Welcome to the sign-up page!"));
    console.log(chalk.greenBright("\n\t\t\t\t*******************************************************************************************************************"));

    const input = await inquirer.prompt([
        {
            type:"input",
            name:"uname",
            message:(chalk.yellowBright("\n\t\t\t\t\tEnter your Full name")),
            prefix: " ",
        },
        {
            type: "input",
            name: "email",
            prefix: " ",
            message: (chalk.yellowBright(chalk.italic("\n\t\t\t\t\tEnter your email:"))),
            validate: (email: string) => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(email) ? true : (chalk.redBright('\n\t\t\t\tPlease enter a valid email address'));
            }
        },
        {
            type: "password",
            name: "password",
            prefix: " ",
            mask: '*',
            message: (chalk.yellowBright(chalk.italic("\n\t\t\t\t\tEnter your password:"))),
            validate: (password: string) => {
                return password.length >= 8 ? true : '\n\t\t\t\tPassword must be at least 8 characters long';
            }
        }
    ]);
    users.push({ email: input.email, password: input.password });
    console.log(chalk.blueBright(("\n\t\t\t\t\t\t\t Registration successful!")));
    
 }
main();

console.log("\n\t\t\t\t\t!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


async function login() {
   //let newfunction=main();
   console.log("\n\t\t\t\t\t@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
    console.log(chalk.greenBright("\t\t\t\t\t\t\t\t\t Welcome to the login page!"));
    console.log("\n\t\t\t\t\t@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")

    const input = await inquirer.prompt([
        {
            type: 'input',
            name: 'email',
            message:(chalk.blueBright( '\n\t\t\t\t\t Enter your email:')),
            prefix: " ",
        },
        {
            type: 'password',
            name: 'password',
            mask: '*',
            message:(chalk.blueBright( '\n\t\t\t\t\tEnter your password:')),
            prefix: " ",
        },
    ]);

    const user = users.find(u => u.email === input.email);
    if (user && user.password === input.password) {
        console.log(chalk.greenBright(('\n\t\t\t\t\t\t\t\t\tLogin successful!')));
        async function main() {
      while(true){
    const choiceQuestion = await inquirer.prompt({
        type: 'list',
        name: 'action',
        message: (chalk.yellowBright('\n\t\t\t\t\tChoose an action:')),
        choices: ['\n\t\t\t\t\t Sign Up', '\n\t\t\t\t\tLogin',"\n\t\t\t\t\tExit"]
    });
  
    if (choiceQuestion.action === 'Sign Up') {
        await signUp();
        await login();
    } else if(choiceQuestion.action === 'Login') {
        await login();
    }
    else{
        break;

    }
}
}
        
        
 //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
     
      
        //quiz application
let score = 0;
let userInput = await inquirer.prompt(
    [
        {
            type:"list",
            name:"q1",
            message:(chalk.blueBright(chalk.italic("\n\t\t\t\t\t\t (1) USB stang for ?"))),
            prefix: " * ",

            choices: [
                { name: chalk.red("\n\t\t\t\t\t\t\t(A)  universal serial bus"), value: "universal serial bus" },
                { name: chalk.red("\n\t\t\t\t\t\t\t(B)  univers bus"),          value: "univers bus" },
                { name: chalk.red("\n\t\t\t\t\t\t\t(C)  non of them"),         value: "non of them" }
            ],

        }
    ]
)
if(userInput.q1 === "universal serial bus" ){
    //console.log("\n\t\t\t\t\t\tyour answer is correct");
   score +=5;
    //console.log(score);
   }
    let user_Input = await inquirer.prompt(
        [
   
        {
            
            type:"list",
            name:"q2",
            prefix: " * ",
            message:(chalk.blueBright(chalk.italic("\n\t\t\t\t\t\t(2) What does  (HTML) stand for??"))),
            choices: [
                { name:chalk.blue("\n\t\t\t\t\t\t\t (A)  Hyper Text Markup Language"),                    value: " Hyper Text Markup Language" },
                { name: chalk.blue("\n\t\t\t\t\t\t\t (B) Hyperlinks and Text Markup Language"),            value: " Hyperlinks and Text Markup Language" },
                { name: chalk.blue("\n\t\t\t\t\t\t\t (C)Home Tool Markup Language"),                      value: " Home Tool Markup Language" }
          ],
            

        }
    ]
)
if(user_Input.q2 === " Hyper Text Markup Language" ){
    //console.log("\n\t\t\t\t\t\tyour answer is correct");
    score +=5;

}
let userinput = await inquirer.prompt(
[
        {
            
      
                type: "list",
                name: "q3",
                prefix: " * ",
                message:(chalk.blueBright(chalk.italic("\n\t\t\t\t\t\t(3) What is the capital of France?"))),
                choices: [
                       { name: chalk.green("\n\t\t\t\t\t\t\t (A) Rome"),     value: "Rome" },
                       { name: chalk.green("\n\t\t\t\t\t\t\t (B) Madrid"),   value: " Madrid" },
                     {   name: chalk.green("\n\t\t\t\t\t\t\t (C) Paris"),    value: " Paris" }
                   ],
        },
    
     
        
        
    ]
)
if(userinput.q3 === " Paris" ){
    //console.log("\n\t\t\t\t\t\tyour answer is correct");
    score +=5;

}
let userinput3 = await inquirer.prompt(
    [
            {
                
          
                    type: "list",
                    name: "q4",
                    prefix: " * ",
                    message:(chalk.blueBright(chalk.italic("\n\t\t\t\t\t\t(4) What is the chemical symbol for water?"))),
                    
                    choices: [
                           { name: chalk.yellow("\n\t\t\t\t\t\t\t (A) Wa"),      value: " Wa" },
                           { name: chalk.yellow("\n\t\t\t\t\t\t\t (B) H2O"),     value: " H2O" },
                           { name: chalk.yellow("\n\t\t\t\t\t\t\t (C) H2"),        value: "H2" }
                       ],
            },
        
         
            
            
        ]
    )
    if(userinput3.q4 === " H2O"  ){
        //console.log("\n\t\t\t\t\t\tyour answer is correct");
        score +=5;
    
    }
    let userinput4 = await inquirer.prompt(
        [
                {
                    
              
                        type: "list",
                        name: "q5",
                        prefix: " * ",
                        message:(chalk.blueBright(chalk.italic("\n\t\t\t\t\t\t(5) Who wrote To Kill a Mockingbird?"))),
                        
                        choices: [
                               { name: chalk.red("\n\t\t\t\t\t\t\t (A)  J.K. Rowling"),      value: "  J.K. Rowling" },
                               { name: chalk.red("\n\t\t\t\t\t\t\t (B) Harper Lee"),           value: " Harper Lee" },
                               { name: chalk.red("\n\t\t\t\t\t\t\t (C)George Orwell"),        value: "George Orwell" },
                           ],
                },
               

             
                
                
            ]
        )
        if(userinput4.q5 === " Harper Lee"  ){
            //console.log("\n\t\t\t\t\t\tyour answer is correct");
            score +=5;
        
        }
  if(score === 5  ){
  console.log(chalk.greenBright((`\n\t\t\t\t your quiz marks is ${score}`)));
  console.log(chalk.redBright(chalk.italic((`\n\t\t\t\t\t\t😔😔😔😔😔😔NEED TO HARD WORK 😔😔😔😔😔😔`))));


  }
else if(score === 10){
  console.log(chalk.greenBright((`your quiz marks is ${score}`)));
  console.log(chalk.redBright(chalk.italic((`\n\t\t\t\t\t\t😔😔😔😔😔😔NEED TO HARD WORK 😔😔😔😔😔`))));

}
else if(score === 15 ){
  console.log(chalk.greenBright((`your quiz marks is ${score}`)));
  console.log(chalk.blueBright(chalk.italic((` \n\t\t\t\t\t\t\t\t🎈🎈BETTER  🎈🎈`))));

}
else if(score === 20 ){
      console.log(chalk.greenBright((`your quiz marks is ${score}`)));
      console.log(chalk.greenBright(chalk.italic((`\n\t\t\t\t\t\t🎈🎈🎈🎈🎈🎈👏👏👏👏👏EXCELLENT 👏👏👏👏👏🎈🎈🎈🎈🎈🎈`))));

}
else if(score === 25 ){
    console.log(chalk.greenBright((`your quiz marks is ${score}`)));
    console.log(chalk.greenBright(chalk.italic((`\n\t\t\t\t\t\t🎈🎈🎈🎈🎈🎈👏👏👏👏👏EXCELLENT 👏👏👏👏👏🎈🎈🎈🎈🎈🎈`))));

}




//     }
    } else {
        console.log(chalk.red(chalk.italic('\n\t\t\t\t\t\tInvalid email or password. Please try again.')));
    }
}




//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


async function main() {
      while(true){
    const choiceQuestion = await inquirer.prompt({
        type: 'list',
        name: 'action',
        message: chalk.yellowBright('\n\t\t\t\t\t\t Choose an action:'),
        choices: ['Sign Up', 'Login',"Exit"],
    });
  
    if (choiceQuestion.action === 'Sign Up') {
        await signUp();
        await login();
    } else if(choiceQuestion.action === 'Login') {
        await login();
    }
    else{
        break;

    }
}
return;
}







