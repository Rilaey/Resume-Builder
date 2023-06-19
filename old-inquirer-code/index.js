// import required modules
import chalk from "chalk";
import inquirer from "inquirer";
import baseQuestions from "./questions/baseQuestions.js";
import projectQuestions from "./questions/projectQuestions.js";
import experienceQuestions from "./questions/experienceQuestions.js";
import educationQuestions from "./questions/educationQuestions.js";
import generateMyResume from "./template/script.js";
import fs from "fs";

// shorthand for console.log()
const log = console.log;

// obv a cool console log to start the application
log(chalk.red("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"));
log(chalk.red("\\\\\\\\RESUME\\\\\\\\\\\\\\\\"));
log(chalk.red("\\\\\\\\\\\\BUILDER\\\\\\\\\\\\\\"));
log(chalk.red("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"));

// write file function
const startApp = (data) => {
  fs.writeFile("./template/generatedResume.html", data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Resume Generated!");
    }
  });
};

// resume input questions
const askQuestions = function () {
  inquirer
    .prompt(baseQuestions)
    .then((data) => inquirer.prompt(projectQuestions, data))
    .then((data) => inquirer.prompt(experienceQuestions, data))
    .then((data) => inquirer.prompt(educationQuestions, data))
    .then((data) => {
      console.log(data);
      let fileName = generateMyResume(data);
      startApp(fileName);
    });
};

// start the application
askQuestions();
