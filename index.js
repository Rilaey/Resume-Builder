// import required modules
import chalk from 'chalk';
import inquirer from 'inquirer';
const log = console.log;

// obv a cool console log to start the application
log(chalk.green('\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'))
log(chalk.blue('\\\\\\\\RESUME\\\\\\\\\\\\\\\\'))
log(chalk.blue('\\\\\\\\\\\\BUILDER\\\\\\\\\\\\\\'))
log(chalk.yellow('\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'))

// resume input questions
inquirer.prompt([
    {
        type: "input",
        name: "fullName",
        message: log(chalk.green('What is your full name?')),
        validate: (fullName) => {
            if(!fullName) {
                log(chalk.red('/// PLEASE INPUT YOUR FULL NAME ///'))
            }
        }
    },
    
])