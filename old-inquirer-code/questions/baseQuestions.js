import chalk from 'chalk'
const log = console.log;

const baseQuestions = [
  {
    type: "input",
    name: "fullName",
    message: chalk.red("What is your full name?"),
    validate: (fullName) => {
      if (!fullName) {
        log(chalk.red("/// PLEASE INPUT YOUR FULL NAME ///"));
      } else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "city",
    message: chalk.red("What city are you located in?"),
    validate: (city) => {
      if (!city) {
        log(chalk.red("/// PLEASE INPUT YOUR CITY ///"));
      } else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "state",
    message: chalk.red("What state are you located in?"),
    validate: (state) => {
      if (!state) {
        log(chalk.red("/// PLEASE INPUT YOUR STATE ///"));
      } else {
        return true
      }
    }
  },
  {
    type: "input",
    name: "linkedIn",
    message: chalk.red("What is your linkedIn url?"),
    validate: (linkedIn) => {
      if (!linkedIn) {
        log(chalk.red("/// PLEASE INPUT YOUR LINKEDIN URL ///"));
      } else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "github",
    message: chalk.red("What is your github url?"),
    validate: (github) => {
      if (!github) {
        log(chalk.red("/// PLEASE INPUT YOUR GITHUB URL ///"));
      } else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "portfolio",
    message: chalk.red("What is your portfolio url?"),
    validate: (portfolio) => {
      if (!portfolio) {
        log(chalk.red("/// PLEASE INPUT YOUR PORTFOLIO URL ///"));
      } else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "personalSummary",
    message: chalk.red("What is your personal summary?"),
    validate: (personalSummary) => {
      if (!personalSummary) {
        log(chalk.red("/// PLEASE INPUT YOUR SUMMARY ///"));
      } else {
        return true
      }
    }
  },
  {
    input: "input",
    name: "frontEndSkills",
    message: chalk.red(
      "What are your front end skills? Separate each skill with a comma."
    ),
    validate: (frontEndSkills) => {
      if (!frontEndSkills) {
        log(chalk.red("/// PLEASE INPUT YOUR FRONT END SKILLS ///"));
      } else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "backEndSkills",
    message: chalk.red(
      "What are your back end skills? Separate each skill with a comma."
    ),
    validate: (backEndSkills) => {
      if (!backEndSkills) {
        log(chalk.red("/// PLEASE INPUT YOUR BACK END SKILLS ///"));
      } else {
        return true;
      }
    }
  }
];

export default baseQuestions