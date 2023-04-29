import chalk from "chalk";
import inquirer from "inquirer";
// import baseQuestions from "./baseQuestions.js";
const log = console.log;

const projectQuestions = [
  {
    type: "input",
    name: "projectTitle",
    message: chalk.blue("Please enter your project title."),
    validate: (projectTitle) => {
      if (!projectTitle) {
        log(chalk.red("/// PLEASE INPUT YOUR PROJECT TITLE ///"));
      } else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "projectGithubLink",
    message: chalk.blue("Please enter your application github link."),
    validate: (projectGithubLink) => {
      if (!projectGithubLink) {
        log(chalk.red("/// PLEASE INPUT YOUR APPLICATION GITHUB LINK ///"));
      } else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "projectionApplicationLink",
    message: chalk.blue("Please enter your live application link."),
    validate: (projectApplicationLink) => {
      if (!projectApplicationLink) {
        log(chalk.red("/// PLEASE INPUT YOUR LIVE APPLICATION LINK ///"));
      } else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "keyItemOne",
    message: chalk.blue(
      "Please enter your first bullet point of this project."
    ),
    validate: (keyItemOne) => {
      if (!keyItemOne) {
        log(
          chalk.red(
            "/// PLEASE INPUT YOUR FIRST BULLET POINT FOR THIS PROJECT ///"
          )
        );
      } else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "keyItemTwo",
    message: chalk.blue(
      "Please enter your second bullet point of this project. IF NO MORE BULLET POINTS ENTER NONE"
    ),
    validate: (keyItemTwo) => {
      if (!keyItemTwo) {
        log(
          chalk.red(
            "/// PLEASE INPUT YOUR SECOND BULLET POINT FOR THIS PROJECT ///"
          )
        );
      } else if (keyItemTwo == "none") {
        return true;
      } else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "keyItemThree",
    message: chalk.blue(
      "Please enter your third bullet point of this project. IF NO MORE BULLET POINTS ENTER NONE"
    ),
    validate: (keyItemThree) => {
      if (!keyItemThree) {
        log(
          chalk.red(
            "/// PLEASE INPUT YOUR THIRD BULLET POINT FOR THIS PROJECT ///"
          )
        );
      } else if (keyItemThree == "none") {
        return true;
      } else {
        return true;
      }
    }
  }
];

export default projectQuestions;
