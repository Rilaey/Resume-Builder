// import required modules
import chalk from 'chalk'
import inquirer from 'inquirer';
import baseQuestions from './questions/baseQuestions.js';
import projectQuestions from './questions/projectQuestions.js';
import experienceQuestions from "./questions/experienceQuestions.js"
const log = console.log;

// obv a cool console log to start the application
log(chalk.red('\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'))
log(chalk.red('\\\\\\\\RESUME\\\\\\\\\\\\\\\\'))
log(chalk.red('\\\\\\\\\\\\BUILDER\\\\\\\\\\\\\\'))
log(chalk.red('\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'))

// resume input questions
const askQuestions = async () => {
    await inquirer.prompt(baseQuestions)
    await inquirer.prompt(projectQuestions)
    await inquirer.prompt(experienceQuestions)
}

askQuestions()