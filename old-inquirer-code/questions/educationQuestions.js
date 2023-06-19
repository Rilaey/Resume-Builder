import chalk from "chalk";
const log = console.log;

const educationQuestions = [
  {
    type: "input",
    name: "major",
    message: chalk.yellow("What was your major in college?"),
    validate: (major) => {
      if (!major) {
        log(chalk.red("/// PLEASE INPUT YOUR COLLEGE COLLEGE ///"));
      } else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "universityName",
    message: chalk.yellow("What was the name of your university"),
    validate: (universityName) => {
      if (!universityName) {
        log(chalk.red("/// PLEASE INPUT YOUR UNIVERSITY NAME ///"));
      } else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "universityCity",
    message: chalk.yellow("What city was your university located?"),
    validate: (universityCity) => {
      if (!universityCity) {
        log(chalk.red("/// PLEASE INPUT YOUR UNIVERSITY CITY ///"));
      } else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "universityState",
    message: chalk.yellow("What state was your university located?"),
    validate: (universityState) => {
      if (!universityState) {
        log(chalk.red("/// PLEASE INPUT YOUR UNIVERSITY STATE ///"));
      } else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "universitySummary",
    message: chalk.yellow("Please write a summary of your education experience."),
    validate: (universitySummary) => {
      if (!universitySummary) {
        log(chalk.red("/// PLEASE INPUT YOUR UNIVERSITY SUMMARY ///"));
      } else {
        return true;
      }
    }
  }
];

export default educationQuestions;
