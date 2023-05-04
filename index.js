// import required modules
import chalk from "chalk";
import inquirer from "inquirer";
import baseQuestions from "./questions/baseQuestions.js";
import projectQuestions from "./questions/projectQuestions.js";
import experienceQuestions from "./questions/experienceQuestions.js";
import educationQuestions from "./questions/educationQuestions.js";
import generateMyResume from "./template/script.js";
import allQuestions from "./questions/allQuestions.js";
import fs from "fs";
const log = console.log;

// obv a cool console log to start the application
log(chalk.red("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"));
log(chalk.red("\\\\\\\\RESUME\\\\\\\\\\\\\\\\"));
log(chalk.red("\\\\\\\\\\\\BUILDER\\\\\\\\\\\\\\"));
log(chalk.red("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"));

const startApp = (data) => {
  fs.writeFile("test.html", data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Resume Generated!");
    }
  });
};

// resume input questions
const askQuestions = async function () {
    await inquirer.prompt(allQuestions)
}.then((data) => {
  console.log(data);
  let fileName = generateMyResume(data);
  startApp(fileName);
});

askQuestions();
